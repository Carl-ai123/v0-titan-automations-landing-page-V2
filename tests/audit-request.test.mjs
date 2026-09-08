import assert from 'node:assert/strict'
import { test, beforeEach, afterEach } from 'node:test'
import { submitAuditRequest } from '../app/actions/audit-request.ts'

const valid = { name: 'Test Person', email: 'test@example.com' }
const originalApiKey = process.env.RESEND_API_KEY

beforeEach((t) => {
  delete process.env.RESEND_API_KEY
  t.mock.method(console, 'error', () => {})
  t.mock.method(console, 'info', () => {})
})

afterEach(() => {
  if (originalApiKey === undefined) delete process.env.RESEND_API_KEY
  else process.env.RESEND_API_KEY = originalApiKey
})

test('rejects invalid or oversized input before contacting the database', async (t) => {
  const request = t.mock.method(globalThis, 'fetch', async () => new Response(null, { status: 201 }))
  for (const input of [
    null,
    {},
    { ...valid, name: '   ' },
    { ...valid, email: 'not-an-email' },
    { ...valid, biggest_bottleneck: 'x'.repeat(3001) },
    { ...valid, name: 42 },
    { ...valid, website_url: 'https://spam.example' },
  ]) {
    assert.equal((await submitAuditRequest(input)).success, false)
  }
  assert.equal(request.mock.callCount(), 0)
})

test('saves trimmed, allowlisted fields with a timeout and excludes the honeypot', async (t) => {
  const request = t.mock.method(globalThis, 'fetch', async () => new Response(null, { status: 201 }))
  const result = await submitAuditRequest({
    name: '  Test Person  ', email: ' test@example.com ', website_url: '',
    unexpected: 'must not reach the database', id: 'visitor-controlled-id',
  })
  assert.deepEqual(result, { success: true })
  assert.equal(request.mock.callCount(), 1)
  const [url, options] = request.mock.calls[0].arguments
  assert.ok(url.endsWith('/rest/v1/audit_requests'))
  assert.equal(options.method, 'POST')
  const { id, ...saved } = JSON.parse(options.body)
  assert.match(id, /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/)
  assert.deepEqual(saved, valid)
  assert.ok(options.signal instanceof AbortSignal)
})

test('returns a useful error when storage rejects the request', async (t) => {
  process.env.RESEND_API_KEY = 're_mock_not_a_real_key'
  t.mock.method(console, 'error', () => {})
  const request = t.mock.method(globalThis, 'fetch', async () => new Response('private backend details', { status: 403 }))
  const result = await submitAuditRequest(valid)
  assert.equal(result.success, false)
  assert.match(result.error, /info@titan-automations.com/)
  assert.doesNotMatch(result.error, /private backend details/)
  assert.equal(request.mock.callCount(), 1)
})

test('emails the fixed owner after saving, with validated Reply-To and the saved reference', async (t) => {
  process.env.RESEND_API_KEY = 're_mock_not_a_real_key'
  const calls = []
  t.mock.method(globalThis, 'fetch', async (url, options) => {
    calls.push({ url, options })
    return url === 'https://api.resend.com/emails'
      ? Response.json({ id: 'provider-email-id' })
      : new Response(null, { status: 201 })
  })
  const result = await submitAuditRequest({ ...valid, business_name: 'Example Ltd', biggest_bottleneck: '<script>example</script>', to: 'wrong@example.com' })
  assert.deepEqual(result, { success: true })
  assert.equal(calls.length, 2)
  assert.ok(calls[0].url.endsWith('/rest/v1/audit_requests'))
  assert.equal(calls[1].url, 'https://api.resend.com/emails')
  const saved = JSON.parse(calls[0].options.body)
  const email = JSON.parse(calls[1].options.body)
  assert.deepEqual(email.to, ['carl@titan-automations.com'])
  assert.equal(email.from, 'Titan Automations <noreply@titan-automations.com>')
  assert.equal(email.reply_to, valid.email)
  assert.ok(email.text.includes(saved.id))
  assert.ok(email.text.includes('Example Ltd'))
  assert.ok(email.text.includes('<script>example</script>'))
  assert.equal(email.html, undefined)
  assert.equal(calls[1].options.headers['Idempotency-Key'], `audit-enquiry/${saved.id}`)
  assert.ok(calls[1].options.signal instanceof AbortSignal)
})

test('retries a transient email failure once without duplicating the database write', async (t) => {
  process.env.RESEND_API_KEY = 're_mock_not_a_real_key'
  const emails = []
  let saves = 0
  t.mock.method(globalThis, 'fetch', async (url, options) => {
    if (url !== 'https://api.resend.com/emails') {
      saves++
      return new Response(null, { status: 201 })
    }
    emails.push(options)
    return emails.length === 1 ? new Response(null, { status: 503 }) : Response.json({ id: 'provider-email-id' })
  })
  assert.deepEqual(await submitAuditRequest(valid), { success: true })
  assert.equal(saves, 1)
  assert.equal(emails.length, 2)
  assert.equal(emails[0].headers['Idempotency-Key'], emails[1].headers['Idempotency-Key'])
  assert.equal(emails[0].body, emails[1].body)
})

test('email timeouts preserve the saved enquiry and stop after one retry', async (t) => {
  process.env.RESEND_API_KEY = 're_mock_not_a_real_key'
  let saves = 0
  let emails = 0
  t.mock.method(globalThis, 'fetch', async (url) => {
    if (url !== 'https://api.resend.com/emails') {
      saves++
      return new Response(null, { status: 201 })
    }
    emails++
    throw new DOMException('timeout', 'TimeoutError')
  })
  assert.deepEqual(await submitAuditRequest(valid), { success: true })
  assert.equal(saves, 1)
  assert.equal(emails, 2)
  assert.ok(console.error.mock.calls.some(({ arguments: args }) => args[1]?.reason === 'network_error_or_timeout'))
})

test('does not retry permanent email rejections or rate limits', async (t) => {
  process.env.RESEND_API_KEY = 're_mock_not_a_real_key'
  let emails = 0
  t.mock.method(globalThis, 'fetch', async (url) => {
    if (url !== 'https://api.resend.com/emails') return new Response(null, { status: 201 })
    emails++
    return new Response(null, { status: 429 })
  })
  assert.deepEqual(await submitAuditRequest(valid), { success: true })
  assert.equal(emails, 1)
  assert.ok(console.error.mock.calls.some(({ arguments: args }) => args[1]?.status === 429))
})

test('missing email credentials preserve capture and log the saved enquiry reference', async (t) => {
  const request = t.mock.method(globalThis, 'fetch', async () => new Response(null, { status: 201 }))
  assert.deepEqual(await submitAuditRequest(valid), { success: true })
  assert.equal(request.mock.callCount(), 1)
  const saved = JSON.parse(request.mock.calls[0].arguments[1].body)
  assert.ok(console.error.mock.calls.some(({ arguments: args }) => args[1]?.reason === 'missing_resend_api_key' && args[1]?.enquiryId === saved.id))
})

test('a missing provider receipt is not logged as an accepted notification', async (t) => {
  process.env.RESEND_API_KEY = 're_mock_not_a_real_key'
  t.mock.method(globalThis, 'fetch', async (url) => url === 'https://api.resend.com/emails' ? Response.json({}) : new Response(null, { status: 201 }))
  assert.deepEqual(await submitAuditRequest(valid), { success: true })
  assert.equal(console.info.mock.callCount(), 0)
  assert.ok(console.error.mock.calls.some(({ arguments: args }) => args[1]?.reason === 'missing_email_id'))
})

test('handles network failures and timeouts without throwing', async (t) => {
  t.mock.method(console, 'error', () => {})
  const request = t.mock.method(globalThis, 'fetch')
  for (const error of [new TypeError('network failure'), new DOMException('timed out', 'TimeoutError')]) {
    request.mock.mockImplementation(async () => { throw error })
    const result = await submitAuditRequest(valid)
    assert.equal(result.success, false)
    assert.match(result.error, /try again/)
  }
})

import assert from 'node:assert/strict'
import { test } from 'node:test'
import { submitAuditRequest } from '../app/actions/audit-request.ts'

const valid = { name: 'Test Person', email: 'test@example.com' }

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
    unexpected: 'must not reach the database',
  })
  assert.deepEqual(result, { success: true })
  assert.equal(request.mock.callCount(), 1)
  const [url, options] = request.mock.calls[0].arguments
  assert.ok(url.endsWith('/rest/v1/audit_requests'))
  assert.equal(options.method, 'POST')
  assert.deepEqual(JSON.parse(options.body), valid)
  assert.ok(options.signal instanceof AbortSignal)
})

test('returns a useful error when storage rejects the request', async (t) => {
  t.mock.method(console, 'error', () => {})
  t.mock.method(globalThis, 'fetch', async () => new Response('private backend details', { status: 403 }))
  const result = await submitAuditRequest(valid)
  assert.equal(result.success, false)
  assert.match(result.error, /info@titan-automations.com/)
  assert.doesNotMatch(result.error, /private backend details/)
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

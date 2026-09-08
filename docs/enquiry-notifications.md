# Website enquiry notifications

After the live audit form saves an enquiry in Supabase, it sends a plain-text Resend notification to `carl@titan-automations.com`. Reply-To is the validated enquirer's email. Sender and recipient are fixed in server code.

## Production configuration

- Set the existing Resend account's sending key as `RESEND_API_KEY` in the Vercel project serving `www.titan-automations.com`, for the Production environment. Keep it server-side.
- Ensure `titan-automations.com` is a verified sending domain in that Resend account. The sender is `Titan Automations <noreply@titan-automations.com>`.
- Redeploy after changing environment variables. Both Vercel projects currently linked to this GitHub repository build on pushes; configure the project that actually serves the live domain.

## Verification

1. Submit one uniquely labelled internal test through the live form using Carl's email.
2. Confirm one matching row in `public.audit_requests` and the form's saved state.
3. Find the matching email in Carl's inbox, checking spam too. Confirm that Reply-To matches the test email and that all submitted details appear.
4. If no email arrives, check Vercel runtime logs for `Audit notification` and the enquiry UUID. An accepted email ID confirms provider acceptance, not inbox delivery; inspect that ID in Resend for delivery/bounce status.

## Failure behaviour and limits

- The database save happens first. Failed database writes never send an email.
- Every saved enquiry has a server-generated UUID, also used for the email's idempotency key. One retry on a network error or a 5xx response uses the same key and payload. Resend deduplicates those retries for 24 hours.
- Missing credentials, 4xx rejections (including rate limits), exhausted retries and missing provider receipts are logged with the enquiry UUID. Credentials, message contents and contact details are excluded from those logs.
- Email failure leaves the successful database save intact and the booking link available. A timeout may mean Resend accepted the message even if its response was lost; check the provider before manually resending.
- There is no scheduled retry worker or historical backfill in this change. After a configuration or provider outage, recover missed alerts from the saved enquiries and logs.
- This only sends alerts for submissions through this website action. Direct database imports and other forms do not trigger it.

## Access needed for activation

The Vercel connector in the current chat is authorised for `carlwilkins888-1881s-projects`; the site's deployments belong to `carlwilkins111-9290s-projects`. The correct hosting account must be available to verify production credentials and runtime logs. No secret values belong in this document or in chat.

# Reminder: Enable contact form (Formspree-style)

**Status:** Deferred — user not ready yet (recorded 2026-11-07, America/New_York).  
**Do not implement until the user explicitly asks to turn the form on.**

## Chosen approach (when ready)

**Formspree-style** — keep current static Firebase Hosting (Spark is fine).

- No Cloud Functions
- No Blaze upgrade required
- No Firebase App Hosting migration required
- Form posts to Formspree (or Getform / Basin / similar); that service emails `info@jadzholdings.com`

## Why the form is unavailable today

- Site is static export on Firebase Hosting (`jadzholdings-web`)
- `ContactFormSection` forces `deliveryConfigured={false}`
- Mailto / tel remain the working contact path

## Steps to enable later

1. Create a Formspree (or similar) form endpoint that delivers to `info@jadzholdings.com`.
2. Store the endpoint URL as a public env/config value, e.g. `NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxx` (safe to expose — it is not a secret API key like SendGrid).
3. Restore the full contact form UI fields from the original brief:
   - Full name (required)
   - Email (required)
   - Company (optional)
   - Phone (optional)
   - Area of interest (select — use `interestOptions` in `src/lib/content.ts`)
   - Message (required)
   - Optional marketing consent (separate from inquiry)
   - Honeypot spam field
4. On submit, `POST` JSON/form-urlencoded to the Formspree endpoint (client-side `fetch` is OK for this pattern).
5. Success copy: `Thank you for contacting Jadz Holdings. Your inquiry has been received.`
6. Error copy: `We couldn’t send your message. Please try again or email info@jadzholdings.com.`
7. Keep mailto/tel panel as fallback.
8. Rebuild static export (`npm run build`) and redeploy Hosting:
   `npx -y firebase-tools@latest deploy --only hosting --project jadzholdings-web`

## Code touchpoints

- `src/components/ContactForm.tsx` — form UI + submit handler
- `src/components/ContactFormSection.tsx` — currently hardcodes unavailable; switch to Formspree-backed form when ready
- `src/lib/content.ts` → `pages.contact.form` + `interestOptions`
- Do **not** put SendGrid/Twilio/Resend secret keys in client code

## Alternatives (not chosen for now)

| Path | Notes |
|------|--------|
| Cloud Function + SendGrid/Resend | Works, but needs **Blaze** + Functions |
| Firebase App Hosting + Next API route | Hosting product change + Blaze |

## Decision lock

Until the user says otherwise: **Formspree-style on static Hosting** is the planned enablement path.

## Security follow-on (user request 2026-11-13)

When the form is turned on, also move to **form-only contact** (remove public email / mailto from the site). Details in `SECURITY.md`. Remind the user of this whenever they ask to enable the form.

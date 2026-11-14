# Security notes — Jadz Holdings site

## Contact email harvesting (recorded 2026-11-13, America/New_York)

**Current:** Public pages use client-side obfuscation (`ObfuscatedEmail`) — JS reconstruction from opaque parts; static HTML has no contiguous mailbox / mailto / at-dot plaintext.

**Deferred — form-only contact (stronger):**
- User intends to move to **form-only contact** later (no public email address on the site).
- When enabling the contact form (see `CONTACT_FORM_REMINDER.md`), also:
  1. Remove on-page email displays / mailto links (footer, contact panel, partnerships, privacy, terms, form fallback).
  2. Route all inquiries through the form (Formspree-style or equivalent).
  3. Keep phone/mailing address as needed; do not re-expose `info@…` in HTML, SEO, or error copy.
- **Remind the user of this form-only security goal** whenever they ask to turn on / implement the contact form, Formspree, or “form only” contact.

**Hard limit of obfuscation alone:** Bots that execute JavaScript can still recover a client-assembled address. Form-only (or Cloudflare Email Address Obfuscation) is the next step up.

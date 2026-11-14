# Security notes — Jadz Holdings site

## Session start (required)

**At the start of every new agent session on this repo, read this file** (`/cursor/stores/self/jadz-holdings/SECURITY.md` and/or `docs/brand/SECURITY.md`) **and remind the user of any unset controls below.**

---

## Unset control — form-only contact

| Field | Value |
|-------|--------|
| **Status** | **UNSET** — not implemented yet |
| **Control** | Form-only contact (no public email / mailto on the site) |
| **Current interim** | Client-side obfuscation via `ObfuscatedEmail` (JS rebuild from opaque parts; static HTML has no contiguous mailbox / mailto / at-dot plaintext) |
| **Desired end state** | All inquiries via contact form only; remove footer/contact/partnerships/privacy/terms/form-fallback email displays; do not re-expose `info@…` in HTML, SEO, or error copy |
| **Depends on** | Enabling Formspree-style form (`CONTACT_FORM_REMINDER.md`) |
| **Remind when** | Every new session (this unset control); also when user asks for contact form / Formspree / “form only” |

**Hard limit of obfuscation alone:** Bots that execute JavaScript can still recover a client-assembled address. Form-only (or Cloudflare Email Address Obfuscation) is the next step up.

Recorded: 2026-11-13 (America/New_York). User asked agents to check this file every session and remind about unset controls.

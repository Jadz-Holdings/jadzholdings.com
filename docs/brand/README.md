# Jadz Holdings — Persistent Memory Index

Canonical memory for the **jadzholdings.com** corporate marketing website.

| File | Purpose |
|------|---------|
| `design-system.md` | Visual identity, tokens, typography, layout, motion, accessibility |
| `site-content.json` | Machine-readable source of truth for all public copy and metadata |
| `site-content.md` | Human-readable mirror of all page content |
| `scope-rules.md` | Positioning, inclusions, exclusions, claim boundaries |
| `CONTACT_FORM_REMINDER.md` | Deferred: how to turn on Formspree-style contact form (no Blaze) |
| `SECURITY.md` | Security notes — email harvesting, deferred **form-only** contact |

**Repo alignment:** Application content lives in `src/lib/content.ts` (and related modules) and must stay consistent with `site-content.json`.

**Last updated:** 2026-11-13 (America/New_York)

**Session start:** Always read `SECURITY.md` first and remind the user of any **unset** controls (currently: form-only contact).

**Contact form:** Unavailable by design on static Hosting. Planned enablement = Formspree-style (see `CONTACT_FORM_REMINDER.md`). Do not implement until user asks. When enabling, also switch to **form-only contact** (no public email) — see `SECURITY.md`.

**Spaavs sync:** SPAAVS tagline = `Beyond Parking. Intelligent Mobility. Autonomous Infrastructure.` from Spaavs.com `siteConfig` (merged main).

**Go-live:** Source merged to `main` on 2026-11-07 (commit `244adf7`, PR #1 MERGED).

**Firebase Hosting:** Project `jadzholdings-web` deployed 2026-11-07 → https://jadzholdings-web.web.app (same model as spaavs-web). Apex `jadzholdings.com` still WordPress until DNS cutover.

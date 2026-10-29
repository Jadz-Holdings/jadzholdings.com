# Jadz Holdings

Corporate marketing website for **Jadz Holdings LLC** — introducing the parent company, showcasing developing ventures, and supporting partnership inquiries.

## Brand & content source of truth

| Location | Purpose |
|----------|---------|
| `docs/brand/design-system.md` | Visual identity, tokens, typography, layout, motion |
| `docs/brand/site-content.json` | Machine-readable public copy & metadata |
| `docs/brand/site-content.md` | Human-readable public copy |
| `docs/brand/scope-rules.md` | Positioning, inclusions, exclusions, claim boundaries |
| `src/lib/content.ts` | Typed content module used by the app |

Persistent agent memory mirror: `/cursor/stores/self/jadz-holdings/`

When updating public copy or design tokens, update **both** `docs/brand/` and `src/lib/content.ts` (and keep the agent store in sync).

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form

Inquiry delivery is handled server-side through Resend when environment variables are set:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL` (defaults conceptually to `info@jadzholdings.com`)
- `CONTACT_FROM_EMAIL` (verified sender in Resend)

If these are not configured, the contact page identifies the form as unavailable and provides working `mailto:` and `tel:` links.

Copy `.env.example` to `.env.local` for local configuration. Keep credentials out of client code and out of git.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint

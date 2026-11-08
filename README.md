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

- Next.js (App Router) with static export
- TypeScript
- Tailwind CSS v4
- Firebase Hosting (same model as spaavs.com)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact

On Firebase Hosting (static export), the inquiry form is unavailable by design and the page provides working `mailto:` / `tel:` links to `info@jadzholdings.com` and `(571) 628-2444`.

## Scripts

- `npm run dev` — development server
- `npm run build` — static export to `out/`
- `npm run lint` — ESLint

## Deploy (Firebase Hosting)

Same approach as SPAAVS:

```bash
npm run build
npx -y firebase-tools@latest use jadzholdings-web
npx -y firebase-tools@latest deploy --only hosting
```

Config: `firebase.json`, `.firebaserc`. Output directory: `out/`.

### Custom domain (DNS)

After the first Hosting deploy:

1. In Firebase Console → Hosting → add custom domain `jadzholdings.com` (and `www` if desired).
2. Add the TXT / A / CNAME records Firebase shows.
3. Wait for SSL provisioning.

Firebase Hosting typically uses A records pointing at Google hosting IPs (or a CNAME for `www`).

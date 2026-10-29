# Jadz Holdings — Design System

Proposed visual direction for the Jadz Holdings corporate marketing site. This is **not** an inherited legacy brand standard; it is the identity created for jadzholdings.com.

SPAAVS keeps its own green identity inside SPAAVS sections. FloqMedia uses the corporate system with teal accents.

---

## 1. Brand personality

- Credible, thoughtful, ambitious
- Modern corporate — not startup-playful, not stock-market flashy
- Practical technology connecting digital platforms with physical places

## 2. Color palette

### Corporate (Jadz Holdings)

| Token | Hex | Role |
|-------|-----|------|
| `--navy` | `#0B1F33` | Primary brand / headings |
| `--navy-deep` | `#071521` | Footer / deep panels |
| `--navy-mid` | `#14304A` | Secondary navy surfaces |
| `--charcoal` | `#1A222C` | Body text |
| `--slate` | `#3D4A59` | Supporting body |
| `--muted` | `#5C6B7A` | Meta / hints |
| `--fog` | `#E8EEF3` | Soft section fills |
| `--cloud` | `#F4F7FA` | Page background |
| `--white` | `#FFFFFF` | Cards / panels / contrast |
| `--teal` | `#2F7F86` | Primary accent / CTAs |
| `--teal-bright` | `#3A9AA3` | Hover / focus accent |
| `--teal-soft` | `#D7E9EB` | Soft teal wash |
| `--metal` | `#8FA3B5` | Restrained metallic accent |
| `--danger` | `#B42318` | Form errors |
| `--success` | `#1F7A4C` | Form success |

### SPAAVS (venture override)

| Token | Hex | Role |
|-------|-----|------|
| `--spaavs-green` | `#1F8A4C` | SPAAVS wordmark, badges, CTAs |
| `--spaavs-green-deep` | `#146338` | SPAAVS hover |
| `--spaavs-green-soft` | `#E6F5EC` | Soft SPAAVS wash |

### Avoid

- Purple-on-white / purple-to-indigo AI defaults
- Warm cream + terracotta serif clichés
- Glow effects, multi-layer shadows, emoji decoration
- Defaulting the whole site to dark mode

## 3. Typography

| Role | Family | Weights | Notes |
|------|--------|---------|-------|
| Display / headings | **Syne** | 600, 700, 800 | Expressive corporate; tight tracking (`-0.02em`) |
| Body / UI | **Manrope** | 400, 500, 600, 700 | Readable, professional |
| CSS vars | `--font-syne`, `--font-manrope` | | Loaded via `next/font/google` |

Do **not** use Inter, Roboto, Arial, or system-only stacks as the designed identity.

### Type scale (approximate)

- Hero H1: `clamp(2.4rem, 5.4vw, 4.4rem)`
- Page H1: `clamp(2.2rem, 4.8vw, 3.6rem)`
- Section H2: `clamp(1.8rem, 3.5vw, 2.6rem)`
- Body lead: `clamp(1.05rem, 1.8vw, 1.2rem)`
- Eyebrow: `0.75rem`, uppercase, `letter-spacing: 0.16em`

## 4. Layout & composition

- Max content width: `--max: 72rem` (`.container`)
- Horizontal padding: `min(100% - 2rem, var(--max))`
- Section padding: `clamp(3.5rem, 8vw, 6.5rem)` vertical
- Generous spacing; clear hierarchy; one job per section
- **No card clutter in the hero.** Section dividers use top borders / spacing more than boxed cards
- Home hero is full-bleed imagery with navy/teal gradient overlay
- First viewport: brand eyebrow, one headline, one supporting paragraph, CTA group, dominant image plane

## 5. Components

### Buttons

- Pill shape (`border-radius: 999px`)
- Primary: teal fill, white text
- Secondary (on dark): translucent border, white text
- Outline (on light): navy border
- SPAAVS: green fill
- Hover: slight lift (`translateY(-1px)`), disabled under `prefers-reduced-motion`

### Navigation

- Sticky header with blur
- Desktop links + primary CTA **Connect With Us** → `/contact`
- Mobile: toggle button, expandable menu, Escape closes, links close menu
- Skip link to `#main`

### Status badge

- Uppercase micro label with dot indicator
- Teal by default; green in `.spaavs-theme`

### Forms

- Clear labels, optional hints, focus ring in teal
- Honeypot field for spam (`website`)
- Optional marketing consent separate from inquiry
- Success / error banners with defined copy

### Media panels

- Full-bleed concept photography with gradient wash
- `data-label="Concept imagery"` for concept labeling
- Relevant subjects: cities, parking, venues, digital/event atmospheres
- No Papi’s devices, robots, stock tickers, fake global network maps, exaggerated futurism

## 6. Motion

Intentional, restrained:

1. Hero content stagger (`rise` / `.reveal` delays)
2. Button hover lift
3. Sticky header scroll state

All animations honor `@media (prefers-reduced-motion: reduce)`.

## 7. Accessibility

- Visible `:focus-visible` rings (teal)
- Keyboard-usable nav and forms
- Semantic landmarks: header, main, footer, nav labels
- Contrast: navy/charcoal on cloud/white; white on navy/teal
- Accessibility labels use ordinary **SPAAVS** even where visual wordmark is **SPΛΛVS**
- Address presented as mailing address, not walk-in office

## 8. Imagery direction

- Unsplash (or equivalently licensed) city / parking / venue photos
- Always label product mockups as concepts
- Preserve SPAAVS green when SPAAVS is featured
- Do not feature identifiable excluded-hardware branding

## 9. Implementation map

| Concern | Location |
|---------|----------|
| CSS tokens & components | `src/app/globals.css` |
| Fonts / root shell | `src/app/layout.tsx` |
| Structured content | `src/lib/content.ts` (+ `site.ts` helpers) |
| Persistent memory | `/cursor/stores/self/jadz-holdings/` |

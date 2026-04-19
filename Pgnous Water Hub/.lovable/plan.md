
## Updated Plan — PG Novus Water Solutions

Logo received. It's a circular badge: blue "P" + green "N" with a flowing blue water wave, "PG NOVUS — WATER SOLUTIONS" wordmark. The brand name is **PG Novus** (not Pgnous — that was a typo). I'll use the actual logo throughout and align the palette to its colors.

### Branding adjustments from logo
- **Primary blue** `#1BA3E0` (logo "P" blue) — accents, links, CTAs
- **Deep navy** `#0A2540` — nav, headings, footer
- **Fresh green** `#7AC143` (logo "N" green) — secondary accent, CSR section, success states
- **Slate grey** `#5A6470` (logo wordmark grey) — body text
- **Mist** `#F4F8FB` — section backgrounds, **White** base
Brand name updated everywhere: **PG Novus Water Solutions**.

### Logo usage
- Copy uploaded logo to `src/assets/pgnovus-logo.png`
- Sticky nav: logo (40px) + "PG NOVUS" wordmark in Sora
- Footer: larger logo + tagline
- Favicon: same logo
- Hero: subtle watermark variant (low opacity) bottom-right

### Sections (unchanged structure, refined branding)
1. **Sticky nav** — logo left · Home/About/Solutions/Partners/CSR/Contact · "Request a Quote" CTA (blue) · mobile drawer
2. **Hero carousel** — auto-rotating fade (5s), 4-5 ETP/STP placeholder images, navy gradient overlay, mission headline, dual CTAs, dot indicators, reduced-motion respected
3. **About strip** — intro + 3 stat tiles
4. **Solutions catalog** — 5 cards (ETP, STP, Membrane RO, De-mineralization, Cooling Towers) with Lucide icons, expandable spec tables (capacity, flow, footprint, power, efficiency placeholders)
5. **Channel Partners** — region tabs (North/South/East/West/International), partner cards, "Become a Partner" CTA
6. **PG Novus Cares (CSR)** — green accent (matches logo), Heart icon, featured "clean water for underprivileged children" story + 3 supporting initiatives
7. **Contact / Footer** — address, phone, email, quick links, social icons

### Quote Modal
Triggered from nav/hero/footer. Fields: Name, Company, Email, Phone, Service (dropdown of 5), Message. Validated, success toast (no backend yet).

### Tech
- Replace Base Web/Styletron in `main.tsx` + `Index.tsx` with Tailwind + shadcn (Dialog, Button, Tabs, Accordion, Sheet)
- Sora (headings) + Manrope (body) via Google Fonts in `index.html`
- HSL semantic tokens in `index.css` + `tailwind.config.ts`
- Lightweight custom carousel (setInterval + opacity transitions)
- Unsplash placeholders for project photography
- Fully responsive 320px → 1440px+

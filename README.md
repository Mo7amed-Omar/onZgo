# ONZGO Website

**How to run:** Double-click `index.html`. No build step, no server required.
**Deploy:** Upload the entire folder to Netlify, Vercel, GitHub Pages, or any CDN.

## File Tree

```
onzgo/
├─ index.html
├─ css/
│  ├─ variables.css
│  ├─ base.css
│  ├─ components.css
│  └─ sections.css
├─ js/
│  ├─ content.js        ← ALL text + CONFIG (edit here)
│  ├─ i18n.js
│  ├─ animations.js
│  └─ main.js
├─ assets/
│  ├─ img/              ← drop cup.png + storefront.png here
│  ├─ svg/              ← logo-light.svg, logo-dark.svg, squiggles.svg
│  ├─ video/            ← hero videos (already in place — do not rename)
│  │  ├─ hero-pour.mp4            (desktop 16:9, 1280×720)
│  │  ├─ hero-pour-mobile.mp4     (mobile 4:5, 614×768)
│  │  └─ hero-pour-poster.jpg     (poster / reduced-motion still frame)
│  └─ menu/             ← drop menu-ar.pdf + menu-en.pdf here
└─ README.md
```

## Structure & Page Flow
1. **Header & Offcanvas:** Centered logo, hamburger navigation overlay, AR|EN toggle.
2. **Hero:** Theater curtain reveal, pouring latte video with ambient glow, brand seal badge (`cup.png`), headline reveal on pour completion, wavy bottom transition.
3. **Squiggle Strip:** Decorative wave lines on cream.
4. **Brew:** Cup photo band (`cup.png`), fresh coffee copy, and menu PDF button.
5. **Vibes:** Storefront photo (`storefront.png`) with wavy mask, good vibes copy.
6. **Visit Us:** Opening hours, address, phone placeholders, and directions button.
7. **Footer:** Quick nav links, social media icons, copyright notice.
8. **Floating WhatsApp Button:** Direct chat link.

## Edit Text & Links
Open `js/content.js` — all Arabic/English copy and CONFIG values live there only.

## Fill Placeholders
In `js/content.js`, replace these CONFIG values:
- `whatsapp` → your WhatsApp number, digits only (e.g. `201012345678`)
- `mapsUrl` → full Google Maps share link
- `instagram` → full Instagram profile URL (set `''` to hide icon)
- `facebook` → full Facebook page URL (set `''` to hide icon)
- `address` → your address string
- `hours` → opening hours string
- `phone` → display phone number

## Drop Assets Here
- `assets/img/cup.png` — hero brand badge + brew section photo band
- `assets/img/storefront.png` — vibes section full-bleed photo
- `assets/menu/menu-ar.pdf` — Arabic menu PDF
- `assets/menu/menu-en.pdf` — English menu PDF

## Swap Logo
Replace `assets/svg/logo-light.svg` (cream, for dark backgrounds) and
`assets/svg/logo-dark.svg` (espresso, for light backgrounds) with the official files.
Keep the same filenames.

## Hero Video & Curtain
The hero features a theater curtain opening sequence followed by the pouring latte video:
- Desktop (≥768px): `assets/video/hero-pour.mp4`
- Mobile (≤767px): `assets/video/hero-pour-mobile.mp4`
- Poster / reduced-motion: `assets/video/hero-pour-poster.jpg`

With `prefers-reduced-motion`, the curtain animation is skipped and the poster image is shown.
Do **not** rename or move these files.

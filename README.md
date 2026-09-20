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
- `assets/img/cup.png` — brew section photo band
- `assets/img/storefront.png` — vibes section full-bleed photo
- `assets/menu/menu-ar.pdf` — Arabic menu PDF
- `assets/menu/menu-en.pdf` — English menu PDF

## Swap Logo
Replace `assets/svg/logo-light.svg` (cream, for dark backgrounds) and
`assets/svg/logo-dark.svg` (espresso, for light backgrounds) with the official files.
Keep the same filenames.

## Hero Video
The hero plays a real video once, then freezes on the last frame (latte art finished cup).
- Desktop (≥768px): `assets/video/hero-pour.mp4`
- Mobile (≤767px): `assets/video/hero-pour-mobile.mp4`
- Poster / reduced-motion: `assets/video/hero-pour-poster.jpg`

With `prefers-reduced-motion`, the poster image is shown instead of the video.
Do **not** rename or move these files.

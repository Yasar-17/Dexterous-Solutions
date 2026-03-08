## Dexterous Power Solution Website

This is a modern, multi-page business website for **Dexterous Power Solution**, built with **Vite (React)** and **Tailwind CSS**.

### Getting Started

```bash
npm install
npm run dev
```

Then open the URL shown in your terminal (default `http://localhost:5173`).

### Tech Stack

- React (functional components, React Router v6)
- Vite (bundler)
- Tailwind CSS (utility-first styling)

### Main Pages

- Home (`/`)
- Services (`/services`)
- Gallery (`/gallery`)
- About (`/about`)
- Contact (`/contact`)

### Assets to Replace (all in `public/`)

- `logo.png` – company logo for light backgrounds
- `logo-dark.png` – logo for dark/colored backgrounds
- `favicon.ico` – site favicon
- `hero-bg.jpg` – hero background image
- `about-img.jpg` – about/office/team photo
- `gallery/gallery-1.jpg` … `gallery-6.jpg` – project/installation photos
- `brands/*.png` – official brand partner logos

### Integrations

- **Formspree** – update the `YOUR_FORM_ID` placeholder in `src/pages/Contact.jsx` with your actual Formspree form ID.
- **WhatsApp** – all WhatsApp CTAs use `https://wa.me/919994106234` with contextual pre-filled messages.

# Dextrous Power Solution – Corporate Website

Corporate website for **Dextrous Power Solution**: UPS systems, industrial power backup, batteries and power conditioning in Bangalore.

## Design

- **Colors (strict):** Primary Dark `#1F2937`, Accent Blue `#1D4ED8`, White `#FFFFFF`
- **Layout:** Max content width 1200px, section padding 70px, reduced side padding
- **Reference:** Layout and section logic inspired by [RS Power](https://www.rspowerindia.com/)

## Tech

- React 18 + Vite + Tailwind CSS
- React Router (multi-page)
- Component-based, reusable sections
- SEO meta tags per page
- Responsive, no extra animation or gradients

## Run

```bash
npm install
npm run dev
```

Build: `npm run build` (output in `dist/`).

## Replace assets

- **Logo:** Replace `/public/logo.svg` (recommended height 50px for header).
- **Images:** Replace placeholder blocks with real images. Use `ImagePlaceholder` with `src` or swap for `<img>` with your paths. Suggested slots: hero, about snapshot, product category banners, service rows, industry banner, rental banner, contact map (use your Google Maps embed URL).

## Contact (reference)

#57, YGR Janya Nilaya, 16th Cross, NGR Layout, Roopena Agrahara, Bommanahalli, Bangalore – 560068  
+91 99941 06234 | +91 99424 65628 | +91 85469 69810  
sales@dextrouspowersolution.com

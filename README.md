# Font Finder 🔍🔤

> Modern, minimalist, production-ready website to identify fonts from screenshots and images using pure optical letterform analysis and verified Google Fonts.

![Google Fonts Verified](https://img.shields.io/badge/Google_Fonts-100%25_Verified-10b981?style=flat-square)
![Privacy](https://img.shields.io/badge/Privacy-Zero_Image_Storage-emerald?style=flat-square)
![Framework](https://img.shields.io/badge/Framework-Astro_5-orange?style=flat-square)
![Styling](https://img.shields.io/badge/Styling-Tailwind_CSS-38bdf8?style=flat-square)

---

## 🌟 Key Features

- **100% Optical Typography & Geometry Engine**: Pure in-browser mathematical letterform analysis (Rec. 709 luminance adaptive binarization, connected glyph contours, terminal serif detection, stroke contrast ratio, aspect ratio distribution, stem thickness).
- **Strict Google Fonts Verification**: Every recommendation is validated against the official Google Fonts registry with authentic family names, weights, styles, and SIL Open Font License (OFL) attribution.
- **Commercial Alternative Stand-ins**: Pairs commercial typefaces (*Helvetica*, *Futura*, *Gotham*, *Didot*) with 100% free open-source equivalents (*Inter*, *Montserrat*, *Cormorant Garamond*).
- **Zero Image Retention / 100% Privacy**: Images are processed directly inside the browser's HTML5 Canvas memory and never uploaded to any remote server or database.
- **Interactive Live Specimen Tester**: Real-time editable specimen text, font size slider (14px–72px), weight switcher (300, 400, 600, 700), and dynamic Google Fonts webfont injection.
- **One-Click CSS Generation**: Instant copy-ready HTML `@import` tags and `font-family` CSS declarations with visual feedback and clipboard fallbacks.
- **Dark & Light Mode**: Clean, minimalist UI inspired by Linear, Fontshare, and Typewolf with `localStorage` theme persistence.

---

## 🏗️ Tech Stack

- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) + Custom CSS Design System
- **Language**: TypeScript (Strict Mode)
- **Fonts Registry**: Google Fonts API & Curated Open-Source Metadata Catalog

---

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/prabhatsingh985/Font-Finder.git
cd Font-Finder
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open `http://localhost:4321/` in your browser.

---

## 📦 Production Build

Build static HTML and optimized CSS bundles:
```bash
npm run build
npm run preview
```

---

## 📄 License

This project is licensed under the MIT License. All font families cataloged are distributed under their respective open-source licenses (primarily SIL Open Font License OFL 1.1).

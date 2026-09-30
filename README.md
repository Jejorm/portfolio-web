# 🏛️ Professional Full-Stack Portfolio

## Overview
A bilingual (EN/ES) portfolio built around the **"Kinetic Index"** design system: a monochrome paper/ink palette with a single vermilion accent, one variable typeface (Archivo, weight + width axes) that condenses as you scroll, and a sticky project index that tracks the case study you are reading. See [`DESIGN.md`](./DESIGN.md) for the research, audit and rules behind it.

Built with the latest web technologies, this project serves as a demonstration of technical excellence, focusing on **performance, scalability, and clean architecture**.

## 🛠️ Technical Stack
- **Framework:** [Astro 7](https://astro.build/) (Static Site Generation)
- **Styling:** [Tailwind CSS 4.3](https://tailwindcss.com/)
- **Runtime:** Node.js 22.12+ with [pnpm](https://pnpm.io/)
- **Quality Control:** [Biome 2.5](https://biomejs.dev/) (Linting & Formatting)
- **Testing:** [Playwright 1.63](https://playwright.dev/) (E2E Testing, Chromium + WebKit)
- **Deployment:** Optimized for Vercel / Netlify

## ✨ Key Features
- **Kinetic Index design system:** Light/dark themes (system preference + persistent toggle), native CSS scroll-driven animations with `prefers-reduced-motion` fallbacks. Documented in `DESIGN.md`.
- **Bilingual Support (i18n):** Full internationalization engine for English and Spanish.
- **Senior SEO:** Comprehensive metadata, Open Graph tags, Twitter Cards, and automated sitemaps.
- **Performance:** Local variable fonts, WebP images with responsive `srcset` via Sharp, no scroll listeners.
- **Production Ready:** Custom 404 experience and automated quality checks.

## 🚀 Getting Started

### Prerequisites
- [pnpm](https://pnpm.io/) 11 installed.
- Node.js v22.12+

### Installation
```bash
pnpm install
pnpm exec playwright install  # first run only: downloads test browsers
```

### Development
```bash
pnpm dev
```

### Quality & Testing
```bash
pnpm check  # Run Biome lint & format
pnpm test   # Run Playwright E2E tests
```

### Build for Production
```bash
pnpm build
```

## 📐 Project Structure
```text
/
├── src/
│   ├── assets/       # Optimized images (.webp)
│   ├── components/   # Modular Astro components
│   ├── content/      # Project data (JSON-based i18n)
│   ├── i18n/         # Translation engine logic
│   ├── layouts/      # Master layouts with SEO injection
│   └── pages/        # File-based routing
├── tests/            # Playwright E2E suites
├── public/           # Static assets & robots.txt
├── biome.json        # Linter/Formatter configuration
└── astro.config.mjs  # Astro & Integrations setup
```

---
**Developed with purpose and architectural rigor.**

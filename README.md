# 🏛️ Professional Full-Stack Portfolio

## Overview
This is a high-end professional portfolio designed under the **"Architectural Silence"** philosophy. It prioritizes light, void, and material density over high-saturation aesthetics, projecting a minimalist and brutalist luxury feel.

Built with the latest web technologies, this project serves as a demonstration of technical excellence, focusing on **performance, scalability, and clean architecture**.

## 🛠️ Technical Stack
- **Framework:** [Astro 6.1+](https://astro.build/) (Static Site Generation)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Logic:** React 19
- **Runtime:** Node.js / Bun
- **Quality Control:** [Biome](https://biomejs.dev/) (Linting & Formatting)
- **Testing:** [Playwright](https://playwright.dev/) (E2E Testing)
- **Deployment:** Optimized for Vercel / Netlify

## ✨ Key Features
- **Architectural Design:** Custom design system focused on monochromatic tones and intentional asymmetry.
- **Bilingual Support (i18n):** Full internationalization engine for English and Spanish.
- **Senior SEO:** Comprehensive metadata, Open Graph tags, Twitter Cards, and automated sitemaps.
- **Maximum Performance:** Local font hosting, WebP image optimization with Sharp, and near-perfect Lighthouse scores.
- **Production Ready:** Custom 404 experience and automated quality checks.

## 🚀 Getting Started

### Prerequisites
- [pnpm](https://pnpm.io/) installed.
- Node.js v22.12+

### Installation
```bash
pnpm install
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
│   ├── components/   # Modular Astro/React components
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

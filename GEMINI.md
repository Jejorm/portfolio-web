# GEMINI.md - Project Context: Portfolio

## Project Overview
**Portfolio2** is a modern, high-end professional portfolio built with **Astro**. It follows the **"Kinetic Index"** design system documented in `DESIGN.md`.

- **Main Tech:** Astro (v6.1.1), TypeScript, Biome.
- **Architecture:** Standard Astro project structure with a custom design system documented in `DESIGN.md`.
- **Design Philosophy:** Swiss-editorial and kinetic. Paper/ink monochrome with one vermilion accent, one variable typeface, motion tied to scroll.

## Building and Running
The project uses `pnpm` as the package manager.

| Command | Action |
| :--- | :--- |
| `pnpm install` | Installs dependencies. |
| `pnpm dev` | Starts the local development server at `localhost:4321`. |
| `pnpm build` | Builds the production site to the `./dist/` directory. |
| `pnpm preview` | Previews the production build locally. |
| `pnpm astro [command]` | Runs Astro CLI commands (e.g., `astro add`, `astro check`). |
| `pnpm biome check --write` | (Inferred) Lints and formats code using Biome. |

**TODO:** Define a testing strategy and add a `test` script to `package.json` if automated testing is required.

## Development Conventions

### 🎨 Design System (Kinetic Index)
All UI development **must** follow `DESIGN.md`.
- **Colors:** Use the theme tokens only (`paper`, `raised`, `ink`, `ink-muted`, `line`, `accent`, `accent-ink`, `on-accent`). One accent per page; `accent-ink` for small accent text.
- **Shapes:** Sharp corners only (radius 0).
- **Typography:** *Archivo Variable* for everything (`.display`, `.wordmark`), *JetBrains Mono* for metadata (`.meta`). No serif, no eyebrow labels above headings.
- **Copy:** All strings live in `src/i18n/ui.ts`. No em or en dashes in visible text.
- **Motion:** CSS scroll-driven animations behind `@supports` and `prefers-reduced-motion`; no `window` scroll listeners.

### 🛠️ Coding Standards
- **Linter/Formatter:** **Biome** is the official tool.
  - **Tabs** are used for indentation (`indentStyle: "tab"`).
  - **Semicolons** are avoided where possible (`semicolons: "asNeeded"`).
  - **Quotes:** Single quotes for JavaScript/TypeScript (`quoteStyle: "single"`).
- **Astro Components:** Keep logic in the frontmatter (`---`) and markup in the template section.
- **TypeScript:** Use strict typing where possible (standard `tsconfig.json` is present).

### 📁 Structure
- `src/pages/`: File-based routing.
- `src/components/`: Recommended location for reusable Astro/UI components.
- `public/`: Static assets (favicons, images).
- `resources/`: Design system documentation and reference materials.

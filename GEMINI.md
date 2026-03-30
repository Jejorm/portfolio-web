# GEMINI.md - Project Context: Portfolio

## Project Overview
**Portfolio2** is a modern, high-end professional portfolio built with **Astro**. It follows a unique design philosophy called **"Architectural Silence"** (or **"Monochromatic Architect"**), which prioritizes light, void, and material density over color and high-saturation aesthetics.

- **Main Tech:** Astro (v6.1.1), TypeScript, Biome.
- **Architecture:** Standard Astro project structure with a heavy focus on a custom design system located in `resources/dark-mode/DESIGN.md`.
- **Design Philosophy:** Minimalist, brutalist luxury. Rejects "gamer" aesthetics. Uses monochromatic tones (charcoal, ink, silver, bronze) and intentional asymmetry.

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

### 🎨 Design System (The Monochromatic Architect)
All UI development **must** strictly adhere to the guidelines in `resources/dark-mode/DESIGN.md`.
- **Colors:** Use charcoal (#0e0e0e), silver (#c6c6c6), and bronze (#efdccc) tones.
- **Borders:** Prohibition of 1px solid borders for sectioning. Use background tonal shifts instead.
- **Shapes:** **Sharp edges only** (0px or 4px radius). No pill shapes or heavy rounds.
- **Typography:** 
  - **Headlines:** *Newsreader* (Serif).
  - **Body:** *Inter* (Sans-serif).
- **Spacing:** Use wide, cinematic gutters and intentional asymmetry.

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

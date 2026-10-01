# Feature: copy-and-projects-polish

The availability copy now targets custom web and app work and freelance projects, and the hero statement is general and does not name Vikoma. Case studies get a prominent live-site button, a smoothly animated problems/solutions disclosure, and no repeated "01 / kind" line.

## Quick path

1. Hero: the availability line reads "Available for custom web and app development and freelance projects" ("Disponible para desarrollo web y de apps a medida y proyectos freelance").
2. Projects: each case opens with the title, then the summary, then a large accent "Live site" button.
3. Click "Show N more problems and solutions": the panel eases open and the text fades in; closing eases back.

## Details

| Topic | Decision |
|-------|----------|
| Availability | `hero.available`, `about.fact.work.value` and `seo.description` in en and es. No "full-time" or "tiempo completo" remains. |
| Hero statement | EN "Full-stack developer. I turn ideas into fast, accessible web products, ready for production." ES "Desarrollador full-stack. Convierto ideas en productos web rápidos, accesibles y listos para producción." No metrics invented. |
| Live button | Moved from a narrow side column to its own row under the summary. `bg-accent` / `text-on-accent` at rest (4.6:1 light, 6.2:1 dark), 20px semibold, 60px tall, full width on phones; `--ink` on hover. |
| Disclosure motion | WAAPI over native `<details>`: height 480ms open / 380ms close with the site ease; content rises 10px and fades in with a 90ms delay. `.is-closing` flips label and icon immediately. Reduced motion or no JS: native instant toggle. |
| Removed | The `01 / kind` meta above each case title. The sticky index already shows number and kind. |
| Out of scope | About and principles copy that mentions Vikoma as evidence (verifiable, not availability). |
| TDD | Off. Checks: `pnpm lint`, `pnpm test`, browser readback. |
| Route | Direct inline: copy keys, one component, one test expectation, DESIGN.md. |

## Checklist

- [x] T1 Availability and SEO copy, en and es
- [x] T2 Hero statement without Vikoma; Spanish test expectation updated
- [x] T3 Remove the meta line above case titles
- [x] T4 Prominent live-site button
- [x] T5 Animated disclosure
- [x] T6 DESIGN.md diagram, motion table and button rule; lint, tests, browser readback

## Verification evidence

| Check | Observed |
|-------|----------|
| Disclosure opening, 100ms samples | height 0 → 195 → 259 → 274 → 278px; opacity 0 → 0.71 → 0.93 → 1 |
| Disclosure closing | height 278 → 44 → 6 → 0; `open` false at end; details box back to 44px |
| Live button, 1440px | 169 × 60px, 20px, accent background |
| Live button, 390px dark | 358 × 60px, no horizontal overflow |
| Meta line above title | Not present |
| `pnpm lint` / `pnpm test` | Clean / 50 passed |

## Next step

Commit on `feat/copy-and-projects-polish`, which is stacked on `fix/a11y-contrast-type`. Push and PR are the user's call.

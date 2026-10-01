# Feature: a11y-contrast-type

WCAG 2.1 AA audit of the rendered site in light and dark themes, at 1440px and 390px. It fixes the form field contrast, faint separators and the smallest text size, so numbers, labels and titles read well in both themes.

## Quick path

1. Open the contact form in either theme: field borders and placeholders are clearly visible, and keyboard focus shows the accent outline.
2. Check the project index numbers (01 to 04), kinds and footer: they render at 14px.
3. Check the separators in the language switch and the stack lists: visible, not faint.

## Details

| Topic | Decision |
|-------|----------|
| How it was audited | The a11y-audit skill's static scanner on `dist/` (0 findings) and its contrast checker on every token pair. Then a rendered pass in Playwright measured each visible text against its real composited background. The static CSS checker cannot resolve CSS variables. |
| Field borders | `--line` (1.4:1) changed to `--ink-muted` (6.17 light, 7.15 dark), per WCAG 1.4.11. Hover and focus go to `--ink`. |
| Field focus | Removed `focus:outline-none` so fields keep the global accent outline (WCAG 2.4.7). |
| Placeholder | `ink-muted/80` (3.94 light) changed to `ink-muted` (6.17 / 7.15). |
| Separators | Language `/` changed from `text-line` (1.4) to `text-ink-muted`. Stack `/` changed from `ink-muted/50` (2.19) to `/70` (3.2 light, 4.03 dark). |
| Number and label size | `--text-meta` changed from 13px to 14px. Affects project indexes and kinds, problem/solution numbers, labels, the EN/ES switch, the footer and Copy email. The minimum rendered text is now 14px. |
| Already passing | Titles (display, poster, wordmark) are 14.3:1 or higher, except text on the accent, which is 4.6 / 6.2. Subtitles (lead 20px) are 4.6:1 or higher. Body is 5.57:1 or higher. Focus outline and the lamp meet 3:1 as non-text. |
| Out of scope | AAA targets. The light `--accent` stays limited to large text and marks (3.44:1), as DESIGN.md already rules. |
| TDD | Off (no project TDD config). Checks: `pnpm lint`, `pnpm test`, scanner, rendered audit. |
| Route | Direct inline: one-line class and token edits in four files plus DESIGN.md. |

## Checklist

- [x] T1 Audit: static scan, token contrast, rendered contrast and size inventory in both themes
- [x] T2 Form fields: border, placeholder, focus outline
- [x] T3 Decorative separators at 3:1 or higher
- [x] T4 Meta size 14px, with the scale comment and DESIGN.md updated
- [x] T5 Re-audit at 1440px and 390px in both themes; lint, tests

## Verification evidence

| Check | Observed |
|-------|----------|
| Rendered contrast fails, 1440px light / dark | 0 / 0 (before: 2 / 2, the separators) |
| Rendered contrast fails, 390px light / dark | 0 / 0 |
| Smallest rendered text | 14px (before: 13px) |
| Field border / placeholder, light | 6.17 / 6.17 (before: 1.4 / 3.94) |
| Field border / placeholder, dark | 7.15 / 7.15 (before: 1.49 / 4.93) |
| Horizontal overflow at 390px | None |
| a11y_scanner on `dist/` | 0 findings |
| `pnpm lint` / `pnpm test` | Clean / 50 passed |

## Next step

Commit on `fix/a11y-contrast-type`, which is stacked on `style/hero-wordmark-hover`. Push and PR are the user's call.

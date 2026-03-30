# Design System Strategy: The Monochromatic Architect

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"Architectural Silence."** 

This system rejects the noisy, high-saturation "gamer" aesthetic typical of many developer portfolios. Instead, it draws inspiration from high-end architectural monographs and brutalist luxury. We achieve a premium feel not through color, but through the deliberate management of light, void, and material density. 

To break the "template" look, designers must embrace **Intentional Asymmetry**. Avoid perfectly centered grids; instead, use the spacing scale to create wide, cinematic gutters and offset content blocks. Overlap typography onto image containers or surface shifts to create a sense of physical depth. This system is about the "unspoken" quality of a codebase—precise, structured, and profoundly deep.

---

## 2. Colors & Materiality
The palette is a study in charcoal, ink, and the subtle metallic sheen of silver and bronze. We do not use "colors"; we use "materials."

### The "No-Line" Rule
**Strict Mandate:** Traditional 1px solid borders are prohibited for sectioning. Structural boundaries must be defined solely through background tonal shifts. For example, a `surface-container-low` section sitting against a `surface` background provides all the definition a high-end UI requires. 

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked physical layers.
- **Base Layer:** `surface` (#0e0e0e).
- **Recessed Areas:** Use `surface-container-lowest` (#000000) for deep, "carved-out" sections like code blocks or footer voids.
- **Elevated Materials:** Use `surface-container` (#191a1a) through `surface-container-highest` (#252626) to bring interactive elements forward.
- **The "Glass & Gradient" Rule:** Main hero sections and CTAs should leverage a subtle linear gradient from `primary` (#c6c6c6) to `primary-container` (#464747) at a 135-degree angle. This mimics the way light hits brushed aluminum.

---

## 3. Typography: The Editorial Voice
The typographic pairing is designed to feel like a premium tech journal.

- **Display & Headlines (Newsreader):** Use this high-contrast serif for all `display` and `headline` levels. It provides a sophisticated, humanistic counterpoint to the rigid code. Use `display-lg` (3.5rem) with generous letter spacing to command the page.
- **Body & Labels (Inter):** Use Inter for all functional text. Its neutral, "engineered" look maintains the architectural feel.
- **Hierarchy as Identity:** Use `title-sm` (#1rem) in all-caps with `0.1em` letter-spacing for section headers to evoke the feel of blueprints or architectural labels.

---

## 4. Elevation & Depth: Tonal Layering
In a "Monochromatic Architect" system, shadows are light, and light is structure.

- **The Layering Principle:** Avoid "Drop Shadow" presets. If a project card needs to stand out, place it on a `surface-container-low` background and give the card itself a `surface-container-high` fill. The 3.5% difference in luminosity is enough for the eye to perceive depth without clutter.
- **Ambient Shadows:** For floating modals or menus, use an ultra-diffused shadow: `box-shadow: 0 24px 80px rgba(0, 0, 0, 0.5)`. The shadow should feel like ambient occlusion in a room, not a floating sticker.
- **The "Ghost Border" Fallback:** If a boundary is functionally required (e.g., an input field), use the `outline-variant` token (#484848) at **20% opacity**. This creates a "whisper" of a line that disappears into the background.
- **Glassmorphism:** Use `surface-bright` (#2c2c2c) at 60% opacity with a `20px` backdrop-blur for navigation bars. This allows the "Architectural Silence" of the content to scroll beneath it, maintaining a sense of continuity.

---

## 5. Components & Primitives

### Buttons
- **Primary:** Fill with `primary` (#c6c6c6), text in `on_primary` (#3f4041). **Radius: 0px.** This sharp edge reinforces the architectural precision.
- **Secondary:** No fill. "Ghost Border" (outline-variant at 20%). On hover, shift background to `surface-container-high`.
- **Tertiary:** Text only in `secondary` (#9f9d9d). Use `label-md` for a technical, utilitarian feel.

### Cards & Lists
- **The Divider Ban:** Never use `<hr>` or border-bottom. Use the spacing scale—specifically `12` (4rem) or `16` (5.5rem)—to create "white space dividers."
- **Interactive States:** On hover, a card should not "pop" up. Instead, shift its background color from `surface-container` to `surface-bright`.

### Input Fields
- **Styling:** Use `surface-container-low` as the base fill. 
- **Focus State:** Instead of a thick colored border, use a 1px `primary` (#c6c6c6) bottom-border only. It should look like a line on a technical drawing.

### Signature Component: The "Monolith" Code Block
For a full-stack portfolio, code is art.
- **Background:** `surface-container-lowest` (#000000).
- **Accent:** A 2px vertical "accent stripe" on the far left using the `tertiary_dim` (#efdccc) bronze tone.
- **Typography:** Inter, `body-sm`, with line-height of `1.7` for extreme readability.

---

## 6. Do's and Don'ts

### Do
- **Embrace the Void:** Use the `20` (7rem) and `24` (8.5rem) spacing tokens frequently. Luxury is defined by wasted space.
- **Subtle Motion:** Use slow, linear fades (300ms+) for hover states. Avoid "bouncy" or "snappy" transitions; they feel too "app-like" and not "architectural" enough.
- **Tonal Contrast:** Ensure your `on_surface` text (#e7e5e4) sits on a dark enough background to maintain AA accessibility, but use `on_surface_variant` (#acabaa) for secondary information to create a visual "recession."

### Don't
- **No Rounding:** Despite modern trends, this system uses `0px` (Sharp) or `4px` (Subtle) rounding only. Do not use "pill" shapes or heavy rounds; they break the architectural grid.
- **No Saturated Accents:** If you need an "Error" state, use `error_dim` (#bb5551). It is a desaturated, "dried blood" red that fits the palette. Never use a vibrant #FF0000.
- **No Drop Shadows on Text:** Typography must be pure and legible. Let the contrast between `on_surface` and the background do the work.
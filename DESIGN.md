# Kinetic Index · Sistema de diseño del portafolio

Documento de referencia del rediseño. Recoge la investigación, la auditoría del diseño anterior, la dirección elegida y las reglas que cualquier cambio futuro debe respetar.

---

## 1. Lectura del brief

> **Portafolio de desarrollador full-stack para reclutadores y clientes técnicos, con un lenguaje tipográfico suizo-editorial y cinético, construido con CSS nativo (scroll-driven animations) sobre Astro + Tailwind 4.**

| Dial | Valor | Motivo |
|---|---|---|
| `DESIGN_VARIANCE` | 8 | Rediseño completo (overhaul): preset "Portfolio (Developer)" 6, +2. |
| `MOTION_INTENSITY` | 6 | Movimiento con propósito, sin espectáculo 3D. El público principal escanea rápido. |
| `VISUAL_DENSITY` | 4 | Aire generoso, pero con casos de estudio que tienen contenido real. |

La skill usada es **tasteskill** ([Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill)), en concreto `design-taste-frontend` y `redesign-existing-projects`: lectura del brief, diales, auditoría antes de tocar nada, lista de "AI tells" prohibidos y un pre-flight obligatorio.

---

## 2. Investigación

### 2.1 Qué se está premiando (Awwwards, FWA, Godly, 2026)

| Referencia | Qué hace bien | Qué tomamos |
|---|---|---|
| **Léo Parpeix, Portfolio 2026** (Awwwards SOTD 15/09/2026, Developer Award) | Equilibrio entre experiencia inmersiva y entorno 2D limpio; objetivo explícito: *entender las habilidades en menos de 10 segundos, en un solo scroll*. | La regla de los 10 segundos: nombre, rol, disponibilidad y CTA visibles sin scroll. Trabajo inmediatamente después del hero. |
| **Dennis Snellenberg** (SOTD + Honorable Mention, jurado de Awwwards) | Minimalismo muy interactivo: micro-animaciones, transiciones entre páginas y parallax cuidado. | Micro-interacciones en todo lo clicable (subrayado que se dibuja, flecha que se desplaza, pulsación `scale(0.98)`). |
| **Rauno Freiberg, Paco Coursey, Emil Kowalski** (design engineers de Vercel, Linear y Arc) | Sitios silenciosos, tipográficos y rápidos. El detalle está en la interacción, no en la decoración. | Nada de ruido visual: sin cursor custom, sin grano externo, sin líneas decorativas. Pocas piezas muy bien resueltas. |
| **By-Kin** (Developer Award, Next.js + GSAP) | Tipografía editorial con restricción y transiciones suaves. | Titulares condensados grandes, jerarquía por peso y anchura en lugar de por color. |
| **Godly (preset Portfolios)** | Curaduría de sitios con tipografía display dominante, índices de proyectos, paletas monocromas con un único acento y movimiento ligado al scroll. | Índice de proyectos como navegación, paleta papel/tinta + un acento, nombre como pieza visual. |

### 2.2 Tendencias 2026 que resisten (y las que no)

- **Tipografía cinética con fuentes variables**: peso y anchura ligados a la posición del scroll. Pasó de experimento a herramienta de producción en portafolios y landings.
- **Grids rotos / asimetría controlada**, bento solo cuando el contenido tiene jerarquía real.
- **Scroll-driven animations y View Transitions nativas**: Chrome/Edge 115+, Safari 26+; Firefox las tiene tras flag (prioridad de Interop 2026). ~84 % de soporte global a mediados de 2026. Se usan con `@supports (animation-timeline: scroll())` como mejora progresiva.
- **No resisten**: glassmorphism genérico, gradientes morados de IA, cursor personalizado, "fake terminals" y marcas técnicas decorativas (`SCALE 1:100`, coordenadas).

### 2.3 Nota sobre las fuentes

La red del entorno bloqueó el acceso directo a awwwards.com, godly.website, thefwa.com y los blogs de tendencias, así que la investigación se hizo con resultados de búsqueda (fichas de Awwwards/FWA, listados de SOTD de septiembre 2026, artículos sobre tendencias y soporte de navegadores). Conviene revisar a mano los sitios citados:

- https://www.awwwards.com/websites/developer/
- https://www.awwwards.com/sites/leo-parpeix-portfolio-2026
- https://godly.website/?preset=Portfolios
- https://dennissnellenberg.com/
- https://rauno.me/ · https://paco.me/ · https://emilkowal.ski/
- https://cydstumpel.nl/start-using-scroll-driven-animations-today/

---

## 3. Auditoría del diseño anterior ("Architectural Silence")

Lo que funcionaba y se conserva: i18n EN/ES, contenido de proyectos con retos y soluciones, anclas `#about #skills #principles #projects #contact`, Lenis, Formspree, SEO base.

"AI tells" y problemas eliminados:

| Problema | Por qué |
|---|---|
| Serif Newsreader + Inter | La combinación "creativo = serif" es la señal de IA más repetida; Inter por defecto. |
| Eyebrow `uppercase tracking-[0.4em]` sobre cada sección | Ritmo de plantilla. Ahora: 0 eyebrows sobre titulares. |
| Coordenadas `40.7128° N, 74.0060° W` (Nueva York) | Decoración falsa, y además incorrecta para alguien en Ecuador. |
| `V.6.1.1 // SYSTEM_STABLE`, `SCALE 1:100`, `ARCH_VIEW_01`, `Quality Assurance // 100%` | Etiquetas de versión y números inventados. |
| Punto verde pulsante, cursor personalizado | Decoración sin estado real; el cursor es hostil para accesibilidad. |
| Bloque de código decorativo (`MonolithicArchitect`) | "Fake screenshot" de código. |
| Tres proyectos en zigzag imagen/texto | Tope de 2 zigzags seguidos. |
| Tres columnas iguales en Skills | Patrón genérico. |
| Acentos mezclados (azul de selección, esmeralda, plata) | Un solo acento por página. |
| Grano desde `grainy-gradients.vercel.app` | Dependencia externa en cada carga. |
| `window` scroll listener + bucle `requestAnimationFrame` infinito | Jank y trabajo en cada frame. Sustituido por CSS scroll-driven. |
| `challenges` / `solutions` no estaban en el schema | Zod los descartaba: nunca se renderizaban. |
| Textos alternativos de rascacielos brutalistas | No describían las imágenes reales (mockups de las apps). |
| `hreflang` con `yourdomain.com` | SEO roto. |
| Textos en español/inglés hardcodeados en componentes | Ahora todo pasa por `src/i18n/ui.ts`. |

---

## 4. Dirección: Kinetic Index

Un portafolio que se lee como un **índice**: el nombre como pieza tipográfica, el trabajo como tabla de contenidos viva y cada proyecto como un caso de estudio corto. La personalidad sale de la tipografía (una sola familia variable, del expandido al condensado) y de un único acento bermellón, no de efectos.

### 4.1 Color

Monocromo papel/tinta con un acento. Tokens en `src/styles/global.css`, expuestos a Tailwind con `@theme inline` (`bg-paper`, `text-ink`, `text-ink-muted`, `border-line`, `bg-raised`, `bg-accent`, `text-accent-ink`, `text-on-accent`).

| Token | Claro | Oscuro | Uso |
|---|---|---|---|
| `--paper` | `#ececea` | `#0e0e0f` | Fondo (gris frío, no crema) |
| `--raised` | `#e1e1de` | `#1a1a1c` | Superficies y placeholders de imagen |
| `--ink` | `#121213` | `#ecece8` | Texto principal, botones primarios |
| `--ink-muted` | `#56565b` (6.2:1) | `#9d9da2` (7.2:1) | Texto secundario |
| `--accent` | `#e2471f` | `#ff5b2e` | Fondos de acento, hover de botones, marcas |
| `--accent-ink` | `#b8330f` (5.1:1) | `#ff5b2e` (6.2:1) | Acento **como texto pequeño** (errores, números) |
| `--on-accent` | `#121213` (4.6:1) | `#0e0e0f` (6.2:1) | Texto sobre acento |

Reglas: el acento nunca es texto pequeño en su versión `--accent` sobre papel claro (3.4:1). Sin negro ni blanco puros. Tema según el sistema, con conmutador manual que persiste en `localStorage`.

### 4.2 Tipografía

- **Archivo Variable** (`@fontsource-variable/archivo/wdth.css`): ejes `wght 100-900` y `wdth 62-125 %`. Una sola familia para todo:
  - `.wordmark`: 800 / 118 % (expandido), se condensa a 500 / 64 % con el scroll.
  - `.display`: 600 / 72 % (condensado), `line-height .95`, `tracking -0.02em`. Títulos de sección y de proyecto.
  - Texto: 400-500 / 100 %.
- **JetBrains Mono Variable** para metadatos (`.meta`): índices, tipo de proyecto, stack. Nunca como eyebrow encima de un titular.
- Énfasis con peso o anchura de la misma familia; nada de mezclar una palabra serif.

### 4.3 Forma y grid

- Esquinas rectas en todo (radio 0). Botones rectangulares de tinta sólida.
- Contenedor `max-w-[1440px]`, gutter `px-4` (móvil) / `px-8`. Grid de 12 columnas en escritorio, una columna por debajo de `md`/`lg`.
- Secciones separadas por una línea `border-line` y `py-24 md:py-32`. Tarjetas solo en el bento, donde la elevación comunica jerarquía.

---

## 5. Estructura de la página

Cada sección usa una familia de layout distinta (6 secciones, 6 familias).

```
┌──────────────────────────────────────────────────────────────┐
│ ■ Jeremy Orellana     Work About Stack Process Contact  EN/ES □ │  nav 64px, una línea
├──────────────────────────────────────────────────────────────┤
│ ■ Open to full-time roles…                        ┌────────┐ │
│ Full-stack developer building scalable,           │retrato │ │  HERO · split asimétrico
│ real-time web apps and the precise interfaces…    │  4:5   │ │  + wordmark a sangre
│ [View work ↓]  jejorm8@gmail.com                  └────────┘ │
│ JEREMY ORELLANA  ← se condensa al hacer scroll               │
├──────────────────────────────────────────────────────────────┤
│ Selected work     │ ┌──────────── imagen 16:10 ───────────┐  │  TRABAJO · índice sticky
│ intro             │ └─────────────────────────────────────┘  │  + casos de estudio
│ 01 Luxe Estate ◀──│ 01 / Real estate platform    [Live ↗]   │  (el índice marca el
│ 02 Assembly       │ Luxe Estate                   Source ↗   │   proyecto activo)
│ 03 Tickets App    │ resumen · descripción                    │
│   (sticky)        │ El reto 01-03  │ Cómo lo resolví 01-03   │
├──────────────────────────────────────────────────────────────┤
│ About             │ Declaración grande que se "entinta"      │  SOBRE MÍ · editorial
│ Base / Focus /    │ palabra a palabra mientras se lee.       │  + ficha de datos
│ Available for     │ 4 áreas en 2×2                           │
├──────────────────────────────────────────────────────────────┤
│ Stack                                                        │  STACK · lista tipográfica
│ Frontend      React 19 / Next.js / Astro / TypeScript / …    │  agrupada (no 3 columnas)
│ Backend       Node.js / Bun / PostgreSQL / …                 │
│ Tooling       Docker / CI/CD / Zod / Playwright / …          │
├──────────────────────────────────────────────────────────────┤
│ How I work                                                   │  PROCESO · bento 4 celdas
│ ┌── ACENTO: S.O.L.I.D ──────┐ ┌─ Performance ─┐              │  (acento, elevada,
│ │ Built to be changed       │ ├─ Plan for failure ┤          │   con borde, invertida)
│ └───────────────────────────┘ └───────────────┘              │
│ ┌── TINTA: Every change is checked · Biome TS Playwright ──┐ │
├──────────────────────────────────────────────────────────────┤
│ LET'S WORK TOGETHER                                          │  CONTACTO · póster
│ intro · email grande [Copy]  │ Nombre / Email / Mensaje      │  + formulario con estados
│ GitHub ↗ LinkedIn ↗          │ [Send message →]  estado      │
├──────────────────────────────────────────────────────────────┤
│ © 2026 Jeremy Orellana              GitHub LinkedIn Back to top ↑ │
└──────────────────────────────────────────────────────────────┘
```

El trabajo va justo después del hero: es lo que un reclutador busca primero.

---

## 6. Movimiento

Todo vive dentro de `@media (prefers-reduced-motion: no-preference)`; las animaciones de scroll además dentro de `@supports (animation-timeline: scroll())`. Sin soporte, el contenido se muestra estático y completo.

| Animación | Qué comunica | Técnica |
|---|---|---|
| Líneas del hero que suben desde una máscara | Orden de lectura en la carga | `@keyframes rise` con `animation-delay` escalonado |
| Wordmark que se condensa (118 % → 64 %, 800 → 500) | Transición de identidad a contenido | `animation-timeline: scroll(root)`, rango `0 100vh` |
| Nav que gana fondo tras 80 px | Estado: el contenido pasa por debajo | `animation-timeline: scroll(root)`, sin JS |
| Imágenes de proyecto que se abren desde un recorte | Entrada de cada caso de estudio | `clip-path` + `scale` con `animation-timeline: view()` |
| Índice de proyectos activo | Dónde estás dentro del trabajo | `IntersectionObserver` → `aria-current` |
| Declaración de "Sobre mí" palabra a palabra | Guía de lectura | `view-timeline` con `animation-range` por palabra (`--p`) |
| Reveals de entrada (`data-reveal`) | Jerarquía y secuencia | Un único `IntersectionObserver` que se desuscribe |
| Subrayados, flechas, `scale(.98)` al pulsar | Feedback de interacción | Transiciones CSS en `transform` / `background-size` |
| Scroll inercial | Peso y continuidad | Lenis, desactivado con `prefers-reduced-motion` |
| Cambio de idioma | Continuidad entre páginas | `@view-transition { navigation: auto; }` |

Prohibido: listeners de `scroll` en `window`, bucles `requestAnimationFrame` permanentes, animar `top/left/width/height`, más de un marquee.

---

## 7. Accesibilidad y rendimiento

- Enlace "Saltar al contenido", foco visible (`outline` de acento), `aria-current` en idioma e índice, `aria-pressed` en el conmutador de tema, menú móvil con `aria-expanded`, cierre con Escape y foco gestionado.
- Formulario: etiquetas encima del campo, errores en línea (`aria-invalid` + `aria-describedby`), región `role="status"` para envío/éxito/error, envío asíncrono a Formspree con fallback a POST normal sin JS.
- Contraste AA verificado para todos los pares de texto (tabla 4.1).
- Fuentes locales, imágenes `astro:assets` en WebP con `srcset`, retrato con `fetchpriority="high"`, sin scripts de terceros en el camino crítico.

---

## 8. Pre-flight (tasteskill §14)

- [x] Cero rayas largas (`—`, `–`) en texto visible (test E2E dedicado).
- [x] Un tema por página (claro/oscuro/sistema), un acento, un sistema de esquinas (0).
- [x] Hero: 1 etiqueta, 1 frase (≤ 20 palabras), 2 CTA, nombre; top padding `pt-24`.
- [x] Eyebrows sobre titulares: 0. Sin numeración de secciones, sin coordenadas, sin versiones.
- [x] Sin zigzag, sin 3 columnas iguales, 6 familias de layout distintas.
- [x] Bento con celdas exactas (4 ítems → 4 celdas) y fondos variados.
- [x] Una intención por CTA ("View work", "Send message", "Live site").
- [x] Nav en una línea, 64 px.
- [x] Imágenes reales; alt text describe lo que se ve.
- [x] Sin `window.addEventListener('scroll')`; reduced motion respetado.
- [x] Móvil: todo colapsa a una columna explícitamente.

---

## 9. Pendientes recomendados

1. **Dominio**: `site` en `astro.config.mjs` sigue en `https://jeremyo.dev` (marcado TODO).
2. **Más proyectos**: el índice sticky escala bien hasta ~6 proyectos; a partir de ahí conviene una página por caso de estudio (`/work/[slug]`) con View Transitions.
3. **Pruebas en WebKit/Firefox**: el contenedor de desarrollo solo tenía Chromium; el proyecto `mobile-safari` de Playwright debe correrse en local o en CI.

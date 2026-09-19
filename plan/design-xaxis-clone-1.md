# X-axis → Nova Industries capture checklist

Source: https://x-axis.framer.website/

## Tokens
- bg: `#000000` / body observed `rgb(13,13,13)` — use near-black `#0d0d0d` page, pure black sections OK
- fg: `#ffffff`
- muted: `#9a9a9a`
- accent: `#ff3b1f` (logo mark / contact arrow)
- line: `rgba(255,255,255,0.12)`
- Fonts: Oswald (display), Geist, Inter, Asta Sans (fallback), Fragment Mono

## Copy swaps
- X-AXIS / x-axis / x-aixs → NOVA INDUSTRIES
- Home hero only: Creative Agency → Design Agency
- Keep company Creative Systems / Creative Powerhouse

## Routes
- `/` Home
- `/company`
- `/project` Works
- `/project/[slug]` × 8
- `/blog`
- `/blog/[slug]` × 6
- `/pricing`
- `/contact`

## Works layout (live Framer, 2026-09-19)

- **Not** a sticky full-bleed stack. `/project` and home featured works are **staggered 2-up pairs**: items 1–2 left-aligned (cols 1–2 of 3), items 3–4 right-aligned (cols 2–3), repeating.
- Category / year sit **above** the image; client + title + orange ↗ below.
- Portrait-ish cards (~400×494 home). Mobile: single column, no sticky overlap.
- Iteration 1 implemented this in `.stagger-grid` (`src/styles/global.css`). Do not restore sticky overlap.

## Assets
Downloaded under `public/images/projects|blog|ui` from framerusercontent.com

## FAQ (captured)
1. What services does Nova Industries specialize in? → We specialize in UI/UX design, brand identity, website development, motion graphics, and creative direction—helping tech brands build impactful digital experiences. (company name swapped)
2–5: accordion answers expanded from template voice (see `src/data/faqs.ts`)

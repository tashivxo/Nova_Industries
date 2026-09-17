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

## Works stack behavior
- Full-bleed stacked case studies with scroll progression on desktop
- Overlapping cards; category/year meta on sides
- Mobile: stacked vertical cards without sticky overlap if needed
- Reduced motion: static stack, no scroll-linked transform

## Assets
Downloaded under `public/images/projects|blog|ui` from framerusercontent.com

## FAQ (captured)
1. What services does Nova Industries specialize in? → We specialize in UI/UX design, brand identity, website development, motion graphics, and creative direction—helping tech brands build impactful digital experiences. (company name swapped)
2–5: accordion answers expanded from template voice (see `src/data/faqs.ts`)

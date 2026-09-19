# Nova Industries

Design agency site built from the free X-axis Framer template, with Phase 1 copy swaps:

- **X-AXIS** → **NOVA INDUSTRIES**
- Home hero **Creative Agency** → **Design Agency**

## Design source of truth

Use the live Framer site as the visual and layout reference when building or reviewing pages:

**https://x-axis.framer.website/**

## Motion

All motion is reverse-engineered from the live Framer bundles, so the timings are Framer's own values, not approximations.
- `src/scripts/motion.ts` runs it: Lenis smooth scroll (Framer uses Lenis defaults), load springs, scroll-linked rises, marker scrubs (hero zoom, skills list), counters and in-view reveals. Pages opt in with `data-*` attributes documented at the top of that file.
- Hover springs are plain CSS `linear()` easings generated from Motion's spring solver (tokens `--ease-*` / `--dur-*` in `global.css`).

## Stack

- Astro (static) + React islands + Tailwind CSS v4 + Motion
- Cloudflare Workers static assets via Wrangler (`nova-industries`)

## Deploy

```bash
npm run build
npx wrangler login   # once, for your Cloudflare account
npm run deploy
```

If Wrangler is not logged in, `npx wrangler deploy --temporary` publishes a short-lived preview you can claim in the Cloudflare dashboard.


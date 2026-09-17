# Nova Industries

Design agency site cloned from the free [X-axis](https://x-axis.framer.website/) Framer template, with Phase 1 copy swaps:

- **X-AXIS** → **NOVA INDUSTRIES**
- Home hero **Creative Agency** → **Design Agency**

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


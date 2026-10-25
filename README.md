# antonkozyrev.dev

Personal portfolio of Anton Kozyrev. Astro, static output, no external fonts or trackers.

- `src/content.ts` — all copy (EN + RU) and links. Placeholders: `TODO_EMAIL`, `TODO_LINKEDIN`, `TODO_RESUME`.
- `src/components/Page.astro` — the single page layout; `src/pages/index.astro` (EN) and `src/pages/ru/index.astro` (RU).

Node 22.12+ is required (`nvm use 22` or Node 24).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npx wrangler pages deploy dist --project-name antonkozyrev
```

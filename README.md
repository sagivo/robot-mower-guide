# MowPilot — robot-mower-guide

Wire-free robot lawn mower buyer's guide: Astro static site with 5 SEO guides
and 3 interactive calculators (size matcher, cost vs. lawn service, slope checker).
Deploys to Cloudflare Pages on every merge to `main`.

## Develop

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # outputs to dist/
```

## Amazon Associates

Product links are built by `src/lib/amazon.ts`. Set your Associates tag in
`src/lib/site.ts` (`AMAZON_TAG`) once approved — every product link on the
site picks it up automatically. Until then, links point to untagged Amazon
search results.

## Deploy

Cloudflare Pages project `robot-mower-guide` is connected to this repo:
- Production branch: `main`
- Build command: `npm run build`
- Build output: `dist`

## Pushing from the sandbox

Native `git push` is blocked here; use the REST push script:

```bash
python3 scripts/gh_push.py sagivo/robot-mower-guide ~/workspace/robot-mower-guide "message"
```

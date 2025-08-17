# Futuro.ngo — Next.js + Plasmic (Codegen) starter

This starter lets you **build visually in Plasmic** and keep **full sovereignty** by committing the generated code to Git.
No runtime dependency on a hosted CMS is required once you `plasmic sync` your project.

## Why Codegen (vs Loader)?
- **Sovereign**: Plasmic generates React components checked into your repo.
- **Fast & portable**: Works on Netlify/Vercel or any Node host; no runtime API calls needed after sync.
- **Visual editing**: Use Plasmic Studio, then run `npm run plasmic:sync` to pull designs into code.

## Quick start

1. **Install deps**
```bash
npm i
```

2. **Auth with Plasmic (one time)**
```bash
npm run plasmic:auth
```
Follow the prompt to paste your API token from https://studio.plasmic.app/settings.

3. **Init the project**
```bash
npm run plasmic:init
```
- Choose **Existing project** (or create a new one in Studio and then choose it).
- Name it `futuro_ngo` for convenience (you can change later).

4. **Sync your designs**
```bash
npm run plasmic:sync
```
This will generate files under `components/plasmic/**` and auto-wire pages if you created page routes in Plasmic.

5. **Run locally**
```bash
npm run dev
```
Open http://localhost:3000. The homepage will render your Plasmic page (e.g., `Homepage`).

## Deploy to Netlify (Git-based)
- Push to GitHub.
- In Netlify, create a new site from that repo.
- Build: `npm run build`
- Publish: leave default; Next plugin will handle output.
- Plugin `@netlify/plugin-nextjs` is already configured in `netlify.toml`.

## Visual editing workflow
- Design in Plasmic Studio (components, pages, sections).
- Optional: register custom **code components** at `/plasmic-host` (already set up) to use your React components inside Plasmic.
- Pull updates: `npm run plasmic:sync` and commit. No DB; all content in code/assets.

## Notes
- You can later move to **Plasmic Loader** if you prefer real-time updates without syncing—but that adds a runtime dependency.
- For bilingual content, create locale variants/pages in Plasmic and route in Next.js or by locales in Studio.

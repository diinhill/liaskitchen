# Lia's Kitchen

Production website for **Lia's Kitchen**, a vegan burger restaurant in Berlin.

**Live:** [liaskitchen.de](https://www.liaskitchen.de/)

## Context

The restaurant needed a fast, bilingual site that shows the menu and handles delivery and reservation links. The owner also had to be able to update the menu (prices, items, photos) **without a developer**. The site is a statically generated Next.js app. The menu is managed through a git-backed headless CMS, so every content edit is a commit and triggers a redeploy.

## Highlights

- **Owner-editable menu:** TinaCMS (Tina Cloud) admin at `/admin`. Edits are committed to GitHub and Vercel rebuilds automatically. The menu has categories, bilingual names and descriptions, prices and images.
- **Static and fast:** the menu is fetched at build time (Next.js App Router, server components) and served from Vercel's CDN. Images are optimized with `next/image`.
- **Bilingual (DE / EN):** locale switcher with prices formatted per locale (`Intl.NumberFormat`).
- **SEO:** metadata and Open Graph tags, plus JSON-LD structured data for the restaurant.
- **Analytics:** Vercel Analytics and Google Analytics, with a cookie consent banner.
- **Resilient content:** menu items without a photo, or whose photo file was removed, fall back to a placeholder instead of a broken image.
- **Consistent food photography:** menu photos are cut out to transparent 1000×1000 PNGs so they share one visual style.

## Stack

| Area | Tech |
|---|---|
| Framework | Next.js 15 (App Router), React 18, TypeScript |
| Styling | Tailwind CSS |
| CMS | TinaCMS / Tina Cloud (git-backed) |
| Hosting | Vercel |
| Runtime | Node.js 24 |

## Project structure

```
app/                 Next.js routes, layout and metadata; page.tsx loads the menu from Tina
components/          UI (menu, header, delivery/reservation, locale, consent…)
content/menu/        menu.json, the CMS-managed menu content
tina/config.ts       CMS schema
public/menu/         menu images (CMS uploads land here)
data.json            static site content (hours, addresses, SEO, impressum)
```

## Getting started

```bash
nvm use            # Node 24
npm install
npm run dev        # Next.js + local Tina content API; admin at http://localhost:3000/admin/index.html
```

Local development reads content from the repo (`TINA_PUBLIC_IS_LOCAL=true` in `.env.local`). Production builds need the Tina Cloud environment variables. See [README-CMS.md](./README-CMS.md) for those, the owner's editing guide and the hosting and handover notes.

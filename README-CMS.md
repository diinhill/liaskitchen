# Lia's Kitchen – CMS & Handover Guide

## For the owner: updating the menu

1. Open `https://<your-domain>/admin/index.html` and sign in with your Tina Cloud account.
2. Choose **Menu** → the single **menu** document.
3. Edit, add (+) or reorder items. Each item has: ID, German/English name, price (€), optional German/English description, image.
   - Never reuse an ID. Items without a description render as "sides".
   - To change an image, click the image field and upload (uploads go to `public/menu/`).
4. **Save**. Tina commits to GitHub and Vercel rebuilds automatically (~1–2 min). The live site updates after the deployment finishes.

Only the menu is editable in the CMS. Opening hours, addresses, impressum and SEO texts still live in `data.json` (developer change).

## For developers

- Stack: Next.js 15 (App Router, static), TinaCMS (Tina Cloud, git-backed), Node 24 (`.nvmrc`, `engines`).
- Content: `content/menu/menu.json` (schema in `tina/config.ts`). `app/page.tsx` fetches it at build time; `components/HomeClient.tsx` renders it.
- Build: `npm run build` = `tinacms build && next build` (needs the env vars below).
- Local dev: `npm run dev` (uses `TINA_PUBLIC_IS_LOCAL=true` in `.env.local`, reads local files).
- Local production build check: `npx tinacms dev --noTelemetry -c "NODE_ENV=production next build"`.

### Environment variables (Vercel → Settings → Environment Variables)

| Name | Notes |
|---|---|
| `NEXT_PUBLIC_TINA_CLIENT_ID` | From the Tina Cloud project |
| `TINA_TOKEN` | Tina Cloud read-only content token (secret) |

Do **not** set `TINA_PUBLIC_IS_LOCAL` on Vercel. Node.js version in Vercel: Settings → General → **24.x**.

## Ownership & hosting (current state)

- **GitHub repository:** developer's personal account. 
- **Vercel project:** developer's personal Vercel account (Gmail login).
- **Tina Cloud project:** developer's account; the owner has an invited user.
- **Domain:** unchanged by this work; the registrar details are intentionally **not** stored in this repository. Share them via a password manager.

### Transfer procedure (when requested)

1. **GitHub:** Repo → Settings → Danger Zone → *Transfer ownership* to the new account/org.
2. **Vercel:** Project → Settings → General → *Transfer Project* to the new team/account, then reconnect the Git integration to the transferred repo (the new owner must install the Vercel GitHub app).
3. **Tina Cloud:** Add the new owner as admin in the project, update the repo connection in Tina Cloud if the repo moved, and rotate `TINA_TOKEN` in Vercel.
4. Redeploy and confirm `/admin` login and a test edit → commit → deploy.

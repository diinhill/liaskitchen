import client from "../tina/__generated__/client";
import HomeClient from "../components/HomeClient";
import type { MenuItemData } from "../components/Menu";

// Tina Cloud's content API rewrites repo media paths ("/menu/x.png") to its own
// CDN ("https://assets.tina.io/<clientId>/x.png"). Our images live in the repo
// (public/menu, served by Vercel's CDN), so map them back to the local path.
const TINA_ASSETS = /^https:\/\/assets\.tina\.io\/[^/]+\//;
function toLocalImage(src: string): string {
  return TINA_ASSETS.test(src) ? `/menu/${src.replace(TINA_ASSETS, "")}` : src;
}

export default async function Home() {
  const { data } = await client.queries.menu({ relativePath: "menu.json" });

  // Tina returns `null` for empty optional objects; the UI expects them absent.
  const menu: MenuItemData[] = (data.menu.items ?? []).flatMap((item) =>
    item
      ? [
          {
            id: item.id,
            name: { de: item.name?.de ?? "", en: item.name?.en ?? "" },
            price: item.price,
            image: toLocalImage(item.image),
            ...(item.description?.de || item.description?.en
              ? {
                  description: {
                    de: item.description?.de ?? "",
                    en: item.description?.en ?? "",
                  },
                }
              : {}),
          },
        ]
      : []
  );

  return <HomeClient menu={menu} />;
}

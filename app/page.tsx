import client from "../tina/__generated__/client";
import HomeClient from "../components/HomeClient";
import type { MenuItemData, MenuCategoryData } from "../components/Menu";
import { PLACEHOLDER_IMAGE } from "../components/menuImage";

// Tina Cloud's content API rewrites repo media paths ("/menu/x.png") to its own
// CDN ("https://assets.tina.io/<clientId>/x.png"). Our images live in the repo
// (public/menu, served by Vercel's CDN), so map them back to the local path.
const TINA_ASSETS = /^https:\/\/assets\.tina\.io\/[^/]+\//;
function toLocalImage(src: string | null | undefined): string {
  if (!src) return PLACEHOLDER_IMAGE;
  return TINA_ASSETS.test(src) ? `/menu/${src.replace(TINA_ASSETS, "")}` : src;
}

export default async function Home() {
  const { data } = await client.queries.menu({ relativePath: "menu.json" });

  const categories: MenuCategoryData[] = (
    ((data.menu as any).categories as any[] | null | undefined) ?? []
  ).flatMap((cat) =>
    cat
      ? [
          {
            id: cat.id,
            name: { de: cat.name?.de ?? "", en: cat.name?.en ?? "" },
            ...(cat.note?.de || cat.note?.en
              ? {
                  note: {
                    de: cat.note?.de ?? "",
                    en: cat.note?.en ?? "",
                  },
                }
              : {}),
          },
        ]
      : []
  );

  // Tina returns `null` for empty optional objects; the UI expects them absent.
  const menu: MenuItemData[] = (data.menu.items ?? []).flatMap((item) =>
    item
      ? [
          {
            id: item.id,
            category: (item as any).category ?? "",
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

  return <HomeClient menu={menu} categories={categories} />;
}

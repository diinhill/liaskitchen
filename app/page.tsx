import client from "../tina/__generated__/client";
import HomeClient from "../components/HomeClient";
import type { MenuItemData } from "../components/Menu";

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
            image: item.image,
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

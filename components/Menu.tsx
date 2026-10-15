'use client';

import MenuItem from "./MenuItem";
import { useLocale } from "./LocaleProvider";
import { LocalesI } from "@/types/locale";

export type MenuItemData = {
  id: number;
  category: string;
  name: { de: string; en: string };
  price: number;
  description?: { de: string; en: string };
  image: string;
};

export type MenuCategoryData = {
  id: string;
  name: { de: string; en: string };
  note?: { de?: string; en?: string };
};

export default function Menu({
  items,
  categories = [],
}: {
  items: MenuItemData[];
  categories?: MenuCategoryData[];
}) {
  const { locale } = useLocale();
  const lang = locale as keyof LocalesI;

  // Group items by category in the order specified by categories
  const categoryMap = new Map<string, MenuItemData[]>();
  items.forEach((item) => {
    const cat = item.category || 'other';
    if (!categoryMap.has(cat)) {
      categoryMap.set(cat, []);
    }
    categoryMap.get(cat)!.push(item);
  });

  const knownCategoryIds = new Set(categories.map((c) => c.id));
  const uncategorizedItems = items.filter(
    (item) => !item.category || !knownCategoryIds.has(item.category)
  );

  return (
    <section id="menu" className="bg-secondary w-screen md:w-auto lg:w-auto pt-8">
      <div className="flex flex-col items-center">
        {categories.map((cat) => {
          const catItems = categoryMap.get(cat.id) || [];
          if (catItems.length === 0) return null;
          const noteText = cat.note?.[lang]?.trim();

          return (
            <div key={cat.id} className="w-[95%] flex flex-col items-center mb-16">
              <div className="text-center mb-16 max-w-2xl px-4">
                <h2 className='text-[#581b34] text-4xl sm:text-5xl font-["Annie_Use_Your_Telescope"] font-bold tracking-wide'>
                  {cat.name[lang] || cat.name.en}
                </h2>
                {noteText && (
                  <p className='mt-3 text-xl sm:text-2xl text-black font-["Annie_Use_Your_Telescope"] whitespace-pre-line'>
                    {noteText}
                  </p>
                )}
              </div>

              <div className="w-full flex flex-wrap justify-center relative items-center sm:gap-10 md:gap-16 lg:gap-20 xl:gap-24 2xl:gap-32">
                {catItems.map((menuItem) => (
                  <div key={menuItem.id} className="mb-32 sm:mb-24">
                    <MenuItem item={menuItem} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {uncategorizedItems.length > 0 && (
          <div className="w-[95%] flex flex-wrap justify-center relative items-center sm:gap-10 md:gap-16 lg:gap-20 xl:gap-24 2xl:gap-32">
            {uncategorizedItems.map((menuItem) => (
              <div key={menuItem.id} className="mb-32 sm:mb-24">
                <MenuItem item={menuItem} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

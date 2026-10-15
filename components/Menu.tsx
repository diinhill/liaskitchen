import MenuItem from "./MenuItem";

export type MenuItemData = {
  id: number;
  name: { de: string; en: string };
  price: number;
  description?: { de: string; en: string };
  image: string;
};

export default function Menu({ items }: { items: MenuItemData[] }) {
  // const [expend, setExpend] = useState(0)
  return (
    <section id="menu" className="bg-secondary w-screen md:w-auto lg:w-auto">
      <div className="flex justify-center">
        <div className="w-[95%] flex flex-wrap justify-center relative items-center sm:gap-10 md:gap-16 lg:gap-20 xl:gap-24 2xl:gap-32">
          {items.map((menuItem) => (
            <div
              // onPointerDown={() => setExpend(menuItem.id)}
              key={menuItem.id}
              className="mb-32 sm:mb-24"
            >
              <MenuItem item={menuItem} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

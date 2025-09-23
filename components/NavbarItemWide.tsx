'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import ScrollLink from "./ScrollLink";
import { LocalesI } from "@/types/locale";
import { useLocale } from "./LocaleProvider";

type NavbarItem = {
  id: number;
  title: { de: string; en: string };
  path: string;
};

const NavbarItemWide = ({ item }: { item: NavbarItem }) => {
  const { locale } = useLocale();
  const pathname = usePathname();
  const lang = locale as keyof LocalesI;
  const { title, path } = item;

  // return (
  //   <ScrollLink
  //     className={`cursor-pointer ${
  //       router.asPath == item.item.path
  //         ? "text-[#a00242] text-4xl"
  //         : "hover:text-[#a00242] hover:text-4xl"
  //     }`}
  //     href={item.item.path}
  //     scroll={router.asPath !== item.item.path}
  //   >
  //     {title}
  //   </ScrollLink>
  // );
  return (
    <Link
      className={`cursor-pointer ${
        pathname == path
          ? "text-[#a00242] text-4xl"
          : "hover:text-[#a00242] hover:text-4xl"
      }`}
      href={path}
      scroll={false}
    >
      {title[lang]}
    </Link>
  );
};
export default NavbarItemWide;

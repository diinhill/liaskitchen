import Link from "next/link";
import { useRouter } from "next/router";
import ScrollLink from "./ScrollLink";

type NavbarItem = {
  item: {
    id: number;
    titleDeutsch: string;
    titleEnglish: string;
    path: string;
  };
};

const NavbarItemWide = (item: NavbarItem) => {
  const routerLang = useRouter();
  const { locale: activeLocale } = routerLang;
  const title =
    activeLocale === "de" ? item.item.titleDeutsch : item.item.titleEnglish;

  const router = useRouter();

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
        router.asPath == item.item.path
          ? "text-[#a00242] text-4xl"
          : "hover:text-[#a00242] hover:text-4xl"
      }`}
      href={item.item.path}
      scroll={false}
    >
      {title}
    </Link>
  );
};
export default NavbarItemWide;

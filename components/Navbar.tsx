import Image from "next/image";
import styles from "@/styles/Navbar.module.css";
import LocaleSwitcher from "./locale-switcher";
import NavbarItemMobile from "./NavbarItemMobile";
import NavbarItemWide from "./NavbarItemWide";
import Link from "next/link";

type NavbarItem = {
  id: number;
  title: { de: string; en: string };
  path: string;
};

export default function Navbar() {
  const navbar: NavbarItem[] = [
    {
      id: 1,
      title: {
        de: "Menü",
        en: "menu",
      },
      path: "/#menu",
    },
    {
      id: 2,
      title: {
        de: "Lieferung",
        en: "delivery",
      },
      path: "/#delivery",
    },
    {
      id: 3,
      title: {
        de: "Reservierung",
        en: "reservation",
      },
      path: "/#reservation",
    },
    {
      id: 4,
      title: {
        de: "Kontakt",
        en: "contact",
      },
      path: "/#contact",
    },
  ];

  return (
    <div
      id="navbar"
      className="sticky top-0 bg-[#fffff6] z-10 font-['Annie_Use_Your_Telescope'] list-none"
    >
      <div className={styles.mobile}>
        <div className="absolute flex top-[10px] left-[1rem] w-[33%] max-w-[200px]">
          {navbar.map((navbarItem) => (
            <div key={navbarItem.id}>
              <NavbarItemMobile item={navbarItem} />
            </div>
          ))}
        </div>
        <div className={styles.instaLogo}>
          <div className="text-black text-3xl pr-2">
            <LocaleSwitcher />
          </div>
          <Link
            href="https://www.instagram.com/liaskitchenberlin/?hl=de"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/ig.svg"
              alt="Instagram logo"
              width={35}
              height={35}
            />
          </Link>
        </div>
      </div>

      <div className={styles.wideScreen}>
        <div className="flex items-center justify-evenly w-[100%]">
          <ul className="text-[#7ECBE9] text-3xl sm:flex sm:gap-10 sm:justify-center no-underline">
            {navbar.map((navbarItem) => (
              <li key={navbarItem.id}>
                <NavbarItemWide item={navbarItem} />
              </li>
            ))}
            <LocaleSwitcher />
          </ul>
        </div>
        <Link
          className={styles.instaLogo}
          href="https://www.instagram.com/liaskitchenberlin/?hl=de"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/ig.svg"
            alt="Instagram logo"
            width={35}
            height={35}
          />
        </Link>
      </div>
    </div>
  );
}

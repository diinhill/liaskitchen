import Image from "next/image";
import styles from "@/styles/Navbar.module.css";
import LocaleSwitcher from "./locale-switcher";
import NavbarItemMobile from "./NavbarItemMobile";
import NavbarItemWide from "./NavbarItemWide";

type NavbarItem = {
  id: number;
  titleDeutsch: string;
  titleEnglish: string;
  path: string;
};

export default function Navbar() {
  const navbar: NavbarItem[] = [
    { id: 1, titleDeutsch: "Menü", titleEnglish: "menu", path: "/#menu" },
    {
      id: 2,
      titleDeutsch: "Lieferung",
      titleEnglish: "delivery",
      path: "/#delivery",
    },
    {
      id: 3,
      titleDeutsch: "Kontakt",
      titleEnglish: "contact",
      path: "/#contact",
    },
    // { id: 4, titleDeutsch: 'Reservierung', titleEnglish: 'reservation', path: '/#reservation'}
  ];

  return (
    <div
      id="navbar"
      className="sticky top-0 bg-[#fffff6] z-10 font-['Annie_Use_Your_Telescope'] list-none"
    >
      <div className={styles.mobile}>
        <div className="absolute flex top-[11px] left-[1rem] w-[33%]">
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
          <a
            href="https://www.instagram.com/liaskitchenberlin/?hl=de"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/insta.jfif"
              alt="Instagram logo"
              width={35}
              height={35}
            />
          </a>
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
        <a
          className={styles.instaLogo}
          href="https://www.instagram.com/liaskitchenberlin/?hl=de"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/insta.jfif"
            alt="Instagram logo"
            width={35}
            height={35}
          />
        </a>
      </div>
    </div>
  );
}

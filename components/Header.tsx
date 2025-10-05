'use client';

import styles from "@/styles/Header.module.css";
import Image from "next/image";
import fruitbasket from "../public/fruitbasket-logo-header.svg";
import data from "../data.json";
import { useLocale } from "./LocaleProvider";
import { LocalesI } from "@/types/locale";

export default function Header() {
  const { locale } = useLocale();
  const lang = locale as keyof LocalesI;
  const { i8n } = data;

  const scrollToReservation = () => {
    const reservationSection = document.getElementById('reservation');
    if (reservationSection) {
      reservationSection.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return (
    <section className="bg-[#fffff6] w-full">
      <div className="h-[760px] sm:h-[730px] md:h-[770px] lg:h-[800px]">
        <div id="fluid" className={styles.wavyBackground}>
          <div className="h-[60%] mt-14 flex flex-col justify-center items-center">
            <Image
              priority
              src={fruitbasket}
              alt="Fruitbasket Logo"
              height={500}
              width={500}
            />
            <button
              onClick={scrollToReservation}
              className="mt-8 bg-[#6dade5] hover:bg-[#5bb8d4] text-white font-['Annie_Use_Your_Telescope'] text-2xl px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              {i8n.bookTable[lang]}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

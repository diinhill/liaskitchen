'use client';

import Image from "next/image";
import data from "../data.json";
import Link from "next/link";
import { useLocale } from "./LocaleProvider";
import { LocalesI } from "@/types/locale";

export default function Delivery() {
  const { locale } = useLocale();
  const lang = locale as keyof LocalesI;
  const { i8n } = data;
  return (
    <section
      id="delivery"
      className="flex flex-col items-center justify-center"
    >
      <p className='text-black text-3xl font-["Annie_Use_Your_Telescope"] mb-2 mt-12 md:mt-0'>
        {i8n.order[lang]}:
      </p>
      <Link
        className="md:mb-16 p-2 bg-secondary rounded shadow-sm shadow-slate-500 hover:shadow-md"
        href="https://wolt.com/de/deu/berlin/restaurant/lias-kitchen-100-vegan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/wolt-icon.png" alt="Wolt logo" width={60} height={60} />
      </Link>
    </section>
  );
}

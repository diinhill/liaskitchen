import Image from "next/image";
import { useRouter } from "next/router";
import data from "../data.json";
import Link from "next/link";

export default function Delivery() {
  const routerLang = useRouter();
  const { locale = "en" } = routerLang;
  const { i8n } = data;
  return (
    <section
      id="delivery"
      className="flex flex-col items-center justify-center md:mt-20"
    >
      <p className='text-black text-3xl font-["Annie_Use_Your_Telescope"] mb-2 mt-12 md:mt-0'>
        {locale === "de" ? i8n.order.de : i8n.order.en}:
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

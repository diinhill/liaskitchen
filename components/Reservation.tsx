import Link from "next/link";
import data from "../data.json";
import { useRouter } from "next/router";
import { LocalesI } from "@/types/locale";

export default function Reservation() {
  const router = useRouter();
  const { locale = "en" } = router;
  const lang = locale as keyof LocalesI;
  const { i8n } = data;
  return (
    <section
      id="reservation"
      className="flex flex-col items-center justify-center mt-6 md:mt-20 font-['Annie_Use_Your_Telescope'] text-black"
    >
      <p className="text-3xl mb-3">{i8n.reservation[lang]}:</p>
      <div className="flex flex-wrap justify-center sm:gap-10 md:gap-20 lg:gap-20 xl:gap-30 2xl:gap-40">
        <Link
          href="https://www.quandoo.de/place/lias-kitchen-100-vegan-95719?aid=63"
          className="flex justify-center"
        >
          <p className="mb-16 p-2 text-2xl bg-secondary rounded shadow-sm shadow-slate-500 hover:shadow-md">
            Quandoo
          </p>
        </Link>
      </div>
    </section>
  );
}

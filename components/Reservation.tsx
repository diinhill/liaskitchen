import Link from "next/link";
import data from "../data.json";
import { useRouter } from "next/router";

export default function Reservation() {
  const routerLang = useRouter();
  const { locale = "en" } = routerLang;
  const { i8n } = data;
  return (
    <section id="reservation" className="bg-[#fdfbc8]">
      <div className="flex flex-col items-center justify-center">
        <p className='text-black text-3xl font-["Annie_Use_Your_Telescope"] mb-2 mt-8'>
          {locale === "de" ? i8n.reservation.de : i8n.reservation.en}:
        </p>
        <div className="flex flex-wrap justify-center sm:gap-10 md:gap-20 lg:gap-20 xl:gap-30 2xl:gap-40 mb-20">
          <Link
            href="https://www.quandoo.de/place/lias-kitchen-100-vegan-95719?aid=63"
            className="flex justify-center"
          >
            <p className='p-2  text-center font-["Annie_Use_Your_Telescope"] text-white text-2xl bg-primary border-t-2 rounded'>
              Quandoo
            </p>
          </Link>

          {/* <Script 
            src="https://booking-widget.quandoo.com/index.js"
            data-agent-id="63"
            data-merchant-id="95719"
          /> 
          <div
            id="quandoo-booking-widget"
            className="shadow-[#3664777c] shadow-md rounded-xl"
          />*/}
        </div>
      </div>
    </section>
  );
}

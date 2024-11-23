import Link from "next/link";
import data from "../data.json";
import { useRouter } from "next/router";
import { LocalesI } from "@/types/locale";

export default function Contact() {
  const router = useRouter();
  const { locale = "en" } = router;
  const lang = locale as keyof LocalesI;
  const { i8n } = data;

  const { openingHours, openingDays, openingDays2, address } = i8n;

  return (
    <div className="text-center text-black font-['Annie_Use_Your_Telescope'] text-3xl">
      <div className="w-50 h-50 mt-4">
        <h1 className="pt-3 pb-4 text-4xl">
          {" "}
          {openingHours[lang].toUpperCase()}
        </h1>
        <p>
          {openingDays[lang]}:<br></br>12:00 - 22:00
          {/* <br></br> {openingDays2[lang]}
          <br></br>12:00 - 22:00 */}
        </p>
      </div>
      <div className="w-50 h-50 mt-5">
        <h1 className="pt-3 pb-4 text-4xl">{address[lang].toUpperCase()}</h1>
        <Link
          href="https://maps.app.goo.gl/UTgCZqVNeM15bKjXA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
          Urbanstraße 32
            <br></br>10967 Berlin &#8599;
            {/* <br></br>+49 163 4648436 */}
          </p>
        </Link>
      </div>
    </div>
  );
}

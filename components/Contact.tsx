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
          {openingDays[lang]}:<br></br>17:00 - 22:00
          <br></br> {openingDays2[lang]}
          <br></br>12:00 - 22:00
        </p>
      </div>
      <div className="w-50 h-50 mt-5">
        <h1 className="pt-3 pb-4 text-4xl">{address[lang].toUpperCase()}</h1>
        <Link
          href="https://www.google.com/maps/dir//liaskitchen+google+maps/@52.5218038,13.4156323,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47a84e024246ac83:0x3de6622d0dadc7b1!2m2!1d13.4157431!2d52.5345476"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            Kollwitzstrasse 47
            <br></br>10405 Berlin &#8599;
            <br></br>+49 163 4648436
          </p>
        </Link>
      </div>
    </div>
  );
}

'use client';

import data from "../data.json";
import { useLocale } from "./LocaleProvider";
import { LocalesI } from "@/types/locale";

export default function ReservationWidget() {
    const { locale } = useLocale();
    const lang = locale as keyof LocalesI;
    const { i8n } = data;

    return (
        <section
            id="reservation"
            className=" w-full lg:w-6/12 flex flex-col items-center justify-center mt-6 font-['Annie_Use_Your_Telescope'] text-black"
        >
            <p className="text-3xl mb-3">{i8n.reservation[lang]}:</p>
            <div className="w-full max-w-4xl">

                <iframe
                    src="https://widget.thefork.com/714340be-8d1d-40ce-95a4-0c3de5959277"
                    allow="payment *"
                    className="w-full border-none overflow-scroll min-h-[840px] max-[320px]:min-h-[840px] min-[321px]:max-[516px]:min-h-[650px] min-[517px]:min-h-[550px]"
                    title="Lias Kitchen Reservation Widget"

                />

            </div>
        </section>
    );
}

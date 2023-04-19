import Script from "next/script";

export default function Reservation() {
  return (
    <section id="reservation" className="bg-[#fdfbc8]">
      <div className="flex flex-wrap justify-center sm:gap-10 md:gap-20 lg:gap-20 xl:gap-30 2xl:gap-40">
        <Script
          src="https://booking-widget.quandoo.com/index.js"
          data-agent-id="63"
          data-merchant-id="95719"
        />
        <div id="quandoo-booking-widget" />
      </div>
    </section>
  );
}

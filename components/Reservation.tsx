import Script from "next/script";

export default function Reservation() {
  return (
    <section id="reservation" className="bg-[#fdfbc8]">
      <div className='flex flex-col items-center justify-center'>
        <p className='text-black text-3xl font-["Annie_Use_Your_Telescope"] mb-2 mt-8'>or make a reservation:</p>
        <div className="flex flex-wrap justify-center sm:gap-10 md:gap-20 lg:gap-20 xl:gap-30 2xl:gap-40 mb-20">
          <Script 
            src="https://booking-widget.quandoo.com/index.js"
            data-agent-id="63"
            data-merchant-id="95719"
          />
          <div id="quandoo-booking-widget" className="shadow-[#3664777c] shadow-md rounded-xl"/>
        </div>
      </div>
    </section>
  );
}

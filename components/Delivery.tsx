import Image from "next/image"

export default function Delivery () {
  return (
    <section id="delivery" className="bg-[#fdfbc8]">
          <div className="h-[150px] flex flex-col items-center justify-center">
            <p className='text-black text-3xl font-["Annie_Use_Your_Telescope"] mb-3 mt-48'>conveniently order via</p>
            <a
                className='mb-20'
                href="https://wolt.com/de/deu/berlin/restaurant/lias-kitchen-100-vegan"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                className='hover:w-[65px]'
                src="/wolt-icon.png"
                alt="Wolt logo"
                width={60}
                height={60}
                />  
              </a>

              		{/* <a
							href='https://liaskitchen.jetzt-bestellen.menu/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<p>pickup order</p>
						</a> */}
             
        </div>
    </section>
  );
}
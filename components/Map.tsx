import styles from '@/styles/Map.module.css'



export default function Map(): JSX.Element {



    return (
        <>
        <section id='contact' className='overflow-x-hidden bg-[#fdfbc8]'>
            
          <div className='flex items-center justify-center'>
            <div className={styles.mapResponsive}>
              <iframe id='map'
                className=''
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.937925284849!2d13.413491615808004!3d52.53455727981693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e024246ac83%3A0x3de6622d0dadc7b1!2zTGlh4oCZcyBLaXRjaGVu!5e0!3m2!1sde!2sde!4v1677828540096!5m2!1sde!2sde"
                width="600"
                height="450"
                allowFullScreen
                loading="lazy">
                </iframe>
            </div>
          </div>

          <div className='flex justify-evenly'>
            <div className='w-40 h-40'>
            <h1 className='text-center pt-3 pb-4 text-black font-["Coming_Soon"] text-xl'>OPENING HOURS</h1>
            <p className='text-center font-["Coming_Soon"] text-blue-600'>
              Monday - Thursday: 
              <br></br>17:00 - 22:00
              <br></br>Friday - Sunday: 
              <br></br>12:00 - 22:00
            </p> 
          </div>
          <div className='w-40 h-40'>
            <h1 className='text-center pt-3 pb-4 text-black font-["Coming_Soon"] text-xl'>ADDRESS</h1>
            <p className='text-center font-["Coming_Soon"] text-blue-600'>
              Kollwitzstrasse 47 
              <br></br>10405 Berlin
              <br></br>+49 163 4648436
            </p> 
            </div>
          </div>

        </section>
        </>
    )
}


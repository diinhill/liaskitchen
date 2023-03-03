import styles from '@/styles/Map.module.css'


type IntersectionObserverCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => void;
declare var IntersectionObserver: {
  new(callback: IntersectionObserverCallback, options?: IntersectionObserverInit): IntersectionObserver;
}


export default function Map(): JSX.Element {


  const options:IntersectionObserverInit = { root: null, rootMargin: '-50px', threshold: 0.5 }
  
  const startAnimation: IntersectionObserverCallback = ((entries, observer) => {
    entries.forEach(entry => {
      let intersecting = entry.isIntersecting
      intersecting ? entry.target.classList.remove('rounded-full') : entry.target.classList.add('rounded-full')
      console.log(entry)
    })
  })
  
  let map
  if (typeof document !== 'undefined') {
    // will run in client's browser only
    map = document.getElementById('map')
  }
  map ? new IntersectionObserver(startAnimation, {threshold: 0.5}).observe(map) : console.error 


    return (
        <>
        <section id='contact' className='w-screen overflow-x-hidden'>

          <div className={styles.curveSeparation}></div>
            
          <div className='flex items-center justify-center mt-[-1rem]'>
            <div className='bg-green-400 w-[21.5rem] flex mb-4 rounded-b-md rounded-t-md shadow-md shadow-emerald-900'>
              <h2 className='text-white font-[Dokdo] text-center flex items-center text-md padding: 0.5rem'>Want to meet our delicious burgers?</h2>
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
          </div>

          <div className='flex justify-evenly mb-12'>
          <div className='bg-green-400 w-40 h-40 rounded-sm shadow-emerald-900 shadow-md'>
            <h1 className='text-center pt-3 pb-4 text-white font-[Ranchers] text-xl'>OPENING HOURS</h1>
            <p className='text-center font-[Dokdo] text-blue-600'>
              Monday - Thursday: 
              <br></br>17:00 - 22:00
              <br></br>Friday - Sunday: 
              <br></br>12:00 - 22:00
            </p> 
          </div>
          <div className='bg-green-400 w-40 h-40 rounded-sm shadow-emerald-900 shadow-md'>
            <h1 className='text-center pt-3 pb-4 text-white font-[Ranchers] text-xl'>ADDRESS</h1>
            <p className='text-center font-[Dokdo] text-blue-600'>
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


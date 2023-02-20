import Image from 'next/image'
import styles from '@/styles/Header.module.css'

declare var ResizeObserver: {
    new (callback: ResizeObserverCallback): ResizeObserver;
    prototype: ResizeObserver;
}

export default function Header(): JSX.Element {

  function resetViewbox(e: any) {
    const box = document.getElementById('box')
    box?.setAttribute('viewBox', '0 -73.77' + ' ' + e[0].contentBoxSize[0].inlineSize + ' ' + e[0].contentBoxSize[0].blockSize)
    console.log('new viewBox: ', box?.getAttribute('viewBox'))
  }


  let fluid

  if (typeof document !== 'undefined') {
    // will run in client's browser only
    fluid = document.getElementById('fluid')
  }
  
  fluid ? new ResizeObserver(resetViewbox).observe(fluid) : console.error


 
    return (
      <>
        <div className='inline-grid grid-cols-12 top-0 left-0 w-screen h-56 md:h-72 lg:h-96 bg-primary'>
          <div id='fluid' className={styles.headerCurve}>
            <svg id='box' viewBox='0 0 390 150' preserveAspectRatio='none'>
             {/*  <svg viewBox='0 -73.77 auto auto' preserveAspectRatio='xMidYMin meet'>  */}
                <path d='M 0 130 Q 94 62 140 80 C 176 91 190 136 290 140 L 390 140 L 390 150 L 0 150 Z' className={styles.shapeFill}></path>
              {/* </svg> */}
            </svg>
          </div>
    
          <div className='inline-grid grid-rows-3 grid-cols-3 relative col-span-5'>
            {/* <svg className='absolute' viewBox='0 0 70 35'> */}
            <div className='col-span-1'></div>
            <div className='row-span-2 col-span-2 justify-self-center self-end'>
              <Image
                className=''
                src='/logo1.png'
                alt='Lias Kitchen logo'
                width={67}
                height={32}
                priority
              />
            {/* </svg> */}
            </div>
          </div>

          <div className='inline-grid grid-rows-3 relative col-span-3'>
            <div className='row-span-1'></div>
            <div className='row-span-2'>
              <div className={styles.basketLogoContainer}>
                <Image
                  id='basketLogo'
                  className={styles.basketLogo}
                  src='/logo3.png'
                  alt='Lias Kitchen logo'
                  width={214}
                  height={200}
                  priority
                />
              </div>
            </div>
          </div>
          

          <div className='inline-grid grid-rows-4 relative col-span-4'>
            <div className='row-span-3'></div>
              <div className='row-span-1 self-center'>
                <Image
                  className={styles.kitchenLogo}
                  src='/logo2.png'
                  alt='Lias Kitchen logo'
                  width={122}
                  height={33}
                  priority
                />
              </div>
          </div>
        {/*    <a 
              href='https://wolt.com/en/deu/berlin/restaurant/lias-kitchen-100-vegan?gclid=Cj0KCQiA1KiBBhCcARIsAPWqoSqEYFkiI27H5r1v_tdzeUY7imZcQWS3wIFJ23sFqJT4eF5eQvnqPrsaAth1EALw_wcB'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src='/wolt-icon.png'
                alt='Wolt logo'
                width={60}
                height={33.75}
                priority
              />
            </a> */}
          </div>
      
        </>
    )
}

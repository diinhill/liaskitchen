import Image from 'next/image'
import styles from '@/styles/Footer.module.css'


export default function Footer() {
    return (
        <>
        <footer className='flex justify-center items-end overflow-x-hidden'>
          <p className={styles.contact}>
            Kollwitzstrasse 47, 10405 Berlin,
            <br></br>Monday-Thursday 17:00-22:00
            <br></br>Friday-Sunday 12:00-:22:00
            <br></br>+491634648436
          </p> 
          {/* <a
            href='https://liaskitchen.jetzt-bestellen.menu/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p>pickup order</p>
          </a> */}
          <a
            href='https://www.happycow.net/reviews/lias-kitchen-berlin-82729'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src='/happy-cow-logo-400x400.webp'
              alt='Happy Cow logo'
              width={75}
              height={75}
            />
          </a>
          <a
            href='https://www.instagram.com/liaskitchenberlin/?hl=de'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src='/insta.jfif'
              alt='Instagram logo'
              width={50}
              height={50}
            />
          </a>
          </footer>
        </>
    )
}
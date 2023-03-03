import Image from 'next/image'
import styles from '@/styles/Footer.module.css'


export default function Footer() {
    return (
        <>
        <footer className='flex justify-center items-center overflow-x-hidden'>
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
              width={50}
              height={50}
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
              width={35}
              height={35}
            />
          </a>
          </footer>
        </>
    )
}
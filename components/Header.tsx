import Image from 'next/image'
import styles from '@/styles/Header.module.css'



export default function Header() {
    return (
        <>
        <div className={styles.header}>
            <Image
              className={styles.logo}
              src='/liaskitchenlogo.png'
              alt='Lias Kitchen logo'
              width={310}
              height={133}
              priority
          />
          <a 
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
          </a>
        </div>
        </>
    )
}

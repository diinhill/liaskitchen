import Image from 'next/image'
import styles from '@/styles/Header.module.css'


const changeClass = () => {
  let basketLogo = document.getElementById('basketLogo')?.className
  console.log(basketLogo)
  if (basketLogo == 'basketLogo') {
    basketLogo = 'basketLogoClicked'
  } else {
    basketLogo = 'basketLogo'
  }
}

export default function Header() {
    return (
      <>
        <div className={styles.headerContainer}>
          <div className={styles.headerClipPathCircle}></div>
          <div className={styles.headerClipPathPolygon}></div>
          <div className={styles.header}>
          {/*     <Image
                className={styles.logo}
                src='/liaskitchenlogo.png'
                alt='Lias Kitchen logo'
                width={310}
                height={133}
                priority
            /> */}
            
            <div className={styles.liasLogoContainer}>
              <Image
                className={styles.liasLogo}
                src='/logo1.png'
                alt='Lias Kitchen logo'
                width={268}
                height={128}
                priority
              />
            </div>
            <div className={styles.basketLogoContainer}>
              <Image
                id='basketLogo'
                className={styles.basketLogo}
                src='/logo3.png'
                alt='Lias Kitchen logo'
                width={214}
                height={200}
                priority
                onClick={() => changeClass()}
              />
            </div>
            <div className={styles.kitchenLogoContainer}>
              <Image
                className={styles.kitchenLogo}
                src='/logo2.png'
                alt='Lias Kitchen logo'
                width={244}
                height={66}
                priority
              />
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
        </div>
        </>
    )
}

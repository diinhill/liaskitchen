import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Menu from '../components/Menu'
import Map from '../components/Map'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <>
      <Head>
        <title>Lias Kitchen</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Dokdo&family=Codystar&family=Ranchers&family=Kranky&display=swap"></link>
      </Head>
      <main className={styles.main}>
        <div className={styles.noiseTexture}>
          <Header />
          <Navbar />
          <Menu />
          <Map />
          <About />
          <Footer />
        </div>

        <div className={styles.containerBackToTopButton}>
          <a className={styles.backToTopButton} href='#'>
            <Image
              src='/burgerface.png'
              alt='back to top burger button'
              width={51.75}
              height={53.4}
            />
          </a>
        </div>  
      </main>
    </>
  )
}

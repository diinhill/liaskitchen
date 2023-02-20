import Link from 'next/link'
import styles from '@/styles/Navbar.module.css'


export default function Navbar() {
    return(
      <>
        <div className='sticky top-0 w-screen h-6 bg-secondary'>
          <ul className='grid grid-cols-3'>
            <li>
            <Link className={styles.navLink} href='#about' scroll={false}>ABOUT</Link>
            </li>
            <li>
              <Link className={styles.navLink} href='#menu' scroll={false}>MENU</Link>
            </li>
            <li>
              <Link className={styles.navLink} href='#map' scroll={false}>HOW TO FIND US</Link>
            </li>
          </ul>
        </div>
        </>
    )
}

import Link from 'next/link'
import styles from '@/styles/Navbar.module.css'


export default function Navbar() {
    return(
        <>
          <ul className={styles.navbar}>
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
        </>
    )
}

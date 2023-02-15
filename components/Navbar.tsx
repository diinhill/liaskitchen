import Link from 'next/link'
import styles from '@/styles/Navbar.module.css'


export default function Navbar() {
    return(
        <>
          <ul className={styles.myNavbar}>
            <li>
              <Link href='#about' scroll={false}>ABOUT</Link>
            </li>
            <li>
              <Link href='#menu' scroll={false}>MENU</Link>
            </li>
            <li>
              <Link href='#map' scroll={false}>HOW TO FIND US</Link>
            </li>
          </ul>
        </>
    )
}

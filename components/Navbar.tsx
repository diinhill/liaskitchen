import Link from 'next/link'
import styles from '@/styles/Navbar.module.css'


export default function Navbar() {
    return (
        <>
          <ul className={styles.myNavbar}>
            <li>
              <Link href='#about'>ABOUT</Link>
            </li>
            <li>
              <Link href='#menu'>MENU</Link>
            </li>
            <li>
              <Link href='#map'>HOW TO FIND US</Link>
            </li>
          </ul>
        </>
    )
}

import Link from 'next/link'
import styles from '@/styles/Navbar.module.css'


export default function Navbar() {
    return(
      <>
        <div className='sticky top-0 w-screen rounded h-12 md:h-12 lg:h-14 bg-white overflow-x-hidden'>
          <ul className='grid grid-cols-4 justify-items-center text-black text-2xl'>
            <li className='col-span-1'>
            <Link className={styles.navLink} href='#about' scroll={false}>about</Link>
            </li>
            <li className='col-span-1'>
              <Link className={styles.navLink} href='#menu' scroll={false}>menu</Link>
            </li>
            <li className='col-span-2'>
              <Link className={styles.navLink} href='#map' scroll={false}>how to find us</Link>
            </li>
          </ul>
        </div>
        </>
    )
}

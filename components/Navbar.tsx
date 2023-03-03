import Link from 'next/link'
import styles from '@/styles/Navbar.module.css'


export default function Navbar() {
    return(
      <>
        <div className='sticky top-0 w-screen rounded h-12 md:h-12 lg:h-14 bg-white overflow-hidden z-10'>
          <ul className='text-black text-2xl text-center list-none h-12 md:h-12 lg:h-14'>
            <li className='inline align-middle'>
              <Link className='no-underline font-[Kranky] px-4 pt-2 hover:text-green-400 active:text-red-400' href='#menu' scroll={false}>menu</Link>
            </li>
            <li className='inline align-middle'>
              <Link className='no-underline font-[Kranky] px-4 pt-2 hover:text-green-400 active:text-red-400' href='#contact' scroll={false}>how to find us</Link>
            </li>
             <li className='inline align-middle'>
              <Link className='no-underline font-[Kranky] px-4 pt-2 hover:text-green-400 active:text-red-400' href='#about' scroll={false}>about</Link>
            </li>
          </ul>
        </div>
        </>
    )
}


// grid grid-cols-4 justify-items-center
// float-left
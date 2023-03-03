import Link from 'next/link'
import styles from '@/styles/Navbar.module.css'


export default function Navbar() {
    return(
      <>
        <div className='sticky top-0 w-screen rounded h-12 md:h-12 lg:h-14 bg-white overflow-hidden z-10'>
          <ul className='flex flex-row justify-center items-center space-x-6 text-black text-2xl text-center list-none h-12 md:h-12 lg:h-14'>
            <li className=''>
              <Link className='no-underline font-[Kranky] hover:text-green-400 active:text-red-400' href='#menu' scroll={false}>menu</Link>
            </li>
            <li className=''>
              <Link className='no-underline font-[Kranky] hover:text-green-400 active:text-red-400' href='#contact' scroll={false}>how to find us</Link>
            </li>
             <li className=''>
              <Link className='no-underline font-[Kranky] hover:text-green-400 active:text-red-400' href='#about' scroll={false}>about</Link>
            </li>
          </ul>
        </div>
        </>
    )
}


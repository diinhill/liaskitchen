import Link from 'next/link'
import styles from '@/styles/Navbar.module.css'


export default function Navbar() {
    return(
      <>
			<div id='navbar' className='sticky top-0 bg-[#fffff6] z-10'>
		{/* <div id='navbar' className='sticky top-0 border-b-2 border-b-black rounded h-16 md:h-20 lg:h-24 bg-[#fffff6] z-10'> */}

          <div className={styles.dropdown}>
			<button className={styles.button}>
						
				<svg x="0px" y="0px"
					width="20%" height="20%" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xmlSpace="preserve">
				<circle fill-rule="evenodd" clip-rule="evenodd" fill="#7ECBE9" stroke="#000000" stroke-width="3" stroke-miterlimit="10" cx="16.34" cy="47.577" r="13.303"/>
				<circle fill-rule="evenodd" clip-rule="evenodd" fill="#7ECBE9" stroke="#000000" stroke-width="3" stroke-miterlimit="10" cx="50.062" cy="47.577" r="13.303"/>
				<circle fill-rule="evenodd" clip-rule="evenodd" fill="#7ECBE9" stroke="#000000" stroke-width="3" stroke-miterlimit="10" cx="83.783" cy="47.577" r="13.302"/>
				</svg>
		
			</button>
            <div className={styles.dropdownContent}>
              <ul className='text-[#7ECBE9] text-2xl text-center list-none'>
                <li className=''>
								<Link className='z-30 no-underline font-["Annie_Use_Your_Telescope"] hover:text-[#a00242] active:text-[#a00242] hover:text-4xl active:text-4xl '
									href='#menu' scroll={false}>menu</Link>
                </li>
                <li className=''>
								<Link className='z-30 no-underline font-["Annie_Use_Your_Telescope"] hover:text-[#a00242] active:text-[#a00242] hover:text-4xl active:text-4xl '
									href='#contact' scroll={false}>how to find us</Link>
                </li>
                <li className=''>
								<Link className='z-30 no-underline font-["Annie_Use_Your_Telescope"] hover:text-[#a00242] active:text-[#a00242] hover:text-4xl active:text-4xl '
									href='#about' scroll={false}>reservation</Link>
                </li>
                <li className=''>
								<Link className='z-30 no-underline font-["Annie_Use_Your_Telescope"] hover:text-[#a00242] active:text-[#a00242] hover:text-4xl active:text-4xl '
									href='#about' scroll={false}>delivery</Link>
                </li>
              </ul>
            </div>
				</div>  


          {/* <ul className='flex flex-row justify-center items-center space-x-6 text-black text-2xl text-center list-none h-12 md:h-12 lg:h-14'>
            <li className=''>
              <Link className='z-30 no-underline font-["Coming_Soon"] hover:text-green-400 active:text-red-400' href='#menu' scroll={false}>menu</Link>
            </li>
            <li className=''>
              <Link className='z-30 no-underline font-["Coming_Soon"] hover:text-green-400 active:text-red-400' href='#contact' scroll={false}>how to find us</Link>
            </li>
             <li className=''>
              <Link className='z-30 no-underline font-["Coming_Soon"] hover:text-green-400 active:text-red-400' href='#about' scroll={false}>reservation</Link>
            </li>
             <li className=''>
              <Link className='z-30 no-underline font-["Coming_Soon"] hover:text-green-400 active:text-red-400' href='#about' scroll={false}>delivery</Link>
            </li>
          </ul> */}




        </div>
        </>
    )
}


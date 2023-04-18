import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Navbar.module.css'


export default function Navbar() {
    return(
      <>
			<div id='navbar' className='sticky top-0 bg-[#fffff6] z-10'>
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
            <ul className='text-[#7ECBE9] bg-[#fffff6] text-3xl list-none sm:flex sm:gap-10 sm:justify-center'>
              <li className={styles.link}>
              <Link className='z-30 no-underline font-["Annie_Use_Your_Telescope"] hover:text-[#a00242] active:text-[#a00242] hover:text-4xl active:text-4xl '
                href='#menu' scroll={false}>menu</Link>
              </li>
              <li className={styles.link}>
              <Link className='z-30 no-underline font-["Annie_Use_Your_Telescope"] hover:text-[#a00242] active:text-[#a00242] hover:text-4xl active:text-4xl '
                href='#contact' scroll={false}>how to find us</Link>
              </li>
              <li className={styles.link}>
              <Link className='z-30 no-underline font-["Annie_Use_Your_Telescope"] hover:text-[#a00242] active:text-[#a00242] hover:text-4xl active:text-4xl '
                href='#about' scroll={false}>reservation</Link>
              </li>
              <li className={styles.link}>
              <Link className='z-30 no-underline font-["Annie_Use_Your_Telescope"] hover:text-[#a00242] active:text-[#a00242] hover:text-4xl active:text-4xl '
                href='#about' scroll={false}>delivery</Link>
              </li>
            </ul>
          </div>
            
          <a
              className={styles.instaLogo}
							href='https://www.instagram.com/liaskitchenberlin/?hl=de'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Image
							src='/insta.jfif'
							alt='Instagram logo'
							width={35}
							height={35}
							/>
						</a>
            

				</div>  
      </div>
      </>
    )
}


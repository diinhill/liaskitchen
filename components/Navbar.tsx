import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Navbar.module.css";
import LocaleSwitcher from "./locale-switcher";

export default function Navbar() {
  return (
    
      <div id="navbar" className="sticky top-0 bg-[#fffff6] z-10">
        <div className={styles.mobile}>
          <div className={styles.button}>
            <Link href="#menu" scroll={false} type='button' className='group active:w-[50%] hover:w-[50%]' id="menubutton1" aria-haspopup="true" aria-controls="menu1">
              <svg className='active:w-[120%] hover:w-[120%] z-30' x="0px" y="0px" width="100%" height="100%" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
                <circle fillRule="evenodd" clipRule="evenodd" fill="#7ECBE9" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" cx="50" cy="50" r="40"/>
              </svg>
              <label id="menu1" aria-labelledby="menubutton1"
                className='absolute w-[100%] top-5 z-10 opacity-0 group-hover:opacity-100 no-underline font-["Annie_Use_Your_Telescope"] text-black text-3xl bg-[#7ECBE9] pb-1 pl-2 pr-2 rounded border-2 border-black'
              >
                menu
              </label>
            </Link>
            <Link href="#contact" scroll={false} className='group active:w-[50%] hover:w-[50%]' id="menubutton2" aria-haspopup="true" aria-controls="menu2">
              <svg className='active:w-[120%] hover:w-[120%]' x="0px" y="0px" width="100%" height="100%" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
                <circle fillRule="evenodd" clipRule="evenodd" fill="#7ECBE9" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" cx="50" cy="50" r="40"/>
              </svg>
              <label id="menu2" aria-labelledby="menubutton2"
                className='absolute w-[100%] top-5 opacity-0 group-hover:opacity-100 z-30 no-underline font-["Annie_Use_Your_Telescope"] text-black text-3xl bg-[#7ECBE9] pb-1 pl-2 pr-2 rounded border-2 border-black'
              >
                contact
              </label>
            </Link>
            <Link href="#reservation" scroll={false} className='group active:w-[50%] hover:w-[50%]' id="menubutton3" aria-haspopup="true" aria-controls="menu3">
              <svg className='active:w-[120%] hover:w-[120%]' x="0px" y="0px" width="100%" height="100%" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
                <circle fillRule="evenodd" clipRule="evenodd" fill="#7ECBE9" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" cx="50" cy="50" r="40"/>
              </svg>
              <label id="menu3" aria-labelledby="menubutton3"
                className='absolute w-[100%] top-5 opacity-0 group-hover:opacity-100 z-30 no-underline font-["Annie_Use_Your_Telescope"] text-black text-3xl bg-[#7ECBE9] pb-1 pl-2 pr-2 rounded border-2 border-black'
                
              >
                reservation
              </label>
            </Link>
            <Link href="#delivery" scroll={false} className='group active:w-[50%] hover:w-[50%]' id="menubutton4" aria-haspopup="true" aria-controls="menu4">
              <svg className='active:w-[120%] hover:w-[120%]' x="0px" y="0px" width="100%" height="100%" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
                <circle fillRule="evenodd" clipRule="evenodd" fill="#7ECBE9" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" cx="50" cy="50" r="40"/>
              </svg>
              <label id="menu4" aria-labelledby="menubutton4"
                className='absolute w-[100%] top-5 opacity-0 group-hover:opacity-100 z-30 no-underline font-["Annie_Use_Your_Telescope"] text-black text-3xl bg-[#7ECBE9] pb-1 pl-2 pr-2 rounded border-2 border-black'
              >
                delivery
              </label>
            </Link>
          </div>

        <div className={styles.instaLogo}>
          <div className='text-black text-3xl font-["Annie_Use_Your_Telescope"] list-none pr-2'>
              <LocaleSwitcher />
          </div> 
          <a
           
            href="https://www.instagram.com/liaskitchenberlin/?hl=de"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/insta.jfif"
              alt="Instagram logo"
              width={35}
              height={35}
            />
          </a>
        </div>
      </div>
        

        <div className={styles.wideScreen}>
          <div className={styles.navList}>
            <ul className="text-[#7ECBE9] bg-[#fffff6] text-3xl list-none sm:flex sm:gap-10 sm:justify-center">
              <li className={styles.link}>
                <Link
                  className='z-30 no-underline font-["Annie_Use_Your_Telescope"] hover:text-[#a00242] active:text-[#a00242] hover:text-4xl active:text-4xl '
                  href="#menu"
                  scroll={false}
                >
                  menu
                </Link>
              </li>
              <li className={styles.link}>
                <Link
                  className='z-30 no-underline font-["Annie_Use_Your_Telescope"] hover:text-[#a00242] active:text-[#a00242] hover:text-4xl active:text-4xl '
                  href="#contact"
                  scroll={false}
                >
                  how to find us
                </Link>
              </li>
              <li className={styles.link}>
                <Link
                  className='z-30 no-underline font-["Annie_Use_Your_Telescope"] hover:text-[#a00242] active:text-[#a00242] hover:text-4xl active:text-4xl '
                  href="#reservation"
                  scroll={false}
                >
                  reservation
                </Link>
              </li>
              <li className={styles.link}>
                <Link
                  className='z-30 no-underline font-["Annie_Use_Your_Telescope"] hover:text-[#a00242] active:text-[#a00242] hover:text-4xl active:text-4xl '
                  href="#delivery"
                  scroll={false}
                >
                  delivery
                </Link>
              </li>
             <LocaleSwitcher />  
            </ul>
          </div>
          
          
          <a
            className={styles.instaLogo}
            href="https://www.instagram.com/liaskitchenberlin/?hl=de"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/insta.jfif"
              alt="Instagram logo"
              width={35}
              height={35}
            />
          </a>
        </div>
      </div>
    
  )
}

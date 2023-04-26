import Link from 'next/link'
import { useRouter } from 'next/router'

type NavbarItem = {
    item: {
    id: number;
    titleDeutsch: string;
    titleEnglish: string;
    path: string;
    }
}


const NavbarItemMobile = (item: NavbarItem) => {

    const routerLang = useRouter()
    const { locale: activeLocale } = routerLang
    const title =
        activeLocale === 'de'
            ? item.item.titleDeutsch
            : item.item.titleEnglish

    
    return (
        
        <Link href={item.item.path} scroll={false} type='button' className='group active:w-[50%] hover:w-[50%]' id={`menubutton${item.item.id}`} aria-haspopup="true" aria-controls={`menu${item.item.id}`}>
            <svg className='active:w-[120%] hover:w-[120%]' x="0px" y="0px" width="100%" height="100%" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
                <circle fillRule="evenodd" clipRule="evenodd" fill="#7ECBE9" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" cx="50" cy="50" r="40"/>
            </svg>
            <label id={`menu${item.item.id}`} aria-labelledby={`menubutton${item.item.id}`}
            className='absolute w-[100%] top-5 z-10 opacity-0 group-hover:opacity-100 no-underline font-["Annie_Use_Your_Telescope"] text-black text-3xl bg-[#7ECBE9] pb-1 pl-2 pr-2 rounded border-2 border-black'
            >
            {title}
            </label>
        </Link>
        
    )
}
export default NavbarItemMobile
import styles from '@/styles/Menu.module.css'
import data from '../data.json'
import MenuItem from './MenuItem'


export default function Menu() {
    return (
        <>
        <section id='menu' className='bg-[#fdfbc8]'>
          <div className='flex flex-wrap justify-evenly gap-4 xl:gap-40'>
            
            {data.menu.map((menuItem) =>
              <div key={menuItem.id} className='mb-24'>
                <MenuItem item={menuItem} />
              </div>
            )}
        
          </div>
        </section>
        </>
    )
}

          
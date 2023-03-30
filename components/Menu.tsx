/* eslint-disable react/jsx-key */
import styles from '@/styles/Menu.module.css'
import data from '../data.json'
import MenuItem from './MenuItem'


export default function Menu() {
    return (
        <>
        <section id='menu' className='bg-[#fdfbc8]'>
          <div className='flex flex-wrap justify-evenly pt-36 space-x-6'>

            {data.menu.map((menuItem, i) =>
              <div className='mb-20'>
                <MenuItem key={i} item={menuItem} />
              </div>
            )}
        
          </div>
        </section>
        </>
    )
}

          
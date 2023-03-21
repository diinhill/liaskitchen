/* eslint-disable react/jsx-key */
import styles from '@/styles/Menu.module.css'
import data from '../data.json'
import MenuItem from './MenuItem'
import Image from 'next/image'


export default function Menu() {
    return (
        <>
        <section id='menu' className='w-screen overflow-x-hidden'>
          <div className={styles.menu}>
            <div className=''>
              <div className='pt-16 pb-2 flex justify-center'>
                <Image 
							    src='/burgerHeader.png'
							    alt='burger'
              		width={200}
                  height={200}
                  className='border-white border-dotted border-t-2 rounded-full -mb-3.5'
						    />
                {/* <h1 className='text-black font-[Codystar] text-2xl bg-white inline rounded'>BURGERS</h1> */}
              </div>
              {data.menu.burgers.map((burger, i) =>
                <MenuItem key={i} item={burger} />
              )}
            </div>
            <div>
              <h1 className='text-center pt-6 pb-4 text-white font-[Codystar] text-2xl'>SALAD BOWLS</h1>
              {data.menu.salads.map((salad, i) =>
                <MenuItem key={i} item={salad} />
              )}
            </div>
            <div>
              
              <div id='floatingImgs' className='absolute translate-x-6 -translate-y-4'>
						    <Image 
							    src='/friesHeader.png'
							    alt='fries'
              		width={100}
							    height={100}
						    />
              </div>
              <h1 className='text-center pt-6 pb-4 text-white font-[Codystar] text-2xl'>SIDES</h1>
              {data.menu.sides.map((side, i) =>
                <MenuItem key={i} item={side} />
              )}
            </div>
          </div>

        </section>
        </>
    )
}

          
/* eslint-disable react/jsx-key */
import styles from '@/styles/Menu.module.css'
import data from '../data.json'
import MenuItem from './MenuItem'


export default function Menu() {
    return (
        <>
        <section id='menu' className='w-screen overflow-x-hidden'>
          <div className='w-screen h-12'></div>
          <div className={styles.menu}>
            <div>
              <h1 className='text-center pt-6 pb-4 text-white font-[Ranchers] text-xl'>BURGERS</h1>
              {data.menu.burgers.map((burger, i) =>
                <MenuItem key={i} item={burger} />
              )}
            </div>
            <div>
              <h1 className='text-center pt-6 pb-4 text-white font-[Ranchers] text-xl'>SALAD BOWLS</h1>
              {data.menu.salads.map((salad, i) =>
                <MenuItem key={i} item={salad} />
              )}
            </div>
            <div>
              <h1 className='text-center pt-6 pb-4 text-white font-[Ranchers] text-xl'>SIDES</h1>
              {data.menu.sides.map((side, i) =>
                <MenuItem key={i} item={side} />
              )}
            </div>
          </div>

          {/* <div className={styles.curveSeparation}></div> */}
        </section>
        </>
    )
}

          
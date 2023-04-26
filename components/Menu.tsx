import data from '../data.json'
import MenuItem from './MenuItem'

export default function Menu() {
  return (
    <section id='menu' className='bg-secondary w-screen md:w-auto lg:w-auto'>
      <div className='flex justify-center'>
      <div className='w-[95%] flex flex-wrap justify-center relative items-center sm:gap-10 md:gap-16 lg:gap-20 xl:gap-24 2xl:gap-32'>
        {data.menu.map((menuItem) => (
          <div key={menuItem.id} className='mb-32 sm:mb-24'>
            <MenuItem item={menuItem} />
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}

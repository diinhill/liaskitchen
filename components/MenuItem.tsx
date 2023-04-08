import React from 'react'
import styles from '@/styles/MenuItem.module.css'
import Image from 'next/image'

type MenuItem = {
    item: {
        id: number,
        name: string,
        price: number,
        description: string,
        image: string,
        key?: number
    }
}

const MenuItem = ( item: MenuItem ) => {
   
    return (
        <>
            <div className='bg-[#7ECBE9] w-[350px] h-[350px] rounded-sm shadow-[#366477] shadow-md'>
                <div className='flex justify-center'>
                    <Image src={item.item.image} alt={item.item.name} width={300} height={300} className='-mt-24 mb-4'/>
                </div>    

                <div className='ml-2'>
                    <h2 className='text-3xl font-["Annie_Use_Your_Telescope"] text-white'>{item.item.name}</h2>
                    <h3 className='text-2xl font-["Annie_Use_Your_Telescope"] text-white'>{item.item.price}</h3>

                    <div className={styles.containerButton}>
                        <a className={styles.button} href=''>
                        </a>
				    </div> 

                    {/* {item.item.description != '' ? <p className='text-right pb-6 pt-2 pl-12 pr-6 font-["Coming_Soon"] text-blue-600'>{item.item.description}</p> : <p className='pb-0'></p>} */}
                </div>
            </div>
        </>   
    )
}
export default MenuItem
import React from 'react'

type MenuItem = {
    item: {
        id: number,
        name: string,
        price: number,
        description: string,
        key?: number
    }
}

const MenuItem = ( item: MenuItem ) => {
   
    return (
        <>
            <div className=''>
                <h2 className='text-center text-xl font-[Dokdo] text-blue-800'>{`${item.item.name} / € ${item.item.price}`}</h2>
                {item.item.description != '' ? <p className='text-right pb-6 pt-2 pl-12 pr-6 font-[Dokdo] text-blue-600'>{item.item.description}</p> : <p className='pb-2'></p>}
            </div>  
        </>   
    )
}
export default MenuItem
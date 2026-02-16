import React from 'react'

function CartProduct({item}) {
  return (
    <div key={item.id} className='flex justify-between items-center bg-gray-100 rounded-lg p-4 mb-4'>
        <div className='flex'>
            <img 
              src={item.image} 
              alt={item.title} 
              className="md:w-40 md:h-40 w-30 h-30 object-cover gap-4 rounded-lg mr-4 shadow-md" 
            />
            <span className="">
                <h2 className='md:text-lg font-bold'>{item.title}</h2>
                <p>{item.price}</p>
            </span>
        </div>
    </div>
  )
}

export default CartProduct
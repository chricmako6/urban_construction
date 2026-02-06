"use client"
import Navbar from '@/component/01/navbar'
import { shopItems } from '@/data'
import { useParams } from 'next/navigation'
import React from 'react'

function page() {
 const {id} = useParams()
 const product = shopItems.find((item) => item.id === Number(id))

  return (
    <div className='w-full'>
        <Navbar />
        <div className='grid grid-cols-3 max-w-7xl mt-15 mx-auto p-6 rounded-md bg-white shadow-md'>
            <div className='w-1/3'>
1
            </div>
            <div className='w-2/2'>
              2  
            </div>
            <div>
               3 
            </div>
        </div>
    </div>
  )
}

export default page
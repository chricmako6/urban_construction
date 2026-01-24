import React from 'react'
import Navbar from '@/component/01/navbar'

function PageAbout() {
  return (
    <div className='w-full'>
        <Navbar />
        <div className="w-full rounded-b-3xl flex justify-center items-center md:h-52 h-40"
        style={{
            backgroundImage: 'url(/assert/03.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <h1 className='text-xl sm:text-2xl md:text-3xl font-bold text-white'>
                ABOUT US
            </h1>
            <div>
            
            </div>
        </div>
    </div>
  )
}

export default PageAbout
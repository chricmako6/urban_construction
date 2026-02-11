import React from 'react'

function Counting() {
  return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 bg-[#383635] py-5 sm:py-8 md:py-15 gap-3 sm:gap-4 md:gap-3 px-4 sm:px-6 md:px-0 mx-auto'>
        <div className='flex gap-5 md:gap-45 justify-center'>
            <div className='text-center'>
                <h1 className='text-white font-bold text-2xl sm:text-3xl md:text-3xl'>100%</h1>
                <p className='text-gray-400 text-sm sm:text-base'>Client Satisfaction</p>
            </div>
            <div className='text-center'>
                <h1 className='text-white font-bold text-2xl sm:text-3xl md:text-3xl'>150+</h1>
                <p className='text-gray-400 text-sm sm:text-base'>Projects Completed</p>
            </div>
        </div>
        <div className='flex gap-5 md:gap-45 justify-center'> 
            <div className='text-center'>
                <h1 className='text-white font-bold text-2xl sm:text-3xl md:text-3xl'>50+</h1>
                <p className='text-gray-400 text-sm sm:text-base'>Expert Employees</p>
            </div>
            <div className='text-center'>
                <h1 className='text-white font-bold text-2xl sm:text-3xl md:text-3xl'>25+</h1>
                <p className='text-gray-400 text-sm sm:text-base'>Years of Experience</p>
            </div>
        </div>
    </div>
  )
}

export default Counting
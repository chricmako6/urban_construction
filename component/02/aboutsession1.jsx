import React from 'react'

function AboutSession1() {
  return (
    <div className='flex flex-col items-center justify-center'>
      {/* Main grid container centered */}
      <div className='flex mx-auto max-w-5xl w-full gap-5'>
        {/* this is the div where the image will be inserted  */}
        
        <div className="flex gap-4">
           <div className='w-70 bg-gray-400 rounded-xl'>
            image
           </div>
           <div className='flex flex-col gap-4'>
              <div className='h-90 w-70 bg-gray-400 rounded-xl'>
              image 
              </div>
               <div className='h-20 w-70 bg-pink-400 rounded-xl'>
                2
              </div>
           </div>
        </div>
    
        {/* Right grid with centered content */}
        <div className='bg-yellow-200 w-400 rounded-xl flex items-center justify-center p-4'>
            1
        </div>
      </div>
    </div>
  )
}

export default AboutSession1
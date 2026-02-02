import React from 'react'

function Aboutsession2() {
  return (
  <div className='flex flex-col items-center justify-center'>
      {/* Main grid container centered */}
      <div className='flex mx-auto max-w-5xl w-full gap-5'>
        {/* this is the div where the image will be inserted  */}
        
        <div className="flex flex-col gap-4 w-1/2">
           <div className="bg-yellow-200 h-37 rounded-xl">
            1
           </div>

           <div className="bg-yellow-200 h-37 rounded-xl">
            2
           </div>

           <div className="bg-yellow-200 h-37 rounded-xl">
            3
           </div>
        </div>
    
        {/* Right grid with centered content */}
        <div className='bg-yellow-200 w-1/2 h-120 rounded-xl flex items-center justify-center p-4'>
            image and description
        </div>
      </div>
    </div>
  )
}

export default Aboutsession2
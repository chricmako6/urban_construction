import React from 'react'

function Aboutsession2() {
  return (
    <div className='flex flex-col items-center justify-center px-4 md:px-0'>
      
      {/* Main grid container centered */}
      <div className='flex flex-col md:flex-row mx-auto max-w-5xl w-full gap-5'>
        
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-4 w-full md:w-1/2">
           
           <div className="bg-yellow-200 h-32 md:h-37 rounded-xl flex items-center justify-center">
            1
           </div>

           <div className="bg-yellow-200 h-32 md:h-37 rounded-xl flex items-center justify-center">
            2
           </div>

           <div className="bg-yellow-200 h-32 md:h-37 rounded-xl flex items-center justify-center">
            3
           </div>

        </div>
    
        {/* RIGHT SIDE */}
        <div className='bg-yellow-200 w-full md:w-1/2 h-60 md:h-120 rounded-xl flex items-center justify-center p-4 text-center md:text-left'>
            image and description
        </div>

      </div>
    </div>
  )
}

export default Aboutsession2
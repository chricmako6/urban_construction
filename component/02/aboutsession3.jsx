import React from 'react'
import { FaQuoteRight } from 'react-icons/fa'

function Aboutsession3() {
  return (
  <div className='flex flex-col items-center justify-center bg-[#383635] p-20 rounded-3xl'>
      {/* Main grid container centered */}
      <div className='flex mx-auto max-w-5xl w-full gap-5'>
        {/* this is the div where the image will be inserted  */}
        
        <div className="flex flex-col bg-red-200 gap-4 w-2/3 h-120 rounded-xl p-5">
           <div className='mt-80 bg-[#383635]/80 backdrop-blur-lg border border-white/20 rounded-2xl p-5 shadow-2xl shadow-black/20'>
            <FaQuoteRight className=' text-white/90 mb-4' />
               <h1 className='font-bold text-white tracking-tight'>
                Tax Research for <br />
                Financial Mastery
               </h1>
            </div>
        </div>
    
        {/* Right grid with centered content */}
        <div className='bg-yellow-200 w-2/2 rounded-xl flex items-center justify-center p-4'>
            image and description
        </div>
      </div>
    </div>
  )
}

export default Aboutsession3
import React from 'react'
import { FaQuoteRight } from 'react-icons/fa'

function Aboutsession3() {
  return (
    <div className='flex flex-col items-center justify-center bg-[#383635] p-6 md:p-20 rounded-3xl'>
      
      {/* Main grid container centered */}
      <div className='flex flex-col md:flex-row mx-auto max-w-5xl w-full gap-5'>
        
        {/* LEFT SIDE */}
        <div className="flex flex-col bg-red-200 gap-4 w-full md:w-2/3 h-auto md:h-120 rounded-xl p-5">
           
           <div className='mt-10 md:mt-80 bg-[#383635]/80 backdrop-blur-lg border border-white/20 rounded-2xl p-5 shadow-2xl shadow-black/20'>
              <FaQuoteRight className='text-white/90 mb-4' />
              
              <h1 className='font-bold text-white tracking-tight text-xl md:text-2xl'>
                Tax Research for <br />
                Financial Mastery
              </h1>

           </div>
        </div>
    
        {/* RIGHT SIDE */}
        <div className='bg-yellow-200 w-full md:w-2/2 h-60 md:h-auto rounded-xl flex items-center justify-center p-4 text-center md:text-left'>
            image and description
        </div>

      </div>
    </div>
  )
}

export default Aboutsession3
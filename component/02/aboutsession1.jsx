import React from 'react'
import Link from 'next/link'; 
import { FaStarHalfAlt } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'

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
               <div className='h-auto w-70 bg-[#ffd061] hover:bg-[#f5c84a] cursor-pointer rounded-xl'>
                  <div className="flex flex-col items-center justify-center p-7">
                    <h1 className="text-black text-3xl font-bold">25+</h1>
                    <p className="text-black">Years of Experience</p>
                  </div>
              </div>
           </div>
        </div>
    
        {/* Right grid with centered content */}
        <div className='bg-yellow-200/60 w-400 rounded-xl p-4'>
            <div className="">
              <h1 className="text-[10px] sm:text-[12px] md:text-[15px] gap-2 text-[#5e5f61] font-bold my-4 flex items-center justify-center md:justify-start">
                <FaStarHalfAlt className='w-3.5 h-3.5 text-[#ffd061]'/> 
                  ABOUT JENGANASI
                <FaStarHalfAlt className='w-3.5 h-3.5 text-[#ffd061]'/>
              </h1>
            </div>

            <div className="">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center md:text-left">
                Innovation Strategies for Tax Planning and Compliance
              </h1>
            </div>

            <div className="">
              <p className="text-sm sm:text-base md:text-md text-[#5e5f61] my-5 sm:my-6 md:my-7 text-center md:text-left">
                At Jenganasi, we are dedicated to transforming visions into reality through exceptional construction services.
                Our commitment to safety, sustainability, and client satisfaction sets us apart in the industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 md:gap-3">
              <li className='flex items-center gap-2 sm:gap-3 md:gap-3 py-1 '>
                    <span className='w-2 h-2 bg-[#ffd061] rounded-full shrink-0'></span>
                    <span className='text-sm sm:text-base text-[#5e5f61]'>Innovative Tax Planning</span>
                  </li>
                  <li className='flex items-center gap-2 sm:gap-3 md:gap-3 py-1 '>
                    <span className='w-2 h-2 bg-[#ffd061] rounded-full shrink-0'></span>
                    <span className='text-sm sm:text-base text-[#5e5f61]'>Compliance Solutions</span>
                  </li>
                  <li className='flex items-center gap-2 sm:gap-3 md:gap-3 py-1 '>
                    <span className='w-2 h-2 bg-[#ffd061] rounded-full shrink-0'></span>
                    <span className='text-sm sm:text-base text-[#5e5f61]'>Risk Management</span>
                  </li>
                  <li className='flex items-center gap-2 sm:gap-3 md:gap-3 py-1 '>
                    <span className='w-2 h-2 bg-[#ffd061] rounded-full shrink-0'></span>
                    <span className='text-sm sm:text-base text-[#5e5f61]'>Technology Integration</span>
                  </li>
            </div>

            {/* BUTTON */}
            <div className="">
              <button className='bg-[#ffd061] hover:bg-[#f5c84a] w-full md:w-42.5 cursor-pointer flex items-center gap-2 sm:gap-3 md:gap-3 px-4 sm:px-5 md:px-5 my-2 py-2 rounded-md font-semibold text-sm sm:text-base mt-4'>
                <Link href="#">
                Learn More
                </Link>
                <span className='bg-[#383635] inline-block p-1 rounded-sm hover:rotate-45 transition-transform duration-300'>
                  <FiArrowUpRight className='text-white w-4 sm:w-5 md:w-5 h-4 sm:h-5 md:h-5' />
                </span>
              </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSession1
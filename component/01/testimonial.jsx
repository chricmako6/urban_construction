'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaStarHalfAlt } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'
import TestCard from './testCard'

function Testimonial() {
  return (
    <div className='w-full mt-20 px-4 sm:px-6 lg:px-8 h-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-6'>
        <div className='w-full max-w-2xl mx-auto md:mx-0'>
             <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className='md:ml-52 text-[10px] sm:text-[12px] md:text-[15px] gap-2 text-[#5e5f61] font-bold my-4 flex items-center justify-center md:justify-start'
             >
                <FaStarHalfAlt className='w-3.5 h-3.5 text-[#ffd061]'/> 
                TESTIMONIALS
                <FaStarHalfAlt className='w-3.5 h-3.5 text-[#ffd061]'/>
             </motion.h1>

             {/* Main content - staggered animation */}
             <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
               >
                <h2 className='text-center md:text-left md:ml-0 lg:ml-12 xl:ml-52 text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold'>
                Built On Trust, Proven <br />By Results.
                </h2>
                <motion.p 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className='ml-0 sm:ml-20 md:ml-52 text-sm sm:text-base md:text-md text-[#5e5f61] my-5 sm:my-6 md:my-7 text-center md:text-left'
                >
                At Urban Build, we are dedicated to transforming visions into reality through exceptional construction services. 
                Our commitment to safety, sustainability, and client satisfaction sets us apart in the industry.
                </motion.p>
             </motion.div>

             {/* Signature - slides from left with delay */}
             <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
             >
             </motion.div>

              {/* Animated button */}
             <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                className='flex justify-center md:justify-start items-center'
             >
             <button className='bg-[#ffd061] hover:bg-[#f5c84a] ml-0 sm:ml-20 md:ml-52 cursor-pointer text-black flex items-center gap-3 px-4 sm:px-5 py-2 rounded-md font-semibold text-sm sm:text-base'>
                Work with Us
                <motion.span 
                className='bg-[#383635] inline-block p-1 rounded-sm ml-2'
                whileHover={{ rotate: 45 }}
                transition={{ type: "spring", stiffness: 300 }}
                >
                <FiArrowUpRight className='text-white w-5 h-5' />
                </motion.span>
             </button>
             </motion.div>  
        </div>

        {/* THIS IS FOR IMAGE */}
        <motion.div 
        initial={{ opacity: 0, x: 70 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 10
        }}
        className='md:w-115 md:h-130 sm:h-112.5 sm:w-96 h-96 w-80 bg-[#ffd061] relative mx-auto'
        >

         <Image
            src="/assert/01.jpg"
            alt="Construction project testimonial"
            fill={true}
            sizes="(max-width: 640px) 320px, (max-width: 768px) 384px, 460px"
            className="object-cover bg-center shadow-xl"
            priority={false}
            quality={85}
        />
        <motion.div 
        initial={{ opacity: 0, scale: 0.8, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.1
        }}
        className='z-10 sm:z-20 md:z-9999 absolute shadow-md bg-white h-auto min-h-45 sm:min-h-50 md:h-49 w-[90%] sm:w-[85%] md:w-[70%] lg:w-190 max-w-95 sm:max-w-112.5 md:max-w-none mt-40 sm:mt-45 md:mt-55 lg:mt-80 right-1/2 transform translate-x-1/2 md:right-9 md:translate-x-0 md:transform-none flex justify-center items-center mx-auto p-3 sm:p-4 md:p-0'
        >
        <TestCard />
        </motion.div>
        </motion.div>
    </div>
  )
}

export default Testimonial
'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { BiArrowToTop } from "react-icons/bi";

function Hero() {

const handleScrollToTop = () => {
window.scrollTo({
    top: 0,
    behavior: 'smooth'
})
}
  return (
    <div className='pt-24 w-full md:h-137.5 h-screen bg-cover bg-gray-300 bg-center relative flex items-center'>
        <div className='gap-4 p-10 md:p-0 top-1/2 -translate-y-1/2 absolute'>
            {/* Animated heading with staggered children */}
            <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className='md:ml-52 text-white font-bold text-2xl md:text-4xl lg:text-5xl'
            >
            <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className='text-[#ffd061]'
            >
                BUILDING
            </motion.span>{' '}
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
            >
                ROBUST
            </motion.span>{' '}
            <br />
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
            >
                LASTING SOLUTIONS.
            </motion.span>
            </motion.h1>

              {/* Animated paragraph */}
            <motion.p
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className='md:ml-52 text-white text-md md:text-lg mt-4'
            >
            We are committed to delivering high-quality construction <br />
            services that exceed our clients' expectations.
            </motion.p>

            {/* Animated button */}
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='md:ml-52 mt-6'
            >
            <button className='bg-[#ffd061] hover:bg-[#f5c84a] cursor-pointer text-black flex items-center gap-3 px-5 py-2 rounded-md font-semibold'>
                SEE OUR WORKS
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
        <div onClick={handleScrollToTop} className='bg-[#ffd061] hover:bg-[#f5c84a] shadow-2xl rounded-full p-2.5 cursor-pointer fixed z-100 md:top-130 top-170 md:left-320 left-90'>
           <BiArrowToTop className="w-5 h-5"/>
        </div>
    </div>
  )
}

export default Hero
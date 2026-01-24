'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { FiArrowUpRight } from "react-icons/fi";
import { FaStarHalfAlt } from "react-icons/fa";

function About() {
  return (
    <div id='about' className='w-full mt-25 mb-25 md:mt-20 md:mb-20 gap-4 sm:gap-6 h-auto grid grid-cols-1 md:grid-cols-2 items-center px-4 sm:px-6 md:px-0'>
        <div className=''>
             <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className='md:ml-52 text-[10px] sm:text-[12px] md:text-[15px] gap-2 text-[#5e5f61] font-bold my-4 flex items-center justify-center md:justify-start'
            >
                <FaStarHalfAlt className='w-3.5 h-3.5 text-[#ffd061]'/> 
                ABOUT US 
                <FaStarHalfAlt className='w-3.5 h-3.5 text-[#ffd061]'/>
            </motion.h1>

            {/* Main content - staggered animation */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            >
                <h2 className='ml-0 sm:ml-20 md:ml-52 text-xl sm:text-2xl md:text-3xl font-bold text-center md:text-left'>
                Focused On Excellence <br /> In Every Project.
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
                <h1 className='ml-0 sm:ml-20 md:ml-52 text-[10px] sm:text-[12px] md:text-[15px] gap-2 text-[#5e5f61] font-bold my-4 sm:my-5 md:my-5 flex items-center justify-center md:justify-start'>
                Signature
                </h1>
            </motion.div>

              {/* Animated button */}
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className='flex justify-center md:justify-start'
            >
            <button className='bg-[#ffd061] hover:bg-[#f5c84a] ml-0 sm:ml-20 md:ml-52 cursor-pointer text-black flex items-center gap-3 px-4 sm:px-5 py-2 rounded-md font-semibold text-sm sm:text-base'>
                CONTACT US
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
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 10
        }}
        className='w-80 h-96 sm:w-96 sm:h-112.5 md:w-115 md:h-130 shadow-2xl bg-[#ffd061] relative ml-auto mr-auto md:ml-6 mt-8 md:mt-0'
        >
        <motion.div 
            initial={{ opacity: 0, scale: 0.8, x: 70 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.1
            }}
            className='z-50 absolute shadow-2xl h-96 w-80 sm:h-112.5 sm:w-96 md:h-130 md:w-115 mt-4 ml-4'
            style={{
                backgroundImage: 'url(/assert/04.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }} >
        </motion.div>
        </motion.div>
    </div>
  )
}

export default About
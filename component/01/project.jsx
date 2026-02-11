'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { FaStarHalfAlt } from "react-icons/fa";
import { FiArrowUpRight } from 'react-icons/fi';

function Project() {
  return (
    <div id='projects' className='w-full justify-center'>
        <div className='w-full px-4'>
            <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='text-center text-[10px] md:text-[15px] gap-2 text-[#5e5f61] font-bold my-4 flex items-center justify-center'
        >
            <FaStarHalfAlt className='w-3.5 h-3.5 text-[#ffd061]'/> 
            OUR WORK 
            <FaStarHalfAlt className='w-3.5 h-3.5 text-[#ffd061]'/>
        </motion.h1>

        {/* Main content - staggered animation */}
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", }}
            className='text-center'
        >
            <h2 className='md:text-3xl font-bold text-[#5e5f61]'>
            Discover Our Recent Projects
            </h2>
            <motion.p 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut"}}
            className='max-w-2xl mx-auto text-md md:text-md text-[#5e5f61] my-7'
            >
            Providing expert services designer to deliver quality and innovation in every 
            project we undertake, ensuring client satisfaction and lasting value.
            </motion.p>
        </motion.div>
        </div>

        <div className='my-10 bg-gray-300 w-full h-100' 
         style={{
                backgroundImage: 'url(/assert/03.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>.
           {/* Animated button */}
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
            <button className='bg-[#ffd061] hover:bg-[#f5c84a] mt-70 ml-10 cursor-pointer text-black flex items-center px-5 py-2 rounded-md font-semibold'>
                RESTORATION
                <motion.span 
                className='bg-[#383635] inline-block p-1 rounded-sm ml-5'
                whileHover={{ rotate: 45 }}
                transition={{ type: "spring", stiffness: 300 }}
                >  
                <FiArrowUpRight className='text-white w-5 h-5' />
                </motion.span>
            </button>
            </motion.div>  
        </div>
    </div>
  )
}

export default Project
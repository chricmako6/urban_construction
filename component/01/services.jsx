'use client';
import React from 'react'
import { motion } from 'framer-motion';
import PageService from '../02/pageService';


function Services() {
  return (
    <>
    <div id='services' className='w-full mt-20 mb-10 h-auto grid justify-center'>
        <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className='mx-auto text-[#5e5f61] font-bold text-2xl md:text-3xl'
            >
            Solutions We Provide
        </motion.h1>

         {/* Animated paragraph */}
        <motion.p
        initial={{ opacity: 0, y: 20}}
        animate={{ opacity: 1, y: 0}}
        transition={{ delay: 0.8, duration: 0.6 }}
        className='text-center text-sm sm:text-base md:text-md text-[#5e5f61] text-md md:text-md my-5'
        >
        Offering tailored construction solutions, from planning to completion, <br />
        with a focus on quality and innovation.
        </motion.p>
    </div>

    <div>
      <PageService />
    </div>
    </>
  )
}

export default Services
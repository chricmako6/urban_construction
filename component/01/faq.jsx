'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FaStarHalfAlt } from 'react-icons/fa'
import FaqCard from './faqCard'

function Faq() {
  return (
    <div className='w-full justify-center'>
        <div className='w-full px-4'>
            <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='text-center text-[10px] md:text-[15px] gap-2 text-[#5e5f61] font-bold my-4 flex items-center justify-center'
        >
            <FaStarHalfAlt className='w-3.5 h-3.5 text-[#ffd061]'/> 
            FAQ
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
            Gots Questions? We've <br /> Got You Covered 
            </h2>
            <motion.p 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut"}}
            className='max-w-2xl mx-auto text-md md:text-md text-[#5e5f61] my-7'
            >
            From project planning to final touches. We've answered the most 
            common questions to help you make informed decisions.
            </motion.p>
        </motion.div>
        </div>

        {/* this is for faq open tab */}
        <div>
            <FaqCard />
        </div>
    </div>
  )
}

export default Faq
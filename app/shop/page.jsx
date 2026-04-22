'use client'
import React from 'react'
import Link from 'next/link';
import { motion } from "framer-motion"
import Navbar from '@/component/01/navbar'
import { IoHome } from 'react-icons/io5'
import { GoDot, GoDotFill } from "react-icons/go";
import { BiArrowToTop } from 'react-icons/bi';
import Footer from '@/component/01/footer';
import Shopsession1 from '@/component/03/shopsession1';
import Shopsession2 from '@/component/03/shopsession2';


function PageServices() {
   const handleScrollToTop = () => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    })
   }


  return (
    <div className='max-w-full'>
        <Navbar />
          <div
              className="w-full shadow-xl rounded-b-3xl flex flex-col justify-center items-center md:h-52 h-40 relative overflow-hidden"
              style={{
                  backgroundImage:
                  'linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(/assert/03.jpg)',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
              }}
              >
              {/* subtle animated overlay glow */}
              <motion.div
                  className="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-black/60"
                  animate={{ opacity: [0.6, 0.8, 0.6] }}
                  transition={{ duration: 4, repeat: Infinity }}
              />
  
              {/* CONTENT */}
              <motion.h1
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-white relative z-10 tracking-wide"
              >
                  MAP SHOP
              </motion.h1>
  
              {/* NAV DOTS */}
              <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="flex justify-center items-center my-5 relative z-10"
              >
                  <Link href="/">
                  <IoHome className="w-5 h-5 mr-2 text-white hover:text-[#ffd061] cursor-pointer transition-colors duration-300" />
                  </Link>
  
                  <GoDotFill className="text-white hover:text-[#ffd061] cursor-pointer transition-colors duration-300" />
                  <GoDot className="text-white hover:text-[#ffd061] cursor-pointer transition-colors duration-300" />
                  <GoDotFill className="text-white hover:text-[#ffd061] cursor-pointer transition-colors duration-300" />
              </motion.div>
  
              {/* soft floating highlight line */}
              <motion.div
                  className="absolute bottom-4 w-20 h-0.5 bg-[#ffd061] rounded-full"
                  animate={{ scaleX: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
              />
        </div>

      <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className='mx-auto my-10 md:my-25 max-w-6xl px-4'
    >
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className='text-xl sm:text-2xl md:text-3xl font-bold text-center'
      >
        Shop All
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className='text-sm sm:text-base md:text-md text-[#5e5f61] md:my-5 my-3 text-center max-w-2xl mx-auto'
      >
        Explore our collection of modern house plans, designed to inspire your next architectural project. 
        Whether you're looking for a sleek urban design or a spacious family home, our curated selection 
        offers a variety of styles and layouts to suit your needs.
      </motion.p>
    </motion.div>

        <div className='my-16 md:my-30 flex flex-col lg:flex-row max-w-7xl gap-6 mx-auto px-4'>
            <div className='w-1/3 hidden lg:block'>
                <Shopsession1 />
            </div>
            <div className='w-full'>
                <Shopsession2 />
            </div>
        </div>

        {/* top button */}
        <div onClick={handleScrollToTop} className='bg-[#ffd061] hover:bg-[#f5c84a] shadow-2xl rounded-full p-2.5 cursor-pointer fixed z-100 bottom-6 right-6'>
            <BiArrowToTop className="w-5 h-5"/>
        </div>


      {/* footer section */}
      <div className="w-full mx-auto">
        <Footer />
      </div>
    </div>
  )
}

export default PageServices

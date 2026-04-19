'use client'
import React, { useContext } from 'react'
import Link from 'next/link';
import { motion } from "framer-motion"
import Navbar from '@/component/01/navbar'
import { IoHome } from 'react-icons/io5'
import { GoDot, GoDotFill } from "react-icons/go";
import AboutSession1 from '@/component/02/aboutsession1';
import Aboutsession2 from '@/component/02/aboutsession2';
import Aboutsession3 from '@/component/02/aboutsession3';
import { BiArrowToTop } from 'react-icons/bi';
import Aboutsession4 from '@/component/02/aboutsession4';
import Footer from '@/component/01/footer';

function PageAbout() {
    const handleScrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
    }
    return (
    <div className='w-full'>
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
                ABOUT US
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

        <div className='my-10 md:my-25'>
            <AboutSession1 />
        </div>

        <div className='my-15 md:my-30 '>
            <Aboutsession2 />
        </div>

        <div className='my-15 md:my-30 '>
            <Aboutsession3 />
        </div>

        <div className='my-15 md:my-30 '>
            <Aboutsession4 />
        </div>


        {/* top button */}
         <div onClick={handleScrollToTop} className='bg-[#ffd061] hover:bg-[#f5c84a] shadow-2xl rounded-full p-2.5 cursor-pointer fixed z-100 right-6 bottom-6'>
            <BiArrowToTop className="w-5 h-5"/>
        </div>


      {/* footer section */}
      <div className="w-full mx-auto">
        <Footer />
      </div>
    </div>
  )
}

export default PageAbout
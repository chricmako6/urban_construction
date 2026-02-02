'use client'
import React from 'react'
import Link from 'next/link';
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
        <div className="w-full shadow-xl rounded-b-3xl flex flex-col justify-center items-center md:h-52 h-40"
        style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/assert/03.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <h1 className='text-xl sm:text-2xl md:text-3xl font-bold text-white'>
                ABOUT US
            </h1>
            <div className='flex justify-center items-center my-5'>
                <Link href="/">
                <IoHome className='w-5 h-5 mr-2 text-white hover:text-[#ffd061] cursor-pointer'/>
                </Link>
                <GoDotFill className='text-white hover:text-[#ffd061] cursor-pointer'/>
                <GoDot className='text-white hover:text-[#ffd061] cursor-pointer'/>
                <GoDotFill className='text-white hover:text-[#ffd061] cursor-pointer'/>
            </div>
        </div>

        <div className='my-20 '>
            <AboutSession1 />
        </div>

        <div className='my-20 '>
            <Aboutsession2 />
        </div>

        <div className='my-20 '>
            <Aboutsession3 />
        </div>

        <div className='my-20 '>
            <Aboutsession4 />
        </div>


        {/* top button */}
         <div onClick={handleScrollToTop} className='bg-[#ffd061] hover:bg-[#f5c84a] shadow-2xl rounded-full p-2.5 cursor-pointer fixed z-100 top-130 left-320'>
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
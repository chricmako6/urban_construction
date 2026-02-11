'use client'
import React from 'react'
import Link from 'next/link';
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
        <div className=" w-full shadow-xl rounded-b-3xl flex flex-col justify-center items-center md:h-72 h-40"
        style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/assert/03.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <h1 className=' text-xl sm:text-2xl md:text-3xl font-bold text-white'>
                MODERN HOUSE PLANS
            </h1>
            <p className='text-sm sm:text-base md:text-md text-gray-200 my-4 max-w-6xl text-center'>
                Transform your living space with our modern architectural
                plans and experience the ultimate in modernized living. 
                Whether you're building a new home or renovating an existing one, 
                our designs offer the perfect balance of style, functionality, and innovation.
            </p>
            <div className='flex justify-center items-center my-5'>
                <Link href="/">
                <IoHome className='w-5 h-5 mr-2 text-white hover:text-[#ffd061] cursor-pointer'/>
                </Link>
                <GoDotFill className='text-white hover:text-[#ffd061] cursor-pointer'/>
                <GoDot className='text-white hover:text-[#ffd061] cursor-pointer'/>
                <GoDotFill className='text-white hover:text-[#ffd061] cursor-pointer'/>
            </div>
        </div>

        <div className='my-30 flex max-w-7xl gap-6 mx-auto'>
            <div className='w-1/3'>
                <Shopsession1 />
            </div>
            <div className='w-full'>
                <Shopsession2 />
            </div>
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

export default PageServices
'use client';
import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { href: '#', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
    { href: '', label: 'Shop' },
  ];

  return (
    <div className='w-full bg-[#383635] py-5 mx-auto sticky top-0 left-0 z-100'>
      <div className='flex justify-between md:justify-center items-center px-4 md:px-8 lg:gap-60 lg:flex-row'>
        {/* Logo */}
        <div>
            <h1 className='text-white font-bold text-xl md:text-2xl'>UrbanBuild</h1>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden lg:flex justify-center items-center'>
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className='text-white px-4 hover:text-[#ffd061] transition-colors duration-300'>
                {link.label}
              </a>
            ))}

            {/* Animated button */}
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='flex'
            >
            <button className='bg-[#ffd061] cursor-pointer text-black flex items-center gap-3 px-5 py-2 rounded-md font-semibold'>
                Get a Quote
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

        {/* Mobile Menu Button */}
        <div className='lg:hidden flex items-center gap-4'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='hidden md:flex'
          >
            <button className='bg-[#ffd061] cursor-pointer text-black flex items-center gap-3 px-5 py-2 rounded-md font-semibold text-sm'>
                Get a Quote
                <motion.span 
                className='bg-[#383635] inline-block p-1 rounded-sm'
                whileHover={{ rotate: 45 }}
                transition={{ type: "spring", stiffness: 300 }}
                >
                <FiArrowUpRight className='text-white w-4 h-4' />
                </motion.span>
            </button>
          </motion.div>

          <button 
            onClick={toggleMobileMenu}
            className='text-white text-2xl md:text-3xl'
          >
            {mobileMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0, 
          height: mobileMenuOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
        className='lg:hidden overflow-hidden'
      >
        <div className='flex flex-col gap-4 px-4 py-6 bg-[#2a2928]'>
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              className='text-white px-4 py-2 hover:text-[#ffd061] transition-colors duration-300'
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          
          {/* Mobile Get Quote Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='flex lg:hidden'
          >
            <button className='w-full bg-[#ffd061] cursor-pointer text-black flex items-center justify-center gap-3 px-5 py-2 rounded-md font-semibold'>
                Get a Quote
                <motion.span 
                className='bg-[#383635] inline-block p-1 rounded-sm'
                whileHover={{ rotate: 45 }}
                transition={{ type: "spring", stiffness: 300 }}
                >
                <FiArrowUpRight className='text-white w-4 h-4' />
                </motion.span>
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Navbar
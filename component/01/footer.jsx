"use client"
import React from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { FiArrowUpRight } from 'react-icons/fi';
import { IoLogoYoutube } from 'react-icons/io5';
import { MdOutlineLocationOn, MdOutlinePhoneIphone, MdOutlineMailOutline } from 'react-icons/md';
import { motion } from "framer-motion";

function Footer() {

  // animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <footer className="w-full bg-[#1a1a1a] text-white pt-16 md:pt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 p-10">
        
        {/* Main Content */}
        <motion.div 
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pb-16 md:pb-32"
        >

          {/* Logo & Description */}
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-[#ffd061] text-black font-bold px-3 py-2 rounded"
              >
                🏢
              </motion.div>
              <h3 className="font-bold text-base sm:text-lg md:text-xl">URBANBUILD</h3>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-md">
              From project planning to final touches, we offer our clients share their experiences of working with us.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp}>
            <h4 className="font-bold text-base sm:text-lg md:text-xl mb-4 sm:mb-6">Contact</h4>

            <div className="space-y-3 sm:space-y-4">
              {[
                { icon: <MdOutlineLocationOn />, text: "1050 Brisbane Ave, US" },
                { icon: <MdOutlinePhoneIphone />, text: "+1(888)000-0000" },
                { icon: <MdOutlineMailOutline />, text: "email@urbanbuild.com" },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 5 }}
                  className="flex gap-3"
                >
                  <span className="w-5 h-5 text-[#ffd061]">{item.icon}</span>
                  <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={fadeUp}>
            <h4 className="font-bold text-base sm:text-lg md:text-xl mb-3 sm:mb-4">Newsletter</h4>

            <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-3 sm:mb-4">
              Enter your email to commercial receipt our clients share their experiences of working with us.
            </p>

            <motion.div 
              whileFocus={{ scale: 1.01 }}
              className="flex max-w-sm sm:max-w-none rounded-md overflow-hidden border border-gray-700"
            >
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2.5 text-sm bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#ffd061] focus:border-transparent transition"
              />

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='group bg-[#ffd061] hover:bg-[#f5c84a] px-4 flex items-center justify-center transition'
              >
                <span className='bg-[#383635] inline-block rounded-sm p-1 group-hover:rotate-45 transition-transform duration-300'>
                  <FiArrowUpRight className='w-5 h-5 text-white  transition-transform ' />
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6 sm:my-8"></div>

        {/* Bottom */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 py-3 md:py-5"
        >
          <p className="text-gray-500 text-xs sm:text-sm md:text-base text-center sm:text-left">
            Copyright © 2026 UrbanBuild. All rights reserved.
          </p>

          <div className="flex gap-4 sm:gap-6">
            {[FaFacebookF, FaXTwitter, MdOutlineMailOutline, IoLogoYoutube].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -3, scale: 1.1 }}
                className="cursor-pointer text-gray-400 hover:text-[#ffd061] transition"
              >
                <Icon className="w-5 h-5" />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </footer>
  );
}

export default Footer;
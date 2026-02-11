'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { IoChatbubbleEllipsesOutline, IoLocationOutline, IoLogoTiktok, IoLogoYoutube } from 'react-icons/io5';
import { MdOutlinePhoneIphone } from 'react-icons/md';

const rotateStyle = `
  @keyframes slowRotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  .rotate-hover:hover {
    animation: slowRotate 0.6s ease-in-out;
  }
`;

function Contact() {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div id="contact" className="w-full px-4 sm:px-6 lg:px-8 h-auto">
      <style>{rotateStyle}</style>
      
      {/* Heading Section - Added responsive heading */}
      <div className="text-center mb-8 sm:mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5e5f61] mb-4"
        >
          Get In Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base text-[#5e5f61] max-w-2xl mx-auto"
        >
          Ready to start your project? Contact us today for a consultation
        </motion.p>
      </div>

      <motion.div 
        className="grid grid-cols-1 gap-10 lg:grid-cols-2 w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-8 lg:p-10 bg-white shadow-lg rounded-lg sm:rounded-xl"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
       >
        {/* CONTACT US Section */}
        <div className="pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-gray-100 pb-8 lg:pb-0">
          <h1 className="font-bold text-xl sm:text-2xl mb-3 sm:mb-4">Contact Us</h1>
          <p className='text-[#5e5f61] text-sm sm:text-base mb-6'>
            From project planning to final touches. We've answered the most common questions.
          </p>

          {/* Icons Section */}
          <div className="space-y-4 sm:space-y-5 mt-4">
            {/* Chat */}
            <div className="flex gap-3 sm:gap-4">
              <IoChatbubbleEllipsesOutline className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 text-[#ffd061] font-bold mt-1" />
              <div>
                <h3 className="font-bold text-base sm:text-lg">Chat to Us</h3>
                <p className="text-[#5e5f61] text-sm sm:text-base">Our friendly team is here to help.</p>
                <p className='font-medium text-sm sm:text-base text-[#383635] mt-1'>christophersitt06@gmail.com</p>
              </div>
            </div>

            {/* Office */}
            <div className="flex gap-3 sm:gap-4">
              <IoLocationOutline className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 text-[#ffd061] font-bold mt-1" />
              <div>
                <h3 className="font-bold text-base sm:text-lg">Visit Our Office</h3>
                <p className="text-[#5e5f61] text-sm sm:text-base">Come and say hello to our office.</p>
                <p className='font-medium text-sm sm:text-base text-[#383635] mt-1'>1250 Swahili Street, Arusha Town Tanzania</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-3 sm:gap-4">
              <MdOutlinePhoneIphone className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 text-[#ffd061] font-bold mt-1" />
              <div>
                <h3 className="font-bold text-base sm:text-lg">Call Us</h3>
                <p className="text-[#5e5f61] text-sm sm:text-base">Mon to Fri from 8am to 5pm</p>
                <p className='font-medium text-sm sm:text-base text-[#383635] mt-1'>+255 777-676-123</p>
              </div>
            </div>

            {/* Social Media */}
            <div className='flex gap-6 sm:gap-8 mt-8'>
              <FaFacebookF className='w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-[#ffd061] transition-colors duration-300'/>
              <IoLogoYoutube className='w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-[#ffd061] transition-colors duration-300'/>
              <IoLogoTiktok className='w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-[#ffd061] transition-colors duration-300'/>
              <FaInstagram className='w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-[#ffd061] transition-colors duration-300'/>
            </div>
          </div>
        </div>

        {/* REQUEST A QUOTE Section */}
        <div className="pt-8 lg:pt-0 lg:pl-6">
          <h2 className="font-bold text-xl sm:text-2xl mb-3 sm:mb-4">Request A Quote</h2>
          <p className='text-[#5e5f61] text-sm sm:text-base mb-6'>
            From project planning to final touches. We've answered the most common questions to help you make informed decisions.
          </p>
          
          <form className="space-y-3 sm:space-y-4">
            {/* Full Name */}
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd061] focus:border-transparent transition"
            />
            
            {/* Email Address */}
            <input 
              type="email" 
              placeholder="Email address" 
              className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd061] focus:border-transparent transition"
            />
            
            {/* Phone and Service - Stack on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <input 
                type="tel" 
                placeholder="Phone number" 
                className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd061] focus:border-transparent transition"
              />
              <select 
                className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd061] focus:border-transparent transition text-gray-500"
              >
                <option>Select a service</option>
                <option>Consultation</option>
                <option>Design</option>
                <option>Development</option>
                <option>Maintenance</option>
              </select>
            </div>
            
            {/* Message */}
            <textarea 
              placeholder="Enter your message" 
              rows="3"
              className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd061] focus:border-transparent transition resize-none"
            ></textarea>
            
            {/* Submit Button */}
            <div className='flex justify-center sm:justify-start'>
              <button 
                type='submit' 
                className='bg-[#ffd061] hover:bg-[#f5c84a] cursor-pointer text-black flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-3 rounded-md font-semibold text-sm sm:text-base transition-colors duration-300'
              >
                SEND A MESSAGE
                <span 
                  className='bg-[#383635] inline-block p-1 rounded-sm hover:rotate-45 transition-transform duration-300'
                >
                  <FiArrowUpRight className='text-white w-4 h-4 sm:w-5 sm:h-5' />
                </span>
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
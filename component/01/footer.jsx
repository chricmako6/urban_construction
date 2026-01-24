import React from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { FiArrowUpRight } from 'react-icons/fi';
import { IoLogoYoutube } from 'react-icons/io5';
import { MdOutlineLocationOn, MdOutlinePhoneIphone, MdOutlineMailOutline } from 'react-icons/md';

function Footer() {
  return (
    <footer className="w-full bg-[#1a1a1a] text-white py-8 sm:py-10 md:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
          {/* Logo & Description */}
          <div className="sm:text-left">
            <div className="flex items-center gap-2 mb-3 sm:mb-4 sm:justify-start">
              <div className="bg-[#ffd061] text-black font-bold px-3 py-2 rounded">🏢</div>
              <h3 className="font-bold text-base sm:text-lg md:text-xl">URBANBUILD</h3>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-md sm:max-w-none sm:mx-0">
              From project planning to final touches, we offer our clients share their experiences of working with us.
            </p>
          </div>

          {/* Contact */}
          <div className="sm:text-left">
            <h4 className="font-bold text-base sm:text-lg md:text-xl mb-4 sm:mb-6">Contact</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex gap-3 sm:justify-start">
                <MdOutlineLocationOn className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffd061] shrink-0 mt-0.5" />
                <p className="text-gray-400 text-xs sm:text-sm md:text-base">1050 Brisbane Ave, US</p>
              </div>
              <div className="flex gap-3 sm:justify-start">
                <MdOutlinePhoneIphone className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffd061] shrink-0 mt-0.5" />
                <p className="text-gray-400 text-xs sm:text-sm md:text-base">+1(888)000-0000</p>
              </div>
              <div className="flex gap-2.5 sm:justify-start">
                <MdOutlineMailOutline className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffd061] shrink-0 mt-0.5" />
                <p className="text-gray-400 text-xs sm:text-sm md:text-base">email@urbanbuild.com</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="sm:text-left">
            <h4 className="font-bold text-base sm:text-lg md:text-xl mb-3 sm:mb-4">Newsletter</h4>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 max-w-md sm:max-w-none mx-auto sm:mx-0">
              Enter your email to commercial receipt our clients share their experiences of working with us.
            </p>
            <div className="flex sm:flex-row gap-2 max-w-sm sm:max-w-none mx-auto sm:mx-0">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-3 sm:px-4 py-2 text-xs sm:text-sm bg-gray-800 text-white rounded focus:outline-none focus:border-[#ffd061] border border-gray-700"
              />
              <button className='bg-[#ffd061] hover:bg-[#f5c84a] cursor-pointer text-black flex items-center justify-center px-4 py-2 sm:py-1 rounded-md font-semibold transition w-fit md:min-w-11'>
                <FiArrowUpRight className='w-4 h-4 sm:w-5 sm:h-5 text-[#383635] font-bold hover:rotate-45 transition-transform' />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6 sm:my-8"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <p className="text-gray-500 text-xs sm:text-sm md:text-base text-center sm:text-left order-2 sm:order-1">
            Copyright © 2026 UrbanBuild. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6 order-1 sm:order-2">
            <FaFacebookF className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer text-gray-400 hover:text-[#ffd061] transition" />
            <FaXTwitter className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer text-gray-400 hover:text-[#ffd061] transition" />
            <MdOutlineMailOutline className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer text-gray-400 hover:text-[#ffd061] transition" />
            <IoLogoYoutube className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer text-gray-400 hover:text-[#ffd061] transition" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
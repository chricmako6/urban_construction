'use client'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { motion } from 'framer-motion'

function Aboutsession2() {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.7 } }
  }

  return (
    <div className='flex flex-col items-center justify-center px-4 md:px-0'>
      
      {/* MAIN GRID */}
      <div className='flex flex-col md:flex-row mx-auto max-w-5xl w-full gap-5'>
        
        {/* LEFT SIDE */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-4 w-full md:w-1/2"
        >
           
           {/* VISION */}
           <motion.div 
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            className="bg-yellow-200/60 h-37 rounded-xl shadow"
           >
            <div className="px-5 items-center justify-center h-full">
              <button className="text-white font-bold md:text-lg rounded-md bg-[#ffd061] mt-5 py-2 px-6 cursor-pointer">
                Our Vision
              </button>
              <p className="text-[#5e5f61] text-sm md:text-base py-2">
                To be the leading construction company in the region, known for excellence, innovation, and sustainable practices.
              </p>
            </div>
           </motion.div>

           {/* MISSION */}
           <motion.div 
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            className="bg-yellow-200/60 h-37 rounded-xl shadow"
           >
            <div className="px-5 items-center justify-center h-full">
              <button className="text-white font-bold md:text-lg rounded-md bg-[#ffd061] mt-5 py-2 px-6 cursor-pointer">
                Our  Mission
              </button>
              <p className="text-[#5e5f61] text-sm md:text-base py-2">
                Our mission is to deliver high-quality construction projects that exceed client expectations while prioritizing safety, sustainability, and community.
              </p>
            </div>
           </motion.div>

           {/* HISTORY */}
           <motion.div 
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            className="bg-[#ffd061] h-37 rounded-xl shadow"
           >
            <div className="px-5 items-center justify-center h-full">
              <button className="font-bold md:text-lg rounded-md bg-yellow-200/60 mt-5 py-2 px-6 cursor-pointer">
                Our History
              </button>
              <p className="text-[#5e5f61] text-sm md:text-base py-2">
                Jenganasi was founded in 2024 with a vision to build sustainable and innovative construction projects that stand the test of time.
              </p>
            </div>
           </motion.div>

        </motion.div>
    
        {/* RIGHT SIDE */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className='shadow w-full md:w-1/2 h-75 md:h-120 rounded-xl p-5 text-center md:text-right relative overflow-hidden'
          style={{
            backgroundImage: 'url(/assert/about_description.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          
          {/* DARK OVERLAY */}
          <motion.div 
            variants={fadeIn}
            className="absolute inset-0 bg-[#383635]/80 backdrop rounded-xl p-5 shadow-2xl shadow-black/20"
          >
            <h1 className="text-white md:text-3xl text-xl font-bold md:my-5 my-3">
              Our Plan Makes You Feel More Comfortable in Your Construction Journey.
            </h1>
            <p className="text-white text-sm md:text-base md:my-5 my-3">
              At Jenganasi, we are dedicated to transforming visions into reality through exceptional construction services. Our commitment to safety, sustainability, and client satisfaction sets us apart in the industry.
            </p>
          </motion.div>

          {/* BUTTON */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="group justify-center md:justify-end flex top-50 md:top-90 relative"
          >
            <button className='group/btn bg-[#ffd061] shadow hover:bg-[#f5c84a] w-full md:w-42.5 cursor-pointer flex items-center justify-center gap-3 px-5 my-2 py-2 rounded-md font-semibold text-sm sm:text-base mt-4'>
              Contact Us
              <span className='bg-[#383635] inline-block p-1 rounded-sm group-hover/btn:rotate-45 transition-transform duration-300'>
                <FiArrowUpRight className='text-white w-4 sm:w-5 h-4 sm:h-5' />
              </span>
            </button>
          </motion.div>

        </motion.div>

      </div>
    </div>
  )
}

export default Aboutsession2
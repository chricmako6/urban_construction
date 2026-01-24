'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { FaPaintRoller } from 'react-icons/fa';
import { GiBrickWall } from "react-icons/gi";
import { TiSpanner } from "react-icons/ti";
import { PiUserGearFill } from "react-icons/pi";
import { FiArrowUpRight } from 'react-icons/fi';

function PageService() {
  // State to track which service is selected
  const [selectedService, setSelectedService] = useState('construction');

  // Service data
  const services = {
    construction: {
      title: "CONSTRUCTION",
      icon: <GiBrickWall className='w-5 h-5' />,
      description: "Full-service construction from ground up. We handle everything from planning to completion with precision and expertise.",
      features: ["New Builds", "Commercial Construction", "Residential Projects", "Structural Work"]
    },
    renovation: {
      title: "RENOVATION",
      icon: <FaPaintRoller className='w-5 h-5' />,
      description: "Transform your existing space with our renovation services. Modern updates while preserving structural integrity.",
      features: ["Kitchen Remodeling", "Bathroom Updates", "Interior Redesign", "Space Optimization"]
    },
    restoration: {
      title: "RESTORATION",
      icon: <TiSpanner className='w-5 h-5' />,
      description: "Preserve and restore historical or damaged structures with our specialized restoration techniques.",
      features: ["Historical Preservation", "Damage Repair", "Structural Reinforcement", "Heritage Conservation"]
    },
    consulting: {
      title: "CONSULTING",
      icon: <PiUserGearFill className='w-5 h-5' />,
      description: "Expert advice for your construction projects. From planning to execution, we provide comprehensive guidance.",
      features: ["Project Planning", "Budget Analysis", "Material Selection", "Compliance Guidance"]
    }
  };

  // Handle service click
  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  // Get currently selected service
  const currentService = services[selectedService];

    // Animation variants
  const slideUpVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const containerVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className='w-full flex flex-col md:flex-row gap-4 md:gap-5 mx-auto px-4 sm:px-6 md:px-0'>
      {/* SERVICE OPTIONS */}
         <motion.div variants={slideUpVariants} initial="initial" animate="animate" className='flex md:flex-col ml-0 md:ml-55 order-first md:order-0'>
         {Object.entries(services).map(([key, service]) => (
          <motion.div 
            key={key}
            variants={slideUpVariants}
            onClick={() => handleServiceClick(key)}
            whileHover={{ scale: 1.02 }}
            className={`w-full md:w-52.5 flex justify-center md:justify-start md:bg-white mb-3 sm:mb-4 md:mb-6 md:rounded-md md:shadow-md cursor-pointer transition-all duration-300 ${
              selectedService === key 
                ? 'transform scale-[1.02]' 
                : ''
            }`}
          >
            <div className='flex justify-between items-center gap-2'>
              <span className='w-14 sm:w-16 h-14 sm:h-16 bg-[#ffd061] flex justify-center items-center rounded-md md:rounded-l-md'>
                {service.icon}
              </span>
              <h1 className='text-[#5e5f61] hidden md:block font-bold text-sm sm:text-base'>
                {service.title}
              </h1>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* DISPLAYING VIEW */}
      <motion.div 
        variants={slideUpVariants}
        initial="initial"
        animate="animate"
        className='w-full md:w-1/2 bg-white rounded-md shadow-md p-4 sm:p-6 md:p-8'
      >
        <motion.div variants={slideUpVariants} className='flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-6 mb-4 sm:mb-6 md:mb-6'>
          <div className='bg-yellow-500 hidden md:block w-full sm:w-64 md:w-37.5 h-40 sm:h-48 md:h-37.5 shrink-0'>
            image
          </div>
          <div className='flex flex-col justify-start flex-1'>
            <div className='flex items-center gap-2 sm:gap-3 md:gap-3 mb-2 sm:mb-3 md:mb-3'>
              <span className='w-10 sm:w-12 md:w-12 h-10 sm:h-12 md:h-12 bg-[#ffd061] flex justify-center items-center rounded-md shrink-0'>
               {currentService.icon}
              </span>
              <h2 className='text-lg sm:text-2xl md:text-2xl font-bold text-[#5e5f61]'>{currentService.title} SERVICES</h2>
            </div>
            <p className='text-gray-600 text-sm sm:text-base md:text-md'>
            {currentService.description}
            </p>
          </div>
        </motion.div>
        
        <motion.div variants={slideUpVariants} className='mb-6 flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-6'>
          <div className='bg-yellow-500 w-full sm:w-64 md:w-37.5 h-40 sm:h-48 md:h-37.5 shrink-0'>
            image
          </div>

          <div className='flex flex-col justify-between flex-1'>
            <div>
              <ul className='grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 md:gap-3'>
                {currentService.features.map((feature, index) => (
                  <li key={index} className='flex items-center gap-2 sm:gap-3 md:gap-3 py-1 sm:py-2 md:py-2'>
                    <span className='w-2 h-2 bg-[#ffd061] rounded-full shrink-0'></span>
                    <span className='text-sm sm:text-base text-[#5e5f61]'>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className='bg-[#ffd061] hover:bg-[#f5c84a] w-fit md:w-42.5 cursor-pointer flex items-center gap-2 sm:gap-3 md:gap-3 px-4 sm:px-5 md:px-5 py-2 rounded-md font-semibold text-sm sm:text-base mt-4'>
              Read More
              <span className='bg-[#383635] inline-block p-1 rounded-sm ml-1 sm:ml-2 md:ml-2 hover:rotate-45 transition-transform duration-300'>
                <FiArrowUpRight className='text-white w-4 sm:w-5 md:w-5 h-4 sm:h-5 md:h-5' />
              </span>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default PageService
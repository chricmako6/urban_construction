

//   return (
//     <div className='w-full flex flex-col md:flex-row gap-4 md:gap-5 mx-auto px-4 sm:px-6 md:px-0'>

//       {/* SERVICE OPTIONS */}
//       <motion.div className='flex md:flex-col ml-0 md:ml-55 order-first md:order-0'>
//         {Object.entries(services).map(([key, service]) => (
//           <motion.div 
//             key={key}
//             onClick={() => handleServiceClick(key)}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }} // 🔥 click feel
//             className={`w-full md:w-52.5 flex justify-center md:justify-start md:bg-white mb-3 sm:mb-4 md:mb-6 md:rounded-md md:shadow-md cursor-pointer transition-all duration-300 ${
//               selectedService === key ? 'scale-[1.05]' : ''
//             }`}
//           >
//             <div className='flex justify-between items-center gap-2'>
//               <span className='w-14 sm:w-16 h-14 sm:h-16 bg-[#ffd061] flex justify-center items-center rounded-md md:rounded-l-md'>
//                 {service.icon}
//               </span>
//               <h1 className='text-[#5e5f61] hidden md:block font-bold text-sm sm:text-base'>
//                 {service.title}
//               </h1>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* DISPLAY SECTION WITH SMOOTH SWITCH */}
      // <AnimatePresence mode="wait">
      //   <motion.div
      //     key={selectedService} // 🔥 triggers animation
      //     initial={{ opacity: 0, y: 40, scale: 0.98 }}
      //     animate={{ opacity: 1, y: 0, scale: 1 }}
      //     exit={{ opacity: 0, y: -40, scale: 0.98 }}
      //     transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
      //     className='w-full md:w-1/2 bg-white rounded-md shadow-md p-4 sm:p-6 md:p-8'
      //   >

      //     {/* TOP SECTION */}
      //     <div className='flex flex-col md:flex-row gap-4 sm:gap-6 mb-6'>
      //       <motion.img
      //         key={currentService.image1}
      //         src={currentService.image1}
      //         alt={currentService.title}
      //         initial={{ opacity: 0, scale: 1.1 }}
      //         animate={{ opacity: 1, scale: 1 }}
      //         transition={{ duration: 0.6 }}
      //         className="hidden md:block w-full sm:w-64 md:w-80 h-48 md:h-64 object-cover object-center rounded-xl shadow-lg"
      //       />

      //       <div className='flex flex-col justify-start flex-1'>
      //         <div className='flex items-center gap-3 mb-3'>
      //           <span className='w-12 h-12 bg-[#ffd061] flex justify-center items-center rounded-md shrink-0'>
      //             {currentService.icon}
      //           </span>
      //           <h2 className='text-lg sm:text-2xl font-bold text-[#5e5f61]'>
      //             {currentService.title} SERVICES
      //           </h2>
      //         </div>

      //         <motion.p
      //           key={currentService.description}
      //           initial={{ opacity: 0 }}
      //           animate={{ opacity: 1 }}
      //           transition={{ delay: 0.2 }}
      //           className='text-gray-600 text-sm sm:text-base'
      //         >
      //           {currentService.description}
      //         </motion.p>
      //       </div>
      //     </div>

      //     {/* BOTTOM SECTION */}
      //     <div className='flex flex-col md:flex-row gap-4 sm:gap-6'>

      //       <motion.img
      //         key={currentService.image2}
      //         src={currentService.image2}
      //         alt={currentService.title}
      //         initial={{ opacity: 0, scale: 1.1 }}
      //         animate={{ opacity: 1, scale: 1 }}
      //         transition={{ duration: 0.6 }}
      //         className="hidden md:block w-full sm:w-64 md:w-80 h-48 md:h-64 object-cover object-center rounded-xl shadow-lg"
      //       />

      //       <div className='flex flex-col justify-between flex-1'>
      //         <ul className='grid grid-cols-1 md:grid-cols-2 gap-3'>
      //           {currentService.features.map((feature, index) => (
      //             <li key={index} className='flex items-center gap-3 py-2'>
      //               <span className='w-2 h-2 bg-[#ffd061] rounded-full'></span>
      //               <span className='text-[#5e5f61]'>{feature}</span>
      //             </li>
      //           ))}
      //         </ul>

      //         <button className='group/btn bg-[#ffd061] shadow hover:bg-[#f5c84a] w-full md:w-42.5 cursor-pointer flex justify-center items-center gap-3 px-5 py-2 rounded-md font-semibold mt-4'>
      //           <Link href="services">Read More</Link>
      //           <span className='bg-[#383635] inline-block p-1 rounded-sm group-hover/btn:rotate-45 transition-transform duration-300'>
      //             <FiArrowUpRight className='text-white w-5 h-5' />
      //           </span>
      //         </button>
      //       </div>

      //     </div>
      //   </motion.div>
      // </AnimatePresence>
//     </div>
//   )
// }

// export default PageService;








'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
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
      image1: "/assert/service-construction1.jpg",
      image2: "/assert/service-construction2.jpg",
      icon: <GiBrickWall className='w-5 h-5' />,
      description: "Full-service construction from ground up. We handle everything from planning to completion with precision and expertise.",
      features: ["New Builds", "Commercial Construction", "Residential Projects", "Structural Work"]
    },
    renovation: {
      title: "RENOVATION",
       image1: "/assert/service-renovation1.jpg",
       image2: "/assert/service-renovation2.jpg",
      icon: <FaPaintRoller className='w-5 h-5' />,
      description: "Transform your existing space with our renovation services. Modern updates while preserving structural integrity.",
      features: ["Kitchen Remodeling", "Bathroom Updates", "Interior Redesign", "Space Optimization"]
    },
    restoration: {
      title: "RESTORATION",
       image1: "/assert/service-restore1.jpg",
       image2: "/assert/service-restore2.jpg",
      icon: <TiSpanner className='w-5 h-5' />,
      description: "Preserve and restore historical or damaged structures with our specialized restoration techniques.",
      features: ["Historical Preservation", "Damage Repair", "Structural Reinforcement", "Heritage Conservation"]
    },
    consulting: {
      title: "CONSULTING",
       image1: "/assert/service-consulting1.jpg",
       image2: "/assert/service-consulting2.jpg",
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
    <div className='w-full py-3 md:py-5 flex flex-col md:flex-row gap-4 md:gap-5 mx-auto px-4 sm:px-6 md:px-0'>
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
            <AnimatePresence mode="wait">
        <motion.div
          key={selectedService} // 🔥 triggers animation
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -40, scale: 0.98 }}
          transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
          className='w-full md:w-1/2 bg-white rounded-md shadow-md p-4 sm:p-6 md:p-8'
        >

          {/* TOP SECTION */}
          <div className='flex flex-col md:flex-row gap-4 sm:gap-6 mb-6'>
            <motion.img
              key={currentService.image1}
              src={currentService.image1}
              alt={currentService.title}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="hidden md:block w-full sm:w-64 md:w-80 h-48 md:h-64 object-cover object-center rounded-xl shadow-lg"
            />

            <div className='flex flex-col justify-start flex-1'>
              <div className='flex items-center gap-3 mb-3'>
                <span className='w-12 h-12 bg-[#ffd061] flex justify-center items-center rounded-md shrink-0'>
                  {currentService.icon}
                </span>
                <h2 className='text-lg sm:text-2xl font-bold text-[#5e5f61]'>
                  {currentService.title} SERVICES
                </h2>
              </div>

              <motion.p
                key={currentService.description}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className='text-gray-600 text-sm sm:text-base'
              >
                {currentService.description}
              </motion.p>
            </div>
          </div>

          {/* BOTTOM SECTION */}
          <div className='flex flex-col md:flex-row gap-4 sm:gap-6'>

            <motion.img
              key={currentService.image2}
              src={currentService.image2}
              alt={currentService.title}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="hidden md:block w-full sm:w-64 md:w-80 h-48 md:h-64 object-cover object-center rounded-xl shadow-lg"
            />

            <div className='flex flex-col justify-between flex-1'>
              <ul className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                {currentService.features.map((feature, index) => (
                  <li key={index} className='flex items-center gap-3 py-2'>
                    <span className='w-2 h-2 bg-[#ffd061] rounded-full'></span>
                    <span className='text-[#5e5f61]'>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className='group/btn bg-[#ffd061] shadow hover:bg-[#f5c84a] w-full md:w-42.5 cursor-pointer flex justify-center items-center gap-3 px-5 py-2 rounded-md font-semibold mt-4'>
                <Link href="services">Read More</Link>
                <span className='bg-[#383635] inline-block p-1 rounded-sm group-hover/btn:rotate-45 transition-transform duration-300'>
                  <FiArrowUpRight className='text-white w-5 h-5' />
                </span>
              </button>
            </div>

          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default PageService
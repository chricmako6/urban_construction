'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { FaStarHalfAlt } from "react-icons/fa";
import { FiArrowUpRight } from 'react-icons/fi';

function Project() {

  // BACKGROUND DATA (image + label)
  const slides = [
  { 
    img: "/assert/ourwork-restoration.jpg", 
    title: "RESTORATION", 
    description: "We specialize in carefully restoring structures to their original state by preserving architectural details, historical character, and cultural significance. Our approach combines modern engineering techniques with traditional craftsmanship to reinforce durability while maintaining authenticity and long-term structural integrity."
  },
  { 
    img: "/assert/ourwork-construction.jpg", 
    title: "CONSTRUCTION",
    description: "Our construction services focus on delivering strong, reliable, and high-quality structures from the ground up. We rebuild and develop projects using advanced materials, precise planning, and expert execution to ensure safety, efficiency, and long-lasting performance that meets modern standards."
  },
  { 
    img: "/assert/ourwork-renovation.jpg", 
    title: "RENOVATION",
    description: "We transform existing spaces by upgrading design, functionality, and overall comfort while preserving the building’s core structure. Our renovation solutions enhance aesthetics, improve usability, and introduce modern features that align with current lifestyles and client expectations."
  },
];

  const [index, setIndex] = useState(0);

  // AUTO CHANGE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id='projects' className='py-10 md:py-20 w-full justify-center'>
      
      {/* HEADER */}
      <div className='w-full px-4'>
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className='text-center text-[10px] md:text-[15px] gap-2 text-[#5e5f61] font-bold md:py-5 py-3 flex items-center justify-center'
        >
          <FaStarHalfAlt className='w-3.5 h-3.5 text-[#ffd061]'/> 
          OUR WORK 
          <FaStarHalfAlt className='w-3.5 h-3.5 text-[#ffd061]'/>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className='text-center'
        >
          <h2 className='md:text-3xl font-bold'>
            Discover Our Recent Projects
          </h2>

          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className='max-w-2xl mx-auto text-md text-[#5e5f61] md:py-5 py-3'
          >
            Providing expert services designer to deliver quality and innovation in every 
            project we undertake, ensuring client satisfaction and lasting value.
          </motion.p>
        </motion.div>
      </div>

      {/* BACKGROUND SLIDER */}
      <div className='shadow-md  w-full min-h-screen lg:h-screen relative overflow-hidden'>

        {/* IMAGES */}
        {slides.map((slide, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: i === index ? 1 : 0,
              scale: i === index ? 1 : 1.1,
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.img})`,
            }}
          />
        ))}

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* BUTTON WITH TEXT ANIMATION */}
       <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        flex flex-col items-center justify-center text-center gap-4 
                        p-6 md:p-10 max-w-2xl
                        bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl"
            >
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-white text-md md:text-lg leading-relaxed"
            >
                {slides[index].description}
            </motion.p>

            <button className="group/btn bg-[#ffd061] shadow hover:bg-[#f5c84a] cursor-pointer text-black flex items-center px-6 py-3 rounded-md font-semibold">
                
                {slides[index].title}

                <span className="bg-[#383635] inline-block p-1 rounded-sm ml-4 group-hover/btn:rotate-45 transition-transform duration-300">  
                <FiArrowUpRight className="text-white w-5 h-5" />
                </span>
            </button>
            </motion.div>

      </div>
    </div>
  )
}

export default Project
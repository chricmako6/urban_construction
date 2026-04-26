"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaStarHalfAlt } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// SWIPER STYLES
import "swiper/css";

function Project() {
  const slides = [
    {
      img: "/assert/ourwork-restoration.jpg",
      title: "RESTORATION",
      description:
        "We specialize in carefully restoring structures to their original state by preserving architectural details, historical character, and cultural significance. Our approach combines modern engineering techniques with traditional craftsmanship to reinforce durability while maintaining authenticity and long-term structural integrity.",
    },
    {
      img: "/assert/ourwork-construction.jpg",
      title: "CONSTRUCTION",
      description:
        "Our construction services focus on delivering strong, reliable, and high-quality structures from the ground up. We rebuild and develop projects using advanced materials, precise planning, and expert execution to ensure safety, efficiency, and long-lasting performance that meets modern standards.",
    },
    {
      img: "/assert/ourwork-renovation.jpg",
      title: "RENOVATION",
      description:
        "We transform existing spaces by upgrading design, functionality, and overall comfort while preserving the building’s core structure. Our renovation solutions enhance aesthetics, improve usability, and introduce modern features that align with current lifestyles and client expectations.",
    },
  ];

  return (
    <div id="projects" className="pt-10 md:pt-20 w-full justify-center">
      {/* HEADER */}
      <div className="w-full px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[10px] md:text-[15px] gap-2 text-[#5e5f61] font-bold md:py-5 py-3 flex items-center justify-center"
        >
          <FaStarHalfAlt className="w-3.5 h-3.5 text-[#ffd061]" />
          OUR WORK
          <FaStarHalfAlt className="w-3.5 h-3.5 text-[#ffd061]" />
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="md:text-3xl font-bold">
            Discover Our Recent Projects
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-md text-[#5e5f61] md:py-5 py-3"
          >
            Providing expert services designer to deliver quality and innovation
            in every project we undertake, ensuring client satisfaction and
            lasting value.
          </motion.p>
        </motion.div>
      </div>

      {/* SWIPER SLIDER */}
      <div className="shadow-md w-full pb-10 md:pb-20 relative overflow-hidden px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // pause on hover
          }}
          speed={1200} // smooth like your slick
          breakpoints={{
            0: {
              slidesPerView: 1, // mobile
            },
            768: {
              slidesPerView: 2, // tablet
            },
            1024: {
              slidesPerView: 3, // desktop
            },
          }}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="px-2 w-full p-5">
                <div
                  className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden group"
                  style={{
                    backgroundImage: `url(${slide.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300"></div>

                  {/* CONTENT */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-8">
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="text-white text-sm md:text-base leading-relaxed mb-4"
                    >
                      {slide.description}
                    </motion.p>

                    <button className="group/btn bg-[#ffd061] shadow hover:bg-[#f5c84a] cursor-pointer text-black flex items-center px-5 py-2 rounded-md font-semibold">
                      {slide.title}

                      <span className="bg-[#383635] inline-block p-1 rounded-sm ml-3 group-hover/btn:rotate-45 transition-transform duration-300">
                        <FiArrowUpRight className="text-white w-4 h-4" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Project;
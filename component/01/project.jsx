"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaStarHalfAlt } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import axios from "axios";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const API = "https://jenganasisi-backend.vercel.app/api/projects";

function Project() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  //  FETCH DATA
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(API);

        const data = res.data?.projects || res.data;

        //  MAP YOUR API → UI FORMAT
        const formatted = data.map((item) => ({
          img: item.images?.[0] || "/placeholder.png",
          title: item.name || "PROJECT",
          solution: item.solution,
          description:
            item.description || "No description available for this project.",
        }));

        setSlides(formatted);
      } catch (error) {
        console.error("API error:", error);

        // FALLBACK (so UI never breaks)
        setSlides([
          {
            img: "item.images || /placeholder.png",
            title: "RESTORATION",
            solution: "solution",
            description: "Fallback content",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

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

      {/* SLIDER */}
      <div className="shadow-md w-full pb-10 md:pb-20 relative overflow-hidden px-4">
        {loading ? (
          // LOADING STATE (nice UX)
          <div className="flex justify-center items-center h-[300px]">
            <div className="w-10 h-10 border-4 border-[#ffd061] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={1200}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
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
                    {/* OVERLAY (better readability) */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 group-hover:from-black/70 transition duration-300"></div>


                    {/* CONTENT */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-10 z-10">
                      {/* TITLE */}
                    <div className="absolute top-0 left-0 right-0 p-6 md:p-8 z-10">
                      <h3 className="text-white text-lg md:text-2xl font-bold tracking-wide">
                        {slide.title}
                      </h3>
                    </div>

                      {/* DESCRIPTION */}
                      <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-white text-sm md:text-base leading-relaxed max-w-md md:max-w-lg mb-6"
                      >
                        {slide.description}
                      </motion.p>

                      {/* BUTTON */}
                      <button className="group/btn bg-[#ffd061] shadow hover:bg-[#f5c84a] cursor-pointer text-black flex items-center px-6 py-3 rounded-md font-semibold transition-all duration-300">
                        {slide.solution || "Explore"}

                        <span className="bg-[#383635] inline-flex items-center justify-center p-1.5 rounded-sm ml-3 group-hover/btn:rotate-45 transition-transform duration-300">
                          <FiArrowUpRight className="text-white w-4 h-4" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}

export default Project;

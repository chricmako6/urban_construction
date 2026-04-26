"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoHome } from "react-icons/io5";
import axios from "axios";
import Pagination from "@/component/03/pagination";
import Navbar from "@/component/01/navbar";
import Footer from "@/component/01/footer";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FiArrowUpRight } from "react-icons/fi";

const API = "https://jenganasisi-backend.vercel.app/api/projects";

function PageProject() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const itemsPerPage = 10;

  // API CACHING
  useEffect(() => {
    const cached = sessionStorage.getItem("projects");

    if (cached) {
      setProjects(JSON.parse(cached));
      setLoading(false);
      return;
    }

    const fetchProjects = async () => {
      try {
        const res = await axios.get(API);
        const data = res.data?.projects || res.data;
        setProjects(data);
        sessionStorage.setItem("projects", JSON.stringify(data));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // FILTERING
  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredItems =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const sortedItems = [...filteredItems];

  // PAGINATION LOGIC
  const totalPages = Math.ceil(sortedItems.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const currentItems = sortedItems.slice(
    indexOfLastItem - itemsPerPage,
    indexOfLastItem,
  );

  const featuredProject = selectedProject || currentItems[0];
  const gridProjects = currentItems.slice(0, 6);

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    window.scrollTo({ top: 200, behavior: "smooth" });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSelectedProject(null);
  };

  // IMAGE FALLBACK
  const ImageWithFallback = ({ src }) => {
    const [img, setImg] = useState(src);

    return (
      <img
        src={img || "/placeholder.png"}
        onError={() => setImg("/placeholder.png")}
        className="w-full h-full object-cover"
      />
    );
  };

  return (
    <div className="w-full">
      <Navbar />

      {/* HERO */}
      <div
        className="py-10 md:py-20 w-full shadow-xl flex flex-col justify-center items-center relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(/assert/03.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-black/60"
          animate={{ opacity: [0.6, 0.8, 0.6] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-white relative z-10"
        >
          OUR PROJECTS
        </motion.h1>

        <div className="my-5 relative z-10">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-[#ffd061]"
            >
              <IoHome className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </Link>
            <span>/</span>
            <span className="text-[#ffd061] font-semibold">Our Projects</span>
          </div>
        </div>
      </div>

      {/* PROJECT SHOWCASE */}
      <div className="w-full bg-[#f8f9fb] py-10 md:py-20 px-4 md:px-10">
        {/* FILTER */}
        <div className="flex flex-wrap justify-center gap-3 py-6">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                selectedCategory === cat
                  ? "bg-[#ffd061] text-black"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          {/* LEFT FEATURED */}
          <motion.div className="relative rounded-xl overflow-hidden shadow-lg">
            {/* Skeleton */}
            {loading ? (
              <div className="w-full h-full shimmer" />
            ) : (
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 3000 }}
                loop
                className="h-full"
              >
                {featuredProject?.images?.map((img, i) => (
                  <SwiperSlide key={i}>
                    <ImageWithFallback src={img} />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}

            {/* Overlay Content */}
            {!loading && (
              <div className="absolute top-5 left-5 text-white z-50">
                <p className="text-xl md:text-2xl font-bold">
                  {featuredProject?.name}
                </p>
                <p className="text-sm text-gray-200">
                  {featuredProject?.category}
                </p>
              </div>
            )}

            {/* Description */}
            <div className="absolute bottom-0 left-0 right-0 z-50 bg-white p-6">
              {loading ? (
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 animate-pulse rounded"></div>
                  <div className="h-3 bg-gray-200 animate-pulse rounded w-5/6"></div>
                </div>
              ) : (
                <p className="text-gray-600 text-sm">
                  {featuredProject?.description}
                </p>
              )}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="grid gap-4">
            {/* GRID PROJECTS */}
            <div className="grid grid-cols-2 gap-4">
              {(loading ? Array(4).fill(0) : gridProjects).map((item, i) => (
                <motion.div
                  key={i}
                  onClick={() => !loading && handleSelectProject(item)}
                  whileHover={{ y: -5 }}
                  className="cursor-pointer bg-white rounded-xl shadow-md p-3"
                >
                  <div className="h-28 rounded-md overflow-hidden mb-2">
                    {loading ? (
                      <div className="w-full h-full shimmer" />
                    ) : (
                      <ImageWithFallback src={item?.images?.[0]} />
                    )}
                  </div>

                  <div className="text-xs font-semibold bg-[#ffd061] px-2 py-1 rounded w-fit">
                    {loading ? "Loading..." : item?.name}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* PAGINATION */}
            {!loading && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}

            {/* CTA */}
            <motion.div className="relative rounded-xl overflow-hidden">
              {loading ? (
                <div className="h-40 bg-gray-200 animate-pulse rounded-xl" />
              ) : (
                <>
                  <img
                    src={
                      currentItems[5]?.images?.[0] ||
                      "/assert/hero2.jpg"
                    }
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-start p-5 py-3 md:py-5">
                    <h3 className="text-white font-bold text-lg md:text-xl py-3 md:py-5">
                      {currentItems[5]?.name || "Start Your Project With Us"}
                    </h3>

                    {/* Animated button */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: 0.3,
                      }}
                      className="group flex justify-center md:justify-start"
                    >
                      <button className="group/btn bg-[#ffd061] shadow hover:bg-[#f5c84a] cursor-pointer text-black flex items-center gap-3 px-4 sm:px-5 py-2 rounded-md font-semibold text-sm sm:text-base">
                        <Link href="/about">GET STARTED</Link>
                        <motion.span className="bg-[#383635] inline-block p-1 rounded-sm ml-2 group-hover/btn:rotate-45 transition-transform duration-300">
                          <FiArrowUpRight className="text-white w-5 h-5" />
                        </motion.span>
                      </button>
                    </motion.div>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PageProject;

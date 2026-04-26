"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/component/01/navbar";
import { IoHome } from "react-icons/io5";
import { BiArrowToTop } from "react-icons/bi";
import Aboutsession4 from "@/component/02/aboutsession4";
import Footer from "@/component/01/footer";

function PageProject() {
  return (
    <div className="w-full">
      <Navbar />
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
        {/* subtle animated overlay glow */}
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-black/60"
          animate={{ opacity: [0.6, 0.8, 0.6] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* CONTENT */}
        <motion.h1
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-white relative z-10 tracking-wide"
        >
          OUR PROJECTS
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center items-center my-5 relative z-10"
        >
          <div className="flex items-center gap-2 text-sm text-white/80">
            {/* HOME */}
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-[#ffd061] transition-colors duration-300"
            >
              <IoHome className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </Link>

            {/* SEPARATOR */}
            <span className="text-white/50">/</span>

            {/* CURRENT */}
            <span className="text-[#ffd061] font-semibold">Our Projects</span>
          </div>
        </motion.div>

        {/* soft floating highlight line */}
        <motion.div
          className="absolute bottom-4 w-20 h-0.5 bg-[#ffd061] rounded-full"
          animate={{ scaleX: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      
    </div>
  );
}

export default PageProject;

"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Counting() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  // Counter component
  const Counter = ({ value, suffix = "" }) => {
    const motionValue = useMotionValue(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (inView) {
        // Animate from 0 -> value
        const controls = animate(motionValue, value, {
          duration: 2,
          ease: "easeIn",
          onUpdate: (latest) => {
            setCount(Math.round(latest)); // Update state with numeric value
          },
        });

        return () => controls.stop();
      }
    }, [inView, value, motionValue]);

    return (
      <motion.h1 className="text-white font-bold text-2xl sm:text-3xl md:text-3xl">
        {count}
        {suffix}
      </motion.h1>
    );
  };

  return (
    <div
      ref={ref}
      className="w-full py-10 md:py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 bg-[#383635] gap-4 md:gap-3 px-6 md:px-0 mx-auto"
    >
      <div className="flex gap-5 md:gap-45 justify-center">
        <div className="text-center">
          <Counter value={100} suffix="%" />
          <p className="text-gray-400 text-sm sm:text-base">Client Satisfaction</p>
        </div>
        <div className="text-center">
          <Counter value={150} suffix="+" />
          <p className="text-gray-400 text-sm sm:text-base">Projects Completed</p>
        </div>
      </div>
      <div className="flex gap-5 md:gap-45 justify-center">
        <div className="text-center">
          <Counter value={50} suffix="+" />
          <p className="text-gray-400 text-sm sm:text-base">Expert Employees</p>
        </div>
        <div className="text-center">
          <Counter value={25} suffix="+" />
          <p className="text-gray-400 text-sm sm:text-base">Years of Experience</p>
        </div>
      </div>
    </div>
  );
}

export default Counting;
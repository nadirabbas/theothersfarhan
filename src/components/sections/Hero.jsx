"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { greetings } from "@/lib/greetings";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import mainbg from "../../assets/user-images/AimainNobg.png";

// Only one Hero export, manages its own greeting state
export const Hero = () => {
  // Internal state for cycling greetings
  const [currentGreeting, setCurrentGreeting] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#111] [background:radial-gradient(circle_at_top_right,_#00c2c9_5%,_#111_35%)] w-full">
      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 hero-pt-10px w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 items-center">
          {/* Left Column: Text */}
          <div className="text-center md:text-left lg:ml-15 pt-14 md:pt-1 lg:pt-0">
            {/* Rotating Greetings */}
            <div className="relative h-12 overflow-hidden pt-[10px] sm:pt-0">
              {greetings.map((g, idx) => (
                <p
                  key={g.language + idx}
                  className={` absolute inset-0 opacity-1 transition-opacity duration-1300 text-lg sm:text-xl md:text-xl lg:text-2xl font-light text-gray-300 flex items-center ${
                    idx === currentGreeting ? "opacity-100" : ""
                  }`}
                >
                  {g.text}
                </p>
              ))}
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 max-w-lg text-left"
            >
              <span className="block text-2xl sm:text-3xl md:text-4xl font-bold">
                Professional Video Editor & Content Creator
              </span>
              <br />
              <span className="text-gray-300 font-semibold">10M+ Views</span> •{" "}
              <span className="text-gray-300 font-semibold">100+ Channels</span> •{" "}
              <span className="text-gray-300 font-semibold">5 Years Experience</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex gap-4 justify-center md:justify-start items-center mb-4"
            >
              <a
                href="#services"
                className="px-3 py-1.5 md:px-8 md:py-4 lg:px-8 lg:py-4  bg-[#01a9af] hover:bg-[#03959b] text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-3 py-1.5 md:px-8 md:py-4 lg:px-8 lg:py-4 bg-[#01a9af] hover:bg-[#03959b] text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="flex justify-center md:justify-end lg:mr-12 gap-16"
          >
            <div className="w-full rounded-2xl overflow-hidden flex items-center justify-center">
              <Image
                src={mainbg}
                alt="Main Hero Background"
                className="lg:w-[90%] object-contain [mask-image:linear-gradient(to_top,transparent_0%,black_50%)] [-webkit-mask-image:linear-gradient(to_top,transparent_0%,black_50%)]"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-gray-300" />
      </motion.div>
    </section>
  );
};

"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  theme: "dark" | "light";
  onExploreClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ theme, onExploreClick }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 transition-all duration-1000 ${
            theme === "dark"
              ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
              : "bg-gradient-to-br from-white via-slate-50 to-white"
          }`}
        />

        {/* Animated orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full filter blur-3xl opacity-10"
          style={{
            background:
              theme === "dark"
                ? "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)",
          }}
          animate={{
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full filter blur-3xl opacity-10"
          style={{
            background:
              theme === "dark"
                ? "radial-gradient(circle, rgba(20, 184, 166, 0.4) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(20, 184, 166, 0.2) 0%, transparent 70%)",
          }}
          animate={{
            x: -mousePosition.x * 2,
            y: -mousePosition.y * 2,
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Greeting */}
          <motion.p
            className={`text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-6 sm:mb-8 font-light ${
              theme === "dark" ? "text-blue-400/80" : "text-blue-600/80"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Welcome to my portfolio
          </motion.p>

          {/* Name */}
          <motion.h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight mb-4 sm:mb-6 tracking-tight leading-[1.1] ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Saketh
            <br />
            <span className="font-light bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Yalamanchili
            </span>
          </motion.h1>

          {/* Roles */}
          <motion.div
            className={`flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 text-xs sm:text-sm md:text-base font-light ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="flex items-center gap-2">
              <motion.span
                className="w-1 h-1 rounded-full bg-blue-500"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Data Scientist
            </span>
            <span className="flex items-center gap-2">
              <motion.span
                className="w-1 h-1 rounded-full bg-cyan-500"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              />
              Software Developer
            </span>
            <span className="flex items-center gap-2">
              <motion.span
                className="w-1 h-1 rounded-full bg-teal-500"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              />
              AR Creator
            </span>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-12 max-w-3xl mx-auto mb-10 sm:mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight mb-1 sm:mb-2 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                150B+
              </motion.div>
              <div
                className={`text-[10px] sm:text-xs md:text-sm font-light tracking-wider ${
                  theme === "dark" ? "text-gray-500" : "text-gray-600"
                }`}
              >
                Total Views
              </div>
            </motion.div>

            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight mb-1 sm:mb-2 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                750K+
              </motion.div>
              <div
                className={`text-[10px] sm:text-xs md:text-sm font-light tracking-wider ${
                  theme === "dark" ? "text-gray-500" : "text-gray-600"
                }`}
              >
                Followers
              </div>
            </motion.div>

            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight mb-1 sm:mb-2 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                4.0
              </motion.div>
              <div
                className={`text-[10px] sm:text-xs md:text-sm font-light tracking-wider ${
                  theme === "dark" ? "text-gray-500" : "text-gray-600"
                }`}
              >
                GPA
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            onClick={onExploreClick}
            className={`group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-3 sm:py-5 rounded-full overflow-hidden transition-all duration-500 border text-sm sm:text-base ${
              theme === "dark"
                ? "bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20 backdrop-blur-sm"
                : "bg-gray-900/5 hover:bg-gray-900/10 border-gray-900/10 hover:border-gray-900/20 backdrop-blur-sm"
            }`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span
              className={`relative z-10 font-light tracking-wide ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Explore My Work
            </span>
            <motion.span
              className={theme === "dark" ? "text-white" : "text-gray-900"}
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 1.2, duration: 2, repeat: Infinity }}
        >
          <ChevronDown
            className={`w-5 h-5 ${
              theme === "dark" ? "text-gray-600" : "text-gray-400"
            }`}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

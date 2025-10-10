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

  // Counter animation hook
  const useCounter = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      let startTime: number;
      let animationFrame: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) animationFrame = requestAnimationFrame(animate);
      };
      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);
    return count;
  };

  const viewsCount = useCounter(150);
  const followersCount = useCounter(750);
  const lensesCount = useCounter(300);
  const gpaCount = useCounter(40) / 10;

  const stats = [
    { value: `${viewsCount}B+`, label: "Total Views", delay: 0 },
    { value: `${followersCount}K+`, label: "Followers", delay: 0.1 },
    { value: `${lensesCount}+`, label: "AR Lenses", delay: 0.2 },
    { value: gpaCount.toFixed(1), label: "GPA", delay: 0.2 },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 transition-all duration-1000 ${
            theme === "dark"
              ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
              : "bg-gradient-to-br from-white via-slate-50 to-white"
          }`}
        />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full filter blur-3xl opacity-10"
          style={{
            background:
              theme === "dark"
                ? "radial-gradient(circle, rgba(0, 123, 255, 0.4) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(0, 123, 255, 0.2) 0%, transparent 70%)",
          }}
          animate={{
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full filter blur-3xl opacity-10"
          style={{
            background:
              theme === "dark"
                ? "radial-gradient(circle, rgba(0, 123, 255, 0.3) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(0, 123, 255, 0.15) 0%, transparent 70%)",
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Subtitle */}
          <motion.p
            className={`text-xs sm:text-sm tracking-[0.3em] uppercase mb-8 font-light ${
              theme === "dark" ? "text-blue-400/70" : "text-blue-600/70"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Data Scientist • Software Developer • AR Creator
          </motion.p>

          {/* Name (Two Lines) */}
          <div className="mb-10 md:mb-12 px-2 sm:px-4 max-w-[90vw] mx-auto">
            <h1
              className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-tight text-balance ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="block"
              >
                SAKETH
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="block bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text"
              >
                YALAMANCHILI
              </motion.span>
            </h1>
          </div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:flex md:justify-center gap-4 md:gap-6 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className={`relative p-6 md:p-8 rounded-2xl backdrop-blur-xl border transition-all duration-500 group ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                    : "bg-gray-900/5 border-gray-900/10 hover:bg-gray-900/10 hover:border-gray-900/20"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + stat.delay, duration: 0.6 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow:
                    theme === "dark"
                      ? "0 20px 40px rgba(0, 123, 255, 0.2)"
                      : "0 20px 40px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative z-10">
                  <motion.div
                    className={`text-3xl md:text-4xl lg:text-5xl font-extralight mb-2 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {stat.value}
                  </motion.div>
                  <div
                    className={`text-xs md:text-sm font-light tracking-wider uppercase ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.button
            onClick={onExploreClick}
            className={`relative inline-flex items-center gap-3 px-8 md:px-12 py-4 md:py-5 rounded-full overflow-hidden transition-all duration-500 border text-sm md:text-base font-light tracking-wide min-h-[44px] min-w-[44px] ${
              theme === "dark"
                ? "bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20 text-white backdrop-blur-xl"
                : "bg-gray-900/5 hover:bg-gray-900/10 border-gray-900/10 hover:border-gray-900/20 text-gray-900 backdrop-blur-xl"
            }`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            whileHover={{
              scale: 1.05,
              boxShadow:
                theme === "dark"
                  ? "0 20px 40px rgba(0, 123, 255, 0.3)"
                  : "0 20px 40px rgba(0, 0, 0, 0.15)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Explore My Work</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 2, duration: 2, repeat: Infinity }}
        >
          <ChevronDown
            className={`w-5 h-5 ${
              theme === "dark" ? "text-gray-500" : "text-gray-400"
            }`}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

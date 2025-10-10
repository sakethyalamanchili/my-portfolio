"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <section
      className={`min-h-screen flex flex-col justify-center items-center text-center px-4 transition-colors duration-500 ${
        theme === "dark" ? "bg-slate-950 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="mb-6 text-xs sm:text-sm md:text-base tracking-widest uppercase text-gray-400"
      >
        Data Scientist • Software Developer • AR Creator
      </motion.p>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`font-light tracking-tight leading-tight text-balance break-words 
        text-5xl sm:text-6xl md:text-7xl lg:text-8xl`}
      >
        <span className="block font-light">SAKETH</span>
        <span
          className={`block font-semibold ${
            theme === "dark" ? "text-blue-400" : "text-blue-600"
          }`}
        >
          YALAMANCHILI
        </span>
      </motion.h1>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
      >
        {[
          { value: "150B+", label: "Total Views" },
          { value: "750K+", label: "Followers" },
          { value: "300+", label: "AR Lenses" },
          { value: "4.0", label: "GPA" },
        ].map((item, idx) => (
          <div
            key={idx}
            className={`rounded-2xl px-6 py-4 sm:px-8 sm:py-6 shadow-lg backdrop-blur-sm border ${
              theme === "dark"
                ? "bg-slate-800/60 border-slate-700"
                : "bg-slate-100 border-slate-200"
            }`}
          >
            <div className="text-2xl sm:text-3xl font-semibold">
              {item.value}
            </div>
            <div className="text-xs sm:text-sm uppercase text-gray-400 mt-1">
              {item.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="mt-10"
      >
        <Button
          onClick={() => router.push("/work")}
          className={`rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 ${
            theme === "dark"
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          Explore My Work <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </motion.div>
    </section>
  );
}

export default HeroSection;

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronLeft, ChevronRight, Eye, Camera, Zap } from "lucide-react";

interface Filter {
  id: string;
  name: string;
  views: string;
  link: string;
  codeImage: string;
}

interface SnapchatFiltersProps {
  filters: Filter[];
  theme: "light" | "dark";
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const filtersPerPage = 9;

export default function SnapchatFilters({
  filters,
  theme,
}: SnapchatFiltersProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastFilter = currentPage * filtersPerPage;
  const indexOfFirstFilter = indexOfLastFilter - filtersPerPage;
  const currentFilters = filters.slice(indexOfFirstFilter, indexOfLastFilter);
  const totalPages = Math.ceil(filters.length / filtersPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Calculate total views
  const getTotalViews = () => {
    let total = 0;
    filters.forEach(filter => {
      const viewStr = filter.views.replace(/[^0-9.]/g, '');
      const num = parseFloat(viewStr);
      if (filter.views.includes('B')) {
        total += num;
      } else if (filter.views.includes('M')) {
        total += num / 1000;
      }
    });
    return total.toFixed(0);
  };

  return (
    <Card
      className={`backdrop-blur-sm ${
        theme === "dark"
          ? "bg-[#161B22]/80 border-[#30363D] shadow-xl"
          : "bg-white/80 border-[#E5E7EB] shadow-xl"
      }`}
    >
      <CardHeader>
        <div className="flex flex-col gap-2">
          {/* UPDATED TITLE SECTION WITH GRADIENT */}
          <CardTitle className="text-2xl md:text-3xl font-bold flex items-center gap-3">
            <Camera className="w-7 h-7 text-blue-500" />
            <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
              Top Performing AR Lenses
            </span>
          </CardTitle>
          <p className={`text-sm ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}>
            Innovative augmented reality experiences with billions of views worldwide
          </p>
        </div>
      </CardHeader>

      <CardContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {currentFilters.map((filter) => {
            // Determine if it's a top filter
            const isTopFilter = filter.views.includes('B') && parseFloat(filter.views) >= 10;
            
            return (
              <motion.div
                key={filter.id}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Card
                  className={`h-full flex flex-col justify-between group relative overflow-hidden ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-[#21262D] to-[#1C2128] border-[#30363D] hover:border-blue-500/50"
                      : "bg-gradient-to-br from-white to-gray-50 border-[#E5E7EB] hover:border-blue-400/50"
                  } transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20`}
                >
                  {/* Top Filter Badge */}
                  {isTopFilter && (
                    <div className="absolute top-3 right-3 z-20">
                      <motion.div
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <Zap className="w-3 h-3 fill-current" />
                        Top
                      </motion.div>
                    </div>
                  )}

                  {/* Gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  <div className="relative z-10">
                    <CardHeader className="pb-3">
                      <CardTitle
                        className={`text-lg font-bold mb-2 line-clamp-2 group-hover:text-blue-500 transition-colors ${
                          theme === "dark" ? "text-white" : "text-[#1F2937]"
                        }`}
                      >
                        {filter.name}
                      </CardTitle>
                      <CardDescription
                        className={`flex items-center gap-2 text-sm font-medium ${
                          theme === "dark" ? "text-blue-300" : "text-blue-600"
                        }`}
                      >
                        <Eye className="w-4 h-4" />
                        {filter.views}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pb-3">
                      <motion.div
                        className="relative w-full aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 p-4"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.img
                          src={filter.codeImage}
                          alt={`${filter.name} Snapcode`}
                          className="w-full h-full object-contain"
                          loading="lazy"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        />
                        
                        {/* Scan indicator */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                          Scan to Try
                        </div>
                      </motion.div>
                    </CardContent>

                    <CardFooter className="mt-auto p-4">
                      <Button
                        variant="outline"
                        asChild
                        className={`w-full py-2.5 group/button ${
                          theme === "dark"
                            ? "bg-[#30363D] text-white hover:bg-[#3C444D] border-[#30363D] hover:border-blue-500"
                            : "bg-white text-[#1F2937] hover:bg-[#F3F4F6] border-gray-300 hover:border-blue-500"
                        } transition-all duration-200`}
                      >
                        <a
                          href={filter.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          Try Filter
                          <ExternalLink className="w-4 h-4 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5 transition-transform" />
                        </a>
                      </Button>
                    </CardFooter>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row justify-center items-center mt-8 space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 ${
                    theme === "dark"
                      ? "bg-[#30363D] text-white hover:bg-[#3C444D] disabled:opacity-50"
                      : "bg-white text-[#1F2937] hover:bg-[#F3F4F6] disabled:opacity-50"
                  } transition-colors duration-200`}
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Previous
                </Button>
              </motion.div>
              
              <span
                className={`text-sm px-4 font-medium ${
                  theme === "dark" ? "text-white" : "text-[#1F2937]"
                }`}
              >
                Page {currentPage} of {totalPages}
              </span>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 ${
                    theme === "dark"
                      ? "bg-[#30363D] text-white hover:bg-[#3C444D] disabled:opacity-50"
                      : "bg-white text-[#1F2937] hover:bg-[#F3F4F6] disabled:opacity-50"
                  } transition-colors duration-200`}
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </motion.div>
            </div>
          </div>
        )}

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={`mt-8 p-6 rounded-xl border ${
            theme === "dark"
              ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/30"
              : "bg-gradient-to-r from-blue-50 to-purple-50 border-blue-300/30"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className={`text-2xl md:text-3xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                {getTotalViews()}B+
              </div>
              <div className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                Total Views
              </div>
            </div>
            <div>
              <div className={`text-2xl md:text-3xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                {filters.length}+
              </div>
              <div className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                AR Lenses
              </div>
            </div>
            <div>
              <div className={`text-2xl md:text-3xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                750K+
              </div>
              <div className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                Followers
              </div>
            </div>
            <div>
              <div className={`text-2xl md:text-3xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                Global
              </div>
              <div className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                Reach
              </div>
            </div>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
}
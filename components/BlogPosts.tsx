"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardFooter, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  ArrowUpRight,
  BookOpen,
  // TrendingUp removed as it's no longer used
} from "lucide-react";

interface BlogPost {
  guid: string;
  title: string;
  pubDate: string;
  link: string;
}

interface BlogPostsProps {
  posts: BlogPost[];
  theme: "light" | "dark";
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const postsPerPage = 6;

export default function BlogPosts({ posts, theme }: BlogPostsProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
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
          {/* UPDATED TITLE SECTION WITH UNIFIED GRADIENT (Blue -> Cyan -> Purple) */}
          <CardTitle className="text-2xl md:text-3xl font-bold flex items-center gap-3">
            <BookOpen className="w-7 h-7 text-blue-500" />
            <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
              Latest Articles
            </span>
          </CardTitle>
          <p className={`text-sm ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}>
            Insights on data science, machine learning, and technology
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
          {currentPosts.map((post) => ( // Removed unused 'index' parameter here
            <motion.div
              key={post.guid}
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
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                <div className="relative z-10">
                  <CardHeader>
                    {/* REMOVED: Badge for recent posts section */}

                    <CardTitle
                      className={`text-base md:text-lg font-bold leading-tight mb-3 line-clamp-3 group-hover:text-blue-500 transition-colors ${
                        theme === "dark" ? "text-white" : "text-[#1F2937]"
                      }`}
                    >
                      {post.title}
                    </CardTitle>
                    
                    <div
                      className={`flex items-center text-sm ${
                        theme === "dark" ? "text-[#8B949E]" : "text-[#6B7280]"
                      }`}
                    >
                      <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                      <time dateTime={post.pubDate}>{formatDate(post.pubDate)}</time>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className={`text-sm ${
                      theme === "dark" ? "text-[#C9D1D9]" : "text-[#4B5563]"
                    }`}>
                      <p className="line-clamp-2">
                        Click to read the full article on Medium and explore insights about technology, data science, and development.
                      </p>
                    </div>
                  </CardContent>

                  <CardFooter className="mt-auto p-4">
                    <Button
                      variant="outline"
                      asChild
                      className={`w-full py-2 group/button ${
                        theme === "dark"
                          ? "bg-[#30363D] text-white hover:bg-[#3C444D] border-[#30363D] hover:border-blue-500"
                          : "bg-white text-[#1F2937] hover:bg-[#F3F4F6] border-gray-300 hover:border-blue-500"
                      } transition-all duration-200`}
                    >
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        Read Article
                        <ArrowUpRight className="w-4 h-4 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5 transition-transform" />
                      </a>
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            </motion.div>
          ))}
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

        {/* Stats Footer */}
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                {sortedPosts.length}
              </div>
              <div className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                Published Articles
              </div>
            </div>
            <div>
              <div className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                Medium
              </div>
              <div className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                Platform
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                Tech & Data
              </div>
              <div className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                Topics Covered
              </div>
            </div>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
}
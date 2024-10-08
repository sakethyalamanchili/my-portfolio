"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  ArrowUpRight,
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

  return (
    <div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {currentPosts.map((post) => (
          <motion.div
            key={post.guid}
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Card
              className={`h-full flex flex-col justify-between ${
                theme === "dark"
                  ? "bg-[#21262D] border-[#30363D] hover:bg-[#2D333B]"
                  : "bg-white border-[#E5E7EB] hover:bg-gray-50"
              } transition-colors duration-200`}
            >
              <CardHeader>
                <CardTitle
                  className={`text-lg font-bold ${
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
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(post.pubDate).toLocaleDateString()}
                </div>
              </CardHeader>
              <CardFooter className="mt-auto p-3">
                <Button
                  variant="outline"
                  asChild
                  className={`w-full py-2 ${
                    theme === "dark"
                      ? "bg-[#30363D] text-white hover:bg-[#3C444D]"
                      : "bg-white text-[#1F2937] hover:bg-[#F3F4F6]"
                  } transition-colors duration-200`}
                >
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    Read More
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination Controls */}
      <div className="flex flex-col sm:flex-row justify-center items-center mt-8 space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-2">
          <Button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-2 ${
              theme === "dark"
                ? "bg-[#30363D] text-white hover:bg-[#3C444D]"
                : "bg-white text-[#1F2937] hover:bg-[#F3F4F6]"
            } transition-colors duration-200`}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span
            className={`text-sm ${
              theme === "dark" ? "text-white" : "text-[#1F2937]"
            }`}
          >
            Page {currentPage} of {totalPages}
          </span>
          <Button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-2 ${
              theme === "dark"
                ? "bg-[#30363D] text-white hover:bg-[#3C444D]"
                : "bg-white text-[#1F2937] hover:bg-[#F3F4F6]"
            } transition-colors duration-200`}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

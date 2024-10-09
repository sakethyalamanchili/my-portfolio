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
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

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

const filtersPerPage = 6;

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

  return (
    <div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {currentFilters.map((filter) => (
          <motion.div
            key={filter.id}
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
                  className={`text-lg ${
                    theme === "dark" ? "text-white" : "text-[#1F2937]"
                  }`}
                >
                  {filter.name}
                </CardTitle>
                <CardDescription
                  className={
                    theme === "dark" ? "text-[#8B949E]" : "text-[#6B7280]"
                  }
                >
                  {filter.views} views
                </CardDescription>
              </CardHeader>
              <CardContent>
                <motion.img
                  src={filter.codeImage}
                  alt={filter.name}
                  className="w-full h-48 object-contain mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                />
              </CardContent>
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
                    href={filter.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    Try Filter
                    <ExternalLink className="ml-2 h-4 w-4" />
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

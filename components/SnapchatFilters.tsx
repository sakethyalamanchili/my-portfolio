import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

const filtersPerPage = 4;

export default function SnapchatFilters({
  filters,
  theme,
}: SnapchatFiltersProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filters.length / filtersPerPage);

  const paginatedFilters = filters.slice(
    (currentPage - 1) * filtersPerPage,
    currentPage * filtersPerPage
  );

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2"
        >
          {paginatedFilters.map((filter) => (
            <motion.div
              key={filter.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Card
                className={`h-full flex flex-col ${
                  theme === "dark"
                    ? "bg-[#21262D] border-[#30363D]"
                    : "bg-white border-[#E5E7EB]"
                }`}
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
                <CardContent className="flex-grow flex flex-col justify-between">
                  <motion.img
                    src={filter.codeImage}
                    alt={filter.name}
                    className="w-full h-48 object-contain mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  />
                  <Button
                    variant="outline"
                    asChild
                    className={
                      theme === "dark"
                        ? "bg-[#30363D] text-white hover:bg-[#3C444D] mt-auto"
                        : "bg-white text-[#1F2937] hover:bg-[#F3F4F6] mt-auto"
                    }
                  >
                    <a
                      href={filter.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Try Filter <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-between items-center mt-6">
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          variant="outline"
          className={theme === "dark" ? "text-white" : "text-[#1F2937]"}
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <span className={theme === "dark" ? "text-white" : "text-[#1F2937]"}>
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          variant="outline"
          className={theme === "dark" ? "text-white" : "text-[#1F2937]"}
        >
          Next <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

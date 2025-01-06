import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface ExperienceProps {
  theme: "light" | "dark";
}

const experienceItems = [
  {
    title: "Software Developer Intern",
    company: "Levicent Software Technologies",
    period: "May 2024 - Nov 2024",
    responsibilities: [
      "Engineered a multi-language support system for critical enterprise applications (HMS & HRMS), driving user engagement up by 20% through enhanced global accessibility",
      "Designed and implemented robust session management, elevating security protocols and reducing unauthorized access by 15% across systems",
      "Spearheaded chatbot integration using PyTorch for a Learning Management System, streamlining customer support and cutting query response times in half",
    ],
  },
  {
    title: "Lens Developer",
    company: "Freelance - SnapAR",
    period: "Jan 2022 - May 2024",
    responsibilities: [
      "Crafted over 300 cutting-edge augmented reality lenses for Snapchat, amassing a staggering 100 billion views and transforming user experiences",
      "Growing my Snapchat profile to 600K followers by leveraging innovative AR lens designs and strategic social media growth tactics",
      "Collaborating with top creators on innovative AR lenses, pushing creative boundaries and expanding global audience reach",
    ],
  },
  {
    title: "Private Tutor",
    company: "Self-Employed",
    period: "Jan 2021 - Dec 2023",
    responsibilities: [
      "Provided one-on-one tutoring in Math, Science, and Social Studies at home, helping students improve their academic performance.",
      "Created tailored lesson plans to address individual student learning needs, resulting in significant grade improvements."
    ],
  },
];

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

export default function Experience({ theme }: ExperienceProps) {
  return (
    <Card
      className={`${
        theme === "dark"
          ? "bg-[#161B22] border-[#30363D]"
          : "bg-white border-[#E5E7EB]"
      }`}
    >
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Experience</CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {experienceItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="flex items-center mb-2">
                <Briefcase
                  className={`mr-2 h-5 w-5 ${
                    theme === "dark" ? "text-[#58A6FF]" : "text-[#3B82F6]"
                  }`}
                />
                <h3
                  className={`text-lg md:text-xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-[#1F2937]"
                  }`}
                >
                  {item.title}
                </h3>
              </div>
              <p
                className={`text-sm ${
                  theme === "dark" ? "text-[#8B949E]" : "text-[#6B7280]"
                }`}
              >
                {item.company} | {item.period}
              </p>
              <ul className="mt-2 list-disc list-inside">
                {item.responsibilities.map((responsibility, idx) => (
                  <li
                    key={idx}
                    className={`text-sm ${
                      theme === "dark" ? "text-[#C9D1D9]" : "text-[#4B5563]"
                    }`}
                  >
                    {responsibility}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  );
}

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface ExperienceProps {
  theme: "light" | "dark";
}

const experienceItems = [
    {
    title: "Private Tutor",
    company: "Self-Employed",
    period: "Oct 2022 - Dec 2024",
    responsibilities: [
      "Provided one-on-one tutoring in Math, Science, and Social Studies at home, helping students improve their academic performance.",
      "Created tailored lesson plans to address individual student learning needs, resulting in significant grade improvements."
    ],
  },
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
      "Crafted over 300 cutting-edge augmented reality lenses for Snapchat, amassing a staggering 150 billion views and transforming user experiences",
      "Growing my Snapchat profile to 700K followers by leveraging innovative AR lens designs and strategic social media growth tactics",
      "Collaborating with top creators on innovative AR lenses, pushing creative boundaries and expanding global audience reach",
    ],
  }
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
      className={`backdrop-blur-sm ${
        theme === "dark"
          ? "bg-[#161B22]/80 border-[#30363D] shadow-xl"
          : "bg-white/80 border-[#E5E7EB] shadow-xl"
      }`}
    >
      <CardHeader>
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
          Experience
        </CardTitle>
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
              whileHover={{ scale: 1.03, x: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className={`p-6 rounded-xl border backdrop-blur-sm ${
                theme === "dark"
                  ? "bg-gradient-to-br from-[#21262D]/60 to-[#1C2128]/60 border-[#30363D] hover:border-blue-500/50"
                  : "bg-gradient-to-br from-white/60 to-gray-50/60 border-[#E5E7EB] hover:border-blue-400/50"
              } transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20`}
            >
              <div className="flex items-center mb-2">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <Briefcase
                    className="mr-2 h-5 w-5 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text"
                    style={{ color: 'transparent', WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text', fill: 'url(#gradient)' }}
                  />
                </motion.div>
                <h3
                  className={`text-lg md:text-xl font-semibold bg-gradient-to-r ${
                    theme === "dark" ? "from-white to-blue-200" : "from-[#1F2937] to-blue-600"
                  } bg-clip-text text-transparent`}
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

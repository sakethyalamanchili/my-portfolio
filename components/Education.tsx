/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

interface EducationProps {
  theme: "light" | "dark";
}

const educationItems = [
  {
    degree: "Master of Science in Data Science and Analytics",
    school: "Florida Atlantic University",
    period: "Spring 2025",
    logo: "https://www.fau.edu/images/homepage/owlhead-logo.png", // FAU Logo
    details:
      "GPA: 4/4. Pursuing an MS in Data Science and Analytics, specializing in advanced data analysis, machine learning, and big data technologies. The program covers key areas such as deep learning, artificial intelligence (AI), and the development of innovative data science solutions for complex, real-world challenges. Currently maintaining a 4.0 GPA, reflecting a strong commitment to academic excellence and a passion for applying data-driven insights to solve intricate problems.",
  },  
  {
    degree:
      "Bachelor of Technology in Electronics and Communication Engineering",
    school: "Jawaharlal Nehru Technological University, Hyderabad",
    period: "Graduated: 2024",
    logo: "https://jntuh.ac.in/images/jntuhlogo.png", // JNTUH Logo
    details:
      "CGPA: 7.3/10. Specialized in signal processing, embedded systems, Internet of Things (IoT), Python programming, and communication networks.",
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

export default function Education({ theme }: EducationProps) {
  return (
    <Card
      className={`${
        theme === "dark"
          ? "bg-[#161B22] border-[#30363D]"
          : "bg-white border-[#E5E7EB]"
      }`}
    >
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Education</CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex items-center space-x-4"
            >
              {/* Display the logo with adjusted styling */}
              <img
                src={item.logo}
                alt={`${item.school} logo`}
                className="h-10 w-10 object-contain" // Adjusted size
              />
              <div>
                <h3
                  className={`text-lg md:text-xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-[#1F2937]"
                  }`}
                >
                  {item.degree}
                </h3>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-[#8B949E]" : "text-[#6B7280]"
                  }`}
                >
                  {item.school} | {item.period}
                </p>
                <motion.p
                  className={`mt-2 text-sm ${
                    theme === "dark" ? "text-[#C9D1D9]" : "text-[#4B5563]"
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {item.details}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  );
}

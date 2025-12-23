/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, TrendingUp, Star } from "lucide-react";

interface EducationProps {
  theme: "light" | "dark";
}

const educationItems = [
  {
    degree: "Master of Science in Data Science and Analytics",
    school: "Florida Atlantic University",
    period: "Expected Graduation: Spring 2025",
    location: "Boca Raton, Florida",
    logo: "https://www.fau.edu/images/homepage/owlhead-logo.png",
    gpa: "4.0 / 4.0",
    status: "Perfect GPA",
    details:
      "Advanced graduate program specializing in machine learning, artificial intelligence, deep learning, and big data analytics. Coursework emphasizes practical application of data science methodologies to solve complex real-world challenges.",
    achievements: [
      "Maintained perfect 4.0 GPA across all semesters",
      "Graduate Research Assistant position",
      "Dean's List all semesters"
    ],
    relevantCoursework: [
      "Intro to Data Science (CAP 5768)",
      "Intro to Business Analytics with Big Data (ISM 6404)",
      "Data Mining & Machine Learning (CAP 6673)",
      "Deep Learning (CAP 6619)",
      "Natural Language Processing (CAP 6640)",
      "Reinforcement Learning (CAP 6629)"
    ],
    gradient: "from-blue-500 to-cyan-500",
  },  
  {
    degree: "Bachelor of Technology in Electronics and Communication Engineering",
    school: "Jawaharlal Nehru Technological University, Hyderabad",
    period: "Graduated: May 2024",
    location: "Hyderabad, India",
    logo: "https://jntuh.ac.in/images/jntuhlogo.png",
    gpa: "7.3 / 10.0",
    status: "First Class",
    details:
      "Comprehensive undergraduate program with strong foundation in electronics, signal processing, embedded systems, and IoT technologies. Emphasized hands-on project work and practical applications of engineering principles.",
    achievements: [
      "Led team projects in Embedded Systems and IoT",
      "Published research on Autonomous Vehicle Safety",
      "Active member of Robotics Club"
    ],
    relevantCoursework: [
      "Signal Processing & Analysis",
      "Embedded Systems Design",
      "Internet of Things (IoT)",
      "Python Programming",
      "Communication Networks",
      "Microcontroller Applications"
    ],
    gradient: "from-purple-500 to-pink-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
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
      className={`backdrop-blur-sm ${
        theme === "dark"
          ? "bg-[#161B22]/80 border-[#30363D] shadow-xl"
          : "bg-white/80 border-[#E5E7EB] shadow-xl"
      }`}
    >
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl font-bold flex items-center gap-3">
          <GraduationCap className="w-7 h-7 text-blue-500" />
          <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
            Academic Background
          </span>
        </CardTitle>
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
              whileHover={{ scale: 1.02, x: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className={`p-6 rounded-xl border backdrop-blur-sm relative overflow-hidden ${
                theme === "dark"
                  ? "bg-gradient-to-br from-[#21262D]/60 to-[#1C2128]/60 border-[#30363D] hover:border-blue-500/50"
                  : "bg-gradient-to-br from-white/60 to-gray-50/60 border-[#E5E7EB] hover:border-blue-400/50"
              } transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20`}
            >
              {/* Background gradient on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 hover:opacity-5 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                {/* Header Section */}
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0"
                  >
                    <div className={`p-2 rounded-xl bg-gradient-to-r ${item.gradient}`}>
                      <img
                        src={item.logo}
                        alt={`${item.school} logo`}
                        className="h-16 w-16 object-contain"
                      />
                    </div>
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3
                      className={`text-lg md:text-xl font-semibold mb-1 ${
                        theme === "dark" ? "text-white" : "text-[#1F2937]"
                      }`}
                    >
                      {item.degree}
                    </h3>
                    <p
                      className={`text-sm md:text-base font-medium mb-1 ${
                        theme === "dark" ? "text-blue-300" : "text-blue-600"
                      }`}
                    >
                      {item.school}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm">
                      <span className={theme === "dark" ? "text-[#8B949E]" : "text-[#6B7280]"}>
                        {item.period}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className={theme === "dark" ? "text-[#8B949E]" : "text-[#6B7280]"}>
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* GPA Badge */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <motion.div
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${item.gradient} text-white font-semibold text-sm`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Star className="w-4 h-4 fill-current" />
                    GPA: {item.gpa}
                  </motion.div>
                  <span
                    className={`inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium ${
                      theme === "dark"
                        ? "bg-green-500/20 text-green-300 border border-green-500/30"
                        : "bg-green-500/10 text-green-700 border border-green-400/30"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                {/* Description */}
                <motion.p
                  className={`text-sm leading-relaxed mb-4 ${
                    theme === "dark" ? "text-[#C9D1D9]" : "text-[#4B5563]"
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {item.details}
                </motion.p>

                {/* Achievements */}
                <div className="mb-4">
                  <h4
                    className={`text-sm font-semibold mb-3 flex items-center gap-2 ${
                      theme === "dark" ? "text-white" : "text-[#1F2937]"
                    }`}
                  >
                    <Award className="w-4 h-4 text-yellow-500" />
                    Key Achievements
                  </h4>
                  <div className="grid gap-2">
                    {item.achievements.map((achievement, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`flex items-start gap-2 text-sm ${
                          theme === "dark" ? "text-[#C9D1D9]" : "text-[#4B5563]"
                        }`}
                      >
                        <TrendingUp className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Relevant Coursework */}
                <div className={`pt-4 border-t ${
                  theme === "dark" ? "border-[#30363D]" : "border-[#E5E7EB]"
                }`}>
                  <h4
                    className={`text-sm font-semibold mb-3 flex items-center gap-2 ${
                      theme === "dark" ? "text-white" : "text-[#1F2937]"
                    }`}
                  >
                    <BookOpen className="w-4 h-4 text-blue-500" />
                    Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relevantCoursework.map((course, idx) => (
                      <motion.span
                        key={idx}
                        className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium ${
                          theme === "dark"
                            ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                            : "bg-blue-500/10 text-blue-700 border border-blue-400/30"
                        }`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  );
}
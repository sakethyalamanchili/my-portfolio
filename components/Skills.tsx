"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface SkillsProps {
  theme: "light" | "dark";
}

const skillCategories: SkillCategory[] = [
  {
    name: "Data Science",
    skills: [
      { name: "Python", level: 90 },
      { name: "Machine Learning", level: 85 },
      { name: "Data Analysis", level: 85 },
      { name: "Deep Learning", level: 80 },
      { name: "Natural Language Processing", level: 75 },
      { name: "Computer Vision", level: 75 },
      { name: "SQL", level: 80 },
      { name: "TensorFlow", level: 75 },
      { name: "PyTorch", level: 70 },
      { name: "Scikit-learn", level: 85 },
      { name: "Pandas", level: 90 },
      { name: "NumPy", level: 85 },
      { name: "Matplotlib", level: 80 },
      { name: "Seaborn", level: 80 },
      { name: "Jupyter", level: 85 },
      { name: "Google Colab", level: 85 },
      { name: "Keras", level: 75 },
      { name: "Weka", level: 90 },
      { name: "Research", level: 80 },
    ],
  },
  {
    name: "Web Development",
    skills: [
      { name: "HTML", level: 85 },
      { name: "CSS", level: 80 },
      { name: "JavaScript", level: 80 },
      { name: "TypeScript", level: 75 },
      { name: "React", level: 80 },
      { name: "Angular", level: 75 },
      { name: "Tailwind CSS", level: 75 },
      { name: "Bootstrap", level: 80 },
      { name: "Cloudinary", level: 80 },
    ],
  },
  {
    name: "Electronics",
    skills: [
      { name: "Microcontrollers", level: 85 },
      { name: "Embedded Systems", level: 80 },
      { name: "Internet of Things", level: 80 },
      { name: "Signal Processing", level: 75 },
      { name: "Arduino", level: 85 },
    ],
  },
  {
    name: "Other Programming",
    skills: [
      { name: "C", level: 70 },
      { name: "C++", level: 70 },
      { name: "XML", level: 70 },
      { name: "LaTeX", level: 75 },
    ],
  },
  {
    name: "Tools & Tech",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 85 },
      { name: "PyCharm", level: 80 },
      { name: "Spyder", level: 75 },
      { name: "Swagger", level: 70 },
      { name: "phpMyAdmin", level: 70 },
      { name: "Streamlit", level: 80 },
      { name: "Power BI", level: 85 },
      { name: "Tableau", level: 80 },
      { name: "Excel", level: 85 },
    ],
  },
  {
    name: "Augmented Reality",
    skills: [
      { name: "AR Development", level: 70 },
      { name: "Lens Studio", level: 75 },
    ],
  },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function Skills({ theme }: SkillsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [displayedSkills, setDisplayedSkills] = useState<Skill[]>([]);

  useEffect(() => {
    if (selectedCategory === "All") {
      setDisplayedSkills(
        skillCategories.flatMap((category) => category.skills)
      );
    } else {
      const category = skillCategories.find(
        (cat) => cat.name === selectedCategory
      );
      setDisplayedSkills(category ? category.skills : []);
    }
  }, [selectedCategory]);

  return (
    <Card
      className={`backdrop-blur-sm ${
        theme === "dark"
          ? "bg-[#161B22]/80 border-[#30363D] shadow-xl"
          : "bg-white/80 border-[#E5E7EB] shadow-xl"
      }`}
    >
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0">
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
          Skills
        </CardTitle>
        <Select onValueChange={setSelectedCategory} defaultValue="All">
          <SelectTrigger className="w-full sm:w-[180px] focus:ring-0 focus:ring-offset-0">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Skills</SelectItem>
            {skillCategories.map((category, index) => (
              <SelectItem key={index} value={category.name}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {displayedSkills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                layout
                whileHover={{ scale: 1.08, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className={`p-4 rounded-xl border backdrop-blur-sm ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-[#21262D]/60 to-[#1C2128]/60 border-[#30363D] hover:border-blue-500/50"
                    : "bg-gradient-to-br from-white/60 to-gray-50/60 border-[#E5E7EB] hover:border-blue-400/50"
                } transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20`}
              >
                <div className="flex justify-between items-center mb-2">
                  <div
                    className={`text-sm font-semibold ${
                      theme === "dark" ? "text-white" : "text-[#1F2937]"
                    }`}
                  >
                    {skill.name}
                  </div>
                  <div className="text-xs font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                    {skill.level}%
                  </div>
                </div>
                <div className="relative pt-1">
                  <div
                    className={`overflow-hidden h-2.5 text-xs flex rounded-full ${
                      theme === "dark" ? "bg-[#30363D]" : "bg-[#E5E7EB]"
                    }`}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-full relative overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/30"
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        style={{ width: "50%" }}
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}

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
      className={`${
        theme === "dark"
          ? "bg-[#161B22] border-[#30363D]"
          : "bg-white border-[#E5E7EB]"
      }`}
    >
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0">
        <CardTitle className="text-2xl font-bold">Skills</CardTitle>
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
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <div
                  className={`text-sm font-medium mb-1 ${
                    theme === "dark" ? "text-white" : "text-[#1F2937]"
                  }`}
                >
                  {skill.name}
                </div>
                <div className="relative pt-1">
                  <div
                    className={`overflow-hidden h-2 text-xs flex rounded ${
                      theme === "dark" ? "bg-[#30363D]" : "bg-[#E5E7EB]"
                    }`}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                    />
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

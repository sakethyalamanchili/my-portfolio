import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

interface SkillsProps {
  theme: "light" | "dark";
}

const skills = [
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
  { name: "AR Development", level: 70 },
  { name: "Git", level: 85 },
  { name: "HTML", level: 85 },
  { name: "CSS", level: 80 },
  { name: "Tailwind CSS", level: 75 },
  { name: "JavaScript", level: 80 },
  { name: "TypeScript", level: 75 },
  { name: "React", level: 80 },
  { name: "Angular", level: 75 },
  { name: "C", level: 70 },
  { name: "C++", level: 70 },
  { name: "Keras", level: 75 },
  { name: "Bootstrap", level: 80 },
  { name: "Jupyter", level: 85 },
  { name: "Google Colab", level: 85 },
  { name: "PyCharm", level: 80 },
  { name: "Spyder", level: 75 },
  { name: "GitHub", level: 85 },
  { name: "XML", level: 70 },
  { name: "VS Code", level: 85 },
  { name: "Arduino", level: 70 },
  { name: "Swagger", level: 70 },
  { name: "phpMyAdmin", level: 70 },
  { name: "Lens Studio", level: 75 },
  { name: "Streamlit", level: 80 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function Skills({ theme }: SkillsProps) {
  return (
    <Card
      className={`${
        theme === "dark"
          ? "bg-[#161B22] border-[#30363D]"
          : "bg-white border-[#E5E7EB]"
      }`}
    >
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div
                className={`text-sm font-medium mb-1 ${
                  theme === "dark" ? "text-white" : "text-[#1F2937]"
                }`}
              >
                {skill.name}
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <Progress
                  value={skill.level}
                  className={`h-2 ${
                    theme === "dark" ? "bg-[#30363D]" : "bg-[#E5E7EB]"
                  }`}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  );
}

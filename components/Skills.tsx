// "use client";

// import React, { useState, useEffect } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// interface Skill {
//   name: string;
//   level: number;
// }

// interface SkillCategory {
//   name: string;
//   skills: Skill[];
// }

// interface SkillsProps {
//   theme: "light" | "dark";
// }

// const skillCategories: SkillCategory[] = [
//   {
//     name: "Data Science",
//     skills: [
//       { name: "Python", level: 90 },
//       { name: "Machine Learning", level: 85 },
//       { name: "Data Analysis", level: 85 },
//       { name: "Deep Learning", level: 80 },
//       { name: "Natural Language Processing", level: 75 },
//       { name: "Computer Vision", level: 75 },
//       { name: "SQL", level: 80 },
//       { name: "TensorFlow", level: 75 },
//       { name: "PyTorch", level: 70 },
//       { name: "Scikit-learn", level: 85 },
//       { name: "Pandas", level: 90 },
//       { name: "NumPy", level: 85 },
//       { name: "Matplotlib", level: 80 },
//       { name: "Seaborn", level: 80 },
//       { name: "Jupyter", level: 85 },
//       { name: "Google Colab", level: 85 },
//       { name: "Keras", level: 75 },
//       { name: "Weka", level: 90 },
//       { name: "Research", level: 80 },
//     ],
//   },
//   {
//     name: "Web Development",
//     skills: [
//       { name: "HTML", level: 85 },
//       { name: "CSS", level: 80 },
//       { name: "JavaScript", level: 80 },
//       { name: "TypeScript", level: 75 },
//       { name: "React", level: 80 },
//       { name: "Angular", level: 75 },
//       { name: "Tailwind CSS", level: 75 },
//       { name: "Bootstrap", level: 80 },
//       { name: "Cloudinary", level: 80 },
//     ],
//   },
//   {
//     name: "Electronics",
//     skills: [
//       { name: "Microcontrollers", level: 85 },
//       { name: "Embedded Systems", level: 80 },
//       { name: "Internet of Things", level: 80 },
//       { name: "Signal Processing", level: 75 },
//       { name: "Arduino", level: 85 },
//     ],
//   },
//   {
//     name: "Other Programming",
//     skills: [
//       { name: "C", level: 70 },
//       { name: "C++", level: 70 },
//       { name: "XML", level: 70 },
//       { name: "LaTeX", level: 75 },
//     ],
//   },
//   {
//     name: "Tools & Tech",
//     skills: [
//       { name: "Git", level: 85 },
//       { name: "GitHub", level: 85 },
//       { name: "VS Code", level: 85 },
//       { name: "PyCharm", level: 80 },
//       { name: "Spyder", level: 75 },
//       { name: "Swagger", level: 70 },
//       { name: "phpMyAdmin", level: 70 },
//       { name: "Streamlit", level: 80 },
//       { name: "Power BI", level: 85 },
//       { name: "Tableau", level: 80 },
//       { name: "Excel", level: 85 },
//     ],
//   },
//   {
//     name: "Augmented Reality",
//     skills: [
//       { name: "AR Development", level: 70 },
//       { name: "Lens Studio", level: 75 },
//     ],
//   },
// ];


// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: { type: "spring", stiffness: 100, damping: 15 },
//   },
// };

// export default function Skills({ theme }: SkillsProps) {
//   const [selectedCategory, setSelectedCategory] = useState<string>("All");
//   const [displayedSkills, setDisplayedSkills] = useState<Skill[]>([]);

//   useEffect(() => {
//     if (selectedCategory === "All") {
//       setDisplayedSkills(
//         skillCategories.flatMap((category) => category.skills)
//       );
//     } else {
//       const category = skillCategories.find(
//         (cat) => cat.name === selectedCategory
//       );
//       setDisplayedSkills(category ? category.skills : []);
//     }
//   }, [selectedCategory]);

//   return (
//     <Card
//       className={`${
//         theme === "dark"
//           ? "bg-[#161B22] border-[#30363D]"
//           : "bg-white border-[#E5E7EB]"
//       }`}
//     >
//       <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0">
//         <CardTitle className="text-2xl font-bold">Skills</CardTitle>
//         <Select onValueChange={setSelectedCategory} defaultValue="All">
//           <SelectTrigger className="w-full sm:w-[180px] focus:ring-0 focus:ring-offset-0">
//             <SelectValue placeholder="Select category" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="All">All Skills</SelectItem>
//             {skillCategories.map((category, index) => (
//               <SelectItem key={index} value={category.name}>
//                 {category.name}
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//       </CardHeader>
//       <CardContent>
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={selectedCategory}
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             exit="hidden"
//             className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
//           >
//             {displayedSkills.map((skill) => (
//               <motion.div
//                 key={skill.name}
//                 variants={itemVariants}
//                 layout
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 20 }}
//               >
//                 <div
//                   className={`text-sm font-medium mb-1 ${
//                     theme === "dark" ? "text-white" : "text-[#1F2937]"
//                   }`}
//                 >
//                   {skill.name}
//                 </div>
//                 <div className="relative pt-1">
//                   <div
//                     className={`overflow-hidden h-2 text-xs flex rounded ${
//                       theme === "dark" ? "bg-[#30363D]" : "bg-[#E5E7EB]"
//                     }`}
//                   >
//                     <motion.div
//                       initial={{ width: 0 }}
//                       animate={{ width: `${skill.level}%` }}
//                       transition={{ duration: 0.5, ease: "easeInOut" }}
//                       className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
//                     />
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </AnimatePresence>
//       </CardContent>
//     </Card>
//   );
// }


// "use client";

// import React, { useState, useEffect } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Code, Database, Globe, PenTool, Palette, Zap, Star } from "lucide-react";

// interface Skill {
//   name: string;
//   level: number;
//   proficiency: "Expert" | "Advanced" | "Intermediate";
// }

// interface SkillCategory {
//   name: string;
//   icon: any;
//   gradient: string;
//   skills: Skill[];
// }

// interface SkillsProps {
//   theme: "light" | "dark";
// }

// const skillCategories: SkillCategory[] = [
//   {
//     name: "Programming Languages",
//     icon: Code,
//     gradient: "from-blue-500 to-cyan-500",
//     skills: [
//       { name: "Python", level: 90, proficiency: "Expert" },
//       { name: "JavaScript/TypeScript", level: 80, proficiency: "Advanced" },
//       { name: "SQL", level: 85, proficiency: "Advanced" },
//       { name: "C/C++", level: 70, proficiency: "Intermediate" },
//     ],
//   },
//   {
//     name: "Machine Learning & AI",
//     icon: Zap,
//     gradient: "from-purple-500 to-pink-500",
//     skills: [
//       { name: "TensorFlow", level: 85, proficiency: "Advanced" },
//       { name: "PyTorch", level: 80, proficiency: "Advanced" },
//       { name: "Scikit-learn", level: 90, proficiency: "Expert" },
//       { name: "Keras", level: 75, proficiency: "Advanced" },
//       { name: "Deep Learning", level: 80, proficiency: "Advanced" },
//       { name: "NLP", level: 75, proficiency: "Advanced" },
//       { name: "Computer Vision", level: 75, proficiency: "Advanced" },
//     ],
//   },
//   {
//     name: "Web Development",
//     icon: Globe,
//     gradient: "from-orange-500 to-red-500",
//     skills: [
//       { name: "React.js", level: 85, proficiency: "Advanced" },
//       { name: "Next.js", level: 80, proficiency: "Advanced" },
//       { name: "Angular", level: 75, proficiency: "Advanced" },
//       { name: "Node.js", level: 75, proficiency: "Advanced" },
//       { name: "Tailwind CSS", level: 85, proficiency: "Advanced" },
//       { name: "HTML/CSS", level: 90, proficiency: "Expert" },
//     ],
//   },
//   {
//     name: "Data Science & Analytics",
//     icon: Database,
//     gradient: "from-green-500 to-teal-500",
//     skills: [
//       { name: "Pandas", level: 90, proficiency: "Expert" },
//       { name: "NumPy", level: 85, proficiency: "Advanced" },
//       { name: "Matplotlib", level: 80, proficiency: "Advanced" },
//       { name: "Seaborn", level: 80, proficiency: "Advanced" },
//       { name: "Power BI", level: 85, proficiency: "Advanced" },
//       { name: "Tableau", level: 80, proficiency: "Advanced" },
//       { name: "Excel", level: 85, proficiency: "Advanced" },
//     ],
//   },
//   {
//     name: "Tools & Technologies",
//     icon: PenTool,
//     gradient: "from-yellow-500 to-orange-500",
//     skills: [
//       { name: "Git/GitHub", level: 90, proficiency: "Expert" },
//       { name: "VS Code", level: 85, proficiency: "Advanced" },
//       { name: "Jupyter", level: 85, proficiency: "Advanced" },
//       { name: "Streamlit", level: 80, proficiency: "Advanced" },
//       { name: "Docker", level: 70, proficiency: "Intermediate" },
//       { name: "AWS", level: 65, proficiency: "Intermediate" },
//     ],
//   },
//   {
//     name: "Creative & AR",
//     icon: Palette,
//     gradient: "from-pink-500 to-rose-500",
//     skills: [
//       { name: "Lens Studio", level: 85, proficiency: "Advanced" },
//       { name: "AR Development", level: 80, proficiency: "Advanced" },
//       { name: "UI/UX Design", level: 75, proficiency: "Advanced" },
//       { name: "Photoshop", level: 70, proficiency: "Intermediate" },
//     ],
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: { type: "spring", stiffness: 100, damping: 15 },
//   },
// };

// const getProficiencyColor = (proficiency: string, theme: string) => {
//   if (proficiency === "Expert") {
//     return theme === "dark" ? "text-green-400" : "text-green-600";
//   } else if (proficiency === "Advanced") {
//     return theme === "dark" ? "text-blue-400" : "text-blue-600";
//   } else {
//     return theme === "dark" ? "text-yellow-400" : "text-yellow-600";
//   }
// };

// export default function Skills({ theme }: SkillsProps) {
//   const [selectedCategory, setSelectedCategory] = useState<string>("All");
//   const [displayedSkills, setDisplayedSkills] = useState<{ category: string; skills: Skill[]; icon: any; gradient: string }[]>([]);

//   useEffect(() => {
//     if (selectedCategory === "All") {
//       setDisplayedSkills(
//         skillCategories.map(cat => ({
//           category: cat.name,
//           skills: cat.skills,
//           icon: cat.icon,
//           gradient: cat.gradient
//         }))
//       );
//     } else {
//       const category = skillCategories.find(
//         (cat) => cat.name === selectedCategory
//       );
//       setDisplayedSkills(category ? [{
//         category: category.name,
//         skills: category.skills,
//         icon: category.icon,
//         gradient: category.gradient
//       }] : []);
//     }
//   }, [selectedCategory]);

//   return (
//     <Card
//       className={`backdrop-blur-sm ${
//         theme === "dark"
//           ? "bg-[#161B22]/80 border-[#30363D] shadow-xl"
//           : "bg-white/80 border-[#E5E7EB] shadow-xl"
//       }`}
//     >
//       <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0">
//         <CardTitle className="text-2xl md:text-3xl font-bold flex items-center gap-3">
//           <Star className="w-7 h-7 text-blue-500" />
//           <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
//             Technical Skills
//           </span>
//         </CardTitle>
//         <Select onValueChange={setSelectedCategory} defaultValue="All">
//           <SelectTrigger className="w-full sm:w-[200px] focus:ring-0 focus:ring-offset-0">
//             <SelectValue placeholder="Select category" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="All">All Categories</SelectItem>
//             {skillCategories.map((category, index) => (
//               <SelectItem key={index} value={category.name}>
//                 {category.name}
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//       </CardHeader>
//       <CardContent>
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={selectedCategory}
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             exit="hidden"
//             className="space-y-8"
//           >
//             {displayedSkills.map((category, catIndex) => {
//               const IconComponent = category.icon;
//               return (
//                 <div key={catIndex} className="space-y-4">
//                   {/* Category Header */}
//                   <motion.div
//                     variants={itemVariants}
//                     className="flex items-center gap-3 mb-4"
//                   >
//                     <div className={`p-2 rounded-lg bg-gradient-to-r ${category.gradient}`}>
//                       <IconComponent className="w-5 h-5 text-white" />
//                     </div>
//                     <h3 className={`text-lg font-semibold ${
//                       theme === "dark" ? "text-white" : "text-gray-900"
//                     }`}>
//                       {category.category}
//                     </h3>
//                   </motion.div>

//                   {/* Skills Grid */}
//                   <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//                     {category.skills.map((skill, index) => (
//                       <motion.div
//                         key={skill.name}
//                         variants={itemVariants}
//                         layout
//                         whileHover={{ scale: 1.05, y: -5 }}
//                         transition={{ type: "spring", stiffness: 400, damping: 20 }}
//                         className={`p-5 rounded-xl border backdrop-blur-sm ${
//                           theme === "dark"
//                             ? "bg-gradient-to-br from-[#21262D]/60 to-[#1C2128]/60 border-[#30363D] hover:border-blue-500/50"
//                             : "bg-gradient-to-br from-white/60 to-gray-50/60 border-[#E5E7EB] hover:border-blue-400/50"
//                         } transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20`}
//                       >
//                         {/* Skill Header */}
//                         <div className="flex justify-between items-start mb-3">
//                           <div className="flex-1">
//                             <div
//                               className={`text-base font-semibold mb-1 ${
//                                 theme === "dark" ? "text-white" : "text-[#1F2937]"
//                               }`}
//                             >
//                               {skill.name}
//                             </div>
//                             <div className={`text-xs font-medium ${getProficiencyColor(skill.proficiency, theme)}`}>
//                               {skill.proficiency}
//                             </div>
//                           </div>
//                           <div className="text-sm font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
//                             {skill.level}%
//                           </div>
//                         </div>

//                         {/* Progress Bar */}
//                         <div className="relative pt-1">
//                           <div
//                             className={`overflow-hidden h-3 text-xs flex rounded-full ${
//                               theme === "dark" ? "bg-[#30363D]" : "bg-[#E5E7EB]"
//                             }`}
//                           >
//                             <motion.div
//                               initial={{ width: 0 }}
//                               animate={{ width: `${skill.level}%` }}
//                               transition={{ duration: 1, ease: "easeOut", delay: catIndex * 0.1 + index * 0.05 }}
//                               className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r ${category.gradient} rounded-full relative overflow-hidden`}
//                             >
//                               <motion.div
//                                 className="absolute inset-0 bg-white/30"
//                                 animate={{
//                                   x: ["-100%", "100%"],
//                                 }}
//                                 transition={{
//                                   duration: 2,
//                                   repeat: Infinity,
//                                   ease: "linear",
//                                 }}
//                                 style={{ width: "50%" }}
//                               />
//                             </motion.div>
//                           </div>
//                         </div>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>
//               );
//             })}
//           </motion.div>
//         </AnimatePresence>

//         {/* Summary Stats */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//           className={`mt-8 p-6 rounded-xl border ${
//             theme === "dark"
//               ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/30"
//               : "bg-gradient-to-r from-blue-50 to-purple-50 border-blue-300/30"
//           }`}
//         >
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
//             <div>
//               <div className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
//                 6
//               </div>
//               <div className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
//                 Categories
//               </div>
//             </div>
//             <div>
//               <div className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
//                 40+
//               </div>
//               <div className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
//                 Technologies
//               </div>
//             </div>
//             <div>
//               <div className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
//                 12
//               </div>
//               <div className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
//                 Expert Level
//               </div>
//             </div>
//             <div>
//               <div className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
//                 24
//               </div>
//               <div className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
//                 Advanced
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </CardContent>
//     </Card>
//   );
// }



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
import { Code, Database, Globe, PenTool, Zap, Star, Cpu } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  proficiency: "Expert" | "Advanced" | "Intermediate";
}

interface SkillCategory {
  name: string;
  icon: any;
  gradient: string;
  skills: Skill[];
}

interface SkillsProps {
  theme: "light" | "dark";
}

// Helper to determine proficiency text based on level
// 90+ = Expert, 80-89 = Advanced, < 80 = Intermediate
const getProficiency = (level: number): "Expert" | "Advanced" | "Intermediate" => {
  if (level >= 90) return "Expert";
  if (level >= 80) return "Advanced";
  return "Intermediate";
};

const skillCategories: SkillCategory[] = [
  {
    name: "Data Science & AI",
    icon: Zap,
    gradient: "from-purple-500 to-pink-500",
    skills: [
      { name: "Python", level: 90, proficiency: "Expert" },
      { name: "Machine Learning", level: 85, proficiency: "Advanced" },
      { name: "Scikit-learn", level: 85, proficiency: "Advanced" },
      { name: "Data Analysis", level: 85, proficiency: "Advanced" },
      { name: "SQL", level: 80, proficiency: "Advanced" },
      { name: "Deep Learning", level: 80, proficiency: "Advanced" },
      { name: "Research", level: 80, proficiency: "Advanced" },
      { name: "Natural Language Processing", level: 75, proficiency: "Intermediate" },
      { name: "Computer Vision", level: 75, proficiency: "Intermediate" },
      { name: "TensorFlow", level: 75, proficiency: "Intermediate" },
      { name: "Keras", level: 75, proficiency: "Intermediate" },
      { name: "PyTorch", level: 70, proficiency: "Intermediate" },
      { name: "Weka", level: 90, proficiency: "Expert" },
    ],
  },
  {
    name: "Web Development",
    icon: Globe,
    gradient: "from-blue-500 to-cyan-500",
    skills: [
      { name: "HTML", level: 85, proficiency: "Advanced" },
      { name: "CSS", level: 80, proficiency: "Advanced" },
      { name: "JavaScript", level: 80, proficiency: "Advanced" },
      { name: "React", level: 80, proficiency: "Advanced" },
      { name: "Bootstrap", level: 80, proficiency: "Advanced" },
      { name: "Cloudinary", level: 80, proficiency: "Advanced" },
      { name: "TypeScript", level: 75, proficiency: "Intermediate" },
      { name: "Angular", level: 75, proficiency: "Intermediate" },
      { name: "Tailwind CSS", level: 75, proficiency: "Intermediate" },
    ],
  },
  {
    name: "Analytics & Libraries",
    icon: Database,
    gradient: "from-green-500 to-teal-500",
    skills: [
      { name: "Pandas", level: 90, proficiency: "Expert" },
      { name: "NumPy", level: 85, proficiency: "Advanced" },
      { name: "Excel", level: 85, proficiency: "Advanced" },
      { name: "Power BI", level: 85, proficiency: "Advanced" },
      { name: "Matplotlib", level: 80, proficiency: "Advanced" },
      { name: "Seaborn", level: 80, proficiency: "Advanced" },
      { name: "Tableau", level: 80, proficiency: "Advanced" },
    ],
  },
  {
    name: "Electronics & IoT",
    icon: Cpu,
    gradient: "from-orange-500 to-red-500",
    skills: [
      { name: "Microcontrollers", level: 85, proficiency: "Advanced" },
      { name: "Arduino", level: 85, proficiency: "Advanced" },
      { name: "Embedded Systems", level: 80, proficiency: "Advanced" },
      { name: "Internet of Things", level: 80, proficiency: "Advanced" },
      { name: "Signal Processing", level: 75, proficiency: "Intermediate" },
    ],
  },
  {
    name: "Tools & Environments",
    icon: PenTool,
    gradient: "from-yellow-500 to-orange-500",
    skills: [
      { name: "Git", level: 85, proficiency: "Advanced" },
      { name: "GitHub", level: 85, proficiency: "Advanced" },
      { name: "VS Code", level: 85, proficiency: "Advanced" },
      { name: "Jupyter", level: 85, proficiency: "Advanced" },
      { name: "Google Colab", level: 85, proficiency: "Advanced" },
      { name: "PyCharm", level: 80, proficiency: "Advanced" },
      { name: "Streamlit", level: 80, proficiency: "Advanced" },
      { name: "Spyder", level: 75, proficiency: "Intermediate" },
      { name: "Swagger", level: 70, proficiency: "Intermediate" },
      { name: "phpMyAdmin", level: 70, proficiency: "Intermediate" },
    ],
  },
  {
    name: "General & AR",
    icon: Code,
    gradient: "from-pink-500 to-rose-500",
    skills: [
      { name: "LaTeX", level: 75, proficiency: "Intermediate" },
      { name: "Lens Studio", level: 75, proficiency: "Intermediate" },
      { name: "C", level: 70, proficiency: "Intermediate" },
      { name: "C++", level: 70, proficiency: "Intermediate" },
      { name: "XML", level: 70, proficiency: "Intermediate" },
      { name: "AR Development", level: 70, proficiency: "Intermediate" },
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

const getProficiencyColor = (proficiency: string, theme: string) => {
  if (proficiency === "Expert") {
    return theme === "dark" ? "text-green-400" : "text-green-600";
  } else if (proficiency === "Advanced") {
    return theme === "dark" ? "text-blue-400" : "text-blue-600";
  } else {
    return theme === "dark" ? "text-yellow-400" : "text-yellow-600";
  }
};

export default function Skills({ theme }: SkillsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [displayedSkills, setDisplayedSkills] = useState<{ category: string; skills: Skill[]; icon: any; gradient: string }[]>([]);

  useEffect(() => {
    if (selectedCategory === "All") {
      setDisplayedSkills(
        skillCategories.map(cat => ({
          category: cat.name,
          skills: cat.skills,
          icon: cat.icon,
          gradient: cat.gradient
        }))
      );
    } else {
      const category = skillCategories.find(
        (cat) => cat.name === selectedCategory
      );
      setDisplayedSkills(category ? [{
        category: category.name,
        skills: category.skills,
        icon: category.icon,
        gradient: category.gradient
      }] : []);
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
        <CardTitle className="text-2xl md:text-3xl font-bold flex items-center gap-3">
          <Star className="w-7 h-7 text-blue-500" />
          <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </CardTitle>
        <Select onValueChange={setSelectedCategory} defaultValue="All">
          <SelectTrigger className="w-full sm:w-[200px] focus:ring-0 focus:ring-offset-0">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Categories</SelectItem>
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
            className="space-y-8"
          >
            {displayedSkills.map((category, catIndex) => {
              const IconComponent = category.icon;
              return (
                <div key={catIndex} className="space-y-4">
                  {/* Category Header */}
                  <motion.div
                    variants={itemVariants}
                    className="flex items-center gap-3 mb-4"
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category.gradient}`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <h3 className={`text-lg font-semibold ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}>
                      {category.category}
                    </h3>
                  </motion.div>

                  {/* Skills Grid */}
                  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        layout
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className={`p-5 rounded-xl border backdrop-blur-sm ${
                          theme === "dark"
                            ? "bg-gradient-to-br from-[#21262D]/60 to-[#1C2128]/60 border-[#30363D] hover:border-blue-500/50"
                            : "bg-gradient-to-br from-white/60 to-gray-50/60 border-[#E5E7EB] hover:border-blue-400/50"
                        } transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20`}
                      >
                        {/* Skill Header */}
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <div
                              className={`text-base font-semibold mb-1 ${
                                theme === "dark" ? "text-white" : "text-[#1F2937]"
                              }`}
                            >
                              {skill.name}
                            </div>
                            <div className={`text-xs font-medium ${getProficiencyColor(skill.proficiency, theme)}`}>
                              {skill.proficiency}
                            </div>
                          </div>
                          <div className="text-sm font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                            {skill.level}%
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="relative pt-1">
                          <div
                            className={`overflow-hidden h-3 text-xs flex rounded-full ${
                              theme === "dark" ? "bg-[#30363D]" : "bg-[#E5E7EB]"
                            }`}
                          >
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, ease: "easeOut", delay: catIndex * 0.1 + index * 0.05 }}
                              className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r ${category.gradient} rounded-full relative overflow-hidden`}
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
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={`mt-8 p-6 rounded-xl border ${
            theme === "dark"
              ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/30"
              : "bg-gradient-to-r from-blue-50 to-purple-50 border-blue-300/30"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                {skillCategories.length}
              </div>
              <div className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                Categories
              </div>
            </div>
            <div>
              <div className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)}
              </div>
              <div className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                Total Skills
              </div>
            </div>
            <div>
              <div className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                {skillCategories.reduce((acc, cat) => acc + cat.skills.filter(s => s.proficiency === "Expert").length, 0)}
              </div>
              <div className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                Expert Level
              </div>
            </div>
            <div>
              <div className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                 {skillCategories.reduce((acc, cat) => acc + cat.skills.filter(s => s.proficiency === "Advanced").length, 0)}
              </div>
              <div className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                Advanced
              </div>
            </div>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
}
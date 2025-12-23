"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Trophy,
  Users,
  BookOpen,
  Github,
  Award,
  Star,
  TrendingUp,
  Zap,
  Target,
  Rocket,
} from "lucide-react";

interface AchievementsProps {
  theme: "light" | "dark";
}

const achievements = [
  {
    icon: Star,
    title: "Perfect Academic Record",
    description:
      "Achieved and maintained a perfect 4.0 GPA throughout the Master's program in Data Science and Analytics at Florida Atlantic University, demonstrating consistent academic excellence and deep mastery of advanced concepts.",
    category: "Academic",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Massive Social Media Impact",
    description:
      "Built thriving community of 750,000+ followers on Snapchat through innovative AR content creation, establishing significant digital presence and influence in the creative technology space.",
    category: "Creative",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "Viral AR Content Creation",
    description:
      "Developed 300+ augmented reality lenses that collectively generated over 150 billion views, demonstrating exceptional ability to create engaging, viral content that resonates with global audiences.",
    category: "Creative",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Trophy,
    title: "State-Level SnapAR Recognition",
    description:
      "Secured 1st place in the state-level SnapAR Lensathon competition, showcasing superior technical skill, creativity, and innovation in augmented reality lens development.",
    category: "Competition",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Rocket,
    title: "Hackathon Success",
    description:
      "Led Team DECODE in FAU's Data Engineering Hackathon for Precision Medicine, developing AI-driven CKD detection processing 20M+ data points. Also led team of 3 in FAU's Agentic AI Hackathon, building CareGuide—a multi-agent healthcare AI system with HIPAA-aligned processing and RAG-grounded recommendations.",
    category: "Competition",
    gradient: "from-green-500 to-teal-500",
  },
  {
    icon: BookOpen,
    title: "Published Research Author",
    description:
      "Authored peer-reviewed research paper on 'Automatic Drunk Driving Detection System in Autonomous Vehicles' and comprehensive survey on Heterogeneous Transfer Learning, contributing to academic knowledge base.",
    category: "Research",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Github,
    title: "Open-Source Contributor",
    description:
      "Actively contributed to open-source projects in machine learning and Python on GitHub, collaborating with global developer community and enhancing software development ecosystem.",
    category: "Community",
    gradient: "from-gray-500 to-slate-600",
  },
  {
    icon: Target,
    title: "Workshop Leadership",
    description:
      "Successfully conducted workshop on 'Creating Lenses on Snapchat using Lens Studio,' training 150+ participants in AR development and sharing technical expertise with aspiring creators.",
    category: "Leadership",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Award,
    title: "Athletic Achievement",
    description:
      "Represented Telangana state cricket team and led school team to victory in multiple tournaments, demonstrating leadership, teamwork, and competitive excellence in sports.",
    category: "Sports",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Zap,
    title: "Enterprise Impact",
    description:
      "Drove 20% increase in user engagement through multi-language system implementation at Levicent Software Technologies, delivering measurable business value through technical innovation.",
    category: "Professional",
    gradient: "from-yellow-500 to-amber-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const categories = ["All", "Academic", "Creative", "Competition", "Research", "Professional", "Leadership", "Community", "Sports"];

export default function Achievements({ theme }: AchievementsProps) {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredAchievements = selectedCategory === "All" 
    ? achievements 
    : achievements.filter(a => a.category === selectedCategory);

  return (
    <Card
      className={`backdrop-blur-sm ${
        theme === "dark"
          ? "bg-[#161B22]/80 border-[#30363D] shadow-xl"
          : "bg-white/80 border-[#E5E7EB] shadow-xl"
      }`}
    >
      <CardHeader>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* UPDATED TITLE THEME TO MATCH OTHER SECTIONS */}
          <CardTitle className="text-2xl md:text-3xl font-bold flex items-center gap-3">
            <Trophy className="w-7 h-7 text-blue-500" />
            <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
              Achievements & Recognition
            </span>
          </CardTitle>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : theme === "dark"
                    ? "bg-[#21262D] text-gray-400 hover:bg-[#30363D] hover:text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 md:grid-cols-2"
        >
          {filteredAchievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className={`p-6 rounded-xl border backdrop-blur-sm relative overflow-hidden ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-[#21262D]/60 to-[#1C2128]/60 border-[#30363D] hover:border-blue-500/50"
                    : "bg-gradient-to-br from-white/60 to-gray-50/60 border-[#E5E7EB] hover:border-blue-400/50"
                } transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer`}
              >
                {/* Background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${achievement.gradient} opacity-0 hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <motion.div
                      className={`p-3 rounded-xl bg-gradient-to-r ${achievement.gradient} flex-shrink-0`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </motion.div>

                    <div className="flex-1 min-w-0">
                      {/* Category Badge */}
                      <div className="mb-2">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium ${
                            theme === "dark"
                              ? "bg-blue-500/20 text-blue-300"
                              : "bg-blue-500/10 text-blue-700"
                          }`}
                        >
                          {achievement.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        className={`text-lg font-bold mb-2 ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {achievement.title}
                      </h3>

                      {/* Description */}
                      <p
                        className={`text-sm leading-relaxed ${
                          theme === "dark" ? "text-[#C9D1D9]" : "text-[#4B5563]"
                        }`}
                      >
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {filteredAchievements.length === 0 && (
          <div className="text-center py-12">
            <p className={`text-lg ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
              No achievements found in this category.
            </p>
          </div>
        )}

        {/* Summary Stats - UPDATED COLORS */}
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
              <div className={`text-2xl md:text-3xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                10+
              </div>
              <div className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                Major Achievements
              </div>
            </div>
            <div>
              <div className={`text-2xl md:text-3xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                150B+
              </div>
              <div className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                Total Views
              </div>
            </div>
            <div>
              <div className={`text-2xl md:text-3xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                750K+
              </div>
              <div className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                Community Size
              </div>
            </div>
            <div>
              <div className={`text-2xl md:text-3xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                4.0
              </div>
              <div className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                Perfect GPA
              </div>
            </div>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
}
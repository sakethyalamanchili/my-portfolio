"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
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

const achievements = [
  {
    icon: Star,
    title: "Perfect Academic Record",
    description:
      "Achieved and maintained a perfect 4.0 GPA throughout the Master's program in Data Science and Analytics at Florida Atlantic University, demonstrating consistent academic excellence and deep mastery of advanced concepts.",
    category: "Academic",
  },
  {
    icon: Users,
    title: "Massive Social Media Impact",
    description:
      "Built thriving community of 750,000+ followers on Snapchat through innovative AR content creation, establishing significant digital presence and influence in the creative technology space.",
    category: "Creative",
  },
  {
    icon: TrendingUp,
    title: "Viral AR Content Creation",
    description:
      "Developed 300+ augmented reality lenses that collectively generated over 150 billion views, demonstrating exceptional ability to create engaging, viral content that resonates with global audiences.",
    category: "Creative",
  },
  {
    icon: Trophy,
    title: "State-Level SnapAR Recognition",
    description:
      "Secured 1st place in the state-level SnapAR Lensathon competition, showcasing superior technical skill, creativity, and innovation in augmented reality lens development.",
    category: "Competition",
  },
  {
    icon: Rocket,
    title: "Hackathon Success",
    description:
      "Led Team DECODE in FAU's Data Engineering Hackathon for Precision Medicine, developing AI-driven CKD detection processing 20M+ data points. Also built CareGuide - a multi-agent healthcare AI system with HIPAA-aligned processing and RAG-grounded recommendations.",
    category: "Competition",
  },
  {
    icon: BookOpen,
    title: "Published Research Author",
    description:
      "Authored peer-reviewed research paper on 'Automatic Drunk Driving Detection System in Autonomous Vehicles' and comprehensive survey on Heterogeneous Transfer Learning, contributing to academic knowledge base.",
    category: "Research",
  },
  {
    icon: Github,
    title: "Open-Source Contributor",
    description:
      "Actively contributed to open-source projects in machine learning and Python on GitHub, collaborating with global developer community and enhancing software development ecosystem.",
    category: "Community",
  },
  {
    icon: Target,
    title: "Workshop Leadership",
    description:
      "Successfully conducted workshop on 'Creating Lenses on Snapchat using Lens Studio,' training 150+ participants in AR development and sharing technical expertise with aspiring creators.",
    category: "Leadership",
  },
  {
    icon: Award,
    title: "Athletic Achievement",
    description:
      "Represented Telangana state cricket team and led school team to victory in multiple tournaments, demonstrating leadership, teamwork, and competitive excellence in sports.",
    category: "Sports",
  },
  {
    icon: Zap,
    title: "Enterprise Impact",
    description:
      "Drove 20% increase in user engagement through multi-language system implementation at Levicent Software Technologies, delivering measurable business value through technical innovation.",
    category: "Professional",
  },
];

const categories = [
  "All",
  "Academic",
  "Creative",
  "Competition",
  "Research",
  "Professional",
  "Leadership",
  "Community",
  "Sports",
];

export function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredAchievements =
    selectedCategory === "All"
      ? achievements
      : achievements.filter((a) => a.category === selectedCategory);

  return (
    <section id="achievements" ref={ref} className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm tracking-[0.2em] uppercase text-primary mb-4">
            Achievements
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-foreground">
            Recognition & Milestones
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredAchievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                layout
                className="p-6 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <span className="inline-block px-2.5 py-0.5 rounded-md text-xs font-medium bg-primary/10 text-primary mb-2">
                      {achievement.category}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 p-8 rounded-3xl bg-card border border-border"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-foreground mb-1">10+</div>
              <div className="text-sm text-muted-foreground">Major Achievements</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-1">150B+</div>
              <div className="text-sm text-muted-foreground">Total Views</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-1">750K+</div>
              <div className="text-sm text-muted-foreground">Community Size</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-1">4.0</div>
              <div className="text-sm text-muted-foreground">Perfect GPA</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

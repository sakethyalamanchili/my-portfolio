"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "AI & Generative AI",
    skills: [
      { name: "Python", level: 95 },
      { name: "Llama-Index", level: 90 },
      { name: "LangChain", level: 90 },
      { name: "Machine Learning (Scikit-learn)", level: 85 },
      { name: "Deep Learning (TF/Keras)", level: 80 },
      { name: "PyTorch", level: 75 },
    ],
  },
  {
    title: "Data Science & Analytics",
    skills: [
      { name: "Pandas & NumPy", level: 95 },
      { name: "Weka", level: 90 },
      { name: "SQL", level: 85 },
      { name: "Data Analysis", level: 85 },
      { name: "Power BI / Tableau", level: 80 },
      { name: "NLP & Research", level: 80 },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "React / Angular", level: 85 },
      { name: "JavaScript / TypeScript", level: 85 },
      { name: "HTML / CSS / Tailwind", level: 90 },
      { name: "Cloudinary", level: 80 },
      { name: "Bootstrap", level: 80 },
      { name: "REST APIs (Swagger)", level: 75 },
    ],
  },
  {
    title: "Electronics & Creative Tech",
    skills: [
      { name: "Lens Studio (AR)", level: 85 },
      { name: "Microcontrollers (Arduino)", level: 85 },
      { name: "Embedded Systems & IoT", level: 80 },
      { name: "Signal Processing", level: 75 },
      { name: "C / C++", level: 75 },
      { name: "AR Development", level: 70 },
    ],
  },
];

const secondarySkills = [
  "Git / GitHub", "VS Code", "Jupyter", "Google Colab", "PyCharm", 
  "Streamlit", "Spyder", "Matplotlib", "Seaborn", "Excel", 
  "Computer Vision", "phpMyAdmin", "XML", "LaTeX", "Figma", "Docker"
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="py-24 md:py-32 px-6 bg-secondary/30 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm tracking-[0.2em] uppercase text-primary mb-4">Technical Arsenal</h2>
          <p className="text-3xl md:text-4xl font-bold text-foreground">Expertise & Specializations</p>
        </motion.div>

        {/* Main Skills Bento Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="p-8 rounded-3xl bg-card border border-border shadow-sm"
            >
              <h3 className="text-lg font-semibold text-foreground mb-6">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-foreground font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-primary via-blue-400 to-cyan-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee Section */}
      <div className="relative flex flex-col items-center">
        <h3 className="text-lg font-semibold text-foreground mb-8">Tools & Environments</h3>
        
        {/* Infinite Scroll Container */}
        <div className="relative flex w-full max-w-[100vw] overflow-hidden py-4">
          <motion.div
            className="flex flex-none gap-4 pr-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          >
            {/* Double the list to create seamless looping */}
            {[...secondarySkills, ...secondarySkills].map((skill, idx) => (
              <div
                key={idx}
                className="px-6 py-3 rounded-2xl bg-card border border-border text-sm text-muted-foreground whitespace-nowrap hover:border-primary/50 transition-colors"
              >
                {skill}
              </div>
            ))}
          </motion.div>

          {/* Side Gradients for "Fade Out" effect */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-secondary/30 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-secondary/30 to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}
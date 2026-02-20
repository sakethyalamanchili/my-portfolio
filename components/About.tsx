"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download, Mail, Brain, Code, Rocket } from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    title: "Agentic AI & Machine Learning",
    description:
      "Specializing in Reinforcement Learning and Agentic workflows. Developed 'CareGuide', an AI health analysis system using multi-agent frameworks, and engineered RAG pipelines for advanced NLP tasks. Experienced in deploying models with PyTorch and TensorFlow.",
    icon: Brain,
  },
  {
    title: "Enterprise Software Engineering",
    description:
      "Engineered scalable full-stack solutions at Levicent Software Technologies, optimizing multi-language support systems that boosted engagement by 20%. Proficient in integrating secure backend architectures with responsive frontend designs.",
    icon: Code,
  },
  {
    title: "AR & Creative Technology",
    description:
      "Created 300+ immersive AR experiences as a Lens Developer for SnapAR, amassing over 150 billion views globally. Blends technical programming with creative design to build viral, user-centric interactive media.",
    icon: Rocket,
  },
];

const skills = [
  { category: "Languages", items: "Python, JavaScript/TypeScript, SQL, C, C++, LaTeX" },
  { category: "AI/ML", items: "PyTorch, TensorFlow, Reinforcement Learning, RAG" },
  { category: "Web", items: "React, Next.js, Node.js, Tailwind CSS, Streamlit" },
  { category: "Tools", items: "Git, Power BI, Tableau, Lens Studio" },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const resumeLink =
    "https://drive.google.com/file/d/1wMgMQYtRj6iA8klh9gYmYlNEFCuPbX88/view?usp=drive_link";
  const hireEmail =
    "mailto:syalamanchil2025@fau.edu?subject=Job%20Opportunity&body=Hello%20Saketh,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20I'm%20interested%20in%20discussing%20a%20potential%20job%20opportunity%20with%20you.";

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm tracking-[0.2em] uppercase text-primary mb-4">
            About Me
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-foreground max-w-3xl mx-auto text-balance">
            Data Science graduate student with a passion for building intelligent systems
          </p>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            {"I'm"} a Master{"'"}s candidate at Florida Atlantic University with expertise in{" "}
            <span className="text-foreground font-medium">Artificial Intelligence</span>,{" "}
            <span className="text-foreground font-medium">Deep Learning</span>,{" "}
            <span className="text-foreground font-medium">Data Science</span>,{" "}
            <span className="text-foreground font-medium">Gen AI</span>, and{" "}
            <span className="text-foreground font-medium">AR Creation</span>. Currently serving as a 
            Graduate Research Assistant, I bridge the gap between academic research and real-world 
            applications, building solutions that have reached billions of users globally.
          </p>
        </motion.div>

        {/* Core Expertise - Bento Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group p-8 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">
            Technical Proficiencies
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="p-5 rounded-2xl bg-secondary/50 border border-border/50"
              >
                <div className="text-sm font-medium text-primary mb-2">
                  {skill.category}
                </div>
                <p className="text-sm text-muted-foreground">{skill.items}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 bg-transparent"
            asChild
          >
            <Link href={resumeLink} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Link>
          </Button>
          <Button size="lg" className="rounded-full px-8" asChild>
            <Link href={hireEmail}>
              <Mail className="mr-2 h-4 w-4" />
              {"Let's Connect"}
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

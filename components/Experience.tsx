"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Code, Rocket, Users } from "lucide-react";

const experienceItems = [
  {
    title: "Graduate Research Assistant",
    company: "Florida Atlantic University",
    period: "August 2025 - Present",
    location: "Boca Raton, FL",
    type: "Academic Research",
    responsibilities: [
      "Spearheading the Vertically Integrated Projects (VIP) program for AI and Data Science research",
      "Mentoring graduate and undergraduate students in ML concepts and research methodologies",
      "Developing educational resources and technical documentation for student learning",
      "Building collaborative bridges between academic research and industry applications",
    ],
    achievements: ["First cohort onboarded", "Mentorship framework established", "Research resource library created"],
    icon: Award,
  },
  {
    title: "Software Developer Intern",
    company: "Levicent Software Technologies",
    period: "May 2024 - November 2024",
    location: "Tamil Nadu, India",
    type: "Software Engineering",
    responsibilities: [
      "Architected multi-language support for enterprise HMS & HRMS applications (+20% engagement)",
      "Implemented secure session management with token-based authentication (-15% security incidents)",
      "Developed AI-powered chatbot using PyTorch for LMS (-50% query response times)",
      "Collaborated with cross-functional teams to deliver scalable, production-ready features",
    ],
    achievements: ["20% engagement increase", "15% fewer security incidents", "50% faster support"],
    icon: Code,
  },
  {
    title: "Freelance AR Lens Developer",
    company: "SnapAR (Self-Employed)",
    period: "January 2022 - May 2024",
    location: "Remote",
    type: "Creative Technology",
    responsibilities: [
      "Engineered 300+ AR lenses generating over 150 billion views on Snapchat",
      "Built community of 750,000+ followers through high-quality AR experiences",
      "Collaborated with international creators and brands on custom AR development",
      "Analyzed engagement metrics to optimize lens performance and reach",
    ],
    achievements: ["150B+ total views", "750K+ followers", "Top creator status"],
    icon: Rocket,
  },
  {
    title: "Private Tutor",
    company: "Self-Employed",
    period: "October 2022 - December 2024",
    location: "Hyderabad, India",
    type: "Education",
    responsibilities: [
      "Provided personalized tutoring in Mathematics, Science, and Social Studies",
      "Developed customized lesson plans targeting specific knowledge gaps",
      "Achieved 15-20% average grade improvement across all students",
    ],
    achievements: ["100% satisfaction rate", "15-20% grade improvement", "Multiple honor roll students"],
    icon: Users,
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm tracking-[0.2em] uppercase text-primary mb-4">
            Experience
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-foreground">
            Professional Journey
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experienceItems.map((item, index) => {
              const IconComponent = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative md:w-1/2 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"}`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute top-0 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-card border-2 border-primary ${isEven ? "-right-6" : "-left-6"}`}>
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>

                  {/* Card */}
                  <div className="p-6 md:p-8 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
                    {/* Mobile icon */}
                    <div className="md:hidden w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>

                    {/* Type badge */}
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4">
                      {item.type}
                    </span>

                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-primary font-medium mb-2">{item.company}</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {item.period} / {item.location}
                    </p>

                    {/* Responsibilities */}
                    <ul className={`space-y-2 mb-6 ${isEven ? "md:text-right" : ""}`}>
                      {item.responsibilities.map((resp, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-muted-foreground leading-relaxed"
                        >
                          {resp}
                        </li>
                      ))}
                    </ul>

                    {/* Achievements */}
                    <div className={`flex flex-wrap gap-2 ${isEven ? "md:justify-end" : ""}`}>
                      {item.achievements.map((achievement, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-secondary text-foreground"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

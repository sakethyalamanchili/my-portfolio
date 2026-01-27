"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Star } from "lucide-react";

const educationItems = [
  {
    degree: "Master of Science in Data Science and Analytics",
    school: "Florida Atlantic University",
    period: "Expected Graduation: Spring 2025",
    location: "Boca Raton, Florida",
    gpa: "4.0 / 4.0",
    status: "Perfect GPA",
    details:
      "Advanced graduate program specializing in machine learning, artificial intelligence, deep learning, and big data analytics. Coursework emphasizes practical application of data science methodologies to solve complex real-world challenges.",
    achievements: [
      "Maintained perfect 4.0 GPA across all semesters",
      "Graduate Research Assistant position",
      "Dean's List all semesters",
    ],
    coursework: [
      "Intro to Data Science (CAP 5768)",
      "Intro to Business Analytics with Big Data (ISM 6404)",
      "Data Mining & Machine Learning (CAP 6673)",
      "Deep Learning (CAP 6619)",
      "Natural Language Processing (CAP 6640)",
      "Reinforcement Learning (CAP 6629)",
    ],
  },
  {
    degree: "Bachelor of Technology in Electronics and Communication Engineering",
    school: "Jawaharlal Nehru Technological University, Hyderabad",
    period: "Graduated: May 2024",
    location: "Hyderabad, India",
    gpa: "7.3 / 10.0",
    status: "First Class",
    details:
      "Comprehensive undergraduate program with strong foundation in electronics, signal processing, embedded systems, and IoT technologies. Emphasized hands-on project work and practical applications of engineering principles.",
    achievements: [
      "Led team projects in Embedded Systems and IoT",
      "Published research on Autonomous Vehicle Safety",
      "Active member of Robotics Club",
    ],
    coursework: [
      "Signal Processing & Analysis",
      "Embedded Systems Design",
      "Internet of Things (IoT)",
      "Python Programming",
      "Communication Networks",
      "Microcontroller Applications",
    ],
  },
];

export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" ref={ref} className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm tracking-[0.2em] uppercase text-primary mb-4">
            Education
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-foreground">
            Academic Background
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-8">
          {educationItems.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-8 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {item.degree}
                      </h3>
                      <p className="text-primary font-medium">{item.school}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.period} / {item.location}
                      </p>
                    </div>

                    {/* GPA Badge */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold">
                        <Star className="w-4 h-4" />
                        <span>GPA: {item.gpa}</span>
                      </div>
                      <span className="px-3 py-2 rounded-lg bg-secondary text-foreground text-sm font-medium">
                        {item.status}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{item.details}</p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      Key Achievements
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.achievements.map((achievement, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-lg bg-secondary/50 text-sm text-muted-foreground"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Coursework */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      Relevant Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.coursework.map((course, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-lg bg-primary/10 text-sm text-primary"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

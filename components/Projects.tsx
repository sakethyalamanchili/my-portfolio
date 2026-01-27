"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { 
  ExternalLink, Github, Brain, Database, Bot, Heart, 
  Gamepad2, MessageSquare, Car, Sun, Home, Users, 
  Calculator, CheckCircle, ChevronLeft, ChevronRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const allProjects = [
  {
    title: "CareGuide – AI Health Engagement System",
    description: "Winning Agentic AI Hackathon project. Deterministic multi-agent architecture for actionable care plans. Features HIPAA-aligned de-identification and RAG grounded in USPSTF guidelines.",
    tags: ["Agentic AI", "RAG", "Google Gemini", "Python"],
    icon: Heart,
    github: "https://github.com/sakethyalamanchili/Health-Scribe",
    featured: true,
  },
  {
    title: "Risk-Aware Stochastic Navigation (RL)",
    description: "Research investigating Safety vs. Optimality in RL. Benchmarked SARSA and Double Q-Learning in custom stochastic environments with wind/slip dynamics.",
    tags: ["Reinforcement Learning", "Python", "OpenAI Gym"],
    icon: Brain,
    github: "https://github.com/sakethyalamanchili/stochastic-cliff-walking",
    featured: true,
  },
  {
    title: "Fine-Grained Visual Classification",
    description: "Transfer Learning framework for computational gastronomy using Inception V3 and Stochastic Kernel Injection to mitigate texture bias in Food-101.",
    tags: ["Computer Vision", "TensorFlow", "Deep Learning"],
    icon: Database,
    github: "https://github.com/sakethyalamanchili/Fine-Grained-Visual-Classification-of-Complex-Classes-in-Food-101",
  },
  {
    title: "Solar-Based E-Uniform for Soldiers",
    description: "Smart uniform integrating environmental sensors, GPS tracking, and wireless communication powered by renewable energy for mission safety.",
    tags: ["IoT", "Embedded Systems", "Renewable Energy"],
    icon: Sun,
    github: "https://github.com/sakethyalamanchili/Solar-Based-e_Uniform-for-Soldiers",
  },
  {
    title: "Drunk Driving Detection System",
    description: "Arduino-based safety solution featuring an MQ3 Alcohol Sensor and LCD alerts to prevent accidents in autonomous and manual vehicles.",
    tags: ["Arduino", "Sensors", "IoT"],
    icon: Car,
    github: "https://github.com/sakethyalamanchili/Drunk-Driving-Detection-System-for-Autonomous-Vehicles",
  },
  {
    title: "Early Detection of CKD Using AI",
    description: "Predicting Chronic Kidney Disease via ML using real-time data. Built with a React.js interface for stage prediction and action recommendations.",
    tags: ["Machine Learning", "React", "Healthcare AI"],
    icon: Heart,
    github: "https://github.com/sakethyalamanchili/CKD-Risk-Prediction",
  },
  {
    title: "LinkedIn Reply Assistant",
    description: "Chrome extension using NLP to generate contextual replies to LinkedIn messages quickly based on message categories and templates.",
    tags: ["JavaScript", "Chrome Extension", "NLP"],
    icon: MessageSquare,
    github: "https://github.com/sakethyalamanchili/LinkedIn-Reply-Assistant",
  },
  {
    title: "Advanced Regression for House Prices",
    description: "Predictive modeling pipeline from preprocessing to deployment using Scikit-learn to estimate residential real estate values.",
    tags: ["Python", "Scikit-learn", "Regression"],
    icon: Home,
    demo: "https://saketh-house-price-estimator.streamlit.app/",
  },
  {
    title: "Medical Prescription Translator",
    description: "Translates medical prescriptions into multiple Indian languages using Google Gemini AI to improve healthcare accessibility.",
    tags: ["Google Gemini", "NLP", "Streamlit"],
    icon: MessageSquare,
    demo: "https://meditranslatebysaketh.streamlit.app/",
  },
  {
    title: "Power BI Student Performance Analysis",
    description: "Interactive dashboards uncovering correlations between sleep, stress, and academic success for student risk-factor identification.",
    tags: ["Power BI", "Data Analysis", "DAX"],
    icon: Database,
    github: "https://github.com/sakethyalamanchili/Masters-FAU/blob/main/ISM-6404_Intro-to-Business-Analytics/final_project_saketh_mounika.pdf",
  },
  {
    title: "IntelliApp",
    description: "Multi-functional AI platform supporting image captioning, text embedding, Q&A, and code generation via advanced LLM models.",
    tags: ["AI Models", "Python", "Streamlit"],
    icon: Bot,
    demo: "https://intelliapp.streamlit.app/",
  },
  {
    title: "EasyTrack - Task Management",
    description: "Enterprise-grade Angular application for task orchestration featuring LocalStorage persistence and responsive design.",
    tags: ["Angular", "TypeScript", "UI/UX"],
    icon: CheckCircle,
    github: "https://github.com/sakethyalamanchili/EasyTrack",
  },
  {
    title: "Investment Calculator",
    description: "Financial modeling tool built with Angular to visualize investment growth, compound interest, and future earnings estimates.",
    tags: ["Angular", "Financial Modeling", "TypeScript"],
    icon: Calculator,
    github: "https://github.com/sakethyalamanchili/Investment-Calculator",
  },
  {
    title: "Dog Breed Identification",
    description: "A computer vision project identifying various dog breeds using deep learning and the TensorFlow framework.",
    tags: ["TensorFlow", "Deep Learning", "CV"],
    icon: Users,
    github: "https://github.com/sakethyalamanchili/Dog-Breed-Identification-with-TensorFlow",
  },
  {
    title: "ASCII Art Generator",
    description: "Image processing tool that converts standard images into expressive text-based ASCII art directly in the browser.",
    tags: ["Python", "Image Processing", "Streamlit"],
    icon: Gamepad2,
    github: "https://github.com/sakethyalamanchili/ASCII-Art-Generator",
  }
];

export function ProjectsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const totalPages = Math.ceil(allProjects.length / projectsPerPage);
  const currentProjects = allProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  return (
    <section id="projects" ref={ref} className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm tracking-[0.2em] uppercase text-primary mb-4">Portfolio</h2>
          <p className="text-3xl md:text-4xl font-bold text-foreground">Featured Projects</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="min-h-[850px]">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {currentProjects.map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group p-6 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-300 flex flex-col shadow-sm hover:shadow-xl hover:shadow-primary/5"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>

                    {project.featured && (
                      <span className="inline-block w-fit px-2.5 py-0.5 rounded-md text-[10px] uppercase font-bold bg-primary text-primary-foreground mb-3">
                        Featured
                      </span>
                    )}

                    <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {project.title}
                    </h3>

                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 rounded-md bg-secondary text-[10px] font-medium text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2 mt-auto">
                      {project.github && (
                        <Button variant="outline" size="sm" className="flex-1 rounded-xl bg-transparent text-xs" asChild>
                          <Link href={project.github} target="_blank">
                            <Github className="w-3.5 h-3.5 mr-2" /> Code
                          </Link>
                        </Button>
                      )}
                      {project.demo && (
                        <Button size="sm" className="flex-1 rounded-xl text-xs" asChild>
                          <Link href={project.demo} target="_blank">
                            <ExternalLink className="w-3.5 h-3.5 mr-2" /> Demo
                          </Link>
                        </Button>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex gap-1.5">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentPage === page ? "w-8 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/40"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
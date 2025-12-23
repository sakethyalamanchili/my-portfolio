"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronLeft, ChevronRight, Code } from "lucide-react";

interface ProjectsProps {
  theme: "light" | "dark";
}

const projects = [
  {
    title: "CareGuide – AI Health Engagement System",
    description:
      "A winning Agentic AI Hackathon project. CareGuide is an intelligent system that transforms fragmented patient health records into actionable care plans using a deterministic multi-agent architecture. Features include HIPAA-aligned de-identification, RAG grounded in USPSTF guidelines, and a gamified Health Engagement Score to drive patient action.",
    technologies: ["Agentic AI", "RAG", "Google Gemini", "Streamlit", "Python"],
    github: "https://github.com/sakethyalamanchili/Health-Scribe",
  },
  {
    title: "Risk-Aware Stochastic Navigation (RL)",
    description:
      "Research investigating the 'Safety vs. Optimality' trade-off in Reinforcement Learning. Benchmarked SARSA, Q-Learning, and Double Q-Learning in custom stochastic grid environments with wind and slip dynamics. Calculated theoretical ground truth using Model-Based Value Iteration to map 'fear zones' and quantify agent reliability.",
    technologies: ["Reinforcement Learning", "Python", "OpenAI Gym", "Algorithm Analysis"],
    github: "https://github.com/sakethyalamanchili/stochastic-cliff-walking",
  },
  {
    title: "Fine-Grained Visual Classification (Food-101)",
    description:
      "A robust Transfer Learning framework tackling the 'Sim-to-Real' gap in computational gastronomy. Utilized an Inception V3 backbone with a novel Stochastic Kernel Injection pipeline to mitigate texture bias. Implemented Dual-Phase optimization to prevent catastrophic forgetting, achieving ~90% accuracy on complex food classes.",
    technologies: ["Computer Vision", "Deep Learning", "TensorFlow", "Transfer Learning"],
    github: "https://github.com/sakethyalamanchili/Fine-Grained-Visual-Classification-of-Complex-Classes-in-Food-101",
  },
  {
    title: "Research Paper on Heterogeneous Transfer Learning",
    description:
      "Authored a comprehensive research paper for my Data Mining course, exploring the challenges, methodologies, and future directions in Heterogeneous Transfer Learning (HTL). The paper delves into real-world applications of HTL in various domains and its potential to address complex problems by bridging the gap between diverse data sources and models.",
    technologies: ["LaTeX", "Academic Research", "Data Mining"],
    github: "https://github.com/sakethyalamanchili/Masters-FAU/blob/main/CAP-6673_Data-Mining-Machine-Learning/a_survey_on_heterogeneous_transfer_learning_yalamanchili_saketh.pdf",
  },
  {
    title: "Power BI Analysis of Student Performance",
    description:
      "Developed five interactive Power BI dashboards to analyze student success, risk factors, and demographic influences. The dashboards provided insights into academic performance, assessment methods, student engagement, and key behavioral patterns, uncovering correlations between factors such as sleep, stress, study hours, and performance.",
    technologies: ["Power BI", "DAX", "Data Analysis", "Business Analytics"],
    github: "https://github.com/sakethyalamanchili/Masters-FAU/blob/main/ISM-6404_Intro-to-Business-Analytics/final_project_saketh_mounika.pdf",
  },
  {
    title: "Early Detection of CKD Using AI",
    description:
      "Worked on this project during a hackathon conducted by All of Us Research, using real-time data to predict Chronic Kidney Disease (CKD) via Machine Learning. Developed a React.js interface allowing users to input data and receive predictions on CKD stage, risk level, and recommended actions.",
    technologies: ["Python", "React", "Machine Learning", "Healthcare AI"],
    github: "https://github.com/sakethyalamanchili/CKD-Risk-Prediction",
  },
  {
    title: "ASCII Art Generator",
    description:
      "An open-source project to convert images into expressive ASCII art! Created with Python and Streamlit, this app lets you transform images into text-based art right in your browser. This is a community-driven project that thrives on contributions to evolve with new features.",
    technologies: ["Python", "Streamlit", "Image Processing"],
    github: "https://github.com/sakethyalamanchili/ASCII-Art-Generator",
  },
  {
    title: "Medical Prescription Translator",
    description:
      "A Streamlit app that translates medical prescriptions into Indian languages using Google's Gemini AI. It helps users input patient details and medications and provides accurate translations in languages like Hindi, Telugu, and more.",
    technologies: ["Python", "Streamlit", "Google Gemini AI", "NLP"],
    demo: "https://meditranslatebysaketh.streamlit.app/",
  },
  {
    title: "IntelliApp",
    description:
      "A versatile AI-powered web application that provides several functionalities including chat, image captioning, text embedding, question answering, and code generation. This application leverages advanced AI models to assist users in various tasks.",
    technologies: [
      "Python",
      "Streamlit",
      "AI Models",
      "NLP",
      "Computer Vision",
    ],
    demo: "https://intelliapp.streamlit.app/",
  },
  {
    title: "Solar-Based E-Uniform for Soldiers",
    description:
      "A smart uniform integrating environmental sensors, GPS tracking, and wireless communication for enhanced soldier safety and comfort during missions. Powered by renewable energy sources.",
    technologies: ["IoT", "GPS", "Renewable Energy", "Embedded Systems"],
    github:
      "https://github.com/sakethyalamanchili/Solar-Based-e_Uniform-for-Soldiers",
  },
  {
    title: "Advanced Regression for House Prices",
    description:
      "Explore advanced regression techniques applied to house price prediction. From data preprocessing to model deployment, dive into the journey of building and deploying predictive models using Streamlit.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Streamlit",
      "Machine Learning",
    ],
    demo: "https://saketh-house-price-estimator.streamlit.app/",
  },
  {
    title: "Dog Breed Identification",
    description:
      "A project exploring the art of identifying dog breeds using TensorFlow, making machine learning accessible and fun for all.",
    technologies: ["Python", "TensorFlow", "Deep Learning", "Computer Vision"],
    github:
      "https://github.com/sakethyalamanchili/Dog-Breed-Identification-with-TensorFlow",
  },
  {
    title: "Diabetes Prediction Project",
    description:
      "Predict diabetes risk accurately using machine learning. Explore different algorithms, evaluate their performance, and deploy the best model as a user-friendly web application.",
    technologies: ["Python", "Machine Learning", "Streamlit", "Data Analysis"],
    demo: "https://saketh-diabetes-predictor.streamlit.app/",
  },
  {
    title: "LinkedIn Reply Assistant",
    description:
      "A Chrome extension designed to help users generate contextual replies to LinkedIn messages quickly and efficiently. It analyzes incoming messages and provides appropriate response templates based on the message category and selected language.",
    technologies: ["JavaScript", "Chrome Extension", "NLP", "API Integration"],
    github: "https://github.com/sakethyalamanchili/LinkedIn-Reply-Assistant",
  },
  {
    title: "Investment Calculator",
    description:
      "A web app built with Angular to estimate investment growth. Input initial investment, annual contributions, expected return, and duration to visualize future earnings.",
    technologies: [
      "Angular",
      "TypeScript",
      "Financial Modeling",
      "Web Development",
    ],
    github: "https://github.com/sakethyalamanchili/Investment-Calculator",
  },
  {
    title: "EasyTrack - Enterprise Task Management",
    description:
      "An Angular-based application for efficient task management. It features user selection, task creation, and deletion with a responsive design for desktop and mobile. Tasks are stored in localStorage, ensuring persistence and reliability.",
    technologies: [
      "Angular",
      "TypeScript",
      "LocalStorage",
      "Responsive Design",
    ],
    github: "https://github.com/sakethyalamanchili/EasyTrack",
  },
  {
    title: "Drunk Driving Detection System",
    description:
      "An Arduino-based solution featuring an MQ3 Alcohol Sensor, LCD Display, and safety alerts to prevent accidents caused by impaired driving. Enhance road safety with this simple, effective system.",
    technologies: ["Arduino", "IoT", "Sensors", "Embedded Systems"],
    github:
      "https://github.com/sakethyalamanchili/Drunk-Driving-Detection-System-for-Autonomous-Vehicles",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const projectsPerPage = 6;

export default function Projects({ theme }: ProjectsProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Card
      className={`${
        theme === "dark"
          ? "bg-[#161B22] border-[#30363D]"
          : "bg-white border-[#E5E7EB]"
      }`}
    >
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl font-bold flex items-center gap-3">
          <Code className="w-7 h-7 text-blue-500" />
          <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {currentProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              // Removed 3D rotation (rotateX/Y) to ensure buttons remain clickable
              whileHover={{
                scale: 1.03,
                y: -5
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card
                className={`h-full flex flex-col justify-between overflow-hidden relative group ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-[#21262D] to-[#1C2128] border-[#30363D]"
                    : "bg-gradient-to-br from-white to-gray-50 border-[#E5E7EB]"
                } transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20`}
              >

                {/* Added pointer-events-none to ensure clicks pass through to buttons */}
                <motion.div 
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-blue-600/10 to-cyan-600/10"
                      : "bg-gradient-to-br from-blue-500/5 to-cyan-500/5"
                  }`}
                />

                <CardHeader className="relative z-10">
                  <CardTitle
                    className={`text-base md:text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r ${
                      theme === "dark"
                        ? "from-white to-blue-200"
                        : "from-[#1F2937] to-blue-600"
                    }`}
                  >
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10 flex-grow">
                  <p
                    className={`text-xs md:text-sm mb-4 leading-relaxed ${
                      theme === "dark" ? "text-[#C9D1D9]" : "text-[#4B5563]"
                    }`}
                  >
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                          theme === "dark"
                            ? "bg-gradient-to-r from-blue-600/20 to-cyan-600/20 text-blue-300 border border-blue-500/30"
                            : "bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-700 border border-blue-400/30"
                        }`}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
                
                {/* Increased z-index to 20 to ensure it sits above everything */}
                <CardFooter className="flex gap-2 relative z-20">
                  {project.github && (
                    <div className="flex-1">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className={`w-full ${
                          theme === "dark"
                            ? "bg-[#30363D] text-white hover:bg-[#3C444D] border-[#30363D]"
                            : "bg-white text-[#1F2937] border-gray-300"
                        } transition-colors duration-200`}
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    </div>
                  )}
                  {project.demo && (
                    <div className="flex-1">
                      <Button
                        size="sm"
                        asChild
                        className={`w-full ${
                          theme === "dark"
                            ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                            : "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                        } text-white border-0`}
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col sm:flex-row justify-center items-center w-full mt-8 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-2 ${
                  theme === "dark"
                    ? "bg-[#30363D] text-white hover:bg-[#3C444D]"
                    : "bg-white text-[#1F2937] hover:bg-[#F3F4F6]"
                } transition-colors duration-200`}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </motion.div>
            
            <span
              className={`text-sm px-4 ${
                theme === "dark" ? "text-white" : "text-[#1F2937]"
              }`}
            >
              Page {currentPage} of {totalPages}
            </span>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-2 ${
                  theme === "dark"
                    ? "bg-[#30363D] text-white hover:bg-[#3C444D]"
                    : "bg-white text-[#1F2937] hover:bg-[#F3F4F6]"
                } transition-colors duration-200`}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
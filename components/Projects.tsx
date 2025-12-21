// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardFooter,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

// interface ProjectsProps {
//   theme: "light" | "dark";
// }

// const projects = [
//   {
//     title: "Research Paper on Heterogeneous Transfer Learning",
//     description:
//       "Authored a comprehensive research paper for my Data Mining course, exploring the challenges, methodologies, and future directions in Heterogeneous Transfer Learning (HTL). The paper delves into real-world applications of HTL in various domains and its potential to address complex problems by bridging the gap between diverse data sources and models.",
//     technologies: ["LaTeX", "Academic Research", "Data Mining"],
//     github: "https://github.com/sakethyalamanchili/Masters-FAU/blob/main/CAP-6673_Data-Mining-Machine-Learning/a_survey_on_heterogeneous_transfer_learning_yalamanchili_saketh.pdf",
//   },
//   {
//     title: "Power BI Analysis of Student Performance and Risk Patterns",
//     description:
//       "Developed five interactive Power BI dashboards to analyze student success, risk factors, and demographic influences. The dashboards provided insights into academic performance, assessment methods, student engagement, and key behavioral patterns, uncovering correlations between factors such as sleep, stress, study hours, and performance. The project aimed to derive actionable insights for educational institutions.",
//     technologies: ["Power BI", "DAX", "Data Analysis", "Business Analytics"],
//     github: "https://github.com/sakethyalamanchili/Masters-FAU/blob/main/ISM-6404_Intro-to-Business-Analytics/final_project_saketh_mounika.pdf",
//   },
//   {
//     title: "Early Detection of Chronic Kidney Disease Using AI in Precision Medicine",
//     description:
//       "I worked on this project during a hackathon conducted by All of Us Research, where I used real-time data to predict Chronic Kidney Disease (CKD) in individuals using Machine Learning. This was a multiclass classification problem. Additionally, I developed an interface using React.js to allow users to input their data and receive predictions on CKD stage, risk level, prediction probability, and recommended actions.",
//     technologies: ["Python", "React"],
//     github: "https://github.com/sakethyalamanchili/CKD-Risk-Prediction",
//   },
//   {
//     title: "ASCII Art Generator",
//     description:
//       "An open-source project to convert images into expressive ASCII art! Created with Python and Streamlit, this app lets you transform images into text-based art right in your browser. This is not just an art generator but a community-driven project that thrives on contributions to evolve with new features and ideas!",
//     technologies: ["Python", "Streamlit"],
//     github: "https://github.com/sakethyalamanchili/ASCII-Art-Generator",
//   },
//   {
//     title: "Medical Prescription Translator",
//     description:
//       "A Streamlit app that translates medical prescriptions into Indian languages using Google's Gemini AI. It helps users input patient details and medications and provides accurate translations in languages like Hindi, Telugu, and more.",
//     technologies: ["Python", "Streamlit", "Google Gemini AI", "NLP"],
//     demo: "https://meditranslatebysaketh.streamlit.app/",
//   },
//   {
//     title: "IntelliApp",
//     description:
//       "A versatile AI-powered web application that provides several functionalities including chat, image captioning, text embedding, question answering, and code generation. This application leverages advanced AI models to assist users in various tasks.",
//     technologies: [
//       "Python",
//       "Streamlit",
//       "AI Models",
//       "NLP",
//       "Computer Vision",
//     ],
//     demo: "https://intelliapp.streamlit.app/",
//   },
//   {
//     title: "Solar-Based E-Uniform for Soldiers",
//     description:
//       "A smart uniform integrating environmental sensors, GPS tracking, and wireless communication for enhanced soldier safety and comfort during missions. Powered by renewable energy sources.",
//     technologies: ["IoT", "GPS", "Renewable Energy", "Embedded Systems"],
//     github:
//       "https://github.com/sakethyalamanchili/Solar-Based-e_Uniform-for-Soldiers",
//   },
//   {
//     title: "Advanced Regression for House Price Prediction",
//     description:
//       "Explore advanced regression techniques applied to house price prediction. From data preprocessing to model deployment, dive into the journey of building and deploying predictive models using Streamlit.",
//     technologies: [
//       "Python",
//       "Scikit-learn",
//       "Streamlit",
//       "Machine Learning",
//       "Data Analysis",
//     ],
//     demo: "https://saketh-house-price-estimator.streamlit.app/",
//   },
//   {
//     title: "Dog Breed Identification with TensorFlow",
//     description:
//       "A project exploring the art of identifying dog breeds using TensorFlow, making machine learning accessible and fun for all.",
//     technologies: ["Python", "TensorFlow", "Deep Learning", "Computer Vision"],
//     github:
//       "https://github.com/sakethyalamanchili/Dog-Breed-Identification-with-TensorFlow",
//   },
//   {
//     title: "Diabetes Prediction Project",
//     description:
//       "Predict diabetes risk accurately using machine learning. Explore different algorithms, evaluate their performance, and deploy the best model as a user-friendly web application.",
//     technologies: ["Python", "Machine Learning", "Streamlit", "Data Analysis"],
//     demo: "https://saketh-diabetes-predictor.streamlit.app/",
//   },
//   {
//     title: "LinkedIn Reply Assistant",
//     description:
//       "A Chrome extension designed to help users generate contextual replies to LinkedIn messages quickly and efficiently. It analyzes incoming messages and provides appropriate response templates based on the message category and selected language.",
//     technologies: ["JavaScript", "Chrome Extension", "NLP", "API Integration"],
//     github: "https://github.com/sakethyalamanchili/LinkedIn-Reply-Assistant",
//   },
//   {
//     title: "Investment Calculator",
//     description:
//       "A web app built with Angular to estimate investment growth. Input initial investment, annual contributions, expected return, and duration to visualize future earnings.",
//     technologies: [
//       "Angular",
//       "TypeScript",
//       "Financial Modeling",
//       "Web Development",
//     ],
//     github: "https://github.com/sakethyalamanchili/Investment-Calculator",
//   },
//   {
//     title: "EasyTrack - Enterprise Task Management",
//     description:
//       "An Angular-based application for efficient task management. It features user selection, task creation, and deletion with a responsive design for desktop and mobile. Tasks are stored in localStorage, ensuring persistence and reliability.",
//     technologies: [
//       "Angular",
//       "TypeScript",
//       "LocalStorage",
//       "Responsive Design",
//     ],
//     github: "https://github.com/sakethyalamanchili/EasyTrack",
//   },
//   {
//     title: "Drunk Driving Detection System for Autonomous Vehicles",
//     description:
//       "An Arduino-based solution featuring an MQ3 Alcohol Sensor, LCD Display, and safety alerts to prevent accidents caused by impaired driving. Enhance road safety with this simple, effective system.",
//     technologies: ["Arduino", "IoT", "Sensors", "Embedded Systems"],
//     github:
//       "https://github.com/sakethyalamanchili/Drunk-Driving-Detection-System-for-Autonomous-Vehicles",
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: { type: "spring", stiffness: 100 },
//   },
// };

// const projectsPerPage = 6;

// export default function Projects({ theme }: ProjectsProps) {
//   const [currentPage, setCurrentPage] = useState(1);

//   const indexOfLastProject = currentPage * projectsPerPage;
//   const indexOfFirstProject = indexOfLastProject - projectsPerPage;
//   const currentProjects = projects.slice(
//     indexOfFirstProject,
//     indexOfLastProject
//   );
//   const totalPages = Math.ceil(projects.length / projectsPerPage);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   return (
//     <Card
//       className={`${
//         theme === "dark"
//           ? "bg-[#161B22] border-[#30363D]"
//           : "bg-white border-[#E5E7EB]"
//       }`}
//     >
//       <CardHeader>
//         <CardTitle className="text-2xl font-bold">Projects</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
//         >
//           {currentProjects.map((project, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover={{ scale: 1.03 }}
//               transition={{ type: "spring", stiffness: 400, damping: 10 }}
//             >
//               <Card
//                 className={`h-full flex flex-col justify-between ${
//                   theme === "dark"
//                     ? "bg-[#21262D] border-[#30363D] hover:bg-[#2D333B]"
//                     : "bg-white border-[#E5E7EB] hover:bg-gray-50"
//                 } transition-colors duration-200`}
//               >
//                 <CardHeader>
//                   <CardTitle
//                     className={`text-lg font-bold ${
//                       theme === "dark" ? "text-white" : "text-[#1F2937]"
//                     }`}
//                   >
//                     {project.title}
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p
//                     className={`text-sm mb-4 ${
//                       theme === "dark" ? "text-[#C9D1D9]" : "text-[#4B5563]"
//                     }`}
//                   >
//                     {project.description}
//                   </p>
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.technologies.map((tech, idx) => (
//                       <motion.span
//                         key={idx}
//                         className={`text-xs px-2 py-1 rounded ${
//                           theme === "dark"
//                             ? "bg-[#30363D] text-[#8B949E]"
//                             : "bg-[#E5E7EB] text-[#4B5563]"
//                         }`}
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         {tech}
//                       </motion.span>
//                     ))}
//                   </div>
//                 </CardContent>
//                 <CardFooter className="flex gap-2">
//                   {project.github && (
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       asChild
//                       className={`flex-1 ${
//                         theme === "dark"
//                           ? "bg-[#30363D] text-white hover:bg-[#3C444D]"
//                           : "bg-white text-[#1F2937] "
//                       } hover:bg-opacity-80 transition-colors duration-200`}
//                     >
//                       <a
//                         href={project.github}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center justify-center"
//                       >
//                         <Github className="mr-2 h-4 w-4" />
//                         GitHub
//                       </a>
//                     </Button>
//                   )}
//                   {project.demo && (
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       asChild
//                       className={`flex-1 ${
//                         theme === "dark"
//                           ? "bg-[#30363D] text-white hover:bg-[#3C444D]"
//                           : "bg-white text-[#1F2937]"
//                       } hover:bg-opacity-80 transition-colors duration-200`}
//                     >
//                       <a
//                         href={project.demo}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center justify-center"
//                       >
//                         <ExternalLink className="mr-2 h-4 w-4" />
//                         Demo
//                       </a>
//                     </Button>
//                   )}
//                 </CardFooter>
//               </Card>
//             </motion.div>
//           ))}
//         </motion.div>
//       </CardContent>
//       <CardFooter>
//         <div className="flex flex-col sm:flex-row justify-center items-center w-full mt-8 space-y-4 sm:space-y-0">
//           <div className="flex items-center space-x-2">
//             <Button
//               onClick={() => paginate(currentPage - 1)}
//               disabled={currentPage === 1}
//               className={`px-3 py-2 ${
//                 theme === "dark"
//                   ? "bg-[#30363D] text-white hover:bg-[#3C444D]"
//                   : "bg-white text-[#1F2937] hover:bg-[#F3F4F6]"
//               } transition-colors duration-200`}
//             >
//               <ChevronLeft className="h-4 w-4" />
//             </Button>
//             <span
//               className={`text-sm ${
//                 theme === "dark" ? "text-white" : "text-[#1F2937]"
//               }`}
//             >
//               Page {currentPage} of {totalPages}
//             </span>
//             <Button
//               onClick={() => paginate(currentPage + 1)}
//               disabled={currentPage === totalPages}
//               className={`px-3 py-2 ${
//                 theme === "dark"
//                   ? "bg-[#30363D] text-white hover:bg-[#3C444D]"
//                   : "bg-white text-[#1F2937] hover:bg-[#F3F4F6]"
//               } transition-colors duration-200`}
//             >
//               <ChevronRight className="h-4 w-4" />
//             </Button>
//           </div>
//         </div>
//       </CardFooter>
//     </Card>
//   );
// }


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
    title: "Research Paper on Heterogeneous Transfer Learning",
    description:
      "Authored a comprehensive research paper for my Data Mining course, exploring the challenges, methodologies, and future directions in Heterogeneous Transfer Learning (HTL). The paper delves into real-world applications of HTL in various domains and its potential to address complex problems by bridging the gap between diverse data sources and models.",
    technologies: ["LaTeX", "Academic Research", "Data Mining"],
    github: "https://github.com/sakethyalamanchili/Masters-FAU/blob/main/CAP-6673_Data-Mining-Machine-Learning/a_survey_on_heterogeneous_transfer_learning_yalamanchili_saketh.pdf",
  },
  {
    title: "Power BI Analysis of Student Performance and Risk Patterns",
    description:
      "Developed five interactive Power BI dashboards to analyze student success, risk factors, and demographic influences. The dashboards provided insights into academic performance, assessment methods, student engagement, and key behavioral patterns, uncovering correlations between factors such as sleep, stress, study hours, and performance. The project aimed to derive actionable insights for educational institutions.",
    technologies: ["Power BI", "DAX", "Data Analysis", "Business Analytics"],
    github: "https://github.com/sakethyalamanchili/Masters-FAU/blob/main/ISM-6404_Intro-to-Business-Analytics/final_project_saketh_mounika.pdf",
  },
  {
    title: "Early Detection of Chronic Kidney Disease Using AI in Precision Medicine",
    description:
      "I worked on this project during a hackathon conducted by All of Us Research, where I used real-time data to predict Chronic Kidney Disease (CKD) in individuals using Machine Learning. This was a multiclass classification problem. Additionally, I developed an interface using React.js to allow users to input their data and receive predictions on CKD stage, risk level, prediction probability, and recommended actions.",
    technologies: ["Python", "React"],
    github: "https://github.com/sakethyalamanchili/CKD-Risk-Prediction",
  },
  {
    title: "ASCII Art Generator",
    description:
      "An open-source project to convert images into expressive ASCII art! Created with Python and Streamlit, this app lets you transform images into text-based art right in your browser. This is not just an art generator but a community-driven project that thrives on contributions to evolve with new features and ideas!",
    technologies: ["Python", "Streamlit"],
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
    title: "Advanced Regression for House Price Prediction",
    description:
      "Explore advanced regression techniques applied to house price prediction. From data preprocessing to model deployment, dive into the journey of building and deploying predictive models using Streamlit.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Streamlit",
      "Machine Learning",
      "Data Analysis",
    ],
    demo: "https://saketh-house-price-estimator.streamlit.app/",
  },
  {
    title: "Dog Breed Identification with TensorFlow",
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
    title: "Drunk Driving Detection System for Autonomous Vehicles",
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
          {/* Added Icon Here */}
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
              whileHover={{
                scale: 1.03,
                rotateY: 2,
                rotateX: 2,
                z: 50
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            >
              <Card
                className={`h-full flex flex-col justify-between overflow-hidden relative group ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-[#21262D] to-[#1C2128] border-[#30363D]"
                    : "bg-gradient-to-br from-white to-gray-50 border-[#E5E7EB]"
                } transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20`}
              >

                {/* Animated Background Gradient */}
                <motion.div 
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
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
                
                <CardFooter className="flex gap-2 relative z-10">
                  {project.github && (
                    <motion.div
                      className="flex-1"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
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
                    </motion.div>
                  )}
                  {project.demo && (
                    <motion.div
                      className="flex-1"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
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
                    </motion.div>
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
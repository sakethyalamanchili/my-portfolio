// import React from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { motion } from "framer-motion";
// import { Briefcase } from "lucide-react";

// interface ExperienceProps {
//   theme: "light" | "dark";
// }

// const experienceItems = [
//     {
//     title: "Private Tutor",
//     company: "Self-Employed",
//     period: "Oct 2022 - Dec 2024",
//     responsibilities: [
//       "Provided one-on-one tutoring in Math, Science, and Social Studies at home, helping students improve their academic performance.",
//       "Created tailored lesson plans to address individual student learning needs, resulting in significant grade improvements."
//     ],
//   },
//   {
//     title: "Software Developer Intern",
//     company: "Levicent Software Technologies",
//     period: "May 2024 - Nov 2024",
//     responsibilities: [
//       "Engineered a multi-language support system for critical enterprise applications (HMS & HRMS), driving user engagement up by 20% through enhanced global accessibility",
//       "Designed and implemented robust session management, elevating security protocols and reducing unauthorized access by 15% across systems",
//       "Spearheaded chatbot integration using PyTorch for a Learning Management System, streamlining customer support and cutting query response times in half",
//     ],
//   },
//   {
//     title: "Lens Developer",
//     company: "Freelance - SnapAR",
//     period: "Jan 2022 - May 2024",
//     responsibilities: [
//       "Crafted over 300 cutting-edge augmented reality lenses for Snapchat, amassing a staggering 150 billion views and transforming user experiences",
//       "Growing my Snapchat profile to 700K followers by leveraging innovative AR lens designs and strategic social media growth tactics",
//       "Collaborating with top creators on innovative AR lenses, pushing creative boundaries and expanding global audience reach",
//     ],
//   }
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

// export default function Experience({ theme }: ExperienceProps) {
//   return (
//     <Card
//       className={`${
//         theme === "dark"
//           ? "bg-[#161B22] border-[#30363D]"
//           : "bg-white border-[#E5E7EB]"
//       }`}
//     >
//       <CardHeader>
//         <CardTitle className="text-2xl font-bold">Experience</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="space-y-6"
//         >
//           {experienceItems.map((item, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover={{ scale: 1.02 }}
//               transition={{ type: "spring", stiffness: 400, damping: 10 }}
//             >
//               <div className="flex items-center mb-2">
//                 <Briefcase
//                   className={`mr-2 h-5 w-5 ${
//                     theme === "dark" ? "text-[#58A6FF]" : "text-[#3B82F6]"
//                   }`}
//                 />
//                 <h3
//                   className={`text-lg md:text-xl font-semibold ${
//                     theme === "dark" ? "text-white" : "text-[#1F2937]"
//                   }`}
//                 >
//                   {item.title}
//                 </h3>
//               </div>
//               <p
//                 className={`text-sm ${
//                   theme === "dark" ? "text-[#8B949E]" : "text-[#6B7280]"
//                 }`}
//               >
//                 {item.company} | {item.period}
//               </p>
//               <ul className="mt-2 list-disc list-inside">
//                 {item.responsibilities.map((responsibility, idx) => (
//                   <li
//                     key={idx}
//                     className={`text-sm ${
//                       theme === "dark" ? "text-[#C9D1D9]" : "text-[#4B5563]"
//                     }`}
//                   >
//                     {responsibility}
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </motion.div>
//       </CardContent>
//     </Card>
//   );
// }


import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Users, Code, Award, Rocket } from "lucide-react";

interface ExperienceProps {
  theme: "light" | "dark";
}

const experienceItems = [
  {
    title: "Graduate Research Assistant",
    company: "Florida Atlantic University",
    period: "August 2024 - Present",
    location: "Boca Raton, FL",
    type: "Academic Research",
    responsibilities: [
      "Spearheading the launch and development of the Vertically Integrated Projects (VIP) program, establishing frameworks for interdisciplinary AI and Data Science research initiatives",
      "Mentoring and guiding graduate and undergraduate students in advanced machine learning concepts, research methodologies, and project execution",
      "Developing comprehensive educational resources, curriculum materials, and technical documentation to support student learning and research excellence",
      "Building collaborative bridges between academic research and industry applications, fostering innovation through cross-disciplinary partnerships",
      "Leading community-building initiatives that connect peer mentors, students, and faculty across diverse research teams"
    ],
    achievements: [
      "Successfully onboarded first cohort of VIP students",
      "Established systematic mentorship framework",
      "Created comprehensive research resource library"
    ],
    icon: Award,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Software Developer Intern",
    company: "Levicent Software Technologies",
    period: "May 2024 - November 2024",
    location: "Hyderabad, India",
    type: "Software Engineering",
    responsibilities: [
      "Architected and deployed multi-language support system for enterprise HMS & HRMS applications, resulting in 20% increase in user engagement and expanding global market reach",
      "Designed and implemented robust session management infrastructure with secure token-based authentication, reducing unauthorized access incidents by 15%",
      "Developed and integrated AI-powered customer support chatbot using PyTorch for Learning Management System, achieving 50% reduction in query response times",
      "Collaborated with cross-functional teams to deliver scalable, production-ready features while maintaining high code quality standards",
      "Optimized application performance through code refactoring and implementation of best practices"
    ],
    achievements: [
      "20% increase in user engagement",
      "15% reduction in security incidents",
      "50% faster customer support response times"
    ],
    icon: Code,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Freelance AR Lens Developer",
    company: "SnapAR (Self-Employed)",
    period: "January 2022 - May 2024",
    location: "Remote",
    type: "Creative Technology",
    responsibilities: [
      "Engineered 300+ innovative augmented reality lenses for Snapchat platform, collectively generating over 150 billion views and establishing significant digital presence",
      "Built and cultivated engaged community of 750,000+ followers through consistent delivery of high-quality, trending AR experiences",
      "Collaborated with international content creators and brands on custom AR filter development, delivering creative solutions aligned with marketing objectives",
      "Mastered Lens Studio platform and continuously adapted to evolving AR technologies and user preferences",
      "Analyzed user engagement metrics and feedback to iterate and optimize lens performance"
    ],
    achievements: [
      "150+ billion total views across all lenses",
      "750K+ organic followers gained",
      "Top-performing creator in multiple AR categories"
    ],
    icon: Rocket,
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Private Tutor",
    company: "Self-Employed",
    period: "October 2022 - December 2024",
    location: "Hyderabad, India",
    type: "Education",
    responsibilities: [
      "Provided personalized one-on-one tutoring in Mathematics, Science, and Social Studies, adapting teaching methods to individual student learning styles",
      "Developed customized lesson plans and learning materials targeting specific knowledge gaps and academic challenges",
      "Tracked student progress through regular assessments and adjusted teaching strategies to optimize learning outcomes",
      "Achieved significant grade improvements across all students, with average grade increase of 15-20%"
    ],
    achievements: [
      "100% student satisfaction rate",
      "Average 15-20% grade improvement",
      "Multiple students achieved honor roll status"
    ],
    icon: Users,
    gradient: "from-green-500 to-teal-500",
  }
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

export default function Experience({ theme }: ExperienceProps) {
  return (
    <Card
      className={`backdrop-blur-sm ${
        theme === "dark"
          ? "bg-[#161B22]/80 border-[#30363D] shadow-xl"
          : "bg-white/80 border-[#E5E7EB] shadow-xl"
      }`}
    >
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl font-bold flex items-center gap-3">
          <Briefcase className="w-7 h-7 text-blue-500" />
          <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
            Professional Experience
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {experienceItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className={`p-6 rounded-xl border backdrop-blur-sm relative overflow-hidden ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-[#21262D]/60 to-[#1C2128]/60 border-[#30363D] hover:border-blue-500/50"
                    : "bg-gradient-to-br from-white/60 to-gray-50/60 border-[#E5E7EB] hover:border-blue-400/50"
                } transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20`}
              >
                {/* Background gradient on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                    <div className="flex items-start gap-3 flex-1">
                      <motion.div
                        className={`p-3 rounded-lg bg-gradient-to-r ${item.gradient}`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <IconComponent className="w-5 h-5 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h3
                          className={`text-lg md:text-xl font-semibold mb-1 ${
                            theme === "dark" ? "text-white" : "text-[#1F2937]"
                          }`}
                        >
                          {item.title}
                        </h3>
                        <p
                          className={`text-sm font-medium ${
                            theme === "dark" ? "text-blue-300" : "text-blue-600"
                          }`}
                        >
                          {item.company}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p
                        className={`text-sm font-medium ${
                          theme === "dark" ? "text-[#8B949E]" : "text-[#6B7280]"
                        }`}
                      >
                        {item.period}
                      </p>
                      <p
                        className={`text-xs ${
                          theme === "dark" ? "text-[#8B949E]" : "text-[#6B7280]"
                        }`}
                      >
                        {item.location}
                      </p>
                    </div>
                  </div>

                  {/* Type Badge */}
                  <div className="mb-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        theme === "dark"
                          ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                          : "bg-blue-500/10 text-blue-700 border border-blue-400/30"
                      }`}
                    >
                      {item.type}
                    </span>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-4">
                    <h4
                      className={`text-sm font-semibold mb-3 flex items-center gap-2 ${
                        theme === "dark" ? "text-white" : "text-[#1F2937]"
                      }`}
                    >
                      <Code className="w-4 h-4 text-blue-500" />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {item.responsibilities.map((responsibility, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className={`text-sm flex items-start gap-2 ${
                            theme === "dark" ? "text-[#C9D1D9]" : "text-[#4B5563]"
                          }`}
                        >
                          <span className="text-blue-500 mt-1">▹</span>
                          <span className="flex-1">{responsibility}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div className={`pt-4 border-t ${
                    theme === "dark" ? "border-[#30363D]" : "border-[#E5E7EB]"
                  }`}>
                    <h4
                      className={`text-sm font-semibold mb-3 flex items-center gap-2 ${
                        theme === "dark" ? "text-white" : "text-[#1F2937]"
                      }`}
                    >
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      Key Achievements
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.achievements.map((achievement, idx) => (
                        <motion.span
                          key={idx}
                          className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium ${
                            theme === "dark"
                              ? "bg-green-500/20 text-green-300 border border-green-500/30"
                              : "bg-green-500/10 text-green-700 border border-green-400/30"
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          ✓ {achievement}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </CardContent>
    </Card>
  );
}
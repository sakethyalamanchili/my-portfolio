// import React from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Download, Mail } from "lucide-react";
// import Link from "next/link";

// interface AboutProps {
//   theme: "dark" | "light";
// }

// const About: React.FC<AboutProps> = ({ theme }) => {
//   const highlightedText = (text: string) => (
//     <span
//       className={`font-semibold ${
//         theme === "dark" ? "text-blue-300" : "text-blue-600"
//       }`}
//     >
//       {text}
//     </span>
//   );

//   const resumeLink =
//     "https://drive.google.com/file/d/1cjX1jYBMyoUlQstgyExkaWSxg4kBkbr7/view?usp=drive_link";
//   const hireEmail =
//     "mailto:syalamanchil2025@fau.edu?subject=Job%20Opportunity&body=Hello%20Saketh,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20I'm%20interested%20in%20discussing%20a%20potential%20job%20opportunity%20with%20you.";

//     return (
//       <Card
//         className={`${
//           theme === "dark"
//             ? "bg-[#161B22] border-[#30363D]"
//             : "bg-white border-[#E5E7EB]"
//         }`}
//       >
//         <CardHeader>
//           <CardTitle className="text-2xl font-bold">About Me</CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <p className="text-sm md:text-base font-medium">Dear {highlightedText("Visitor")},</p>
    
//           <p className="text-sm md:text-base">
//             You&apos;ve probably seen a hundred {highlightedText("About Me")} pages before this one. All neat. All impressive. All... kind of the same.
//           </p>
    
//           <p className="text-sm md:text-base">
//             But if you&apos;ve landed here, let me give you something else — a {highlightedText("story")}, not a summary.
//           </p>
    
//           <p className="text-sm md:text-base">
//             My name is {highlightedText("Saketh Yalamanchili")}. I&apos;m a master&apos;s student in{" "}
//             {highlightedText("Data Science & Analytics")} at{" "}
//             {highlightedText("Florida Atlantic University")}. But that&apos;s just the headline. The real story? It began with a{" "}
//             {highlightedText("circuit board")}, a stubborn bug, and an even more stubborn curiosity.
//           </p>
    
//           <p className="text-sm md:text-base">
//             I come from an {highlightedText("Electronics & Communication")} background — a world of wires, sensors, and blinking LEDs. But I was never just building gadgets. I was trying to teach them how to{" "}
//             {highlightedText("feel")}, how to{" "}
//             {highlightedText("respond")}, how to{" "}
//             {highlightedText("understand")}. That&apos;s where{" "}
//             {highlightedText("Machine Learning")} stepped in — not as a career path, but as a{" "}
//             {highlightedText("love story")}.
//           </p>
    
//           <p className="text-sm md:text-base">
//             I spent six months at{" "}
//             {highlightedText("Levicent Software")}, where I built{" "}
//             {highlightedText("full-stack solutions")}, broke things (with flair), fixed them (with coffee), and learned that real-world{" "}
//             {highlightedText("software development")} isn&apos;t about perfection — it&apos;s about{" "}
//             {highlightedText("persistence")}.
//           </p>
    
//           <p className="text-sm md:text-base">
//             When I&apos;m not teaching machines to learn, I&apos;m on a{" "}
//             {highlightedText("cricket field")} — reading the pitch, waiting for the right shot, learning from every mistake. It&apos;s where I first understood{" "}
//             {highlightedText("strategy")},{" "}
//             {highlightedText("resilience")}, and how to{" "}
//             {highlightedText("lose gracefully")} — lessons that followed me into every project since.
//           </p>
    
//           <p className="text-sm md:text-base">
//             This portfolio?  
//             It&apos;s not just code and credentials. It&apos;s a{" "}
//             {highlightedText("letter")} to anyone who still believes in{" "}
//             {highlightedText("craft")} — in work that&apos;s not just{" "}
//             {highlightedText("functional")}, but{" "}
//             {highlightedText("felt")}. Every project here carries a piece of me: the joy of getting something to finally run, the pain of{" "}
//             {highlightedText("3AM bugs")}, and the quiet pride of building something that{" "}
//             {highlightedText("matters")}.
//           </p>
    
//           <p className="text-sm md:text-base">
//             So no, this isn&apos;t just an {highlightedText("“About Me”")}.  
//             It&apos;s a{" "}
//             {highlightedText("handshake")}. A welcome. A small window into what{" "}
//             {highlightedText("drives me")}.
//           </p>
    
//           <p className="text-sm md:text-base">
//             And if anything here feels{" "}
//             {highlightedText("familiar")} — if it makes you pause, smile, or nod — then maybe we&apos;re already on the same page.
//           </p>
    
//           <p className="text-sm md:text-base font-medium">
//             With purpose (and just enough poetry),<br />
//             Saketh
//           </p>
    
//           <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-6">
//             <Button variant="outline" className="w-full sm:w-auto" asChild>
//               <Link href={resumeLink} target="_blank" rel="noopener noreferrer">
//                 <Download className="mr-2 h-4 w-4" /> Download Resume
//               </Link>
//             </Button>
//             <Button variant="default" className="w-full sm:w-auto" asChild>
//               <Link href={hireEmail}>
//                 <Mail className="mr-2 h-4 w-4" /> Hire Me
//               </Link>
//             </Button>
//           </div>
//         </CardContent>
//       </Card>
//     );
    
// };

// export default About;


// "use client";

// import React from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Download, Mail, Sparkles, CheckCircle2 } from "lucide-react";
// import Link from "next/link";
// import { motion } from "framer-motion";

// interface AboutProps {
//   theme: "dark" | "light";
// }

// const About: React.FC<AboutProps> = ({ theme }) => {
//   const highlightedText = (text: string) => (
//     <span className="font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
//       {text}
//     </span>
//   );

//   const resumeLink =
//     "https://drive.google.com/file/d/1GH7GLGSVvsycLBV3GupoFrb6_8Aj4r9c/view?usp=drive_link";
//   const hireEmail =
//     "mailto:syalamanchil2025@fau.edu?subject=Job%20Opportunity&body=Hello%20Saketh,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20I'm%20interested%20in%20discussing%20a%20potential%20job%20opportunity%20with%20you.";

//   const highlights = [
//     {
//       title: "Software Development",
//       description:
//         "Enhanced enterprise software at Levicent, implementing multi-language support and secure authentication systems, plus AI chatbot development using PyTorch.",
//       icon: "💻",
//     },
//     {
//       title: "AI-Powered Solutions",
//       description:
//         "Developed ML models for Chronic Kidney Disease prediction and AI-powered medical prescription translation for improved patient accessibility.",
//       icon: "🤖",
//     },
//     {
//       title: "Augmented Reality",
//       description:
//         "Created 300+ AR lenses with 150 billion+ views, building a community of 750K+ Snapchat followers through innovative design.",
//       icon: "🎨",
//     },
//   ];

//   return (
//     <div className="space-y-6">
//       <Card
//         className={`backdrop-blur-sm overflow-hidden ${
//           theme === "dark"
//             ? "bg-[#161B22]/80 border-[#30363D]"
//             : "bg-white/80 border-[#E5E7EB]"
//         } shadow-xl`}
//       >
//         {/* Decorative Header Background */}
//         <div className="relative overflow-hidden">
//           <motion.div
//             className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10"
//             animate={{
//               x: ["-100%", "100%"],
//             }}
//             transition={{
//               duration: 15,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           />
          
//           <CardHeader className="relative">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <CardTitle className="text-2xl md:text-3xl font-bold flex items-center gap-3">
//                 <motion.div
//                   animate={{ rotate: [0, 10, -10, 0] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 >
//                   <Sparkles className="w-6 h-6 text-blue-500" />
//                 </motion.div>
//                 <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
//                   About Me
//                 </span>
//               </CardTitle>
//             </motion.div>
//           </CardHeader>
//         </div>

//         <CardContent className="space-y-6">
//           {/* Introduction */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1, duration: 0.5 }}
//             className="space-y-4"
//           >
//             <p className="text-sm md:text-base leading-relaxed">
//               Hello, I&apos;m {highlightedText("Saketh Yalamanchili")}.
//             </p>

//             <p className="text-sm md:text-base leading-relaxed">
//               I&apos;m a {highlightedText("Data Science & Analytics Master's student")} at{" "}
//               {highlightedText("Florida Atlantic University")} with a{" "}
//               {highlightedText("4.0 GPA")} and a passion for building intelligent
//               systems that solve real-world problems.
//             </p>

//             <p className="text-sm md:text-base leading-relaxed">
//               My journey began in Electronics & Communication, but I found my
//               calling at the intersection of{" "}
//               {highlightedText("data, machine learning, and human-centric design")}.
//               This has led me to develop a diverse skill set spanning{" "}
//               {highlightedText("Python, SQL")}, and machine learning frameworks like{" "}
//               {highlightedText("Scikit-learn, TensorFlow, and PyTorch")}.
//             </p>
//           </motion.div>

//           {/* Highlight Cards */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//             className="grid md:grid-cols-3 gap-4"
//           >
//             {highlights.map((highlight, index) => (
//               <motion.div
//                 key={index}
//                 className={`p-5 rounded-xl border backdrop-blur-sm transition-all duration-300 ${
//                   theme === "dark"
//                     ? "bg-gradient-to-br from-[#21262D]/60 to-[#1C2128]/60 border-[#30363D] hover:border-blue-500/50"
//                     : "bg-gradient-to-br from-white/60 to-gray-50/60 border-[#E5E7EB] hover:border-blue-400/50"
//                 } hover:shadow-lg hover:shadow-blue-500/20`}
//                 whileHover={{ scale: 1.02, y: -5 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
//               >
//                 <div className="text-3xl mb-3">{highlight.icon}</div>
//                 <h3
//                   className={`text-base font-semibold mb-2 ${
//                     theme === "dark" ? "text-white" : "text-gray-900"
//                   }`}
//                 >
//                   {highlight.title}
//                 </h3>
//                 <p
//                   className={`text-xs leading-relaxed ${
//                     theme === "dark" ? "text-[#C9D1D9]" : "text-[#4B5563]"
//                   }`}
//                 >
//                   {highlight.description}
//                 </p>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Current Role */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.5 }}
//             className={`p-5 rounded-xl border backdrop-blur-sm ${
//               theme === "dark"
//                 ? "bg-gradient-to-br from-[#21262D]/40 to-[#1C2128]/40 border-[#30363D]"
//                 : "bg-gradient-to-br from-blue-50/40 to-cyan-50/40 border-blue-200/50"
//             }`}
//           >
//             <div className="flex items-start gap-3">
//               <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
//               <div>
//                 <p className="text-sm md:text-base leading-relaxed">
//                   Currently, as a{" "}
//                   {highlightedText("Graduate Research Assistant at FAU")}, I am helping
//                   to launch the{" "}
//                   {highlightedText("Vertically Integrated Projects (VIP) program")},
//                   where I mentor students in AI and Data Science and develop
//                   resources to foster interdisciplinary research.
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Closing Statement */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.5 }}
//             className="space-y-4"
//           >
//             <p className="text-sm md:text-base leading-relaxed">
//               I believe the most powerful technology is that which is not only
//               functional but also intuitive and impactful. This portfolio showcases
//               my commitment to that principle. If you&apos;re looking for a{" "}
//               {highlightedText("problem-solver")} who combines{" "}
//               {highlightedText("technical depth with creativity")},
//               let&apos;s connect.
//             </p>

//             <p className="text-sm md:text-base font-medium">
//               Best regards,<br />
//               Saketh Yalamanchili
//             </p>
//           </motion.div>

//           {/* Action Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 0.5 }}
//             className="flex flex-col sm:flex-row gap-3 pt-4"
//           >
//             <motion.div
//               className="w-full sm:w-auto"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <Button
//                 variant="outline"
//                 className={`w-full sm:w-auto ${
//                   theme === "dark"
//                     ? "border-blue-500/50 hover:bg-blue-500/10"
//                     : "border-blue-400/50 hover:bg-blue-50"
//                 }`}
//                 asChild
//               >
//                 <Link href={resumeLink} target="_blank" rel="noopener noreferrer">
//                   <Download className="mr-2 h-4 w-4" /> Download Resume
//                 </Link>
//               </Button>
//             </motion.div>
            
//             <motion.div
//               className="w-full sm:w-auto"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <Button
//                 className={`w-full sm:w-auto ${
//                   theme === "dark"
//                     ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
//                     : "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
//                 } text-white border-0`}
//                 asChild
//               >
//                 <Link href={hireEmail}>
//                   <Mail className="mr-2 h-4 w-4" /> Hire Me
//                 </Link>
//               </Button>
//             </motion.div>
//           </motion.div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default About;

// "use client";

// import React from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Download, Mail, Sparkles, ArrowRight, Code, Brain, Rocket, Award } from "lucide-react";
// import Link from "next/link";
// import { motion } from "framer-motion";

// interface AboutProps {
//   theme: "dark" | "light";
// }

// const About: React.FC<AboutProps> = ({ theme }) => {
//   const highlightedText = (text: string) => (
//     <span className="font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
//       {text}
//     </span>
//   );

//   const resumeLink =
//     "https://drive.google.com/file/d/1GH7GLGSVvsycLBV3GupoFrb6_8Aj4r9c/view?usp=drive_link";
//   const hireEmail =
//     "mailto:syalamanchil2025@fau.edu?subject=Job%20Opportunity&body=Hello%20Saketh,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20I'm%20interested%20in%20discussing%20a%20potential%20job%20opportunity%20with%20you.";

//   const highlights = [
//     {
//       title: "Enterprise Software Development",
//       description:
//         "Engineered scalable solutions at Levicent Software Technologies, implementing multi-language support systems that increased user engagement by 20%. Developed secure authentication mechanisms and AI-powered chatbots using PyTorch, demonstrating proficiency in both frontend and backend technologies.",
//       icon: Code,
//       color: "from-blue-500 to-cyan-500",
//     },
//     {
//       title: "AI & Machine Learning Innovation",
//       description:
//         "Built production-ready ML models for healthcare applications, including Chronic Kidney Disease prediction systems and AI-powered medical prescription translators. Expertise in developing end-to-end data science pipelines from data preprocessing to model deployment.",
//       icon: Brain,
//       color: "from-purple-500 to-pink-500",
//     },
//     {
//       title: "Augmented Reality Excellence",
//       description:
//         "Created 300+ viral AR experiences on Snapchat, collectively generating over 150 billion views and building a community of 750K+ followers. Demonstrated exceptional creativity and technical skill in designing user-centric AR filters that resonate with global audiences.",
//       icon: Rocket,
//       color: "from-orange-500 to-red-500",
//     },
//   ];

//   const skills = [
//     { category: "Languages", items: "Python, JavaScript/TypeScript, SQL, C/C++" },
//     { category: "ML/AI", items: "TensorFlow, PyTorch, Scikit-learn, Keras" },
//     { category: "Web", items: "React, Angular, Next.js, Node.js, Tailwind CSS" },
//     { category: "Tools", items: "Git, Power BI, Tableau, Streamlit, AWS" },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5 }
//     }
//   };

//   return (
//     <div className="space-y-6">
//       <Card
//         className={`backdrop-blur-sm overflow-hidden ${
//           theme === "dark"
//             ? "bg-[#161B22]/80 border-[#30363D]"
//             : "bg-white/80 border-[#E5E7EB]"
//         } shadow-xl`}
//       >
//         {/* Decorative Header Background */}
//         <div className="relative overflow-hidden">
//           <motion.div
//             className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10"
//             animate={{
//               x: ["-100%", "100%"],
//             }}
//             transition={{
//               duration: 15,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           />
          
//           <CardHeader className="relative">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <CardTitle className="text-2xl md:text-3xl font-bold flex items-center gap-3">
//                 <motion.div
//                   animate={{ rotate: [0, 10, -10, 0] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 >
//                   <Sparkles className="w-6 h-6 text-blue-500" />
//                 </motion.div>
//                 <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
//                   Professional Profile
//                 </span>
//               </CardTitle>
//             </motion.div>
//           </CardHeader>
//         </div>

//         <CardContent className="space-y-8">
//           {/* Executive Summary */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1, duration: 0.5 }}
//             className={`p-6 rounded-xl border-l-4 ${
//               theme === "dark"
//                 ? "bg-gradient-to-r from-blue-500/10 to-transparent border-blue-500"
//                 : "bg-gradient-to-r from-blue-500/5 to-transparent border-blue-500"
//             }`}
//           >
//             <p className="text-base md:text-lg leading-relaxed font-medium">
//               Data Science graduate student with a {highlightedText("perfect 4.0 GPA")} at Florida Atlantic University, 
//               combining advanced technical expertise in machine learning and software development with proven ability to 
//               deliver impactful solutions. Experienced in building enterprise-grade applications, AI-powered systems, and 
//               creative AR experiences that have reached {highlightedText("150+ billion users worldwide")}.
//             </p>
//           </motion.div>

//           {/* Key Competencies */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="space-y-4"
//           >
//             <motion.h3 
//               variants={itemVariants}
//               className={`text-xl font-semibold flex items-center gap-2 ${
//                 theme === "dark" ? "text-white" : "text-gray-900"
//               }`}
//             >
//               <Award className="w-5 h-5 text-blue-500" />
//               Core Expertise
//             </motion.h3>
            
//             <div className="grid md:grid-cols-3 gap-6">
//               {highlights.map((highlight, index) => {
//                 const IconComponent = highlight.icon;
//                 return (
//                   <motion.div
//                     key={index}
//                     variants={itemVariants}
//                     className={`group p-6 rounded-xl border backdrop-blur-sm transition-all duration-300 ${
//                       theme === "dark"
//                         ? "bg-gradient-to-br from-[#21262D]/60 to-[#1C2128]/60 border-[#30363D] hover:border-blue-500/50"
//                         : "bg-gradient-to-br from-white/60 to-gray-50/60 border-[#E5E7EB] hover:border-blue-400/50"
//                     } hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer`}
//                     whileHover={{ scale: 1.02, y: -5 }}
//                     transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                   >
//                     <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${highlight.color} mb-4`}>
//                       <IconComponent className="w-6 h-6 text-white" />
//                     </div>
//                     <h4
//                       className={`text-lg font-semibold mb-3 ${
//                         theme === "dark" ? "text-white" : "text-gray-900"
//                       }`}
//                     >
//                       {highlight.title}
//                     </h4>
//                     <p
//                       className={`text-sm leading-relaxed ${
//                         theme === "dark" ? "text-[#C9D1D9]" : "text-[#4B5563]"
//                       }`}
//                     >
//                       {highlight.description}
//                     </p>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </motion.div>

//           {/* Professional Journey */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.5 }}
//             className="space-y-4"
//           >
//             <h3 className={`text-xl font-semibold ${
//               theme === "dark" ? "text-white" : "text-gray-900"
//             }`}>
//               Professional Journey
//             </h3>
            
//             <div className="space-y-4">
//               <motion.div
//                 className={`p-5 rounded-xl border backdrop-blur-sm ${
//                   theme === "dark"
//                     ? "bg-gradient-to-br from-[#21262D]/40 to-[#1C2128]/40 border-[#30363D]"
//                     : "bg-gradient-to-br from-blue-50/40 to-cyan-50/40 border-blue-200/50"
//                 }`}
//                 whileHover={{ scale: 1.01 }}
//               >
//                 <div className="flex items-start gap-3">
//                   <div className={`mt-1 p-2 rounded-lg ${
//                     theme === "dark" ? "bg-blue-500/20" : "bg-blue-500/10"
//                   }`}>
//                     <Award className="w-5 h-5 text-blue-500" />
//                   </div>
//                   <div className="flex-1">
//                     <h4 className={`font-semibold mb-2 ${
//                       theme === "dark" ? "text-white" : "text-gray-900"
//                     }`}>
//                       Graduate Research Assistant - Florida Atlantic University
//                     </h4>
//                     <p className="text-sm leading-relaxed mb-3">
//                       Currently spearheading the launch of the {highlightedText("Vertically Integrated Projects (VIP) program")}, 
//                       where I mentor students in AI and Data Science while developing comprehensive resources to foster 
//                       interdisciplinary research. Building communities that bridge the gap between academic research and 
//                       industry applications.
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>

//               <motion.div
//                 className={`p-5 rounded-xl border backdrop-blur-sm ${
//                   theme === "dark"
//                     ? "bg-gradient-to-br from-[#21262D]/40 to-[#1C2128]/40 border-[#30363D]"
//                     : "bg-gradient-to-br from-purple-50/40 to-pink-50/40 border-purple-200/50"
//                 }`}
//                 whileHover={{ scale: 1.01 }}
//               >
//                 <div className="flex items-start gap-3">
//                   <div className={`mt-1 p-2 rounded-lg ${
//                     theme === "dark" ? "bg-purple-500/20" : "bg-purple-500/10"
//                   }`}>
//                     <Code className="w-5 h-5 text-purple-500" />
//                   </div>
//                   <div className="flex-1">
//                     <h4 className={`font-semibold mb-2 ${
//                       theme === "dark" ? "text-white" : "text-gray-900"
//                     }`}>
//                       Software Developer Intern - Levicent Software Technologies
//                     </h4>
//                     <p className="text-sm leading-relaxed">
//                       Delivered measurable impact by engineering multi-language support systems that drove {highlightedText("20% increase in user engagement")}. 
//                       Implemented enterprise-grade security protocols and developed AI-powered customer support solutions, 
//                       demonstrating versatility across full-stack development and machine learning.
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* Technical Skills */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.5 }}
//             className="space-y-4"
//           >
//             <h3 className={`text-xl font-semibold ${
//               theme === "dark" ? "text-white" : "text-gray-900"
//             }`}>
//               Technical Proficiencies
//             </h3>
            
//             <div className="grid sm:grid-cols-2 gap-4">
//               {skills.map((skill, index) => (
//                 <motion.div
//                   key={index}
//                   className={`p-4 rounded-lg border ${
//                     theme === "dark"
//                       ? "bg-[#21262D]/40 border-[#30363D]"
//                       : "bg-gray-50/40 border-gray-200"
//                   }`}
//                   whileHover={{ scale: 1.02 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   <div className="flex items-center gap-2 mb-2">
//                     <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
//                     <span className={`font-semibold text-sm ${
//                       theme === "dark" ? "text-blue-300" : "text-blue-600"
//                     }`}>
//                       {skill.category}
//                     </span>
//                   </div>
//                   <p className={`text-sm ${
//                     theme === "dark" ? "text-[#C9D1D9]" : "text-[#4B5563]"
//                   }`}>
//                     {skill.items}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Value Proposition */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 0.5 }}
//             className={`p-6 rounded-xl border ${
//               theme === "dark"
//                 ? "bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-purple-500/10 border-blue-500/30"
//                 : "bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 border-blue-300/30"
//             }`}
//           >
//             <h3 className={`text-lg font-semibold mb-3 flex items-center gap-2 ${
//               theme === "dark" ? "text-white" : "text-gray-900"
//             }`}>
//               <Rocket className="w-5 h-5 text-blue-500" />
//               What I Bring to Your Team
//             </h3>
//             <p className="text-sm md:text-base leading-relaxed mb-4">
//               I excel at transforming complex technical challenges into elegant, user-centric solutions. 
//               My unique combination of {highlightedText("data science expertise")}, {highlightedText("software engineering skills")}, 
//               and {highlightedText("creative problem-solving")} enables me to deliver innovative solutions that drive 
//               business value. Whether building ML models, developing enterprise applications, or creating engaging user 
//               experiences, I bring a results-oriented approach grounded in both technical excellence and strategic thinking.
//             </p>
//             <div className="flex items-center gap-2 text-sm">
//               <ArrowRight className="w-4 h-4 text-blue-500" />
//               <span className={theme === "dark" ? "text-[#C9D1D9]" : "text-[#4B5563]"}>
//                 Ready to contribute from day one with a proven track record of delivering impact
//               </span>
//             </div>
//           </motion.div>

//           {/* Action Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6, duration: 0.5 }}
//             className="flex flex-col sm:flex-row gap-4 pt-4"
//           >
//             <motion.div
//               className="flex-1"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <Button
//                 variant="outline"
//                 className={`w-full h-12 text-base ${
//                   theme === "dark"
//                     ? "border-blue-500/50 hover:bg-blue-500/10 hover:border-blue-500"
//                     : "border-blue-400/50 hover:bg-blue-50 hover:border-blue-400"
//                 }`}
//                 asChild
//               >
//                 <Link href={resumeLink} target="_blank" rel="noopener noreferrer">
//                   <Download className="mr-2 h-5 w-5" /> 
//                   Download Resume
//                 </Link>
//               </Button>
//             </motion.div>
            
//             <motion.div
//               className="flex-1"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <Button
//                 className={`w-full h-12 text-base ${
//                   theme === "dark"
//                     ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
//                     : "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
//                 } text-white border-0 shadow-lg shadow-blue-500/25`}
//                 asChild
//               >
//                 <Link href={hireEmail}>
//                   <Mail className="mr-2 h-5 w-5" /> 
//                   Let's Connect
//                 </Link>
//               </Button>
//             </motion.div>
//           </motion.div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default About;




"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Mail, Sparkles, ArrowRight, Code, Brain, Rocket, Award } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface AboutProps {
  theme: "dark" | "light";
}

const About: React.FC<AboutProps> = ({ theme }) => {
  const highlightedText = (text: string) => (
    <span className="font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
      {text}
    </span>
  );

  const resumeLink =
    "https://drive.google.com/file/d/1GH7GLGSVvsycLBV3GupoFrb6_8Aj4r9c/view?usp=drive_link";
  const hireEmail =
    "mailto:syalamanchil2025@fau.edu?subject=Job%20Opportunity&body=Hello%20Saketh,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20I'm%20interested%20in%20discussing%20a%20potential%20job%20opportunity%20with%20you.";

  const highlights = [
    {
      title: "Agentic AI & Machine Learning",
      description:
        "Specializing in Reinforcement Learning and Agentic workflows. Developed 'CareGuide', an AI health analysis system using multi-agent frameworks, and engineered RAG pipelines for advanced NLP tasks. Experienced in deploying models with PyTorch and TensorFlow.",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Enterprise Software Engineering",
      description:
        "Engineered scalable full-stack solutions at Levicent Software Technologies, optimizing multi-language support systems that boosted engagement by 20%. Proficient in integrating secure backend architectures with responsive frontend designs.",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "AR & Creative Technology",
      description:
        "Created 300+ immersive AR experiences as a Lens Developer for SnapAR, amassing over 150 billion views globally. Blends technical programming with creative design to build viral, user-centric interactive media.",
      icon: Rocket,
      color: "from-orange-500 to-red-500",
    },
  ];

  const skills = [
    { category: "Languages", items: "Python, JavaScript/TypeScript, SQL, C++, LaTeX" },
    { category: "AI/ML", items: "PyTorch, AutoGen, CrewAI, Reinforcement Learning, RAG" },
    { category: "Web", items: "React, Next.js, Node.js, Tailwind CSS, Streamlit" },
    { category: "Tools", items: "Git, Docker, AWS, Power BI, Tableau" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="space-y-6">
      <Card
        className={`backdrop-blur-sm overflow-hidden ${
          theme === "dark"
            ? "bg-[#161B22]/80 border-[#30363D]"
            : "bg-white/80 border-[#E5E7EB]"
        } shadow-xl`}
      >
        {/* Decorative Header Background */}
        <div className="relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          <CardHeader className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <CardTitle className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-6 h-6 text-blue-500" />
                </motion.div>
                <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
                  Professional Profile
                </span>
              </CardTitle>
            </motion.div>
          </CardHeader>
        </div>

        <CardContent className="space-y-8">
          {/* Executive Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className={`p-6 rounded-xl border-l-4 ${
              theme === "dark"
                ? "bg-gradient-to-r from-blue-500/10 to-transparent border-blue-500"
                : "bg-gradient-to-r from-blue-500/5 to-transparent border-blue-500"
            }`}
          >
            <p className="text-base md:text-lg leading-relaxed font-medium">
              Data Science Master&apos;s candidate at Florida Atlantic University with a proven track record in {highlightedText("Agentic AI")} and {highlightedText("Full-Stack Development")}. 
              Currently serving as a Graduate Research Assistant for the VIP Program, bridging the gap between academic research and real-world application. 
              Passionate about building intelligent systems, evidenced by winning hackathon projects and a portfolio of AR experiences reaching {highlightedText("billions of users")}.
            </p>
          </motion.div>

          {/* Key Competencies */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <motion.h3 
              variants={itemVariants}
              className={`text-xl font-semibold flex items-center gap-2 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              <Award className="w-5 h-5 text-blue-500" />
              Core Expertise
            </motion.h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`group p-6 rounded-xl border backdrop-blur-sm transition-all duration-300 ${
                      theme === "dark"
                        ? "bg-gradient-to-br from-[#21262D]/60 to-[#1C2128]/60 border-[#30363D] hover:border-blue-500/50"
                        : "bg-gradient-to-br from-white/60 to-gray-50/60 border-[#E5E7EB] hover:border-blue-400/50"
                    } hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer`}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${highlight.color} mb-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4
                      className={`text-lg font-semibold mb-3 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {highlight.title}
                    </h4>
                    <p
                      className={`text-sm leading-relaxed ${
                        theme === "dark" ? "text-[#C9D1D9]" : "text-[#4B5563]"
                      }`}
                    >
                      {highlight.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Professional Journey */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className={`text-xl font-semibold ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}>
              Professional Journey
            </h3>
            
            <div className="space-y-4">
              <motion.div
                className={`p-5 rounded-xl border backdrop-blur-sm ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-[#21262D]/40 to-[#1C2128]/40 border-[#30363D]"
                    : "bg-gradient-to-br from-blue-50/40 to-cyan-50/40 border-blue-200/50"
                }`}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-start gap-3">
                  <div className={`mt-1 p-2 rounded-lg ${
                    theme === "dark" ? "bg-blue-500/20" : "bg-blue-500/10"
                  }`}>
                    <Award className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <h4 className={`font-semibold ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}>
                        Graduate Research Assistant - Florida Atlantic University
                      </h4>
                      <span className="text-xs font-mono bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">
                        Aug 2025 - Present
                      </span>
                    </div>
                    <p className={`text-sm mt-2 leading-relaxed ${
                         theme === "dark" ? "text-[#C9D1D9]" : "text-[#4B5563]"
                    }`}>
                      Spearheading initiatives for the {highlightedText("Vertically Integrated Projects (VIP) Program")}. 
                      Mentoring students in Data Science and AI research methodologies while developing resources to foster 
                      interdisciplinary collaboration and innovation across the university.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className={`p-5 rounded-xl border backdrop-blur-sm ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-[#21262D]/40 to-[#1C2128]/40 border-[#30363D]"
                    : "bg-gradient-to-br from-purple-50/40 to-pink-50/40 border-purple-200/50"
                }`}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-start gap-3">
                  <div className={`mt-1 p-2 rounded-lg ${
                    theme === "dark" ? "bg-purple-500/20" : "bg-purple-500/10"
                  }`}>
                    <Code className="w-5 h-5 text-purple-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start flex-wrap gap-2">
                       <h4 className={`font-semibold ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}>
                        Software Developer Intern - Levicent Software Technologies
                      </h4>
                      <span className="text-xs font-mono bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-2 py-1 rounded">
                        May 2024 - Nov 2024
                      </span>
                    </div>
                    <p className={`text-sm mt-2 leading-relaxed ${
                         theme === "dark" ? "text-[#C9D1D9]" : "text-[#4B5563]"
                    }`}>
                      Delivered measurable impact by engineering multi-language support systems that drove a {highlightedText("20% increase in user engagement")}. 
                      Implemented enterprise-grade security protocols and developed AI-powered customer support solutions using Python and React.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className={`text-xl font-semibold ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}>
              Technical Proficiencies
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className={`p-4 rounded-lg border ${
                    theme === "dark"
                      ? "bg-[#21262D]/40 border-[#30363D]"
                      : "bg-gray-50/40 border-gray-200"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                    <span className={`font-semibold text-sm ${
                      theme === "dark" ? "text-blue-300" : "text-blue-600"
                    }`}>
                      {skill.category}
                    </span>
                  </div>
                  <p className={`text-sm ${
                    theme === "dark" ? "text-[#C9D1D9]" : "text-[#4B5563]"
                  }`}>
                    {skill.items}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className={`p-6 rounded-xl border ${
              theme === "dark"
                ? "bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-purple-500/10 border-blue-500/30"
                : "bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 border-blue-300/30"
            }`}
          >
            <h3 className={`text-lg font-semibold mb-3 flex items-center gap-2 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}>
              <Rocket className="w-5 h-5 text-blue-500" />
              What I Bring to Your Team
            </h3>
            <p className="text-sm md:text-base leading-relaxed mb-4">
              I excel at transforming complex technical challenges into elegant, user-centric solutions. 
              My unique combination of {highlightedText("data science expertise")}, {highlightedText("software engineering skills")}, 
              and {highlightedText("creative problem-solving")} enables me to deliver innovative solutions that drive 
              business value. Whether building Agentic AI workflows, developing enterprise applications, or creating engaging user 
              experiences, I bring a results-oriented approach grounded in both technical excellence and strategic thinking.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <ArrowRight className="w-4 h-4 text-blue-500" />
              <span className={theme === "dark" ? "text-[#C9D1D9]" : "text-[#4B5563]"}>
                Ready to contribute from day one with a proven track record of delivering impact
              </span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <motion.div
              className="flex-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="outline"
                className={`w-full h-12 text-base ${
                  theme === "dark"
                    ? "border-blue-500/50 hover:bg-blue-500/10 hover:border-blue-500"
                    : "border-blue-400/50 hover:bg-blue-50 hover:border-blue-400"
                }`}
                asChild
              >
                <Link href={resumeLink} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" /> 
                  Download Resume
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              className="flex-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                className={`w-full h-12 text-base ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                    : "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                } text-white border-0 shadow-lg shadow-blue-500/25`}
                asChild
              >
                <Link href={hireEmail}>
                  <Mail className="mr-2 h-5 w-5" /> 
                  Let&apos;s Connect
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import Link from "next/link";

interface AboutProps {
  theme: "dark" | "light";
}

const About: React.FC<AboutProps> = ({ theme }) => {
  const highlightedText = (text: string) => (
    <span
      className={`font-semibold ${
        theme === "dark" ? "text-blue-300" : "text-blue-600"
      }`}
    >
      {text}
    </span>
  );

  const resumeLink =
    "https://drive.google.com/file/d/1Sb9CNe0R_tBXUkScy1ii3rGP6kQLdXjX/view?usp=drive_link";
  const hireEmail =
    "mailto:syalamanchil2025@fau.edu?subject=Job%20Opportunity&body=Hello%20Saketh,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20I'm%20interested%20in%20discussing%20a%20potential%20job%20opportunity%20with%20you.";

  return (
    <Card
      className={`${
        theme === "dark"
          ? "bg-[#161B22] border-[#30363D]"
          : "bg-white border-[#E5E7EB]"
      }`}
    >
      <CardHeader>
        <CardTitle className="text-2xl font-bold">About Me</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm md:text-base">
          Hello, I&apos;m {highlightedText("Saketh Yalamanchili")}.
        </p>
        <p className="text-sm md:text-base">
          I&apos;m a {highlightedText("Data Science & Analytics Master's student")} at{" "}
          {highlightedText("Florida Atlantic University")} with a{" "}
          {highlightedText("4.0 GPA")} and a passion for building intelligent
          systems that solve real-world problems.
        </p>
        <p className="text-sm md:text-base">
          My journey began in Electronics & Communication, but I found my
          calling at the intersection of{" "}
          {highlightedText("data, machine learning, and human-centric design")}.
          This has led me to develop a diverse skill set spanning{" "}
          {highlightedText("Python, SQL")}, and machine learning frameworks like{" "}
          {highlightedText("Scikit-learn, TensorFlow, and PyTorch")}.
        </p>
        <div>
          <p className="text-sm md:text-base font-semibold mb-2">My professional experience includes:</p>
          {/* --- THIS IS THE MODIFIED LINE --- */}
          <ul className="list-disc list-outside space-y-2 pl-5 text-sm md:text-base">
            <li>
              <strong>Software Development:</strong> As an intern at{" "}
              {highlightedText("Levicent Software")}, I enhanced enterprise
              software by engineering{" "}
              {highlightedText("multi-language support systems")} and
              overhauling session management with secure,{" "}
              {highlightedText("token-based authentication")}. I also
              contributed to an LMS by developing a{" "}
              {highlightedText("customer support chatbot")} using PyTorch.
            </li>
            <li>
              <strong>AI-Powered Solutions:</strong> My project work includes
              developing a machine learning model to predict{" "}
              {highlightedText("Chronic Kidney Disease")} using real-time
              data and building an{" "}
              {highlightedText("AI-powered medical prescription translator")} to
              improve patient accessibility.
            </li>
            <li>
              <strong>Augmented Reality:</strong> As a freelance{" "}
              {highlightedText("SnapAR Lens Developer")}, I engineered over{" "}
              {highlightedText("300 lenses")} that have collectively generated
              more than {highlightedText("150 billion views")}, demonstrating my
              ability to create engaging, viral AR experiences.
            </li>
          </ul>
        </div>
        <p className="text-sm md:text-base">
          Currently, as a{" "}
          {highlightedText("Graduate Research Assistant at FAU")}, I am helping to
          launch the{" "}
          {highlightedText("Vertically Integrated Projects (VIP) program")}, where
          I mentor students in AI and Data Science and develop resources to
          foster interdisciplinary research.
        </p>
        <p className="text-sm md:text-base">
          I believe the most powerful technology is that which is not only
          functional but also intuitive and impactful. This portfolio showcases
          my commitment to that principle. If you&apos;re looking for a{" "}
          {highlightedText("problem-solver")} who combines{" "}
          {highlightedText("technical depth with a creative and strategic mindset")},
          let&apos;s connect.
        </p>
        <p className="text-sm md:text-base font-medium">
            Best regards,<br />
            Saketh Yalamanchili
        </p>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 pt-4">
          <Button variant="outline" className="w-full sm:w-auto" asChild>
            <Link href={resumeLink} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Link>
          </Button>
          <Button variant="default" className="w-full sm:w-auto" asChild>
            <Link href={hireEmail}>
              <Mail className="mr-2 h-4 w-4" /> Hire Me
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default About;

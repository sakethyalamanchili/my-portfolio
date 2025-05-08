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
    "https://drive.google.com/file/d/1cjX1jYBMyoUlQstgyExkaWSxg4kBkbr7/view?usp=drive_link";
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
          Hey there! I’m Saketh Yalamanchili, a Master’s student in{" "}
          {highlightedText("Data Science & Analytics")} at{" "}
          {highlightedText("Florida Atlantic University")}. My passion lies in{" "}
          {highlightedText("AI")}, {highlightedText("Machine Learning")}, and{" "}
          {highlightedText("Software Development")}. I come from an{" "}
          {highlightedText("Electronics and Communication")} background, specializing in{" "}
          {highlightedText("IoT")}, where I worked on projects that combined{" "}
          {highlightedText("ML and IoT")} to solve real-world problems.
        </p>
        <p className="text-sm md:text-base">
          I also have hands-on industry experience from a{" "}
          {highlightedText("6-month paid internship")} as a{" "}
          {highlightedText("Software Developer")} at{" "}
          {highlightedText("Levicent Software Technologies")}, where I worked on{" "}
          {highlightedText("full-stack development")} and built scalable software solutions.
        </p>
        <p className="text-sm md:text-base">
          Outside of tech, cricket has been a huge part of my life—it’s where I learned{" "}
          {highlightedText("teamwork")}, {highlightedText("leadership")}, and{" "}
          {highlightedText("discipline")}, qualities that shape how I work and collaborate today.
        </p>
        <p className="text-sm md:text-base">
          I’m always excited to explore new opportunities in{" "}
          {highlightedText("Data Science")} and {highlightedText("ML")}. Let’s connect and build
          something meaningful together!
        </p>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-6">
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

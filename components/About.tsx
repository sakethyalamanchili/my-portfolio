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
    "https://drive.google.com/file/d/1UoQBlGI_kYeE1GiCJ_o0FXHUDL4IPV10/view?usp=drive_link";
  const hireEmail =
    "mailto:saketh.engineer@gmail.com?subject=Job%20Opportunity&body=Hello%20Saketh,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20I'm%20interested%20in%20discussing%20a%20potential%20job%20opportunity%20with%20you.";

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
          Hello! I’m Saketh Yalamanchili, a Software Developer with a focus on{" "}
          {highlightedText("Data Science")} and{" "}
          {highlightedText("Machine Learning")}. My background in{" "}
          {highlightedText("Electronics and Communication Engineering")} drives
          my passion for building solutions that bridge{" "}
          {highlightedText("technology")} and {highlightedText("innovation")}.
        </p>
        <p className="text-sm md:text-base">
          From developing {highlightedText("web applications")} to creating{" "}
          {highlightedText("AR experiences")}, I’m dedicated to combining tech
          with creativity. I’m especially fascinated by how{" "}
          {highlightedText("AI")} and {highlightedText("Data Science")} are
          reshaping the world, and I aim to make an impact with each project.
        </p>
        <p className="text-sm md:text-base">
          Cricket is another big part of my life—it taught me{" "}
          {highlightedText("teamwork")}, {highlightedText("leadership")}, and{" "}
          {highlightedText("discipline")}. These principles guide me as I
          collaborate and build solutions that matter.
        </p>
        <p className="text-sm md:text-base">
          I’m always open to new opportunities in{" "}
          {highlightedText("Data Science")} and{" "}
          {highlightedText("Machine Learning")}. Let’s connect and create
          something impactful together!
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

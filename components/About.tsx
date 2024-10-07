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
    "https://drive.google.com/file/d/1NFYdOygvDJN3h1-Ct8_AsQssHNhTPmw8/view?usp=sharing";
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
          Hey there! I&apos;m Saketh Yalamanchili, and I’ve always been someone
          who loves figuring out how things work—whether it’s technology or life
          in general. I’ve got a background in{" "}
          {highlightedText("Electronics and Communication Engineering")}, and
          over the years, I’ve found my calling in{" "}
          {highlightedText("Software Development")} and{" "}
          {highlightedText("Data Science")}. Lately, I’ve been diving deep into{" "}
          {highlightedText("Machine Learning")}—it’s like unlocking the future,
          one algorithm at a time.
        </p>
        <p className="text-sm md:text-base">
          From coding up {highlightedText("web applications")} to crafting cool{" "}
          {highlightedText("AR filters")}, I’m always excited about combining
          creativity with tech. It’s amazing how much we can achieve when we
          bridge data and innovation! Whether it’s tinkering with code or
          analyzing data to solve real-world problems, I love using technology
          to make life a bit easier and more fun.
        </p>
        <p className="text-sm md:text-base">
          What truly excites me is how {highlightedText("AI")} and{" "}
          {highlightedText("Data Science")} are transforming the way we work,
          think, and live. Every project I work on brings me closer to mastering
          these fields, and it’s this constant growth that keeps me going.
          Whether I’m working on an AI-driven project or analyzing trends, I
          always aim to make a real impact.
        </p>
        <p className="text-sm md:text-base">
          Outside of tech, I’ve got another big passion:{" "}
          {highlightedText("cricket")}. Having captained my school team for over
          8 years, I learned the value of {highlightedText("teamwork")},{" "}
          {highlightedText("leadership")}, and {highlightedText("discipline")}.
          Those same principles guide me in the professional world—whether I’m
          leading a team or collaborating on a new project.
        </p>
        <p className="text-sm md:text-base">
          I’m always on the lookout for exciting opportunities to connect and
          collaborate with others in the {highlightedText("Data Science")} and{" "}
          {highlightedText("Machine Learning")} communities. Let’s make
          something awesome together!
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

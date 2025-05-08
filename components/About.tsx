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
        <p className="text-sm md:text-base font-medium">Dear {highlightedText("Visitor")},</p>

        <p className="text-sm md:text-base">
          You've probably seen a hundred {highlightedText("About Me")} pages before this one. All neat. All impressive. All... kind of the same.
        </p>

        <p className="text-sm md:text-base">
          But if you've landed here, let me give you something else — a {highlightedText("story")}, not a summary.
        </p>

        <p className="text-sm md:text-base">
          My name is {highlightedText("Saketh Yalamanchili")}. I'm a master's student in{" "}
          {highlightedText("Data Science & Analytics")} at{" "}
          {highlightedText("Florida Atlantic University")}. But that's just the headline. The real story? It began with a{" "}
          {highlightedText("circuit board")}, a stubborn bug, and an even more stubborn curiosity.
        </p>

        <p className="text-sm md:text-base">
          I come from an {highlightedText("Electronics & Communication")} background — a world of wires, sensors, and blinking LEDs. But I was never just building gadgets. I was trying to teach them how to{" "}
          {highlightedText("feel")}, how to{" "}
          {highlightedText("respond")}, how to{" "}
          {highlightedText("understand")}. That's where{" "}
          {highlightedText("Machine Learning")} stepped in — not as a career path, but as a{" "}
          {highlightedText("love story")}.
        </p>

        <p className="text-sm md:text-base">
          I spent six months at{" "}
          {highlightedText("Levicent Software")}, where I built{" "}
          {highlightedText("full-stack solutions")}, broke things (with flair), fixed them (with coffee), and learned that real-world{" "}
          {highlightedText("software development")} isn't about perfection — it's about{" "}
          {highlightedText("persistence")}.
        </p>

        <p className="text-sm md:text-base">
          When I'm not teaching machines to learn, I'm on a{" "}
          {highlightedText("cricket field")} — reading the pitch, waiting for the right shot, learning from every mistake. It's where I first understood{" "}
          {highlightedText("strategy")},{" "}
          {highlightedText("resilience")}, and how to{" "}
          {highlightedText("lose gracefully")} — lessons that followed me into every project since.
        </p>

        <p className="text-sm md:text-base">
          This portfolio?  
          It's not just code and credentials. It's a{" "}
          {highlightedText("letter")} to anyone who still believes in{" "}
          {highlightedText("craft")} — in work that's not just{" "}
          {highlightedText("functional")}, but{" "}
          {highlightedText("felt")}. Every project here carries a piece of me: the joy of getting something to finally run, the pain of{" "}
          {highlightedText("3AM bugs")}, and the quiet pride of building something that{" "}
          {highlightedText("matters")}.
        </p>

        <p className="text-sm md:text-base">
          So no, this isn't just an {highlightedText("“About Me”")}.  
          It's a{" "}
          {highlightedText("handshake")}. A welcome. A small window into what{" "}
          {highlightedText("drives me")}.
        </p>

        <p className="text-sm md:text-base">
          And if anything here feels{" "}
          {highlightedText("familiar")} — if it makes you pause, smile, or nod — then maybe we're already on the same page.
        </p>

        <p className="text-sm md:text-base font-medium">
          With purpose (and just enough poetry),<br />
          Saketh
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

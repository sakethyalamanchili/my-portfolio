"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  BookOpen,
  Code,
  GraduationCap,
  Mail,
  Briefcase,
  User,
  Award,
  ChevronRight,
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaKaggle,
  FaSnapchat,
  FaMedium,
  FaTwitter,
} from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Dynamically import client-side components
const About = dynamic(() => import("./About"), { ssr: false });
const Education = dynamic(() => import("./Education"), { ssr: false });
const Experience = dynamic(() => import("./Experience"), { ssr: false });
const Projects = dynamic(() => import("./Projects"), { ssr: false });
const Skills = dynamic(() => import("./Skills"), { ssr: false });
const BlogPosts = dynamic(() => import("./BlogPosts"), { ssr: false });
const SnapchatFilters = dynamic(() => import("./SnapchatFilters"), {
  ssr: false,
});
const Achievements = dynamic(() => import("./Achievements"), { ssr: false });

interface BlogPost {
  guid: string;
  title: string;
  pubDate: string;
  link: string;
}

interface SnapchatFilter {
  id: string;
  name: string;
  views: string;
  link: string;
  codeImage: string;
}

export default function Portfolio() {
  const [mediumPosts, setMediumPosts] = useState<BlogPost[]>([]);
  const [snapchatFilters, setSnapchatFilters] = useState<SnapchatFilter[]>([]);
  const { theme, setTheme } = useTheme();
  const [activeTab, setActiveTab] = useState("about");
  const [isClient, setIsClient] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setTheme("dark");

    const handleResize = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
      setIsMobileMenuOpen(isMobileView);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call it initially

    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sakethyalamanchili"
    )
      .then((response) => response.json())
      .then((data) => setMediumPosts(data.items));

    setSnapchatFilters([
      {
        id: "1",
        name: "low exposure sharp",
        views: "15B+ counting",
        link: "https://www.snapchat.com/lens/f6476c9100404360912c2f50c76be9f6?sender_web_id=4dea06cb-3692-4885-be38-f367bcd5959a&device_type=desktop&is_copy_url=true",
        codeImage:
          "https://app.snapchat.com/web/deeplink/snapcode?data=f6476c9100404360912c2f50c76be9f6&version=1&type=svg",
      },
      {
        id: "2",
        name: "MACBOOK BW x GRAIN",
        views: "17B+ counting",
        link: "https://www.snapchat.com/lens/3e3089b84f244bd7a3a692103a4d490d?type=SNAPCODE&metadata=01",
        codeImage:
          "https://app.snapchat.com/web/deeplink/snapcode?data=3e3089b84f244bd7a3a692103a4d490d&version=1&type=svg",
      },
      {
        id: "3",
        name: "FILM CAM",
        views: "13B+ counting",
        link: "https://www.snapchat.com/lens/8cb9093d0af94467beaf241fbd5f8deb?sender_web_id=4454df49-3495-45f4-bc1c-7a8ebd809a3c&device_type=desktop&is_copy_url=true",
        codeImage:
          "https://app.snapchat.com/web/deeplink/snapcode?data=8cb9093d0af94467beaf241fbd5f8deb&version=1&type=svg",
      },
      {
        id: "4",
        name: "Vintage BNW",
        views: "7B+ counting",
        link: "https://www.snapchat.com/lens/f35c0c4968954be7bf3c0bf784876f45?sender_web_id=9827ed68-fa8e-443f-b6e1-394da543e03d&device_type=desktop&is_copy_url=true",
        codeImage:
          "https://app.snapchat.com/web/deeplink/snapcode?data=f35c0c4968954be7bf3c0bf784876f45&version=1&type=svg",
      },
      {
        id: "5",
        name: "pretty",
        views: "5B+ counting",
        link: "https://www.snapchat.com/lens/7a4097cae92745dd89e28619ab23b688?sender_web_id=2b0673a5-4717-49ca-9dda-904a73582353&device_type=desktop&is_copy_url=true",
        codeImage:
          "https://app.snapchat.com/web/deeplink/snapcode?data=7a4097cae92745dd89e28619ab23b688&version=1&type=svg",
      },
      {
        id: "6",
        name: "DARK",
        views: "5B+ counting",
        link: "https://www.snapchat.com/lens/e45121661d0e40dbac00adc71476f757?sender_web_id=9b91ee9c-92df-4bcf-94e7-2b374ea4a189&device_type=desktop&is_copy_url=true",
        codeImage:
          "https://app.snapchat.com/web/deeplink/snapcode?data=e45121661d0e40dbac00adc71476f757&version=1&type=svg",
      },
      {
        id: "7",
        name: "achromatic",
        views: "4B+ counting",
        link: "https://www.snapchat.com/lens/ab7c06e47fa24214b5a7cab13ed4310b?sender_web_id=3729ff05-f656-48eb-9058-2c4d3f7d6028&device_type=desktop&is_copy_url=true",
        codeImage:
          "https://app.snapchat.com/web/deeplink/snapcode?data=ab7c06e47fa24214b5a7cab13ed4310b&version=1&type=svg",
      },
      {
        id: "8",
        name: "low exposure",
        views: "3B+ counting",
        link: "https://www.snapchat.com/lens/7c6bd6a9ab784a769deff5e64b7ecd00?sender_web_id=6e8a0a56-3aab-4a3c-979d-921c6c5c8f2f&device_type=desktop&is_copy_url=true",
        codeImage:
          "https://app.snapchat.com/web/deeplink/snapcode?data=7c6bd6a9ab784a769deff5e64b7ecd00&version=1&type=svg",
      },
      {
        id: "9",
        name: "Cupid Crown",
        views: "3B+ counting",
        link: "https://www.snapchat.com/lens/51609f9a55fe43ddbf4bafff47ff9d1a?sender_web_id=90a32dc7-07ed-4825-80b6-6cf9beb3a10a&device_type=desktop&is_copy_url=true",
        codeImage:
          "https://app.snapchat.com/web/deeplink/snapcode?data=51609f9a55fe43ddbf4bafff47ff9d1a&version=1&type=svg",
      },
      {
        id: "10",
        name: "Deep moody",
        views: "3B+ counting",
        link: "https://www.snapchat.com/lens/865823d263b249119832aa7adf948b42?sender_web_id=536efae2-a973-455b-ad1d-18f04112f7e8&device_type=desktop&is_copy_url=true",
        codeImage:
          "https://app.snapchat.com/web/deeplink/snapcode?data=865823d263b249119832aa7adf948b42&version=1&type=svg",
      },
    ]);

    return () => window.removeEventListener("resize", handleResize);
  }, [setTheme]);

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const sidebarVariants = {
    hidden: { x: -300 },
    visible: { x: 0, transition: { type: "spring", stiffness: 100 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const navItems = [
    { id: "about", icon: User, label: "About" },
    { id: "experience", icon: Briefcase, label: "Experience" },
    { id: "education", icon: GraduationCap, label: "Education" },
    { id: "projects", icon: Code, label: "Projects" },
    { id: "skills", icon: ChevronRight, label: "Skills" },
    { id: "achievements", icon: Award, label: "Achievements" },
    { id: "blog", icon: BookOpen, label: "Blog Posts" },
    { id: "snapchat", icon: FaSnapchat, label: "Snapchat Filters" },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/sakethyalamanchili",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/sakethyalamanchili/",
      label: "LinkedIn",
    },
    {
      icon: FaKaggle,
      href: "https://www.kaggle.com/sakethyalamanchili",
      label: "Kaggle",
    },
    { icon: Mail, href: "mailto:saketh.engineer@gmail.com", label: "Email" },
    {
      icon: FaSnapchat,
      href: "https://www.snapchat.com/add/saketh05",
      label: "Snapchat",
    },
    {
      icon: FaMedium,
      href: "https://medium.com/@sakethyalamanchili",
      label: "Medium",
    },
    { icon: FaTwitter, href: "https://x.com/Saketh05_", label: "Twitter" },
  ];

  if (!isClient) {
    return null;
  }

  const Sidebar = ({ isMobile = false }) => (
    <ScrollArea className="h-full">
      <div className="flex flex-col h-full px-4 py-6">
        <div className="flex flex-col items-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <Avatar className="w-32 h-32 mb-4">
              <AvatarImage
                src="https://github.com/sakethyalamanchili.png"
                alt="Saketh Yalamanchili"
              />
              <AvatarFallback>SY</AvatarFallback>
            </Avatar>
          </motion.div>
          <motion.h1
            className="text-xl font-bold mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Saketh Yalamanchili
          </motion.h1>
          <motion.p
            className={`text-sm text-center ${
              theme === "dark" ? "text-[#8B949E]" : "text-[#6B7280]"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Software Developer | Data Science Enthusiast | AR Creator
          </motion.p>
        </div>
        <div className="flex flex-wrap justify-center gap-1 mb-6">
          {socialLinks.map((link, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-1.5 rounded-full ${
                      theme === "dark"
                        ? "hover:bg-[#21262D]"
                        : "hover:bg-[#E5E7EB]"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <link.icon className="h-4 w-4" />
                  </motion.a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{link.label}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
        <nav className="flex-grow">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${
                    activeTab === item.id
                      ? theme === "dark"
                        ? "bg-[#21262D] text-white"
                        : "bg-[#E5E7EB] text-[#1F2937]"
                      : ""
                  }`}
                  onClick={() => {
                    setActiveTab(item.id);
                    if (isMobile) {
                      setIsMobileMenuOpen(false);
                    }
                  }}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </ScrollArea>
  );

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-[#0E1116] text-white" : "bg-white text-[#1F2937]"
      }`}
    >
      <div className="flex flex-col md:flex-row">
        {/* Mobile header */}
        <div className="md:hidden flex justify-between items-center p-4 sticky top-0 z-50 bg-opacity-90 backdrop-blur-sm">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                {isMobileMenuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className={`w-64 p-0 ${
                theme === "dark"
                  ? "bg-[#161B22] border-r border-[#30363D]"
                  : "bg-[#F3F4F6] border-r border-[#E5E7EB]"
              }`}
            >
              <Sidebar isMobile={true} />
            </SheetContent>
          </Sheet>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Switch
              checked={theme === "dark"}
              onCheckedChange={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
            />
          </motion.div>
        </div>

        {/* Desktop sidebar */}
        <motion.div
          className={`hidden md:block w-64 h-screen fixed left-0 top-0 ${
            theme === "dark"
              ? "bg-[#161B22] border-r border-[#30363D]"
              : "bg-[#F3F4F6] border-r border-[#E5E7EB]"
          }`}
          initial="hidden"
          animate="visible"
          variants={sidebarVariants}
        >
          <Sidebar />
        </motion.div>

        {/* Main content */}
        <motion.div
          className={`flex-1 p-4 md:p-8 md:ml-64 ${
            isMobile && isMobileMenuOpen ? "hidden" : ""
          }`}
          initial="hidden"
          animate="visible"
          variants={contentVariants}
        >
          {/* Desktop theme toggle */}
          <div className="hidden md:flex justify-end mb-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Switch
                checked={theme === "dark"}
                onCheckedChange={() =>
                  setTheme(theme === "dark" ? "light" : "dark")
                }
                className="mr-2"
              />
            </motion.div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {theme === "dark" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </motion.span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={tabVariants}
            >
              {activeTab === "about" && (
                <About theme={theme === "dark" ? "dark" : "light"} />
              )}
              {activeTab === "experience" && (
                <Experience theme={theme === "dark" ? "dark" : "light"} />
              )}
              {activeTab === "education" && (
                <Education theme={theme === "dark" ? "dark" : "light"} />
              )}
              {activeTab === "projects" && (
                <Projects theme={theme === "dark" ? "dark" : "light"} />
              )}
              {activeTab === "skills" && (
                <Skills theme={theme === "dark" ? "dark" : "light"} />
              )}
              {activeTab === "achievements" && (
                <Achievements theme={theme === "dark" ? "dark" : "light"} />
              )}
              {activeTab === "blog" && (
                <Card
                  className={`${
                    theme === "dark"
                      ? "bg-[#161B22] border-[#30363D]"
                      : "bg-white border-[#E5E7EB]"
                  }`}
                >
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">
                      Blog Posts
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <BlogPosts
                      posts={mediumPosts}
                      theme={theme === "dark" ? "dark" : "light"}
                    />
                  </CardContent>
                </Card>
              )}
              {activeTab === "snapchat" && (
                <Card
                  className={`${
                    theme === "dark"
                      ? "bg-[#161B22] border-[#30363D]"
                      : "bg-white border-[#E5E7EB]"
                  }`}
                >
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">
                      Top 10 Snapchat Filters
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <SnapchatFilters
                      filters={snapchatFilters}
                      theme={theme === "dark" ? "dark" : "light"}
                    />
                  </CardContent>
                </Card>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

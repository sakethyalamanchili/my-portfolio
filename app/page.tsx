// import Portfolio from "@/components/portfolio";

// export default function Home() {
//   return (
//     <main>
//       <Portfolio />
//     </main>
//   );
// }


import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero";
import { AboutSection } from "@/components/About";
import { ExperienceSection } from "@/components/Experience";
import { EducationSection } from "@/components/Education";
import { SkillsSection } from "@/components/Skills";
import { ProjectsSection } from "@/components/Projects";
import { AchievementsSection } from "@/components/Achievements";
import { SnapchatSection } from "@/components/SnapchatFilters";
import { BlogSection } from "@/components/BlogPosts";
import { PhotographySection } from "@/components/Photography";
import { ContactSection } from "@/components/Contact";
import { Footer } from "@/components/footer";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <AchievementsSection />
      <SnapchatSection />
      <BlogSection />
      <PhotographySection />
      <ContactSection />
      <Footer />
    </main>
  );
}

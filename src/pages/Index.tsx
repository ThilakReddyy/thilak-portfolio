import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import CredentialsSection from "@/components/CredentialsSection";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-primary px-4 py-3 font-semibold text-primary-foreground transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <CredentialsSection />
        <ProjectsSection />
        <ExperienceSection />
        <AboutSection />
        <SkillsSection />
        <BlogSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;

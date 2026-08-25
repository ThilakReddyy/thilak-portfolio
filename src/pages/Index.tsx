import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import CredentialsSection from "@/components/CredentialsSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import { useLiveProjectStats } from "@/hooks/use-live-project-stats";

const Index = () => {
  const liveProjectStats = useLiveProjectStats();

  return (
    <div id="top" className="site-frame">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <CredentialsSection stats={liveProjectStats} />
        <ProjectsSection stats={liveProjectStats} />
        <ExperienceSection />
        <AboutSection />
        <SkillsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import CredentialsSection from "@/components/CredentialsSection";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import { useEffect, useState } from "react";

const Index = () => {
  const [arrivalSignal, setArrivalSignal] = useState<"light" | "heavy" | null>(null);

  useEffect(() => {
    const intensity = Math.random() < 0.55 ? "light" : "heavy";
    const arrivalDelay = 4_000 + Math.random() * 1_000;
    const burstDuration =
      intensity === "light"
        ? 100 + Math.random() * 80
        : 180 + Math.random() * 140;
    let hasScrolled = false;
    let endTimer: ReturnType<typeof setTimeout>;

    const arrivalTimer = setTimeout(() => {
      if (hasScrolled) return;

      setArrivalSignal(intensity);
      window.removeEventListener("scroll", cancelArrival);
      endTimer = setTimeout(() => {
        setArrivalSignal(null);
      }, burstDuration);
    }, arrivalDelay);

    function cancelArrival() {
      hasScrolled = true;
      clearTimeout(arrivalTimer);
      clearTimeout(endTimer);
      setArrivalSignal(null);
      window.removeEventListener("scroll", cancelArrival);
    }

    window.addEventListener("scroll", cancelArrival, { passive: true });

    return () => {
      clearTimeout(arrivalTimer);
      clearTimeout(endTimer);
      window.removeEventListener("scroll", cancelArrival);
    };
  }, []);

  return (
    <div
      className={`site-signal${arrivalSignal ? ` site-signal--${arrivalSignal}` : ""} min-h-screen bg-background`}
    >
      <span className="site-signal__static" aria-hidden="true" />
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

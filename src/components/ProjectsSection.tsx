import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, ExternalLink, Github, Search, Users, Wrench } from "lucide-react";

const stats = [
  { icon: Download, value: "1K+", label: "Android Downloads" },
  { icon: Users, value: "4K+", label: "Daily Users" },
  { icon: Search, value: "#1", label: "Google Rank" },
  { icon: Wrench, value: "12+", label: "Student Tools" },
];

const flagshipPlatforms = [
  {
    label: "Backend & Web",
    stack: ["FastAPI", "Next.js", "RabbitMQ", "Redis", "PostgreSQL", "Cloudflare"],
  },
  {
    label: "Infrastructure",
    stack: ["AWS EC2", "Docker", "Prometheus", "Grafana", "Loki"],
  },
  {
    label: "Android",
    stack: [
      "Kotlin",
      "Jetpack Compose",
      "Material 3",
      "Clean Architecture",
      "Hilt",
      "Retrofit",
      "Gson",
      "Room",
      "Navigation Compose",
      "DataStore",
      "Firebase Cloud Messaging",
    ],
  },
  {
    label: "iOS",
    stack: [
      "Swift 6",
      "SwiftUI",
      "Observation",
      "Swift Concurrency",
      "URLSession",
      "Codable",
      "NavigationStack",
      "SFSafariViewController",
      "XcodeGen",
      "Swift Testing",
      "XCTest",
    ],
  },
];

const flagshipRepositories = [
  { label: "Frontend", href: "https://github.com/ThilakReddyy/JNTUHRESULTS-WEB/" },
  { label: "Backend", href: "https://github.com/ThilakReddyy/jntuh-backend/" },
  { label: "Android", href: "https://github.com/ThilakReddyy/jntuhconnect" },
  { label: "iOS", href: "https://github.com/ThilakReddyy/jntuhconnect-ios" },
];

const projects = [
  {
    title: "JNTUH Results — Web",
    description:
      "A one-click results experience that lets JNTUH students review every semester and explore classmates' results without navigating university portals manually.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/ThilakReddyy/JNTUHRESULTS-WEB",
    live: "https://jntuhresults.vercel.app/",
  },
  {
    title: "JNTUH Results — Service",
    description:
      "The FastAPI backend powering results, academic records, and backlog tracking, with asynchronous processing and a performance-focused data layer.",
    stack: ["FastAPI", "PostgreSQL", "Redis", "RabbitMQ"],
    github: "https://github.com/ThilakReddyy/jntuh-backend",
  },
  {
    title: "Telangana SSC Results",
    description:
      "A focused results portal for Telangana SSC students to view their performance and compare results with classmates in a single flow.",
    stack: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/ThilakReddyy/TS-SSC-RESULTS-WEB",
  },
  {
    title: "Face Recognition Surveillance",
    description:
      "A college campus security prototype that identifies enrolled students from camera feeds and records attendance using facial recognition.",
    stack: ["Python", "OpenCV", "Face Recognition"],
    github: "https://github.com/ThilakReddyy/SURVEILLANCE-SYSTEM-USING-FACE-RECOGNITION",
  },
];

const IconLink = ({ href, label, external = false }: { href: string; label: string; external?: boolean }) => {
  const Icon = external ? ExternalLink : Github;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full border border-glow flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/60 transition-all duration-300"
      aria-label={label}
    >
      <Icon size={18} />
    </a>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">Selected Work</p>
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-16">
            Products with <span className="text-gradient">Real Impact</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-card border border-glow rounded-3xl p-8 md:p-12 hover-glow relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
              <div>
                <p className="text-primary text-xs font-medium uppercase tracking-widest mb-2">Flagship product ecosystem</p>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-2">JNTUH Connect</h3>
                <p className="text-muted-foreground">Native Android and iOS apps for the JNTUH student community</p>
              </div>
              <div className="flex gap-3">
                <IconLink
                  href="https://github.com/ThilakReddyy/jntuhconnect"
                  label="View JNTUH Connect Android source on GitHub"
                />
                <IconLink
                  href="https://play.google.com/store/apps/details?id=com.dhethi.jntuhconnect"
                  label="Get JNTUH Connect on Google Play"
                  external
                />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="bg-secondary/50 rounded-xl p-4 text-center border border-glow/50">
                  <Icon size={20} className="text-primary mx-auto mb-2" />
                  <p className="font-display font-bold text-xl text-foreground">{value}</p>
                  <p className="text-muted-foreground text-xs">{label}</p>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Independently designed, built, and shipped a cross-platform student ecosystem that brings results, credits,
              backlogs, class rankings, academic resources, careers, and real-time university updates into one fast,
              accessible experience. Native mobile apps are backed by a production-grade web, API, and observability stack.
            </p>

            <div className="space-y-5">
              {flagshipPlatforms.map((platform) => (
                <div key={platform.label}>
                  <p className="mb-2 text-xs font-medium uppercase tracking-widest text-primary">{platform.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {platform.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium border border-glow/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3 border-t border-glow/50 pt-6">
              {flagshipRepositories.map((repository) => (
                <a
                  key={repository.label}
                  href={repository.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-glow px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
                >
                  <Github size={14} />
                  {repository.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 + index * 0.1 }}
              className="bg-card border border-glow rounded-2xl p-6 hover-glow flex flex-col"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="font-display font-semibold text-xl text-foreground">{project.title}</h3>
                <div className="flex gap-2 shrink-0">
                  <IconLink href={project.github} label={`View ${project.title} on GitHub`} />
                  {project.live && <IconLink href={project.live} label={`Visit ${project.title}`} external />}
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/ThilakReddyy?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={17} />
            Explore all repositories
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

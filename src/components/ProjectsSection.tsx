import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Zap, Users, Search, Server } from "lucide-react";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Users, value: "4K+", label: "Daily Users" },
    { icon: Zap, value: "<40ms", label: "Response Time" },
    { icon: Search, value: "#1", label: "Google Rank" },
    { icon: Server, value: "99.9%", label: "Uptime" },
  ];

  const techStack = [
    "Next.js", "FastAPI", "RabbitMQ", "Redis", "PostgreSQL", "AWS EC2", "Docker", "Prometheus", "Grafana", "Cloudflare"
  ];

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">Featured Work</p>
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-16">
            Flagship <span className="text-gradient">Project</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-card border border-glow rounded-3xl p-8 md:p-12 hover-glow relative overflow-hidden"
        >
          {/* Ambient light */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
              <div>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-2">
                  JNTUH Connect
                </h3>
                <p className="text-muted-foreground">
                  Centralized results platform for JNTU Hyderabad — ranked #1 on Google
                </p>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://github.com/thilakreddyy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-glow flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/60 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://jntuhconnect.dhethi.com"
                  className="w-10 h-10 rounded-full border border-glow flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/60 transition-all duration-300"
                  aria-label="Live Link"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="bg-secondary/50 rounded-xl p-4 text-center border border-glow/50"
                >
                  <Icon size={20} className="text-primary mx-auto mb-2" />
                  <p className="font-display font-bold text-xl text-foreground">{value}</p>
                  <p className="text-muted-foreground text-xs">{label}</p>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="mb-8 space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                Independently designed, built, deployed, and maintained a centralized results platform serving
                thousands of students daily. Features an SEO-optimized frontend, high-performance fetching system,
                asynchronous processing with RabbitMQ, and optimized Redis caching.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium border border-glow/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

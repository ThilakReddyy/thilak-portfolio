import { motion, useInView } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BookOpen,
  Database,
  Download,
  ExternalLink,
  Gauge,
  Github,
  Layers3,
  Rocket,
  Search,
  Server,
  Smartphone,
  Star,
  Users,
} from "lucide-react";
import { useRef } from "react";

const impact = [
  { icon: Users, value: "4K+", label: "Daily active users" },
  { icon: Activity, value: "22K+", label: "Daily API calls" },
  { icon: Download, value: "10K+", label: "Play Store downloads" },
  { icon: Gauge, value: "<40ms", label: "Cached responses" },
  { icon: Search, value: "#1", label: "Google rank" },
  { icon: Star, value: "56 / 18", label: "GitHub stars / forks" },
];

const architecture = [
  {
    icon: Layers3,
    title: "Product experiences",
    description: "Next.js web, Kotlin/Compose Android, and SwiftUI iOS",
  },
  {
    icon: Server,
    title: "Services & automation",
    description: "FastAPI, asynchronous scraping, APIs, and notifications",
  },
  {
    icon: Database,
    title: "Data & messaging",
    description: "PostgreSQL, Redis caching, and RabbitMQ workflows",
  },
  {
    icon: Activity,
    title: "Delivery & operations",
    description: "Docker, AWS EC2, GitHub Actions, Prometheus, Grafana, and Loki",
  },
];

const productLinks = [
  {
    label: "Live web product",
    href: "https://jntuhconnect.dhethi.com/",
    icon: ExternalLink,
  },
  {
    label: "Google Play",
    href: "https://play.google.com/store/apps/details?id=com.dhethi.jntuhconnect",
    icon: Smartphone,
  },
  {
    label: "App Store",
    href: "https://apps.apple.com/in/app/jntuh-connect/id6790828236",
    icon: Smartphone,
  },
  {
    label: "Scaling case study",
    href: "https://thilakreddy.medium.com/how-i-scaled-jntuh-results-vercel-from-a-simple-script-to-22k-api-calls-daily-e3e3052fff32",
    icon: BookOpen,
  },
];

const repositories = [
  {
    label: "Web source",
    href: "https://github.com/ThilakReddyy/JNTUHRESULTS-WEB",
  },
  {
    label: "Backend source",
    href: "https://github.com/ThilakReddyy/jntuh-backend",
  },
  {
    label: "Android source",
    href: "https://github.com/ThilakReddyy/jntuhconnect",
  },
  {
    label: "iOS source",
    href: "https://github.com/ThilakReddyy/jntuhconnect-ios",
  },
];

const engineeringStories = [
  {
    icon: Rocket,
    title: "Rebuilt for scale",
    description:
      "Evolved the original Django results workflow into asynchronous FastAPI services backed by PostgreSQL, Redis, and RabbitMQ.",
  },
  {
    icon: Smartphone,
    title: "Released natively",
    description:
      "Shipped dedicated Kotlin/Compose and SwiftUI clients—not web wrappers—with automated Android release delivery.",
  },
  {
    icon: Activity,
    title: "Operated in production",
    description:
      "Added rate limiting, metrics, centralized logging, push notifications, deployment automation, and operational monitoring.",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding section-anchor relative" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
            Flagship case study
          </p>
          <h2 className="max-w-4xl font-display text-3xl font-bold md:text-5xl">
            One product. Four production{" "}
            <span className="text-gradient">surfaces.</span>
          </h2>
        </motion.div>

        <motion.article
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative overflow-hidden rounded-3xl border border-glow bg-card p-6 hover-glow sm:p-8 md:p-12"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-primary/5 blur-[90px]"
          />

          <div className="relative z-10">
            <div className="mb-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-primary">
                  Independently built &amp; operated
                </p>
                <h3 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
                  JNTUH Connect
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  A maintained student ecosystem spanning a public web app, API
                  platform, native Android app, and native iOS app.
                </p>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                I designed and built the product, backend services, data and queue
                workflows, mobile clients, deployment automation, and observability.
                Students use its 12+ tools for results, credits, backlogs, academic
                resources, careers, rankings, and university updates.
              </p>
            </div>

            <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {impact.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="rounded-xl border border-glow/60 bg-secondary/45 p-4"
                >
                  <Icon size={18} className="mb-4 text-primary" aria-hidden="true" />
                  <p className="font-display text-2xl font-bold text-foreground">
                    {value}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <p className="mb-10 text-xs text-muted-foreground">
              Product and traffic figures come from production analytics; Play Store
              and GitHub figures were observed on 6 August 2026.
            </p>

            <div className="mb-10">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-primary">
                How the system fits together
              </p>
              <div className="grid gap-3 lg:grid-cols-4">
                {architecture.map(({ icon: Icon, title, description }, index) => (
                  <div
                    key={title}
                    className="relative rounded-2xl border border-glow/60 bg-background/35 p-5"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <Icon size={21} className="text-primary" aria-hidden="true" />
                      {index < architecture.length - 1 && (
                        <ArrowRight
                          size={16}
                          className="hidden text-muted-foreground/60 lg:block"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    <h4 className="mb-2 font-display font-semibold text-foreground">
                      {title}
                    </h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {productLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_24px_hsl(36_80%_55%/0.3)]"
                >
                  <Icon size={15} aria-hidden="true" />
                  {label}
                </a>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {repositories.map((repository) => (
                <a
                  key={repository.label}
                  href={repository.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-glow px-3.5 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
                >
                  <Github size={14} aria-hidden="true" />
                  {repository.label}
                </a>
              ))}
            </div>
          </div>
        </motion.article>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {engineeringStories.map(({ icon: Icon, title, description }, index) => (
            <motion.article
              key={title}
              initial={false}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.3 + index * 0.09 }}
              className="rounded-2xl border border-glow bg-card p-6"
            >
              <Icon size={22} className="mb-5 text-primary" aria-hidden="true" />
              <h3 className="mb-3 font-display text-lg font-semibold text-foreground">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={false}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.75 }}
          className="mt-9 text-center"
        >
          <a
            href="https://github.com/ThilakReddyy?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <Github size={17} aria-hidden="true" />
            Explore all repositories
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

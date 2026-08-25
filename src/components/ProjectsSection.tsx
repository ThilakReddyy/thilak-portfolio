import {
  Activity,
  ArrowUpRight,
  Bot,
  BookOpen,
  Compass,
  Database,
  DollarSign,
  Download,
  ExternalLink,
  FileSearch,
  Gauge,
  Github,
  Layers3,
  Radio,
  Rocket,
  Search,
  Server,
  Smartphone,
  Star,
  Users,
} from "lucide-react";
import type { LiveProjectStats } from "@/hooks/use-live-project-stats";

type ProjectsSectionProps = {
  stats: LiveProjectStats;
};

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
  { label: "Live web product", href: "https://jntuhconnect.dhethi.com/" },
  {
    label: "Google Play",
    href: "https://play.google.com/store/apps/details?id=com.dhethi.jntuhconnect",
  },
  {
    label: "App Store",
    href: "https://apps.apple.com/in/app/jntuh-connect/id6790828236",
  },
  {
    label: "Scaling case study",
    href: "https://thilakreddy.medium.com/how-i-scaled-jntuh-results-vercel-from-a-simple-script-to-22k-api-calls-daily-e3e3052fff32",
  },
];

const repositories = [
  { label: "Web source", href: "https://github.com/ThilakReddyy/JNTUHRESULTS-WEB" },
  { label: "Backend source", href: "https://github.com/ThilakReddyy/jntuh-backend" },
  { label: "Android source", href: "https://github.com/ThilakReddyy/jntuhconnect" },
  { label: "iOS source", href: "https://github.com/ThilakReddyy/jntuhconnect-ios" },
];

const engineeringStories = [
  {
    icon: Rocket,
    eyebrow: "Rebuild",
    title: "Rebuilt for scale",
    description:
      "Evolved the original Django results workflow into asynchronous FastAPI services backed by PostgreSQL, Redis, and RabbitMQ.",
  },
  {
    icon: Smartphone,
    eyebrow: "Release",
    title: "Released natively",
    description:
      "Shipped dedicated Kotlin/Compose and SwiftUI clients—not web wrappers—with automated Android release delivery.",
  },
  {
    icon: Activity,
    eyebrow: "Operate",
    title: "Operated in production",
    description:
      "Added rate limiting, metrics, centralized logging, push notifications, deployment automation, and operational monitoring.",
  },
];

const bhubharatiHighlights = [
  {
    icon: Radio,
    title: "Real-time streaming",
    description:
      "SSE-driven survey and Khata traversal streams live record and progress counts instead of simulated loading.",
  },
  {
    icon: Bot,
    title: "MCP-grounded assistant",
    description:
      "A FastAPI service exposing a streamable HTTP MCP server with 12 tools, backing a deterministic, record-grounded chatbot.",
  },
  {
    icon: FileSearch,
    title: "Resilient data pipeline",
    description:
      "PostgreSQL-backed hierarchy cache, bounded-concurrency scraping, retries, and defensive parsing over public portal data.",
  },
];

const ProjectsSection = ({ stats }: ProjectsSectionProps) => {
  const impact = [
    { icon: Users, value: "4K+", label: "Daily active users" },
    { icon: Activity, value: "22K+", label: "Daily API calls" },
    { icon: Download, value: stats.playDownloads, label: "Play Store downloads" },
    { icon: Gauge, value: "<40ms", label: "Cached responses" },
    { icon: Search, value: "#1", label: "Google rank" },
    {
      icon: Star,
      value: `${stats.githubStars} / ${stats.githubForks}`,
      label: "GitHub stars / forks",
    },
  ];

  return (
    <section id="projects" className="work-section section-pad section-anchor">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Flagship case study</p>
            <h2>
              One product. Four production <span>surfaces.</span>
            </h2>
          </div>
          <p>
            I designed and built the product, backend services, data and queue
            workflows, mobile clients, deployment automation, and observability.
          </p>
        </div>

        <article className="product-card">
          <div className="product-topline">
            <div className="product-identity">
              <span className="product-icon" aria-hidden="true">
                JC
              </span>
              <div>
                <p>Independently built &amp; operated</p>
                <h3>JNTUH Connect</h3>
              </div>
            </div>
            <span className="live-pill">
              <span /> Live in production
            </span>
          </div>

          <div className="product-main">
            <div>
              <p className="product-intro">
                A maintained student ecosystem spanning a public web app, API
                platform, native Android app, and native iOS app.
              </p>
              <p className="product-body">
                Students use its 12+ tools for results, credits, backlogs, academic
                resources, careers, rankings, and university updates.
              </p>

              <div className="product-links">
                {productLinks.map(({ label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                    {label} <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                ))}
              </div>

              <div className="repo-links">
                {repositories.map(({ label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                    <Github size={14} aria-hidden="true" />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div className="metric-grid">
              {impact.map(({ icon: Icon, value, label }) => (
                <div className="metric" key={label}>
                  <Icon size={18} aria-hidden="true" />
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-grid">
            {architecture.map(({ icon: Icon, title, description }, index) => (
              <div className="surface" key={title}>
                <div className="surface-head">
                  <Icon size={19} aria-hidden="true" />
                  <span>0{index + 1}</span>
                </div>
                <strong>{title}</strong>
                <p>{description}</p>
              </div>
            ))}
          </div>

          <div className="product-foot">
            <div>
              <DollarSign size={20} aria-hidden="true" />
              <p>
                <strong>Lean production economics</strong>I operate the complete
                production footprint—AWS EC2, Cloudflare, web and API infrastructure,
                plus Google Play and App Store distribution—for under $14 per month
                while supporting 4K+ daily active users and 22K+ daily API calls.
              </p>
            </div>
          </div>
        </article>

        <p className="section-note">
          Product and traffic figures come from production analytics. Play Store and
          GitHub figures refresh from their public listings when this page loads.
        </p>

        <div className="proof-grid proof-grid-three story-grid">
          {engineeringStories.map(({ icon: Icon, eyebrow, title, description }) => (
            <article className="proof-card" key={title}>
              <div className="proof-card-head">
                <span className="proof-icon">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span className="proof-eyebrow">{eyebrow}</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>

        <article className="product-card product-card-orange">
          <div className="product-topline">
            <div className="product-identity">
              <span className="product-icon" aria-hidden="true">
                BB
              </span>
              <div>
                <p>Independently built &amp; operated</p>
                <h3>BhuBharati Explorer</h3>
              </div>
            </div>
            <span className="live-pill">
              <span /> Live in production
            </span>
          </div>

          <div className="product-main">
            <div>
              <p className="product-intro">
                A full-stack, read-only explorer for public Telangana land records,
                with live SSE streaming and an MCP server for AI clients.
              </p>
              <p className="product-body">
                Users step through district, mandal, and village to stream every
                survey, Khata, and record over SSE, then search, filter, sort, and
                export the results. A deterministic, MCP-grounded assistant explains
                fields and summarizes fetched records without sending data to an
                external AI provider by default.
              </p>

              <div className="product-links">
                <a
                  href="https://bhubharati.dhethi.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live explorer <ExternalLink size={15} aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/ThilakReddyy/bhubharati"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={14} aria-hidden="true" /> Source
                </a>
              </div>
            </div>

            <div className="metric-grid metric-grid-solo">
              <div className="metric">
                <Users size={18} aria-hidden="true" />
                <strong>200+</strong>
                <span>Daily active users</span>
              </div>
            </div>
          </div>

          <div className="surface-grid surface-grid-three">
            {bhubharatiHighlights.map(({ icon: Icon, title, description }, index) => (
              <div className="surface" key={title}>
                <div className="surface-head">
                  <Icon size={19} aria-hidden="true" />
                  <span>0{index + 1}</span>
                </div>
                <strong>{title}</strong>
                <p>{description}</p>
              </div>
            ))}
          </div>

          <div className="product-foot">
            <div>
              <Compass size={20} aria-hidden="true" />
              <p>
                <strong>Unofficial and read-only</strong>It reads public portal data,
                does not modify it, and must not be used as the sole basis for a
                title, ownership, or transaction decision.
              </p>
            </div>
          </div>
        </article>

        <div className="work-outro">
          <a
            href="https://github.com/ThilakReddyy?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} aria-hidden="true" />
            Explore all repositories
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

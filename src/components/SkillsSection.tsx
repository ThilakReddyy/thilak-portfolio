import { Activity, Bot, Code2, Database, Smartphone } from "lucide-react";

const capabilities = [
  {
    icon: Code2,
    title: "Product interfaces",
    proof: "Primary production toolkit",
    description:
      "Building maintainable, responsive products and enterprise workflows from design through release.",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    icon: Database,
    title: "Backend & event systems",
    proof: "Public and professional delivery",
    description:
      "APIs, domain services, caching, persistence, scraping, and asynchronous processing.",
    items: [
      "Python",
      "FastAPI",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
    ],
  },
  {
    icon: Smartphone,
    title: "Native product delivery",
    proof: "Published on both app stores",
    description:
      "Purpose-built mobile clients with reactive state, local persistence, and notifications.",
    items: ["Kotlin", "Jetpack Compose", "Swift", "SwiftUI", "Room", "Firebase"],
  },
  {
    icon: Activity,
    title: "Delivery & reliability",
    proof: "SRE perspective applied to products",
    description:
      "Shipping, monitoring, and operating services beyond the local development environment.",
    items: [
      "Docker",
      "AWS EC2 & S3",
      "GitHub Actions",
      "Linux",
      "Prometheus",
      "Grafana",
      "Loki",
    ],
  },
];

const achievements = [
  { value: "400+", label: "LeetCode problems solved" },
  { value: "4", label: "Web, API, Android & iOS surfaces" },
  { value: "2", label: "Native app stores shipped" },
  { value: "12+", label: "Student tools in JNTUH Connect" },
];

const SkillsSection = () => (
  <section id="skills" className="capability-section section-pad section-anchor">
    <div className="shell">
      <div className="section-heading section-heading-light">
        <div>
          <p className="section-kicker">Capabilities</p>
          <h2>Skills backed by shipped work.</h2>
        </div>
        <p>
          Every line below maps to something that runs in production, gets released,
          and is maintained after launch day.
        </p>
      </div>

      <div className="capability-grid">
        {capabilities.map(({ icon: Icon, title, proof, description, items }) => (
          <article key={title}>
            <div className="capability-head">
              <Icon size={22} aria-hidden="true" />
              <span>{proof}</span>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="capability-tags">
              {items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="capability-callout">
        <Bot size={22} aria-hidden="true" />
        <p>
          <strong>AI agents &amp; MCP — recent hands-on work</strong>
          Built a bounded, tool-using assistant with an OpenAI-compatible provider,
          MCP allowlists, argument validation, iteration budgets, and tests for
          malformed or unsafe tool calls.
        </p>
      </div>

      <div className="stack-line">
        {achievements.map(({ value, label }) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;

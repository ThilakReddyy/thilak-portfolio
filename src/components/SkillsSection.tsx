import { motion, useInView } from "framer-motion";
import { Activity, Bot, Code2, Database, Smartphone } from "lucide-react";
import { useRef } from "react";

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

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding section-anchor" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
            Capabilities
          </p>
          <h2 className="max-w-4xl font-display text-3xl font-bold md:text-5xl">
            Skills backed by <span className="text-gradient">shipped work.</span>
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;

            return (
              <motion.article
                key={capability.title}
                initial={false}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.12 + index * 0.08 }}
                className="rounded-2xl border border-glow bg-card p-6 md:p-7"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <span className="max-w-[12rem] text-right text-[0.68rem] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    {capability.proof}
                  </span>
                </div>
                <h3 className="mb-2 font-display text-xl font-semibold text-foreground">
                  {capability.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                  {capability.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {capability.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-glow/40 bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-5 grid gap-5 rounded-2xl border border-glow bg-card p-6 md:grid-cols-[0.8fr_1.2fr] md:items-center md:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Bot size={22} aria-hidden="true" />
            </div>
            <div>
              <p className="mb-1 text-xs font-medium uppercase tracking-[0.18em] text-primary">
                Recent hands-on work
              </p>
              <h3 className="font-display text-xl font-semibold">
                AI agents &amp; MCP
              </h3>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Built a bounded, tool-using assistant with an OpenAI-compatible provider,
            MCP allowlists, argument validation, iteration budgets, and tests for
            malformed or unsafe tool calls.
          </p>
        </motion.div>

        <motion.div
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-5 grid grid-cols-2 gap-3 rounded-2xl border border-glow bg-card p-5 md:grid-cols-4 md:p-7"
        >
          {achievements.map((achievement) => (
            <div key={achievement.label} className="p-2 text-center">
              <p className="font-display text-3xl font-bold text-gradient">
                {achievement.value}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {achievement.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

import { motion, useInView } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    company: "Maersk",
    role: "Software Engineer",
    period: "Jul 2023 — Sep 2026",
    location: "Bengaluru, India",
    skills: ["React", "TypeScript", "Azure AD", "RBAC"],
    highlights: [
      "Own end-to-end frontend delivery for two large enterprise logistics applications, with stable releases and zero major post-production defects.",
      "Designed a partner-onboarding integration workflow that reduced activation time from 25 days to three days.",
      "Implemented Azure AD single sign-on and role-based access, then modernized legacy code to improve reuse, maintainability, and release safety.",
    ],
  },
  {
    company: "Maersk",
    role: "Site Reliability Engineer",
    period: "Aug 2022 — Jul 2023",
    location: "Bengaluru, India",
    skills: ["Grafana", "Power Automate", "Incident response", "RCA"],
    highlights: [
      "Reduced production bugs by 32% through proactive incident detection, investigation, and root-cause analysis.",
      "Built centralized issue-routing and Power Automate workflows for intake, categorization, assignment, logging, and notifications.",
      "Carried an operations-first understanding of reliability, failure modes, and observability into later product-engineering work.",
    ],
  },
  {
    company: "Liorra",
    role: "Software Engineer · Contract",
    period: "2024 — 2025",
    location: "Remote · Cape Town, South Africa",
    skills: ["Java", "Spring Boot", "JWT", "Amazon S3"],
    highlights: [
      "Served as a primary Java/Spring backend contributor to a multi-role nurse recruitment platform.",
      "Implemented OTP/JWT authentication, role-based access, verification workflows, document handling, and domain APIs.",
      "Built queue-driven NIMS job ingestion and notification workflows that replaced repetitive manual entry.",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="section-padding section-anchor relative"
      ref={ref}
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
            Professional experience
          </p>
          <h2 className="mb-14 font-display text-3xl font-bold md:text-5xl">
            From reliability to <span className="text-gradient">product ownership.</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute bottom-2 left-[19px] top-2 w-px bg-border"
          />

          <div className="space-y-9">
            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.company}-${experience.role}`}
                initial={false}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.18 + index * 0.12 }}
                className="relative pl-12"
              >
                <div
                  aria-hidden="true"
                  className="absolute left-[12px] top-7 h-[15px] w-[15px] rounded-full border-2 border-primary bg-background"
                />

                <div className="rounded-2xl border border-glow bg-card p-6 transition-all duration-300 hover-glow md:p-8">
                  <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div>
                      <div className="mb-2 flex items-center gap-2">
                        <Briefcase size={16} className="text-primary" aria-hidden="true" />
                        <h3 className="font-display text-xl font-semibold text-foreground">
                          {experience.role}
                        </h3>
                      </div>
                      <p className="text-sm font-medium text-primary">
                        {experience.company} · {experience.location}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {experience.period}
                    </span>
                  </div>

                  <ul className="mb-6 space-y-3">
                    {experience.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-glow/60 bg-secondary/60 px-3 py-1 text-xs text-secondary-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

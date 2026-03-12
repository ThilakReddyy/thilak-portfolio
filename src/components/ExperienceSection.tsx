import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Maersk",
    role: "Software Engineer",
    period: "July 2023 – Present",
    location: "Bangalore, India",
    highlights: [
      "Led end-to-end development and ownership of two large-scale React and TypeScript applications supporting enterprise logistics operations, delivering stable releases with zero major post-production defects.",
      "Architected and implemented a frontend-driven integration workflow that reduced external partner onboarding time from 25 days to three days, accelerating partner activation and improving operational efficiency.",
      "Implemented Microsoft SSO (Azure AD) authentication and role-based access control (RBAC), enabling secure access management across multiple user groups and ensuring compliance with enterprise security standards.",
      "Refactored and modernized legacy UI codebases, improving performance, component reusability, and maintainability, resulting in reduced technical debt and faster feature delivery.",
    ],
  },
  {
    company: "Maersk",
    role: "Site Reliability Engineer",
    period: "Aug 2022 – July 2023",
    location: "Bangalore, India",
    highlights: [
      "Reduced production bugs by 32% through proactive incident detection",
      "Designed and developed a centralized issue-routing platform that automatically directed operational requests to responsible teams, reducing manual intervention significantly",
      "Implemented Microsoft Power Automate cloud flows to automate incident intake, category-based routing, and rule-driven assignment across teams using Outlook and Microsoft Teams integrations.",
      "Integrated Excel logging and notification workflows to centralize request tracking, improve visibility, and reduce manual triaging effort across operational teams.",
    ],
  },
  {
    company: "Liorra",
    role: "Software Engineer (Contract)",
    period: "Freelance",
    location: "Remote — Cape Town, SA",
    highlights: [
      "Served as the primary back-end Java engineer for a multi-role nurse recruitment platform supporting nurses, hiring staff, administrators, and consultants.",
      "Designed and implemented secure authentication and role-based access control (RBAC) to manage permissions across user groups and protect sensitive healthcare data.",
      "Engineered an automated job ingestion system that scraped listings from the NIMS portal, processed data through a queue-based workflow, and delivered near real-time job notifications, eliminating manual entry (10 minutes per nurse per posting).",
      "Implemented document verification workflows using Amazon S3 for secure storage and approval gating, ensuring only verified nurses could operate within the platform.",
      "Collaborated with front-end and stakeholders to streamline hiring workflows and improve operational efficiency."
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">Career</p>
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-16">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="relative pl-12"
              >
                {/* Dot */}
                <div className="absolute left-[12px] top-1.5 w-[15px] h-[15px] rounded-full border-2 border-primary bg-background" />

                <div className="bg-card border border-glow rounded-2xl p-6 hover-glow transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-1">
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} className="text-primary" />
                      <h3 className="font-display font-semibold text-lg text-foreground">{exp.role}</h3>
                    </div>
                    <span className="text-muted-foreground text-sm">{exp.period}</span>
                  </div>
                  <p className="text-primary text-sm font-medium mb-4">
                    {exp.company} · {exp.location}
                  </p>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-muted-foreground text-sm flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0 w-1 h-1 rounded-full bg-primary inline-block" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

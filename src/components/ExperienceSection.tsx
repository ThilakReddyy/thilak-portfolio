const experiences = [
  {
    company: "Independent",
    role: "Freelance Software Engineer",
    period: "May 2026 — Present",
    location: "Remote",
    skills: ["Product engineering", "Backend systems", "Automation", "Cloud delivery"],
    highlights: [
      "Deliver end-to-end product and platform engineering across React and TypeScript interfaces, Java and Python services, automation, and production operations.",
      "Own independently scoped engagements from technical discovery and architecture through implementation, deployment, and handoff.",
      "Bring an SRE-informed approach to reliability, observability, security, and long-term maintainability.",
    ],
  },
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

const ExperienceSection = () => (
  <section id="experience" className="experience-section section-pad section-anchor">
    <div className="shell">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Professional experience</p>
          <h2>
            From reliability to <span>product ownership.</span>
          </h2>
        </div>
        <p>
          Four years across site reliability, enterprise product engineering, and
          independent delivery — with the operational mindset carried through all of
          it.
        </p>
      </div>

      <div className="role-list">
        {experiences.map((experience, index) => (
          <article className="role-row" key={`${experience.company}-${experience.role}`}>
            <div className="role-meta">
              <span className="role-index">0{index + 1}</span>
              <span className="role-company">{experience.company}</span>
              <span className="role-period">{experience.period}</span>
              <span className="role-location">{experience.location}</span>
            </div>

            <div className="role-body">
              <h3>{experience.role}</h3>
              <ul>
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="role-tags">
                {experience.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;

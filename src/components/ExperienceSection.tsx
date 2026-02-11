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
      "Led development of two large-scale frontend apps with React & TypeScript — zero major post-prod defects",
      "Reduced partner onboarding from 25 days to 3 days via new integration workflow",
      "Built internal platform routing issues directly to responsible teams",
    ],
  },
  {
    company: "Maersk",
    role: "Site Reliability Engineer",
    period: "Aug 2022 – July 2023",
    location: "Bangalore, India",
    highlights: [
      "Reduced production bugs by 32% through proactive incident detection",
      "Automated monitoring workflows using Python, cut manual intervention significantly",
      "Built Grafana dashboards for real-time observability",
    ],
  },
  {
    company: "Liorra",
    role: "Software Engineer (Contract)",
    period: "Freelance",
    location: "Remote — Cape Town, SA",
    highlights: [
      "Developed nurse recruitment platform with React.js & Spring Boot",
      "Built reusable components and integrated REST APIs",
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

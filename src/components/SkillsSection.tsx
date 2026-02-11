import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Golang", "Java", "Kotlin", "C++", "SQL", "Bash"],
  },
  {
    title: "Frameworks",
    items: ["React.js", "Next.js", "Vue.js", "Node.js", "Spring Boot", "FastAPI", "Django", "GIN"],
  },
  {
    title: "Tools & Infra",
    items: ["Docker", "Kubernetes", "Redis", "RabbitMQ", "PostgreSQL", "AWS", "Git", "Linux"],
  },
  {
    title: "Monitoring",
    items: ["Grafana", "Prometheus", "Loki", "Cloudflare"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">Expertise</p>
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-16">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="bg-card border border-glow rounded-2xl p-6"
            >
              <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-sm border border-glow/30 hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 bg-card border border-glow rounded-2xl p-8 text-center"
        >
          <h3 className="font-display font-semibold text-foreground text-lg mb-4">Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="font-display font-bold text-3xl text-gradient">400+</p>
              <p className="text-muted-foreground text-sm mt-1">LeetCode Problems Solved</p>
            </div>
            <div>
              <p className="font-display font-bold text-3xl text-gradient">#1</p>
              <p className="text-muted-foreground text-sm mt-1">Google Ranking for "JNTUH Results"</p>
            </div>
            <div>
              <p className="font-display font-bold text-3xl text-gradient">32%</p>
              <p className="text-muted-foreground text-sm mt-1">Production Bug Reduction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

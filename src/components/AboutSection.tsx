import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Gauge, Users } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Frontend", desc: "React, TypeScript, Next.js" },
  { icon: Server, label: "Backend", desc: "FastAPI, Spring Boot, Go" },
  { icon: Gauge, label: "Performance", desc: "Sub-40ms response times" },
  { icon: Users, label: "Impact", desc: "4K+ daily active users" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">About Me</p>
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-8">
            Crafting <span className="text-gradient">Digital Experiences</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm a Software Engineer at <span className="text-foreground font-medium">Maersk</span> in Bangalore,
              where I lead the development of large-scale frontend applications using React and TypeScript,
              delivering stable releases with zero major post-production defects.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Previously an SRE, I bring a unique blend of frontend mastery and infrastructure awareness.
              I independently built <span className="text-primary">JNTUH Connect</span> — ranked #1 on Google
              for "JNTUH Results" — serving thousands of students daily.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="bg-card border border-glow rounded-2xl p-5 hover-glow transition-all duration-300"
              >
                <Icon size={24} className="text-primary mb-3" />
                <p className="font-display font-semibold text-foreground mb-1">{label}</p>
                <p className="text-muted-foreground text-sm">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

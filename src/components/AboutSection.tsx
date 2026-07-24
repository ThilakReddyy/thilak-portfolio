import { motion, useInView } from "framer-motion";
import { Activity, Layers3, Rocket, Workflow } from "lucide-react";
import { useRef } from "react";

const strengths = [
  {
    icon: Workflow,
    title: "Find the bottleneck",
    description: "Turn repetitive operational work into dependable automation.",
  },
  {
    icon: Layers3,
    title: "Own end to end",
    description: "Work across UI, APIs, data, infrastructure, and release.",
  },
  {
    icon: Activity,
    title: "Operate what I ship",
    description: "Build with metrics, logs, CI/CD, and user feedback in mind.",
  },
  {
    icon: Rocket,
    title: "Learn through delivery",
    description: "Turn unfamiliar platforms into products people can actually use.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding section-anchor relative" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
            How I work
          </p>
          <h2 className="mb-10 max-w-3xl font-display text-3xl font-bold md:text-5xl">
            An owner, not just an <span className="text-gradient">implementer.</span>
          </h2>
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={false}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              I started in site reliability engineering and carried that operational
              mindset into product development. I think beyond the feature: data flow,
              failure modes, deployment, monitoring, and the user waiting on the other
              side.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">JNTUH Connect</span> is the
              clearest example. I evolved an early results project into a maintained
              ecosystem spanning web, backend services, infrastructure, Android, iOS,
              release automation, and direct community support.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map(({ icon: Icon, title, description }, index) => (
              <motion.article
                key={title}
                initial={false}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.25 + index * 0.08 }}
                className="rounded-2xl border border-glow bg-card p-6 transition-all duration-300 hover-glow"
              >
                <Icon size={24} className="mb-4 text-primary" aria-hidden="true" />
                <h3 className="mb-2 font-display font-semibold text-foreground">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

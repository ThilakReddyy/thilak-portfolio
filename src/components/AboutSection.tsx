import { Activity, ArrowUpRight, Layers3, Rocket, Workflow } from "lucide-react";

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

const AboutSection = () => (
  <section id="about" className="builder-section section-pad section-anchor">
    <div className="shell builder-grid">
      <div className="builder-title">
        <p className="section-kicker">How I work</p>
        <h2>An owner, not just an implementer.</h2>
        <div className="builder-mark" aria-hidden="true">
          TR.
        </div>
      </div>

      <div className="builder-copy">
        <p className="builder-lede">
          I started in site reliability engineering and carried that operational
          mindset into product development.
        </p>
        <p>
          I think beyond the feature: data flow, failure modes, deployment,
          monitoring, and the user waiting on the other side.{" "}
          <strong>JNTUH Connect</strong> is the clearest example. I evolved an early
          results project into a maintained ecosystem spanning web, backend services,
          infrastructure, Android, iOS, release automation, and direct community
          support.
        </p>

        <div className="builder-proof">
          {strengths.map(({ icon: Icon, title, description }) => (
            <div key={title}>
              <Icon size={20} aria-hidden="true" />
              <span>
                <strong>{title}</strong>
                {description}
              </span>
            </div>
          ))}
        </div>

        <blockquote className="builder-quote">
          <p>
            I am one of the most reliable people you can work with. Skills can be
            trained. Experience can be gained. What&apos;s harder to teach is ownership.
            If something has my name on it, it gets done properly.
          </p>
        </blockquote>

        <div className="builder-links">
          <a
            href="https://jntuhconnect.dhethi.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            JNTUH Connect <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a
            href="https://bhubharati.dhethi.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            BhuBharati Explorer <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a href="https://dhethi.com/" target="_blank" rel="noopener noreferrer">
            Dhethi <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;

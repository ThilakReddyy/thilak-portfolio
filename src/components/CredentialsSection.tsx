import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const credentials = [
  {
    title: "Top 3% Talent",
    org: "Toptal",
    description: "Vetted through rigorous screening — accepted into the top 3% of freelance software engineering talent worldwide.",
    link: "https://www.toptal.com/developers/resume/pothuganti-thilak-reddy",
    color: "from-[#296bff] to-[#25a9ef]",
    shadow: "rgba(37, 169, 239, 0.3)",
  },
];

const CredentialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="credentials" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">Recognition</p>
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-12">
            Credentials & <span className="text-gradient">Badges</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {credentials.map((cred, i) => (
            <motion.a
              key={cred.title}
              href={cred.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="group relative bg-card border border-glow rounded-2xl p-6 hover-glow transition-all duration-300 flex items-start gap-5"
              style={{ "--tw-shadow-color": cred.shadow } as React.CSSProperties}
            >
              {/* Hex icon */}
              <div className="shrink-0">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${cred.color} flex items-center justify-center`}
                  style={{ clipPath: "polygon(50% 0%, 100% 24%, 100% 76%, 50% 100%, 0% 76%, 0% 24%)" }}
                >
                  <Award size={24} className="text-white" />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-display font-bold text-foreground text-lg">{cred.title}</h3>
                  <ExternalLink size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-primary font-medium text-sm mb-2">{cred.org}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{cred.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;


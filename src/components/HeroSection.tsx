import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileImg from "@/assets/thilak-reddy.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center noise-overlay overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-24 pb-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 md:order-1"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-primary font-medium text-sm tracking-[0.3em] uppercase mb-4"
            >
              Software Engineer
            </motion.p>

            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              Hi, I'm{" "}
              <span className="text-gradient">Thilak</span>
              <br />
              <span className="text-gradient">Reddy</span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
              Building high-performance web applications and scalable systems at{" "}
              <span className="text-primary font-medium">Maersk</span>. Passionate about turning complex problems into elegant solutions.
            </p>

            <div className="flex items-center gap-4 mb-10">
              <a
                href="#contact"
                className="px-7 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:shadow-[0_0_30px_hsl(36_80%_55%/0.4)] transition-all duration-300"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-7 py-3 rounded-full border border-glow text-foreground font-medium text-sm hover:bg-primary/10 transition-all duration-300"
              >
                View Work
              </a>
            </div>

            <div className="flex items-center gap-5">
              {[
                { icon: Github, href: "https://github.com/thilakreddyy", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/thilakreddyy", label: "LinkedIn" },
                { icon: Mail, href: "mailto:thilakreddy@dhethi.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-glow flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/60 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/40 via-primary/10 to-transparent blur-sm" />
              <div className="relative w-64 h-72 md:w-80 md:h-96 rounded-3xl overflow-hidden border border-glow">
                <img
                  src={profileImg}
                  alt="Thilak Reddy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-card border border-glow rounded-xl px-4 py-2 shadow-lg"
              >
                <p className="text-primary font-bold text-sm">4+ Years Exp.</p>
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -right-4 bg-card border border-glow rounded-xl px-4 py-2 shadow-lg"
              >
                <p className="text-primary font-bold text-sm">4K+ DAU</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={20} className="text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

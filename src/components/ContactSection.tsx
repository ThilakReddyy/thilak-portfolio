import { motion, useInView } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { useRef } from "react";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "thilakreddy@dhethi.com",
    href: "mailto:thilakreddy@dhethi.com",
    external: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "thilakreddyy",
    href: "https://in.linkedin.com/in/thilakreddyy",
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "ThilakReddyy",
    href: "https://github.com/ThilakReddyy",
    external: true,
  },
  {
    icon: BadgeCheck,
    label: "Toptal",
    value: "Verified Expert",
    href: "https://www.toptal.com/developers/resume/pothuganti-thilak-reddy",
    external: true,
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <section
        id="contact"
        className="section-padding section-anchor relative"
        ref={ref}
      >
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={false}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
              Get in touch
            </p>
            <h2 className="mb-6 font-display text-3xl font-bold md:text-5xl">
              Need someone who can own the{" "}
              <span className="text-gradient">whole product?</span>
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              I&apos;m interested in product, platform, backend, and automation work
              where I can take responsibility from architecture through release and
              operations.
            </p>
          </motion.div>

          <div className="mb-12 grid gap-4 sm:grid-cols-2">
            {links.map(({ icon: Icon, label, value, href, external }, index) => (
              <motion.a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                initial={false}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.25 + index * 0.08 }}
                className="group flex items-center gap-4 rounded-2xl border border-glow bg-card p-5 text-left transition-all duration-300 hover-glow"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary transition-colors group-hover:bg-primary/20">
                  <Icon size={18} className="text-primary" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {label}
                  </p>
                  <p className="truncate text-sm font-medium text-foreground">{value}</p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="ml-auto shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                  aria-hidden="true"
                />
              </motion.a>
            ))}
          </div>

          <motion.a
            href="mailto:thilakreddy@dhethi.com"
            initial={false}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.65 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_40px_hsl(36_80%_55%/0.4)]"
          >
            <Mail size={18} aria-hidden="true" />
            Start a conversation
          </motion.a>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-8 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Thilak Reddy. Built and maintained with care.
        </p>
      </footer>
    </>
  );
};

export default ContactSection;

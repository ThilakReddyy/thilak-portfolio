import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin, Github, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const links = [
    { icon: Mail, label: "Email", value: "thilakreddy@dhethi.com", href: "mailto:thilakreddy@dhethi.com" },
    { icon: Phone, label: "Phone", value: "+91-9381339131", href: "tel:+919381339131" },
    { icon: Linkedin, label: "LinkedIn", value: "thilakreddyy", href: "https://linkedin.com/in/thilakreddyy" },
    { icon: Github, label: "GitHub", value: "thilakreddyy", href: "https://github.com/thilakreddyy" },
  ];

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">Get in Touch</p>
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
            Let's Build Something <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a good tech conversation.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {links.map(({ icon: Icon, label, value, href }, i) => (
            <motion.a
              key={label}
              href={href}
              target={label !== "Phone" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              className="group bg-card border border-glow rounded-2xl p-5 flex items-center gap-4 hover-glow transition-all duration-300 text-left"
            >
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Icon size={18} className="text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-muted-foreground text-xs uppercase tracking-wider">{label}</p>
                <p className="text-foreground text-sm font-medium truncate">{value}</p>
              </div>
              <ArrowUpRight size={16} className="text-muted-foreground ml-auto group-hover:text-primary transition-colors shrink-0" />
            </motion.a>
          ))}
        </div>

        <motion.a
          href="mailto:thilakreddy@dhethi.com"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_40px_hsl(36_80%_55%/0.4)] transition-all duration-300"
        >
          <Mail size={18} />
          Say Hello
        </motion.a>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-border text-center">
        <p className="text-muted-foreground text-sm">
          © 2025 Thilak Reddy. Built with passion and precision.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;

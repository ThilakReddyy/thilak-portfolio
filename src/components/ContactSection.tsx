import { ArrowUpRight, BadgeCheck, Github, Linkedin, Mail } from "lucide-react";

const channels = [
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

const ContactSection = () => (
  <section id="contact" className="contact-section section-anchor">
    <div className="shell contact-inner">
      <p className="section-kicker">Get in touch</p>
      <h2>Need someone who can own the whole product?</h2>
      <p>
        I&apos;m interested in product, platform, backend, and automation work where I
        can take responsibility from architecture through release and operations.
      </p>

      <div className="hero-actions" style={{ justifyContent: "center" }}>
        <a className="button button-invert" href="mailto:thilakreddy@dhethi.com">
          <Mail size={18} aria-hidden="true" />
          Start a conversation
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>

      <div className="contact-channels">
        {channels.map(({ icon: Icon, label, value, href, external }) => (
          <a
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
          >
            <Icon size={19} aria-hidden="true" />
            <span>
              <small>{label}</small>
              <strong>{value}</strong>
            </span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;

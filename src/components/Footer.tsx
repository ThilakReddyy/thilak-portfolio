import { Github, Linkedin, Mail } from "lucide-react";

const footerLinks = [
  {
    icon: Github,
    label: "github.com/ThilakReddyy",
    href: "https://github.com/ThilakReddyy",
    external: true,
  },
  {
    icon: Linkedin,
    label: "linkedin.com/in/thilakreddyy",
    href: "https://in.linkedin.com/in/thilakreddyy",
    external: true,
  },
  {
    icon: Mail,
    label: "thilakreddy@dhethi.com",
    href: "mailto:thilakreddy@dhethi.com",
    external: false,
  },
];

const Footer = () => (
  <footer className="site-footer">
    <div className="shell footer-grid">
      <div>
        <a
          href="#top"
          className="wordmark wordmark-footer"
          aria-label="Thilak Reddy, back to top"
        >
          thilak<span>.</span>
        </a>
        <p>Full-stack product &amp; platform engineer. Built and maintained with care.</p>
      </div>

      <div className="footer-links">
        {footerLinks.map(({ icon: Icon, label, href, external }) => (
          <a
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
          >
            <Icon size={14} aria-hidden="true" />
            {label}
          </a>
        ))}
      </div>
    </div>

    <div className="shell footer-bottom">
      <p>© {new Date().getFullYear()} Pothuganti Thilak Reddy.</p>
      <p>Owned end to end · problem to production</p>
    </div>
  </footer>
);

export default Footer;

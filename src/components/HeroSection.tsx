import { Fragment } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { useCurrentRole } from "@/hooks/use-current-role";

const resumeDownloadUrl =
  "https://drive.google.com/file/d/1QmYEXHZ_ZGAKT3ZwrwBRC1nw2QnDFFd1/view?usp=sharing";

const professionalLinks = [
  {
    icon: Github,
    href: "https://github.com/ThilakReddyy",
    label: "GitHub",
    external: true,
  },
  {
    icon: Linkedin,
    href: "https://in.linkedin.com/in/thilakreddyy",
    label: "LinkedIn",
    external: true,
  },
  {
    icon: BadgeCheck,
    href: "https://www.toptal.com/developers/resume/pothuganti-thilak-reddy",
    label: "Toptal profile",
    external: true,
  },
  {
    icon: Mail,
    href: "mailto:thilakreddy@dhethi.com",
    label: "Email",
    external: false,
  },
];

const ticker = [
  "PRODUCT ENGINEERING",
  "BACKEND SYSTEMS",
  "NATIVE MOBILE",
  "RELEASE AUTOMATION",
  "PRODUCTION OPERATIONS",
];

const HeroSection = () => {
  const currentRole = useCurrentRole();

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="grid-wash" aria-hidden="true" />
      <div className="orbit orbit-one" aria-hidden="true" />
      <div className="orbit orbit-two" aria-hidden="true" />

      <div className="shell hero-inner">
        <div className="reveal">
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            {currentRole}
          </p>

          <h1 id="hero-title">
            I build products all the way to{" "}
            <span>production.</span>
          </h1>

          <p className="hero-lede">
            I&apos;m Thilak Reddy. I turn ambiguous problems into reliable software,
            treating system design, data flow, failure modes, delivery, and the user
            experience as one connected engineering problem.
          </p>

          <div className="hero-chips">
            <span>4+ years building production systems</span>
            <a
              href="https://www.toptal.com/developers/resume/pothuganti-thilak-reddy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BadgeCheck size={15} aria-hidden="true" />
              Toptal Verified Expert
            </a>
          </div>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore the work
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a
              className="button button-quiet"
              href={resumeDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View résumé on Google Drive"
            >
              View résumé
              <Download size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="hero-socials">
            {professionalLinks.map(({ icon: Icon, href, label, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={label}
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="hero-system reveal reveal-delay" aria-hidden="true">
          <div className="system-bar">
            <div className="system-lights">
              <i />
              <i />
              <i />
            </div>
            <span>engineering.system</span>
            <b>END TO END</b>
          </div>

          <div className="system-canvas">
            <p className="system-command">
              <span>●</span> Problem solving across the full lifecycle
            </p>

            <div className="architecture-map">
              <svg viewBox="0 0 320 290" preserveAspectRatio="none">
                <path d="M160 145 L65 55" />
                <path d="M160 145 L255 55" />
                <path d="M160 145 L65 235" />
                <path d="M160 145 L255 235" />
                <circle cx="160" cy="145" r="90" />
              </svg>

              <div className="map-node map-node-web">
                <span>01</span>
                <strong>PRODUCT</strong>
                <small>Useful workflows</small>
              </div>

              <div className="map-node map-node-api">
                <span>02</span>
                <strong>SYSTEMS</strong>
                <small>Data · boundaries</small>
              </div>

              <div className="map-core">
                <small>SOFTWARE</small>
                <strong>ENGINEER</strong>
                <span>THINK · BUILD · RUN</span>
              </div>

              <div className="map-node map-node-android">
                <span>03</span>
                <strong>DELIVERY</strong>
                <small>Safe releases</small>
              </div>

              <div className="map-node map-node-ios">
                <span>04</span>
                <strong>OPERATIONS</strong>
                <small>Observe · improve</small>
              </div>
            </div>

            <div className="system-layers">
              <span>DESIGN</span>
              <span>BUILD</span>
              <span>DELIVER</span>
              <span>OPERATE</span>
            </div>

            <div className="system-output">
              <span>PROBLEM</span>
              <i />
              <span>ENGINEERING</span>
              <i />
              <span>OUTCOME</span>
              <strong>● PRODUCTION</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...ticker, ...ticker].map((item, index) => (
            <Fragment key={`${item}-${index}`}>
              <span>{item}</span>
              <i />
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

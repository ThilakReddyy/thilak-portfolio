import { Fragment } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import profileImg from "@/assets/thilak-reddy.jpeg";
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
            I&apos;m Thilak Reddy. From React and native mobile apps to FastAPI and
            Java services, queues, observability, and automated releases — I own the
            path from problem to users.
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
              Explore the flagship
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a
              className="button button-quiet"
              href={resumeDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download résumé PDF"
            >
              Download résumé
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

        <div className="hero-object reveal reveal-delay">
          <div className="object-label">
            <span>Currently</span>
            <strong>Open to work</strong>
          </div>
          <img
            src={profileImg}
            alt="Pothuganti Thilak Reddy"
            width="960"
            height="1280"
            loading="eager"
            decoding="async"
            className="object-portrait"
          />
          <div className="object-footer">
            <span>Web</span>
            <span>API</span>
            <span>Android</span>
            <span>iOS</span>
          </div>
        </div>
      </div>

      <div className="hero-ticker" aria-label="Capabilities">
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

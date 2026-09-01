import { AppWindow, ArrowUpRight, BadgeCheck, Download, GitFork } from "lucide-react";
import type { LiveProjectStats } from "@/hooks/use-live-project-stats";

type CredentialsSectionProps = {
  stats: LiveProjectStats;
};

const CredentialsSection = ({ stats }: CredentialsSectionProps) => {
  const proofs = [
    {
      icon: BadgeCheck,
      eyebrow: "Vetted network",
      title: "Toptal Verified Expert",
      description:
        "Verified Expert in Engineering on Toptal, with a public profile covering production experience and technical depth.",
      label: "View Toptal profile",
      href: "https://www.toptal.com/developers/resume/pothuganti-thilak-reddy",
    },
    {
      icon: AppWindow,
      eyebrow: "Apple App Store",
      title: "Native iOS app shipped",
      description:
        "JNTUH Connect is published under my developer identity and actively maintained across iPhone and iPad.",
      label: "View on the App Store",
      href: "https://apps.apple.com/in/app/jntuh-connect/id6790828236",
    },
    {
      icon: Download,
      eyebrow: "Google Play",
      title: `${stats.playDownloads} downloads`,
      description: `The native Kotlin and Jetpack Compose app has ${stats.playRatingsCount} ratings and is currently on version ${stats.playVersion}.`,
      label: "View on Google Play",
      href: "https://play.google.com/store/apps/details?id=com.dhethi.jntuhconnect",
    },
    {
      icon: GitFork,
      eyebrow: "Open source",
      title: `${stats.githubStars} stars · ${stats.githubForks} forks`,
      description:
        "The flagship Next.js repository has years of visible iteration and external developer interest.",
      label: "View flagship repository",
      href: "https://github.com/ThilakReddyy/JNTUHRESULTS-WEB",
    },
  ];

  return (
    <section id="proof" className="proof-section section-pad section-anchor">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Independent proof</p>
            <h2>
              Evidence, not just <span>claims.</span>
            </h2>
          </div>
          <p>
            Third-party platforms and public repositories that independently support
            the impact and capabilities described here.
          </p>
        </div>

        <div className="proof-grid">
          {proofs.map(({ icon: Icon, eyebrow, title, description, label, href }) => (
            <article className="proof-card" key={eyebrow}>
              <div className="proof-card-head">
                <span className="proof-icon">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span className="proof-eyebrow">{eyebrow}</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <a href={href} target="_blank" rel="noopener noreferrer">
                {label}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>

        <p className="section-note">
          Google Play and GitHub figures refresh from their public listings on page
          load. App Store proof links directly to Apple.
        </p>
      </div>
    </section>
  );
};

export default CredentialsSection;

import { motion, useInView } from "framer-motion";
import {
  AppWindow,
  BadgeCheck,
  Download,
  ExternalLink,
  GitFork,
} from "lucide-react";
import { useRef } from "react";

const proofs = [
  {
    icon: BadgeCheck,
    eyebrow: "Vetted network",
    title: "Top 3% Toptal talent",
    description:
      "Accepted as a Verified Expert in Engineering following Toptal's rigorous screening process.",
    label: "View Toptal profile",
    href: "https://www.toptal.com/developers/resume/pothuganti-thilak-reddy",
  },
  {
    icon: AppWindow,
    eyebrow: "Apple App Store",
    title: "Native iOS app shipped",
    description:
      "JNTUH Connect version 1.0 was released under my developer identity in July 2026.",
    label: "View on the App Store",
    href: "https://apps.apple.com/in/app/jntuh-connect/id6790828236",
  },
  {
    icon: Download,
    eyebrow: "Google Play",
    title: "1K+ Android downloads",
    description:
      "The native Kotlin and Jetpack Compose app is publicly distributed and actively maintained.",
    label: "View on Google Play",
    href: "https://play.google.com/store/apps/details?id=com.dhethi.jntuhconnect",
  },
  {
    icon: GitFork,
    eyebrow: "Open source",
    title: "56 stars · 17 forks",
    description:
      "The flagship Next.js repository has years of visible iteration and external developer interest.",
    label: "View flagship repository",
    href: "https://github.com/ThilakReddyy/JNTUHRESULTS-WEB",
  },
];

const CredentialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="proof" className="section-padding section-anchor relative" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
              Independent proof
            </p>
            <h2 className="font-display text-3xl font-bold md:text-5xl">
              Evidence, not just <span className="text-gradient">claims.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-right">
            Third-party platforms and public repositories that independently support
            the impact and capabilities described here.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {proofs.map((proof, index) => {
            const Icon = proof.icon;

            return (
              <motion.article
                key={proof.title}
                initial={false}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.12 + index * 0.08 }}
                className="group flex h-full flex-col rounded-2xl border border-glow bg-card p-6 transition-all duration-300 hover-glow"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={21} aria-hidden="true" />
                  </div>
                  <span className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {proof.eyebrow}
                  </span>
                </div>
                <h3 className="mb-3 font-display text-lg font-bold text-foreground">
                  {proof.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {proof.description}
                </p>
                <a
                  href={proof.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary"
                >
                  {proof.label}
                  <ExternalLink
                    size={14}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </motion.article>
            );
          })}
        </div>

        <p className="mt-5 text-right text-xs text-muted-foreground">
          Store and GitHub figures observed on 24 July 2026.
        </p>
      </div>
    </section>
  );
};

export default CredentialsSection;

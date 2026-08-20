import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
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

const HeroSection = () => {
  const [signalBurst, setSignalBurst] = useState<"light" | "heavy" | null>(
    null,
  );
  const currentRole = useCurrentRole();

  useEffect(() => {
    let nextBurstTimer: ReturnType<typeof setTimeout>;
    let burstEndTimer: ReturnType<typeof setTimeout>;

    const scheduleBurst = () => {
      const quietTime = 900 + Math.random() * 5_200;

      nextBurstTimer = setTimeout(() => {
        const intensity = Math.random() < 0.72 ? "light" : "heavy";
        const duration =
          intensity === "light"
            ? 140 + Math.random() * 140
            : 380 + Math.random() * 320;

        setSignalBurst(intensity);
        burstEndTimer = setTimeout(() => {
          setSignalBurst(null);
          scheduleBurst();
        }, duration);
      }, quietTime);
    };

    scheduleBurst();

    return () => {
      clearTimeout(nextBurstTimer);
      clearTimeout(burstEndTimer);
    };
  }, []);

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative flex min-h-screen items-center overflow-hidden noise-overlay"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-8rem] top-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[-8rem] h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]"
      />

      <div className="mx-auto w-full max-w-7xl px-6 pb-14 pt-24 md:px-12 md:pb-20 md:pt-32">
        <div className="grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-10">
          <motion.div
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="order-1"
          >
            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-primary sm:mb-5 sm:text-sm"
            >
              Full-stack product &amp; platform engineer
            </motion.p>

            <h1
              id="hero-title"
              className="mb-5 max-w-4xl font-display text-[2.7rem] font-bold leading-[1.02] sm:mb-6 sm:text-6xl lg:text-7xl"
            >
              I build products all the way to{" "}
              <span className="text-gradient">production.</span>
            </h1>

            <p className="mb-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
              I&apos;m Thilak Reddy. From React and native mobile apps to
              FastAPI and Java services, queues, observability, and automated
              releases—I own the path from problem to users.
            </p>

            <div className="mb-8 flex flex-wrap gap-2.5 text-xs sm:mb-9 sm:gap-3 sm:text-sm">
              <span className="inline-flex items-center gap-2 rounded-full border border-glow bg-card/70 px-4 py-2 text-foreground">
                <span
                  className="h-2 w-2 rounded-full bg-emerald-400"
                  aria-hidden="true"
                />
                {currentRole}
              </span>
              <span className="inline-flex items-center rounded-full border border-glow bg-card/70 px-4 py-2 text-foreground">
                4+ years building production systems
              </span>
              <a
                href="https://www.toptal.com/developers/resume/pothuganti-thilak-reddy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-glow bg-card/70 px-4 py-2 text-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                <BadgeCheck
                  size={16}
                  className="text-primary"
                  aria-hidden="true"
                />
                Toptal Verified Expert
              </a>
            </div>

            <div className="mb-9 flex flex-wrap items-center gap-3 sm:mb-10 sm:gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_hsl(36_80%_55%/0.4)] sm:px-7"
              >
                Explore JNTUH Connect
                <ArrowDown size={16} aria-hidden="true" />
              </a>
              <a
                href="https://github.com/ThilakReddyy/JNTUHRESULTS-WEB"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden inline-flex items-center gap-2 rounded-full border border-glow px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:bg-primary/10 sm:px-7"
              >
                View source
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a
                href={resumeDownloadUrl}
                className="inline-flex items-center gap-2 rounded-full border border-glow px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/60 hover:text-primary sm:px-7"
                aria-label="Download résumé PDF"
              >
                Download résumé
                <Download size={16} aria-hidden="true" />
              </a>
            </div>

            <div className="hidden items-center gap-4 sm:flex">
              {professionalLinks.map(
                ({ icon: Icon, href, label, external }) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-glow text-muted-foreground transition-all duration-300 hover:border-primary/60 hover:text-primary"
                    aria-label={label}
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                ),
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-2 hidden justify-center md:flex md:justify-end"
          >
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/40 via-primary/10 to-transparent blur-sm"
              />
              <div
                className={`signal-glitch${signalBurst ? ` signal-glitch--${signalBurst}` : ""} relative h-72 w-64 overflow-hidden rounded-3xl border border-glow md:h-[26rem] md:w-[21rem]`}
              >
                <img
                  src={profileImg}
                  alt="Pothuganti Thilak Reddy"
                  width="960"
                  height="1280"
                  loading="eager"
                  decoding="async"
                  className="signal-glitch__base h-full w-full object-cover object-top"
                />
                <img
                  src={profileImg}
                  alt=""
                  aria-hidden="true"
                  decoding="async"
                  className="signal-glitch__channel signal-glitch__channel--red"
                />
                <img
                  src={profileImg}
                  alt=""
                  aria-hidden="true"
                  decoding="async"
                  className="signal-glitch__channel signal-glitch__channel--cyan"
                />
                <span className="signal-glitch__static" aria-hidden="true" />
              </div>

              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -left-3 rounded-xl border border-glow bg-card px-4 py-3 shadow-lg sm:-left-8"
              >
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  JNTUH Connect
                </p>
                <p className="font-display text-sm font-bold text-primary">
                  Built for 10K+ students
                </p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -right-3 -top-4 rounded-xl border border-glow bg-card px-4 py-3 shadow-lg sm:-right-8"
              >
                <p className="flex items-center gap-2 font-display text-sm font-bold text-primary">
                  <BadgeCheck size={16} aria-hidden="true" />
                  Toptal Verified Expert
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 md:block"
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

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { label: "Proof", href: "#proof" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Approach", href: "#about" },
  { label: "Capabilities", href: "#skills" },
  { label: "Writing", href: "#writing" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <header className={scrolled ? "site-header site-header-scrolled" : "site-header"}>
      <div className="shell header-inner">
        <a href="#top" className="wordmark" aria-label="TR. — Thilak Reddy, back to top">
          thilak<span>.</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="lets-talk-btn">
          Let&apos;s Talk
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>

        <button
          type="button"
          className="menu-button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? (
            <X size={22} aria-hidden="true" />
          ) : (
            <Menu size={22} aria-hidden="true" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          <div className="shell">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
                {link.label}
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)}>
              Let&apos;s Talk
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

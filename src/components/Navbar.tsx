import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { key: "process", href: "#process" },
    { key: "technology", href: "#technology" },
    { key: "phb", href: "#phb" },
    { key: "impact", href: "#impact" },
    { key: "about", href: "#about" },
    { key: "contact", href: "#contact" },
  ];

  const toggleLang = () =>
    i18n.changeLanguage(i18n.language === "cs" ? "en" : "cs");

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(8%_0.01_250/92%)] backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[oklch(79%_0.18_162)] to-[oklch(78%_0.15_185)] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <span className="text-[oklch(8%_0.01_250)] font-bold text-sm font-[Space_Grotesk]">F</span>
          </div>
          <span className="font-semibold text-white text-base tracking-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Formitech
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.key}
              href={l.href}
              className="text-sm text-white/60 hover:text-white transition-colors duration-200"
            >
              {t(`nav.${l.key}`)}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="text-xs font-medium text-white/50 hover:text-white transition-colors border border-white/10 hover:border-white/25 rounded-full px-3 py-1"
          >
            {i18n.language === "cs" ? "EN" : "CS"}
          </button>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-[oklch(8%_0.01_250)] bg-[oklch(79%_0.18_162)] hover:bg-[oklch(87%_0.13_162)] px-4 py-1.5 rounded-full transition-all duration-200 glow-btn"
          >
            {t("nav.contact")}
          </a>
          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white/70 hover:text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              {menuOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
              ) : (
                <path fillRule="evenodd" clipRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[oklch(11%_0.015_250)] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.key}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {t(`nav.${l.key}`)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const navLinks = [
    { key: "process", href: "#process" },
    { key: "technology", href: "#technology" },
    { key: "phb", href: "#phb" },
    { key: "impact", href: "#impact" },
    { key: "invest", href: "#invest", highlight: true },
    { key: "about", href: "#about" },
    { key: "contact", href: "#contact" },
  ];

  return (
    <footer className="relative border-t border-white/5 py-14 px-6 bg-[oklch(8%_0.01_250)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="mb-4">
              <span className="font-bold text-lg gradient-text" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Formitech</span>
            </div>
            <p className="text-white/35 text-sm leading-relaxed">{t("footer.tagline")}</p>
            <div className="flex items-center gap-1.5 mt-4">
              <div className="w-2 h-2 rounded-full bg-[oklch(62%_0.20_162)] animate-pulse" />
              <span className="text-[oklch(62%_0.20_162)] text-xs font-medium">CO₂ → HCOO⁻ → PHB</span>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-white/25 text-xs uppercase tracking-widest mb-4">{t("footer.links")}</p>
            <div className="flex flex-col gap-2.5">
              {navLinks.map(l => (
                <a
                  key={l.key}
                  href={l.href}
                  className={
                    l.highlight
                      ? "text-[#fbbf24]/70 hover:text-[#fbbf24] text-sm transition-colors duration-200"
                      : "text-white/45 hover:text-white text-sm transition-colors duration-200"
                  }
                >
                  {t(`nav.${l.key}`)}
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-xs">
            <p className="text-white/25 text-xs uppercase tracking-widest mb-4">Newsletter</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="hello@firma.cz"
                className="flex-1 bg-white/5 border border-white/8 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[oklch(62%_0.20_162/40%)] transition-colors"
              />
              <button className="px-4 py-2 rounded-lg bg-[oklch(62%_0.20_162)] hover:bg-[oklch(70%_0.20_162)] text-[oklch(8%_0.01_250)] text-sm font-semibold transition-all duration-200">
                →
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            © {year} Formitech. {t("footer.rights")}
          </p>
          <p className="text-white/15 text-xs">
            Praha, Czech Republic
          </p>
        </div>
      </div>
    </footer>
  );
}

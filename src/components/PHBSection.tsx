import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Comparison table data
const comparison = [
  { property: "Biodegradace v přírodě / Biodegrades in nature", phb: true, pla: false, pp: false },
  { property: "Biodegradace v moři / Degrades in marine env.", phb: true, pla: false, pp: false },
  { property: "Drop-in pro PP stroje / PP machinery drop-in", phb: true, pla: false, pp: true },
  { property: "Biokompatibilní / Biocompatible (FDA)", phb: true, pla: false, pp: false },
  { property: "Food-safe certifikace / Food-safe cert.", phb: true, pla: true, pp: true },
  { property: "Výroba z CO₂ / Made from CO₂", phb: true, pla: false, pp: false },
];

function CheckIcon({ ok }: { ok: boolean }) {
  return ok ? (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="8" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeOpacity="0.4" strokeWidth="1" />
      <path d="M5.5 9l2.5 2.5 4.5-4.5" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="8" fill="#ef4444" fillOpacity="0.08" stroke="#ef4444" strokeOpacity="0.2" strokeWidth="1" />
      <path d="M6 12l6-6M12 12L6 6" stroke="#ef4444" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function PHBSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const propsRef = useRef<HTMLDivElement[]>([]);
  const tableRef = useRef<HTMLDivElement>(null);
  const appsRef = useRef<HTMLDivElement>(null);
  const reachRef = useRef<HTMLDivElement>(null);

  const rawProps = t("phb.properties", { returnObjects: true });
  const properties = Array.isArray(rawProps) ? rawProps as Array<{
    value: string; unit: string; title: string; description: string; accent: string;
  }> : [];

  const rawApps = t("phb.applications", { returnObjects: true });
  const applications = Array.isArray(rawApps) ? rawApps as Array<{
    label: string; desc: string; icon: string;
  }> : [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current, { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: headerRef.current, start: "top 80%" },
      });

      propsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el, { y: 50, opacity: 0, scale: 0.96 }, {
          y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 86%" },
          delay: i * 0.09,
        });
      });

      gsap.fromTo(tableRef.current, { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: tableRef.current, start: "top 82%" },
      });

      gsap.fromTo(appsRef.current, { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: appsRef.current, start: "top 82%" },
      });

      gsap.fromTo(reachRef.current, { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: reachRef.current, start: "top 88%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [t]);

  const headline = t("phb.headline");

  return (
    <section id="phb" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_30%,oklch(62%_0.20_162/5%)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-[oklch(62%_0.20_162/25%)] bg-[oklch(62%_0.20_162/6%)] text-[oklch(79%_0.18_162)] text-sm font-medium">
            {t("phb.badge")}
          </div>
          <h2
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-5"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            {headline.split("\n").map((line, i) =>
              i === 1 ? (
                <span key={i} className="block gradient-text">{line}</span>
              ) : (
                <span key={i} className="block">{line}</span>
              )
            )}
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">{t("phb.subheadline")}</p>
        </div>

        {/* 4 property cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {properties.map((prop, i) => (
            <div
              key={i}
              ref={(el) => { propsRef.current[i] = el!; }}
              className="relative group rounded-2xl border border-white/7 bg-[oklch(11%_0.015_250)] p-7 overflow-hidden transition-all duration-400 hover:border-white/14"
              style={{ boxShadow: `inset 0 0 50px ${prop.accent}07` }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(ellipse 70% 60% at 50% 0%, ${prop.accent}0e, transparent)` }}
              />
              <div className="relative">
                <div
                  className="text-4xl font-black leading-none mb-0.5"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: prop.accent }}
                >
                  {prop.value}
                </div>
                <div
                  className="text-xs font-semibold mb-4 opacity-70"
                  style={{ color: prop.accent }}
                >
                  {prop.unit}
                </div>
                <h3
                  className="text-sm font-bold text-white mb-2"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {prop.title}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed">{prop.description}</p>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-25"
                style={{ background: `linear-gradient(90deg, transparent, ${prop.accent}, transparent)` }}
              />
            </div>
          ))}
        </div>

        {/* Comparison table + Applications side by side */}
        <div className="grid lg:grid-cols-2 gap-5 mb-8">
          {/* Comparison table */}
          <div ref={tableRef} className="rounded-2xl border border-white/7 bg-[oklch(11%_0.015_250)] overflow-hidden">
            <div className="px-6 pt-6 pb-4 border-b border-white/5">
              <h3 className="text-white font-semibold text-base" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                {t("phb.comparison_title")}
              </h3>
            </div>
            {/* Table header */}
            <div className="grid grid-cols-4 gap-0 px-6 py-3 border-b border-white/5">
              <div className="col-span-1 text-white/25 text-xs" />
              <div className="text-center">
                <span className="text-[#22c55e] text-xs font-bold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>PHB</span>
              </div>
              <div className="text-center">
                <span className="text-white/40 text-xs font-medium">PLA</span>
              </div>
              <div className="text-center">
                <span className="text-white/40 text-xs font-medium">PP</span>
              </div>
            </div>
            {comparison.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-4 gap-0 px-6 py-3.5 ${i < comparison.length - 1 ? "border-b border-white/4" : ""} hover:bg-white/2 transition-colors`}
              >
                <div className="col-span-1 text-white/45 text-xs leading-snug pr-2">{row.property}</div>
                <div className="flex justify-center items-center"><CheckIcon ok={row.phb} /></div>
                <div className="flex justify-center items-center"><CheckIcon ok={row.pla} /></div>
                <div className="flex justify-center items-center"><CheckIcon ok={row.pp} /></div>
              </div>
            ))}
          </div>

          {/* Applications */}
          <div ref={appsRef} className="flex flex-col gap-4">
            <div className="rounded-2xl border border-white/7 bg-[oklch(11%_0.015_250)] px-6 py-4 border-b border-white/5">
              <h3 className="text-white font-semibold text-base" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                {t("phb.applications_title")}
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3 flex-1">
              {applications.map((app, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/7 bg-[oklch(11%_0.015_250)] p-5 flex flex-col gap-2 group hover:border-[oklch(62%_0.20_162/20%)] transition-all duration-300"
                >
                  <span className="text-2xl">{app.icon}</span>
                  <div className="text-white text-sm font-semibold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{app.label}</div>
                  <div className="text-white/40 text-xs leading-snug">{app.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* REACH note */}
        <div
          ref={reachRef}
          className="relative rounded-2xl border border-[oklch(78%_0.15_185/20%)] bg-[oklch(78%_0.15_185/5%)] p-6 flex items-start gap-4"
        >
          <div className="w-8 h-8 rounded-lg bg-[oklch(78%_0.15_185/15%)] border border-[oklch(78%_0.15_185/25%)] flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <p className="text-white/55 text-sm leading-relaxed">
            <span className="text-[#2dd4bf] font-semibold">REACH 2023/2055 — </span>
            {t("phb.reach_note")}
          </p>
        </div>
      </div>
    </section>
  );
}

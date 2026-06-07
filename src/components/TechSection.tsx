import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ElectrolyzerIcon() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
      <rect x="15" y="20" width="35" height="80" rx="4" fill="#22c55e" fillOpacity="0.08" stroke="#22c55e" strokeOpacity="0.3" strokeWidth="1.5" />
      <rect x="55" y="20" width="10" height="80" rx="1" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeOpacity="0.5" strokeWidth="1" />
      <rect x="70" y="20" width="35" height="80" rx="4" fill="#4ade80" fillOpacity="0.06" stroke="#4ade80" strokeOpacity="0.25" strokeWidth="1.5" />
      {[35,48,61,74,87].map(y => (
        <line key={y} x1="20" y1={y} x2="45" y2={y} stroke="#22c55e" strokeOpacity="0.25" strokeWidth="1" />
      ))}
      {[35,48,61,74,87].map(y => (
        <line key={y} x1="75" y1={y} x2="100" y2={y} stroke="#4ade80" strokeOpacity="0.2" strokeWidth="1" />
      ))}
      <circle cx="30" cy="70" r="4" fill="#ef4444" fillOpacity="0.3" />
      <circle cx="38" cy="55" r="3" fill="#ef4444" fillOpacity="0.25" />
      <circle cx="26" cy="42" r="2.5" fill="#ef4444" fillOpacity="0.2" />
      <text x="83" y="65" textAnchor="middle" fill="#22c55e" fillOpacity="0.6" fontSize="7" fontFamily="Space Grotesk, sans-serif" fontWeight="700">HCOOK</text>
      <path d="M58 45 L54 62 L59 62 L55 78" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" fill="none" opacity="0.7" />
    </svg>
  );
}

function BioreactorIcon() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
      <ellipse cx="60" cy="30" rx="32" ry="10" fill="#2dd4bf" fillOpacity="0.1" stroke="#2dd4bf" strokeOpacity="0.3" strokeWidth="1.5" />
      <rect x="28" y="30" width="64" height="60" fill="#2dd4bf" fillOpacity="0.04" stroke="#2dd4bf" strokeOpacity="0.25" strokeWidth="1.5" />
      <ellipse cx="60" cy="90" rx="32" ry="10" fill="#2dd4bf" fillOpacity="0.08" stroke="#2dd4bf" strokeOpacity="0.3" strokeWidth="1.5" />
      <line x1="60" y1="30" x2="60" y2="80" stroke="#2dd4bf" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="3 2" />
      <line x1="40" y1="60" x2="80" y2="60" stroke="#2dd4bf" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round" />
      <line x1="40" y1="72" x2="80" y2="72" stroke="#2dd4bf" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" />
      {[[42,45],[68,50],[50,68],[75,62]].map(([x,y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="5" ry="3" fill="#2dd4bf" fillOpacity="0.25" transform={`rotate(${i*30} ${x} ${y})`} />
      ))}
      <rect x="18" y="35" width="10" height="3" rx="1.5" fill="#2dd4bf" fillOpacity="0.3" />
      <rect x="92" y="55" width="10" height="3" rx="1.5" fill="#22c55e" fillOpacity="0.3" />
      <circle cx="55" cy="78" r="3" fill="#22c55e" fillOpacity="0.35" />
      <circle cx="65" cy="75" r="2" fill="#22c55e" fillOpacity="0.3" />
    </svg>
  );
}

function TRLBar({ trl, color, maxTrl = 9 }: { trl: number; color: string; maxTrl?: number }) {
  const barRef = useRef<HTMLDivElement>(null);
  const pct = (trl / maxTrl) * 100;

  useEffect(() => {
    if (!barRef.current) return;
    gsap.fromTo(barRef.current, { width: "0%" }, {
      width: `${pct}%`,
      duration: 1.0,
      ease: "power2.out",
      scrollTrigger: { trigger: barRef.current, start: "top 88%" },
    });
  }, [pct]);

  return (
    <div className="flex-1 h-1.5 bg-white/8 rounded-full overflow-hidden">
      <div
        ref={barRef}
        className="h-full rounded-full"
        style={{ background: color, boxShadow: `0 0 8px ${color}60`, width: 0 }}
      />
    </div>
  );
}

export default function TechSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const trlRef = useRef<HTMLDivElement>(null);
  const siteRef = useRef<HTMLDivElement>(null);

  const rawTrlItems = t("tech.trl_items", { returnObjects: true });
  const trlItems = Array.isArray(rawTrlItems) ? rawTrlItems as Array<{
    label: string; trl: number; color: string;
  }> : [];

  const rawCustomers = t("tech.customers.names", { returnObjects: true });
  const customerNames = Array.isArray(rawCustomers) ? rawCustomers as string[] : [];

  const techData = [
    {
      key: "electrolyzer",
      icon: ElectrolyzerIcon,
      accent: "#22c55e",
      title: t("tech.electrolyzer.title"),
      description: t("tech.electrolyzer.description"),
      specs: (Array.isArray(t("tech.electrolyzer.specs", { returnObjects: true })) ? t("tech.electrolyzer.specs", { returnObjects: true }) : []) as string[],
    },
    {
      key: "bioreactor",
      icon: BioreactorIcon,
      accent: "#2dd4bf",
      title: t("tech.bioreactor.title"),
      description: t("tech.bioreactor.description"),
      specs: (Array.isArray(t("tech.bioreactor.specs", { returnObjects: true })) ? t("tech.bioreactor.specs", { returnObjects: true }) : []) as string[],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current, { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: headerRef.current, start: "top 80%" },
      });
      cardsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el, { x: i === 0 ? -50 : 50, opacity: 0 }, {
          x: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%" },
          delay: i * 0.1,
        });
      });
      gsap.fromTo(trlRef.current, { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: trlRef.current, start: "top 82%" },
      });
      gsap.fromTo(siteRef.current, { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: siteRef.current, start: "top 82%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [t]);

  return (
    <section id="technology" ref={sectionRef} className="relative py-32 px-6 bg-[oklch(11%_0.015_250/50%)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,oklch(78%_0.15_185/4%)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-[oklch(78%_0.15_185/25%)] bg-[oklch(78%_0.15_185/6%)] text-[oklch(78%_0.15_185)] text-sm font-medium">
            {t("tech.badge")}
          </div>
          <h2
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-5"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            {t("tech.headline")}
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">{t("tech.subheadline")}</p>
        </div>

        {/* Main tech cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {techData.map((card, i) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.key}
                ref={(el) => { cardsRef.current[i] = el!; }}
                className="relative group rounded-2xl border border-white/7 bg-[oklch(11%_0.015_250)] p-8 overflow-hidden transition-all duration-500 hover:border-white/12"
                style={{ boxShadow: `inset 0 0 80px ${card.accent}06` }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: `radial-gradient(ellipse 50% 40% at 50% 0%, ${card.accent}0a, transparent)` }}
                />
                <div className="flex items-start gap-5 mb-6">
                  <div
                    className="w-20 h-20 flex-shrink-0 rounded-xl border"
                    style={{ borderColor: `${card.accent}25`, background: `${card.accent}08` }}
                  >
                    <IconComponent />
                  </div>
                  <div>
                    <h3
                      className="text-lg font-bold text-white mb-2"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-white/45 text-sm leading-relaxed">{card.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {card.specs.map((spec, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg border text-xs text-white/60"
                      style={{ borderColor: `${card.accent}20`, background: `${card.accent}07` }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: card.accent, boxShadow: `0 0 6px ${card.accent}` }} />
                      {spec}
                    </div>
                  ))}
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 h-px opacity-30"
                  style={{ background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)` }}
                />
              </div>
            );
          })}
        </div>

        {/* TRL + Site/Customers row */}
        <div className="grid md:grid-cols-2 gap-5">
          {/* TRL progress bars */}
          <div ref={trlRef} className="rounded-2xl border border-white/7 bg-[oklch(11%_0.015_250)] p-7">
            <h3 className="text-white font-semibold text-sm mb-5" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              {t("tech.trl_title")}
            </h3>
            <div className="flex flex-col gap-5">
              {trlItems.map((item, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/55 text-xs">{item.label}</span>
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{ color: item.color, background: `${item.color}18` }}
                    >
                      TRL {item.trl}
                    </span>
                  </div>
                  <TRLBar trl={item.trl} color={item.color} />
                </div>
              ))}
            </div>
            <p className="text-white/25 text-xs mt-5 leading-relaxed">{t("tech.references")}</p>
          </div>

          {/* Site + Customers */}
          <div ref={siteRef} className="flex flex-col gap-3">
            <div className="rounded-2xl border border-[oklch(62%_0.20_162/20%)] bg-[oklch(62%_0.20_162/5%)] p-6 flex-1">
              <div className="flex items-center gap-2 mb-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-[#22c55e] text-sm font-semibold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{t("tech.site.title")}</span>
              </div>
              <p className="text-white/55 text-sm leading-relaxed">{t("tech.site.description")}</p>
            </div>

            <div className="rounded-2xl border border-white/7 bg-[oklch(11%_0.015_250)] p-6 flex-1">
              <div className="flex items-center gap-2 mb-4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
                <span className="text-[#2dd4bf] text-sm font-semibold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{t("tech.customers.title")}</span>
              </div>
              <div className="flex flex-col gap-2">
                {customerNames.map((name, i) => (
                  <div key={i} className="flex items-center gap-2.5 py-1.5 border-b border-white/5 last:border-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] flex-shrink-0" />
                    <span className="text-white/60 text-sm">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

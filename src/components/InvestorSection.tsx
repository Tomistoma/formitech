import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BAR_WIDTHS = ["100%", "56%", "22%"] as const;
const STREAM_COLORS = ["#22c55e", "#2dd4bf", "#86efac"] as const;

function IconPellets({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

function IconCO2({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3l18 18M10.5 6A7 7 0 0121 12a7 7 0 01-1.07 3.72M6.53 6.53A7 7 0 003 12a7 7 0 007 7 7 7 0 005.47-2.53" />
    </svg>
  );
}

function IconLicense({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  );
}

const STREAM_ICONS = [IconPellets, IconCO2, IconLicense];

export default function InvestorSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const fundingRef = useRef<HTMLDivElement>(null);
  const streamsRef = useRef<HTMLDivElement[]>([]);
  const marketRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement[]>([]);

  const funding = t("invest.funding", { returnObjects: true }) as {
    amount: string; currency: string; label: string; description: string; cta: string;
    use: Array<{ label: string; desc: string; pct: string }>;
  };
  const revenue = t("invest.revenue", { returnObjects: true }) as {
    title: string;
    streams: Array<{ label: string; desc: string; highlight: string }>;
  };
  const market = t("invest.market", { returnObjects: true }) as {
    title: string; subtitle: string;
    tam: { label: string; name: string; desc: string; value: string };
    sam: { label: string; name: string; desc: string; value: string };
    som: { label: string; name: string; desc: string; value: string };
  };

  const marketRows = [
    { ...market.tam, barColor: "#22c55e55", labelColor: "#22c55e88", valueColor: "#22c55e88" },
    { ...market.sam, barColor: "#22c55e99", labelColor: "#22c55ecc", valueColor: "#22c55ecc" },
    { ...market.som, barColor: "#22c55e",   labelColor: "#4ade80",   valueColor: "#4ade80" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current, { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: headerRef.current, start: "top 80%" },
      });
      gsap.fromTo(fundingRef.current, { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: fundingRef.current, start: "top 83%" },
      });
      streamsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el, { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.6, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
          delay: i * 0.1,
        });
      });
      barsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el, { width: "0%" }, {
          width: BAR_WIDTHS[i], duration: 1.2, ease: "power3.out",
          scrollTrigger: { trigger: marketRef.current, start: "top 80%" },
          delay: i * 0.25,
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="invest" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[oklch(10%_0.015_250/50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,oklch(62%_0.20_162/6%)_0%,transparent_65%)]" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-[#f59e0b44] bg-[#f59e0b0d] text-[#fbbf24] text-sm font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fbbf24] animate-pulse" />
            {t("invest.badge")}
          </div>
          <h2
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-5"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            {t("invest.headline").split("\n").map((line, i) =>
              i === 0
                ? <span key={i} className="block">{line}</span>
                : <span key={i} className="block gradient-text">{line}</span>
            )}
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">{t("invest.subheadline")}</p>
        </div>

        {/* Funding card */}
        <div ref={fundingRef} className="max-w-3xl mx-auto mb-16">
          <div
            className="relative rounded-2xl border border-[oklch(62%_0.20_162/30%)] bg-[oklch(11%_0.015_250)] overflow-hidden"
            style={{ boxShadow: "0 0 80px oklch(62% 0.20 162 / 7%)" }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_0%,oklch(62%_0.20_162/9%)_0%,transparent_70%)]" />
            <div className="relative p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-start gap-8">
                {/* Amount + CTA */}
                <div className="flex-shrink-0 text-center md:text-left">
                  <div className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-2 font-mono">
                    {funding.label}
                  </div>
                  <div
                    className="text-7xl font-black gradient-text leading-none mb-5"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {funding.currency}{funding.amount}
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[oklch(62%_0.20_162)] hover:bg-[oklch(70%_0.20_162)] text-[oklch(8%_0.01_250)] font-semibold text-sm transition-all duration-300 glow-btn"
                  >
                    {funding.cta}
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                      <path fillRule="evenodd" clipRule="evenodd" d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z" />
                    </svg>
                  </a>
                </div>
                {/* Use of funds */}
                <div className="flex-1">
                  <p className="text-white/50 text-sm leading-relaxed mb-6">{funding.description}</p>
                  <div className="space-y-3.5">
                    {Array.isArray(funding.use) && funding.use.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span
                          className="text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5"
                          style={{
                            background: "oklch(62% 0.20 162 / 12%)",
                            color: "#4ade80",
                            border: "1px solid oklch(62% 0.20 162 / 25%)",
                          }}
                        >
                          {item.pct}
                        </span>
                        <div>
                          <div className="text-white/75 text-sm font-medium">{item.label}</div>
                          <div className="text-white/35 text-xs mt-0.5">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, oklch(62% 0.20 162 / 40%), transparent)" }} />
          </div>
        </div>

        {/* Revenue streams */}
        <div className="mb-16">
          <h3
            className="text-center text-xl font-semibold text-white mb-8"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            {revenue.title}
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {Array.isArray(revenue.streams) && revenue.streams.map((stream, i) => {
              const Icon = STREAM_ICONS[i];
              const color = STREAM_COLORS[i];
              return (
                <div
                  key={i}
                  ref={(el) => { streamsRef.current[i] = el!; }}
                  className="group relative rounded-2xl border border-white/7 bg-[oklch(11%_0.015_250)] p-6 overflow-hidden transition-all duration-400 hover:border-white/15"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${color}0e, transparent)` }}
                  />
                  <div className="relative">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: `${color}18`, border: `1px solid ${color}30` }}
                    >
                      <Icon color={color} />
                    </div>
                    <div
                      className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold mb-3"
                      style={{ background: `${color}15`, color, border: `1px solid ${color}30` }}
                    >
                      {stream.highlight}
                    </div>
                    <h4
                      className="text-white font-semibold text-sm mb-2"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {stream.label}
                    </h4>
                    <p className="text-white/40 text-xs leading-relaxed">{stream.desc}</p>
                  </div>
                  <div
                    className="absolute bottom-0 left-0 right-0 h-px opacity-20"
                    style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* TAM / SAM / SOM */}
        <div ref={marketRef} className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3
              className="text-xl font-semibold text-white"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              {market.title}
            </h3>
            <span className="text-xs text-white/30 border border-white/8 rounded-full px-3 py-1">
              {market.subtitle}
            </span>
          </div>
          <div className="rounded-2xl border border-white/7 bg-[oklch(11%_0.015_250)] p-8 space-y-7">
            {marketRows.map((row, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className="text-xs font-mono font-bold px-2 py-0.5 rounded"
                      style={{ background: `${row.barColor}22`, color: row.labelColor, border: `1px solid ${row.barColor}44` }}
                    >
                      {row.label}
                    </span>
                    <span className="text-white/60 text-sm font-medium">{row.name}</span>
                  </div>
                  <span
                    className="font-bold text-base"
                    style={{ color: row.valueColor, fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {row.value}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <div
                    ref={(el) => { barsRef.current[i] = el!; }}
                    className="h-full rounded-full"
                    style={{ width: 0, background: `linear-gradient(90deg, ${row.barColor}66, ${row.barColor})` }}
                  />
                </div>
                <p className="text-white/30 text-xs">{row.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

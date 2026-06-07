import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Animated ETS price bar chart
function ETSChart() {
  const barRef = useRef<SVGGElement>(null);
  const data = [25, 50, 88, 90, 65, 70, 75, 85, 100, 115, 130, 149];
  const maxVal = 160;
  const w = 280, h = 90, pad = 16;
  const barW = (w - pad * 2) / data.length - 3;

  useEffect(() => {
    if (!barRef.current) return;
    const bars = barRef.current.querySelectorAll("rect");
    gsap.fromTo(bars, { scaleY: 0, transformOrigin: "bottom center" }, {
      scaleY: 1, duration: 0.6, stagger: 0.06, ease: "power2.out",
      scrollTrigger: { trigger: barRef.current, start: "top 85%" },
    });
  }, []);

  return (
    <svg viewBox={`0 0 ${w} ${h + 20}`} className="w-full" style={{ maxHeight: 110 }}>
      <g ref={barRef}>
        {data.map((val, i) => {
          const barH = ((val / maxVal) * (h - 10));
          const x = pad + i * ((w - pad * 2) / data.length);
          const y = h - barH;
          const isLast = i === data.length - 1;
          const isCurrent = i === 4;
          const color = isLast ? "#ef4444" : isCurrent ? "#f59e0b" : `oklch(${52 + i * 3}% 0.18 162)`;
          return (
            <rect key={i} x={x} y={y} width={barW} height={barH}
              fill={color} fillOpacity={isLast ? 0.9 : isCurrent ? 0.7 : 0.5} rx="2" />
          );
        })}
      </g>
      {/* Year labels for first, current and last */}
      <text x={pad} y={h + 14} fill="white" fillOpacity="0.35" fontSize="7" fontFamily="Space Grotesk, sans-serif">2020</text>
      <text x={pad + 4 * ((w - pad * 2) / data.length)} y={h + 14} fill="#f59e0b" fillOpacity="0.7" fontSize="7" fontFamily="Space Grotesk, sans-serif">dnes</text>
      <text x={w - pad - 10} y={h + 14} fill="#ef4444" fillOpacity="0.9" fontSize="7" fontFamily="Space Grotesk, sans-serif">2030</text>
      {/* 149 label */}
      <text x={w - pad - 8} y={h - ((149 / maxVal) * (h - 10)) - 4} fill="#ef4444" fillOpacity="0.9" fontSize="8" fontFamily="Space Grotesk, sans-serif" fontWeight="700">149 €</text>
    </svg>
  );
}

export default function ProblemSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  const rawPoints = t("problem.plastic.points", { returnObjects: true });
  const points = Array.isArray(rawPoints) ? rawPoints as string[] : [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current, { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: headerRef.current, start: "top 80%" },
      });
      gsap.fromTo(card1Ref.current, { x: -60, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: card1Ref.current, start: "top 82%" },
      });
      gsap.fromTo(card2Ref.current, { x: 60, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: card2Ref.current, start: "top 82%" },
        delay: 0.1,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const headline = t("problem.headline");

  return (
    <section id="problem" ref={sectionRef} className="relative py-32 px-6 bg-[oklch(10%_0.012_250/60%)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,oklch(30%_0.10_162/6%)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-[#f59e0b40] bg-[#f59e0b0a] text-[#f59e0b] text-sm font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse" />
            {t("problem.badge")}
          </div>
          <h2
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-5"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            {headline.split("\n").map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">{t("problem.subheadline")}</p>
        </div>

        {/* Two crisis cards */}
        <div className="grid lg:grid-cols-2 gap-5">
          {/* ETS Crisis */}
          <div
            ref={card1Ref}
            className="relative rounded-2xl border border-[#f59e0b20] bg-[oklch(11%_0.015_250)] p-8 overflow-hidden group hover:border-[#f59e0b35] transition-all duration-400"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,#f59e0b08,transparent)]" />
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#f59e0b]" />
              <span className="text-[#f59e0b] text-sm font-semibold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                {t("problem.co2.label")}
              </span>
            </div>

            {/* Price display */}
            <div className="flex items-end gap-6 mb-6">
              <div>
                <div className="text-5xl font-black text-[#f59e0b] leading-none mb-1" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  {t("problem.co2.price_now")}
                </div>
                <div className="text-white/35 text-xs">{t("problem.co2.price_now_label")}</div>
              </div>
              <div className="flex flex-col gap-1 pb-1">
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-px bg-white/20" />
                  <span className="text-white/60 text-sm font-medium">{t("problem.co2.price_2027")}</span>
                  <span className="text-white/30 text-xs">{t("problem.co2.price_2027_label")}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-px bg-[#ef4444]/60" />
                  <span className="text-[#ef4444] text-sm font-bold">{t("problem.co2.price_2030")}</span>
                  <span className="text-white/30 text-xs">{t("problem.co2.price_2030_label")}</span>
                </div>
              </div>
            </div>

            {/* Chart */}
            <div className="mb-5">
              <ETSChart />
            </div>

            <p className="text-white/45 text-sm leading-relaxed">{t("problem.co2.description")}</p>
          </div>

          {/* Plastic Crisis */}
          <div
            ref={card2Ref}
            className="relative rounded-2xl border border-[#ef444420] bg-[oklch(11%_0.015_250)] p-8 overflow-hidden group hover:border-[#ef444435] transition-all duration-400"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,#ef444408,transparent)]" />
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#ef4444]" />
              <span className="text-[#ef4444] text-sm font-semibold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                {t("problem.plastic.label")}
              </span>
            </div>

            {/* Degradation comparison visual */}
            <div className="mb-6 flex flex-col gap-3">
              {[
                { label: "PP / PE", years: "450+ let", pct: 100, color: "#ef4444", note: "nebiodegraduje" },
                { label: "PLA", years: "kompostárna", pct: 55, color: "#f59e0b", note: "pouze průmyslové podmínky" },
                { label: "PHB", years: "180 dní", pct: 18, color: "#22c55e", note: "v půdě, vodě, moři" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white/60 text-xs font-medium">{item.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold" style={{ color: item.color }}>{item.years}</span>
                      <span className="text-white/25 text-xs">{item.note}</span>
                    </div>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/6 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${item.pct}%`, background: item.color, opacity: 0.7 }}
                    />
                  </div>
                </div>
              ))}
              <p className="text-white/30 text-xs mt-1">Čas biodegradace v přírodním prostředí</p>
            </div>

            <div className="flex flex-col gap-3 mb-5">
              {points.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ef4444] mt-1.5 flex-shrink-0" />
                  <span className="text-white/65 text-sm leading-relaxed">{point}</span>
                </div>
              ))}
            </div>

            <p className="text-white/45 text-sm leading-relaxed">{t("problem.plastic.description")}</p>
          </div>
        </div>

      </div>
    </section>
  );
}

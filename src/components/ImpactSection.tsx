import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ImpactSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement[]>([]);
  const numbersRef = useRef<HTMLSpanElement[]>([]);

  const rawStats = t("impact.stats", { returnObjects: true });
  const stats = (Array.isArray(rawStats) ? rawStats : []) as Array<{
    value: string;
    unit: string;
    label: string;
    suffix: string;
  }>;

  const accentColors = ["#22c55e", "#4ade80", "#2dd4bf", "#86efac"];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 80%" },
        }
      );

      statsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el, { y: 50, opacity: 0, scale: 0.95 }, {
          y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          delay: i * 0.1,
          onComplete: () => {
            // Number count-up
            const numEl = numbersRef.current[i];
            if (!numEl) return;
            const targetVal = parseFloat(stats[i].value);
            const hasDecimal = stats[i].value.includes(".");
            const obj = { val: 0 };
            gsap.to(obj, {
              val: targetVal,
              duration: 1.5,
              ease: "power2.out",
              onUpdate: () => {
                numEl.textContent = hasDecimal ? obj.val.toFixed(1) : Math.round(obj.val).toString();
              },
            });
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [t, stats]);

  return (
    <section id="impact" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Animated background lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px opacity-5"
            style={{
              left: `${15 + i * 18}%`,
              top: 0,
              bottom: 0,
              background: `linear-gradient(180deg, transparent, oklch(62% 0.20 162), transparent)`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,oklch(62%_0.20_162/5%)_0%,transparent_65%)]" />

      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-[oklch(62%_0.20_162/25%)] bg-[oklch(62%_0.20_162/6%)] text-[oklch(79%_0.18_162)] text-sm font-medium">
            {t("impact.badge")}
          </div>
          <h2
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-5"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            {t("impact.headline")}
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">{t("impact.subheadline")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              ref={(el) => { statsRef.current[i] = el!; }}
              className="relative group rounded-2xl border border-white/7 bg-[oklch(11%_0.015_250)] p-8 text-center overflow-hidden transition-all duration-500 hover:border-white/15"
              style={{ boxShadow: `inset 0 0 50px ${accentColors[i]}06` }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(ellipse 70% 60% at 50% 0%, ${accentColors[i]}0e, transparent)` }}
              />
              <div className="relative">
                <div
                  className="stat-number text-5xl font-black mb-1 leading-none"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: accentColors[i] }}
                >
                  <span>{stat.suffix}</span>
                  <span ref={(el) => { numbersRef.current[i] = el!; }}>{stat.value}</span>
                </div>
                <div
                  className="text-sm font-semibold mb-2 opacity-70"
                  style={{ color: accentColors[i], fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {stat.unit}
                </div>
                <p className="text-white/40 text-xs leading-snug">{stat.label}</p>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-20"
                style={{ background: `linear-gradient(90deg, transparent, ${accentColors[i]}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

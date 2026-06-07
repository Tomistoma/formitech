import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Molecule SVG visualizations
function CO2Molecule() {
  return (
    <svg viewBox="0 0 160 80" className="w-full h-full" fill="none">
      {/* Bonds */}
      <line x1="50" y1="40" x2="80" y2="40" stroke="#ef4444" strokeWidth="3" strokeDasharray="4 2" opacity="0.6" />
      <line x1="80" y1="40" x2="110" y2="40" stroke="#ef4444" strokeWidth="3" strokeDasharray="4 2" opacity="0.6" />
      {/* Double bond top */}
      <line x1="50" y1="36" x2="80" y2="36" stroke="#ef4444" strokeWidth="1.5" opacity="0.4" />
      <line x1="80" y1="36" x2="110" y2="36" stroke="#ef4444" strokeWidth="1.5" opacity="0.4" />
      {/* Oxygen atoms */}
      <circle cx="35" cy="40" r="14" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="1.5" />
      <text x="35" y="45" textAnchor="middle" fill="#ef4444" fontSize="11" fontWeight="600" fontFamily="Space Grotesk, sans-serif">O</text>
      {/* Carbon atom */}
      <circle cx="80" cy="40" r="16" fill="#6b7280" fillOpacity="0.2" stroke="#9ca3af" strokeWidth="1.5" />
      <text x="80" y="45" textAnchor="middle" fill="#9ca3af" fontSize="12" fontWeight="700" fontFamily="Space Grotesk, sans-serif">C</text>
      {/* Oxygen atom */}
      <circle cx="125" cy="40" r="14" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="1.5" />
      <text x="125" y="45" textAnchor="middle" fill="#ef4444" fontSize="11" fontWeight="600" fontFamily="Space Grotesk, sans-serif">O</text>
      {/* Label */}
      <text x="80" y="72" textAnchor="middle" fill="#ef444460" fontSize="13" fontWeight="700" fontFamily="Space Grotesk, sans-serif">CO₂</text>
    </svg>
  );
}

function FormateMolecule() {
  return (
    <svg viewBox="0 0 180 100" className="w-full h-full" fill="none">
      {/* H - C bond */}
      <line x1="30" y1="50" x2="65" y2="50" stroke="#22c55e" strokeWidth="2.5" opacity="0.6" />
      {/* C - O double bond */}
      <line x1="95" y1="50" x2="130" y2="35" stroke="#22c55e" strokeWidth="2.5" opacity="0.6" />
      <line x1="98" y1="54" x2="133" y2="39" stroke="#22c55e" strokeWidth="1.5" opacity="0.35" />
      {/* C - O- single bond */}
      <line x1="95" y1="50" x2="130" y2="65" stroke="#22c55e" strokeWidth="2.5" opacity="0.6" />
      {/* Atoms */}
      <circle cx="18" cy="50" r="11" fill="#f59e0b" fillOpacity="0.15" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="18" y="55" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="600" fontFamily="Space Grotesk, sans-serif">H</text>
      <circle cx="80" cy="50" r="15" fill="#4b5563" fillOpacity="0.2" stroke="#9ca3af" strokeWidth="1.5" />
      <text x="80" y="55" textAnchor="middle" fill="#9ca3af" fontSize="11" fontWeight="700" fontFamily="Space Grotesk, sans-serif">C</text>
      <circle cx="143" cy="28" r="13" fill="#ef4444" fillOpacity="0.15" stroke="#ef4444" strokeWidth="1.5" />
      <text x="143" y="33" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="600" fontFamily="Space Grotesk, sans-serif">O</text>
      <circle cx="143" cy="72" r="13" fill="#ef4444" fillOpacity="0.15" stroke="#ef4444" strokeWidth="1.5" />
      <text x="143" y="77" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="600" fontFamily="Space Grotesk, sans-serif">O⁻</text>
      {/* Label */}
      <text x="90" y="95" textAnchor="middle" fill="#22c55e60" fontSize="12" fontWeight="700" fontFamily="Space Grotesk, sans-serif">HCOO⁻</text>
    </svg>
  );
}

function PHBMolecule() {
  return (
    <svg viewBox="0 0 220 110" className="w-full h-full" fill="none">
      {/* Polymer chain backbone */}
      {[0,1,2,3].map(i => (
        <g key={i}>
          <line x1={20 + i*50} y1="55" x2={50 + i*50} y2="55" stroke="#2dd4bf" strokeWidth="2.5" opacity="0.5" />
          <circle cx={35 + i*50} cy="55" r="11" fill="#2dd4bf" fillOpacity="0.12" stroke="#2dd4bf" strokeWidth="1.5" />
          <text x={35 + i*50} y="59" textAnchor="middle" fill="#2dd4bf" fontSize="8" fontWeight="700" fontFamily="Space Grotesk, sans-serif">C</text>
          {/* Side chains */}
          <line x1={35 + i*50} y1="44" x2={35 + i*50} y2="28" stroke="#2dd4bf" strokeWidth="1.5" opacity="0.4" />
          <circle cx={35 + i*50} cy="20" r="9" fill="#2dd4bf" fillOpacity="0.1" stroke="#2dd4bf" strokeWidth="1" />
          <text x={35 + i*50} y="24" textAnchor="middle" fill="#2dd4bf" fontSize="7" fontWeight="600" fontFamily="Space Grotesk, sans-serif">O</text>
        </g>
      ))}
      {/* Ellipsis */}
      <text x="195" y="60" fill="#2dd4bf60" fontSize="14" fontFamily="Space Grotesk, sans-serif">...</text>
      {/* Label */}
      <text x="110" y="100" textAnchor="middle" fill="#2dd4bf60" fontSize="11" fontWeight="700" fontFamily="Space Grotesk, sans-serif">PHB polymer</text>
    </svg>
  );
}

function PelletsMolecule() {
  return (
    <svg viewBox="0 0 160 80" className="w-full h-full" fill="none">
      {/* PHB pellets scattered */}
      {[[28,35,20,12],[55,25,18,10],[82,40,22,12],[110,28,16,10],[42,58,18,11],[70,55,20,11],[98,52,16,10],[125,45,18,11]].map(([cx,cy,rx,ry], i) => (
        <ellipse key={i} cx={cx} cy={cy} rx={rx} ry={ry}
          fill="#86efac" fillOpacity={0.12 + i*0.01}
          stroke="#86efac" strokeOpacity={0.4} strokeWidth="1.2" />
      ))}
      <text x="80" y="75" textAnchor="middle" fill="#86efac60" fontSize="10" fontWeight="700" fontFamily="Space Grotesk, sans-serif">PHB pelety</text>
    </svg>
  );
}

const molecules: Record<string, () => React.ReactElement> = {
  co2: CO2Molecule,
  formate: FormateMolecule,
  phb: PHBMolecule,
  pellets: PelletsMolecule,
};

export default function ProcessSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement[]>([]);
  const arrowsRef = useRef<HTMLDivElement[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);

  const rawSteps = t("process.steps", { returnObjects: true });
  const steps = (Array.isArray(rawSteps) ? rawSteps : []) as Array<{
    number: string;
    label: string;
    title: string;
    description: string;
    molecule: string;
    color: string;
    accent: string;
  }>;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        headerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 80%" },
        }
      );

      // Steps stagger
      stepsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 82%" },
            delay: i * 0.12,
          }
        );
        // Molecule float
        const molEl = el.querySelector(".molecule-wrap");
        if (molEl) {
          gsap.to(molEl, {
            y: -10,
            duration: 2.5 + i * 0.4,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
          });
        }
      });

      // Arrows
      arrowsRef.current.forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { scaleX: 0, opacity: 0 },
          {
            scaleX: 1, opacity: 1, duration: 0.6, ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [t]);

  const accentColors = ["#ef4444", "#22c55e", "#2dd4bf"];

  return (
    <section id="process" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,oklch(62%_0.20_162/4%)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-[oklch(62%_0.20_162/25%)] bg-[oklch(62%_0.20_162/6%)] text-[oklch(79%_0.18_162)] text-sm font-medium">
            {t("process.badge")}
          </div>
          <h2
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-5"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            {t("process.headline")}
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            {t("process.subheadline")}
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col lg:flex-row items-stretch gap-0 lg:gap-0">
          {steps.map((step, i) => {
            const MoleculeComponent = molecules[step.molecule];
            const accent = accentColors[i];
            return (
              <div key={i} className="flex flex-col lg:flex-row items-stretch flex-1">
                {/* Step card */}
                <div
                  ref={(el) => { stepsRef.current[i] = el!; }}
                  className="flex-1 relative group rounded-2xl border border-white/7 bg-[oklch(11%_0.015_250)] p-8 flex flex-col overflow-hidden transition-all duration-500 hover:border-white/15"
                  style={{ boxShadow: `inset 0 0 60px ${accent}08` }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{ background: `radial-gradient(ellipse 60% 50% at 50% 0%, ${accent}10, transparent)` }}
                  />

                  {/* Step number */}
                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className="text-5xl font-black opacity-15 tabular-nums leading-none"
                      style={{ fontFamily: "Space Grotesk, sans-serif", color: accent }}
                    >
                      {step.number}
                    </span>
                    <div
                      className="px-3 py-1 rounded-full text-xs font-semibold border"
                      style={{ color: accent, borderColor: `${accent}40`, background: `${accent}12` }}
                    >
                      {step.label}
                    </div>
                  </div>

                  {/* Molecule visualization */}
                  <div className="molecule-wrap h-28 mb-6 opacity-80">
                    <MoleculeComponent />
                  </div>

                  <h3
                    className="text-xl font-bold text-white mb-3"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed flex-1">
                    {step.description}
                  </p>

                  {/* Bottom accent bar */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 opacity-30 rounded-b-2xl"
                    style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
                  />
                </div>

                {/* Arrow between steps */}
                {i < steps.length - 1 && (
                  <div
                    ref={(el) => { arrowsRef.current[i] = el!; }}
                    className="hidden lg:flex items-center justify-center w-12 origin-left flex-shrink-0"
                  >
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-8 h-px bg-gradient-to-r from-white/20 to-white/10" />
                      <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                        <path d="M0 6H18M18 6L12 1M18 6L12 11" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

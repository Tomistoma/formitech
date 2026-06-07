import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  { name: "Ing. Michal Salem", role: "Co-founder", area: "Ekonomika & Business" },
  { name: "Mgr. Tomáš Svoboda", role: "Co-founder", area: "Technologie & Věda" },
];

const teamMembersEn = [
  { name: "Ing. Michal Salem", role: "Co-founder", area: "Economics & Business" },
  { name: "Mgr. Tomáš Svoboda", role: "Co-founder", area: "Technology & Science" },
];

const avatarColors = ["#22c55e", "#2dd4bf"];

export default function AboutSection() {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const members = i18n.language === "cs" ? teamMembers : teamMembersEn;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current, { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: headerRef.current, start: "top 80%" },
      });
      gsap.fromTo(missionRef.current, { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: missionRef.current, start: "top 82%" },
      });
      cardsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el, { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.6, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
          delay: i * 0.1,
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-32 px-6 bg-[oklch(11%_0.015_250/40%)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,oklch(78%_0.15_185/4%)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-[oklch(78%_0.15_185/25%)] bg-[oklch(78%_0.15_185/6%)] text-[oklch(78%_0.15_185)] text-sm font-medium">
            {t("about.badge")}
          </div>
          <h2
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-5"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            {t("about.headline")}
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">{t("about.subheadline")}</p>
        </div>

        {/* Mission statement */}
        <div
          ref={missionRef}
          className="relative rounded-2xl border border-[oklch(62%_0.20_162/20%)] bg-[oklch(62%_0.20_162/5%)] p-8 mb-12 text-center max-w-3xl mx-auto"
        >
          <div className="absolute -top-3 left-8">
            <span
              className="text-5xl leading-none opacity-20"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#22c55e" }}
            >
              "
            </span>
          </div>
          <p className="text-white/75 text-lg leading-relaxed italic">{t("about.mission")}</p>
        </div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {members.map((member, i) => (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el!; }}
              className="group rounded-2xl border border-white/7 bg-[oklch(11%_0.015_250)] p-6 text-center transition-all duration-400 hover:border-white/15 overflow-hidden relative"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(ellipse 60% 50% at 50% 0%, ${avatarColors[i]}0a, transparent)` }}
              />
              {/* Avatar */}
              <div
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center border-2"
                style={{
                  borderColor: `${avatarColors[i]}40`,
                  background: `${avatarColors[i]}15`,
                }}
              >
                <span
                  className="text-xl font-bold"
                  style={{ color: avatarColors[i], fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {member.name.split(" ").map(w => w[0]).filter(c => c === c.toUpperCase()).slice(0, 2).join("")}
                </span>
              </div>
              <div className="font-semibold text-white text-sm mb-0.5" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                {member.name}
              </div>
              <div className="text-white/40 text-xs mb-2">{member.role}</div>
              <div
                className="inline-block px-2.5 py-1 rounded-full text-xs border"
                style={{ color: avatarColors[i], borderColor: `${avatarColors[i]}30`, background: `${avatarColors[i]}10` }}
              >
                {member.area}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

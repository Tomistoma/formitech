import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current, { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: headerRef.current, start: "top 80%" },
      });
      gsap.fromTo(formRef.current, { x: -40, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: formRef.current, start: "top 82%" },
        delay: 0.1,
      });
      gsap.fromTo(infoRef.current, { x: 40, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: infoRef.current, start: "top 82%" },
        delay: 0.2,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-[oklch(16%_0.015_250)] border border-white/8 rounded-xl px-4 py-3 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-[oklch(62%_0.20_162/50%)] focus:bg-[oklch(16%_0.015_250)] transition-all duration-200";

  return (
    <section id="contact" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,oklch(62%_0.20_162/5%)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-[oklch(62%_0.20_162/25%)] bg-[oklch(62%_0.20_162/6%)] text-[oklch(79%_0.18_162)] text-sm font-medium">
            {t("contact.badge")}
          </div>
          <h2
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-5"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            {t("contact.headline")}
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">{t("contact.subheadline")}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-2xl border border-[oklch(62%_0.20_162/25%)] bg-[oklch(62%_0.20_162/8%)] p-12 text-center h-full flex flex-col items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[oklch(62%_0.20_162/20%)] border border-[oklch(62%_0.20_162/30%)] flex items-center justify-center mb-5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <p className="text-white font-semibold text-lg mb-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Odesláno!</p>
                <p className="text-white/50 text-sm">Ozveme se vám brzy.</p>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/7 bg-[oklch(11%_0.015_250)] p-8 flex flex-col gap-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-white/40 mb-1.5">{t("contact.form.name")}</label>
                    <input
                      type="text"
                      required
                      className={inputClass}
                      placeholder={t("contact.form.placeholder_name")}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/40 mb-1.5">{t("contact.form.email")}</label>
                    <input
                      type="email"
                      required
                      className={inputClass}
                      placeholder={t("contact.form.placeholder_email")}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-white/40 mb-1.5">{t("contact.form.message")}</label>
                  <textarea
                    required
                    rows={5}
                    className={inputClass + " resize-none"}
                    placeholder={t("contact.form.placeholder_message")}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[oklch(62%_0.20_162)] hover:bg-[oklch(70%_0.20_162)] text-[oklch(8%_0.01_250)] font-semibold text-sm transition-all duration-300 glow-btn"
                >
                  {t("contact.form.submit")}
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div ref={infoRef} className="lg:col-span-2 flex flex-col gap-4">
            {[
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                ),
                label: "Lokalita",
                value: t("contact.info.location"),
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                ),
                label: "E-mail",
                value: t("contact.info.email"),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/7 bg-[oklch(11%_0.015_250)] p-6 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs text-white/35 mb-0.5">{item.label}</div>
                  <div className="text-white/75 text-sm font-medium">{item.value}</div>
                </div>
              </div>
            ))}

            {/* Partnership types */}
            <div className="rounded-2xl border border-white/7 bg-[oklch(11%_0.015_250)] p-6">
              <p className="text-white/40 text-xs mb-4">Hledáme partnery pro:</p>
              {["Pilotní projekty", "Investice & VC", "Výzkumná spolupráce", "Průmysloví partneři"].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 py-2 border-b border-white/5 last:border-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-[oklch(62%_0.20_162)]" />
                  <span className="text-white/55 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

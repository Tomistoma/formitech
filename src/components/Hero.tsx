import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import * as THREE from "three";

export default function Hero() {
  const { t } = useTranslation();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Three.js particle field
  useEffect(() => {
    const canvas = canvasRef.current!;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 100);
    camera.position.z = 30;

    // Particles
    const PARTICLE_COUNT = 900;
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);

    const green = new THREE.Color(0x4ade80);
    const teal = new THREE.Color(0x2dd4bf);
    const dim = new THREE.Color(0x1a3a2a);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;

      const t = Math.random();
      const col = t < 0.5 ? green.clone().lerp(teal, t * 2) : teal.clone().lerp(dim, (t - 0.5) * 2);
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;

      sizes[i] = Math.random() * 2.5 + 0.5;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const mat = new THREE.PointsMaterial({
      size: 0.3,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geo, mat);
    scene.add(particles);

    // Lines connecting nearby particles
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x22c55e,
      transparent: true,
      opacity: 0.06,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const linePositions: number[] = [];
    const maxDist = 8;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < maxDist) {
          linePositions.push(
            positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
            positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
          );
        }
      }
    }
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(linePositions), 3));
    scene.add(new THREE.LineSegments(lineGeo, lineMat));

    // Mouse parallax
    let mouseX = 0, mouseY = 0;
    const handleMouse = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouse);

    // Resize
    const handleResize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    let raf: number;
    const clock = new THREE.Clock();
    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      particles.rotation.y = t * 0.03 + mouseX * 0.05;
      particles.rotation.x = t * 0.015 + mouseY * 0.03;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      geo.dispose();
      mat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
    };
  }, []);

  // GSAP entrance
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    tl.fromTo(badgeRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" })
      .fromTo(headlineRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.3")
      .fromTo(subRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }, "-=0.4")
      .fromTo(ctaRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.3")
      .fromTo(scrollRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 }, "-=0.2");
  }, []);

  const headline = t("hero.headline");

  // Replace ₂ unicode subscript with a properly sized <sub> so it's visible at large sizes
  const withSub = (text: string) =>
    text.split(/(CO₂)/g).map((part, i) =>
      part === "CO₂"
        ? <span key={i}>CO<sub style={{ fontSize: "0.55em", verticalAlign: "sub", lineHeight: 0 }}>2</sub></span>
        : part
    );

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.7 }}
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,oklch(62%_0.20_162/8%)_0%,transparent_70%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[oklch(8%_0.01_250)] to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div ref={badgeRef} className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-[oklch(62%_0.20_162/30%)] bg-[oklch(62%_0.20_162/8%)] text-[oklch(79%_0.18_162)] text-sm font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(79%_0.18_162)] animate-pulse" />
          {t("hero.badge")}
        </div>

        <h1
          ref={headlineRef}
          className="text-6xl md:text-8xl font-bold leading-[0.95] tracking-tight mb-8"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          {headline.split("\n").map((line, i) =>
            i === 0 ? (
              <span key={i} className="block text-white">
                {withSub(line)}
              </span>
            ) : (
              <span key={i} className="block gradient-text glow-text">
                {withSub(line)}
              </span>
            )
          )}
        </h1>

        <p ref={subRef} className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t("hero.subheadline")}
        </p>

        <div ref={ctaRef} className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#process"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[oklch(62%_0.20_162)] hover:bg-[oklch(70%_0.20_162)] text-[oklch(8%_0.01_250)] font-semibold text-sm transition-all duration-300 glow-btn"
          >
            {t("hero.cta_primary")}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M8 1a.5.5 0 01.5.5v11.793l3.146-3.147a.5.5 0 01.708.708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 01.708-.708L7.5 13.293V1.5A.5.5 0 018 1z" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 hover:border-white/30 text-white/70 hover:text-white font-semibold text-sm transition-all duration-300"
          >
            {t("hero.cta_secondary")}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs">
        <span>{t("hero.scroll_hint")}</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

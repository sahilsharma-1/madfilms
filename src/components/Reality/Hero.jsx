"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Glasses, PlayCircle } from "lucide-react";

const RIBBON_WORDS = [
  "WEBAR",
  "360° VIRTUAL TOURS",
  "3D CONFIGURATORS",
  "AR FILTERS",
  "VR WALKTHROUGHS",
  "SPATIAL DESIGN",
  "IMMERSIVE BRANDING",
];

const BADGES = [
  "Powered by MAD Films' 3D & CGI pipeline",
  "Browser-based — no app or headset required to start",
  "Founding studio — hands-on involvement on every project",
];

const VIDEOS = [
  "/videos/arvrhero.mp4",
];

export default function Hero() {
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % VIDEOS.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#060608] pb-24 pt-40 lg:pt-48">
      {/* ================= Background Video Slider ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          key={VIDEOS[currentVideo]}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover transition-opacity duration-700"
        >
          <source src={VIDEOS[currentVideo]} type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-[#060608]" />
      </div>

      {/* ================= Ambient Blobs ================= */}
      <div
        aria-hidden
        className="animate-mad-blob pointer-events-none absolute -left-32 top-24 z-10 h-96 w-96 rounded-full opacity-30 blur-[110px]"
        style={{
          background: "radial-gradient(circle, #0064fa, transparent 70%)",
        }}
      />

      <div
        aria-hidden
        className="animate-mad-blob pointer-events-none absolute -right-24 top-52 z-10 h-[28rem] w-[28rem] rounded-full opacity-30 blur-[120px]"
        style={{
          animationDelay: "4s",
          background: "radial-gradient(circle, #00c2ff, transparent 70%)",
        }}
      />

      {/* ================= Hero Content ================= */}
      <div className="relative z-20 mx-auto max-w-5xl px-6 text-center lg:px-10">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-body text-xs font-medium text-white/70 backdrop-blur">
          <Glasses size={14} className="text-white/70" />
          MAD Reality — XR Studio
        </div>

        <h1 className="font-display text-6xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
          This is{" "}
          <span className="mad-gradient-text">MAD Reality.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-white/70 sm:text-xl">
          MAD Company's newest studio — turning our film team's 3D, CGI, and
          motion-design pipeline into AR and VR experiences your audience can
          step into, not just scroll past.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-body text-sm font-semibold text-white shadow-[0_0_40px_-10px_rgba(0,100,250,0.6)] transition hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #0064fa, #00c2ff)",
            }}
          >
            Start your AR/VR project
            <ArrowUpRight size={16} />
          </a>

          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 font-body text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            <PlayCircle size={16} />
            See what we build
          </a>
        </div>

        {/* Badges */}
        <div className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-3">
          {BADGES.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-body text-xs text-white/70 backdrop-blur"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* ================= Ribbon ================= */}
      <div className="pointer-events-none relative z-20 mt-20 w-full overflow-hidden">
        <div
          className="w-[120%] -translate-x-[10%] rotate-[-2deg] overflow-hidden py-3"
          style={{
            background: "linear-gradient(90deg, #0064fa, #00c2ff)",
          }}
        >
          <div className="mad-marquee-track flex w-max items-center gap-10 whitespace-nowrap">
            {[...RIBBON_WORDS, ...RIBBON_WORDS].map((word, i) => (
              <span
                key={i}
                className="font-display text-sm font-bold tracking-wide text-black/90"
              >
                {word}
                <span className="mx-4 opacity-50">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Sparkles, PlayCircle } from "lucide-react";

const RIBBON_WORDS = [
  "3D ANIMATION",
  "AI AGENTS",
  "WEB & APP DEV",
  "AR / VR",
  "WHATSAPP AUTOMATION",
  "PERFORMANCE MARKETING",
  "CGI & VFX",
  "CLOUD & DEVOPS",
];

const STATS = [
  { value: "150+", label: "Projects shipped" },
  { value: "40+", label: "Brands served" },
  { value: "8", label: "Studios, one roof" },
  { value: "12", label: "Countries reached" },
];

const VIDEOS = [
  "/videos/arvrhero.mp4",
 
];

export default function Hero() {
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % VIDEOS.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#060608] pb-28 pt-40 lg:pt-48">
      {/* Background Videos */}
      {VIDEOS.map((video, index) => (
        <video
          key={video}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            currentVideo === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={video} type="video/mp4" />
        </video>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65 z-[1]" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#060608] z-[2]" />

      {/* Ambient Gradient Blobs */}
      <div
        aria-hidden
        className="animate-mad-blob pointer-events-none absolute -left-32 top-24 z-[3] h-96 w-96 rounded-full opacity-30 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, #0064fa, transparent 70%)",
        }}
      />

      <div
        aria-hidden
        className="animate-mad-blob pointer-events-none absolute -right-24 top-52 z-[3] h-[28rem] w-[28rem] rounded-full opacity-30 blur-[120px]"
        style={{
          animationDelay: "4s",
          background:
            "radial-gradient(circle, #f726a8, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-10">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-body text-xs font-medium text-white/70 backdrop-blur">
          <Sparkles size={14} className="text-white/70" />
          8 studios. One house. Zero average.
        </div>

        <h1 className="font-display text-6xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
          This is <span className="mad-gradient-text">MAD.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-white/70 sm:text-xl">
          A house of creative and technology studios — films, products,
          AI, XR, and growth — built by one team so your brand never
          has to juggle five agencies again.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="mad-gradient-bg inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-body text-sm font-semibold text-white shadow-[0_0_40px_-10px_rgba(124,58,255,0.6)] transition hover:scale-105"
          >
            Get an estimate
            <ArrowUpRight size={16} />
          </a>

          <a
            href="#companies"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 font-body text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            <PlayCircle size={16} />
            Explore our companies
          </a>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 flex max-w-2xl flex-wrap items-center justify-center divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="flex-1 px-6 py-6 text-center min-w-[140px]"
            >
              <p className="font-display text-3xl font-bold text-white">
                {s.value}
              </p>

              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.25em] text-white/50">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient Ribbon */}
      <div className="pointer-events-none relative z-10 mt-24 w-full overflow-hidden">
        <div className="mad-gradient-bg w-[120%] -translate-x-[10%] rotate-[-2deg] overflow-hidden py-3">
          <div className="mad-marquee-track flex w-max items-center gap-10 whitespace-nowrap">
            {[...RIBBON_WORDS, ...RIBBON_WORDS].map((word, i) => (
              <span
                key={i}
                className="font-display text-sm font-bold tracking-wide text-black"
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
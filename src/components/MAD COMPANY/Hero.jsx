"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, PlayCircle, ChevronDown } from "lucide-react";
import VideoBackground from "./VideoBackground";
import Magnetic from "./Magnetic";
import AnimatedCounter from "./AnimatedCounter";
import { Reveal } from "./Reveal";

const EASE = [0.21, 0.47, 0.32, 0.98];
const HEADLINE = "This is MAD.";

// Drop your reel(s) in /public/videos and list them here — they'll
// autoplay muted and crossfade. Leave empty and Hero falls back to
// HERO_POSTER (a full-bleed still), so nothing looks broken while
// real video assets are still being added.
const HERO_VIDEOS = [
  "/videos/moon-walk.mp4",
];
const HERO_POSTER = "";

const STATS = [
  { value: "150+", label: "Projects shipped" },
  { value: "40+", label: "Brands served" },
  { value: "8", label: "Studios, one roof" },
  { value: "12", label: "Countries reached" },
];

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

// A quick, tilted preview of recent work sitting under the fold —
// swap each `image` for a real project still whenever you have one.
const SHOWCASE = [
  { label: "MAD Films", tag: "CGI & VFX", image: "https://picsum.photos/seed/mad-hero-films/700/560" },
  { label: "MAD Tech", tag: "Product", image: "https://picsum.photos/seed/mad-hero-tech/700/560" },
  { label: "MAD Mind", tag: "AI Agents", image: "https://picsum.photos/seed/mad-hero-mind/700/560" },
];

export default function Hero() {
  const words = HEADLINE.split(" ");

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#060608] pb-28 pt-40 lg:pt-48">
      {/* Background video / placeholder */}
      <VideoBackground
        sources={HERO_VIDEOS}
        poster={HERO_POSTER}
        overlay="bg-black/70"
        grain
        className="z-[1]"
      />

      {/* Gradient overlay so the bottom always blends into the page bg */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/20 via-black/50 to-[#060608]" />

      {/* Ambient blobs */}
      <div
        aria-hidden
        className="animate-mad-blob pointer-events-none absolute -left-32 top-24 z-[3] h-96 w-96 rounded-full opacity-30 blur-[110px]"
        style={{ background: "radial-gradient(circle, #0064fa, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="animate-mad-blob pointer-events-none absolute -right-24 top-52 z-[3] h-[28rem] w-[28rem] rounded-full opacity-30 blur-[120px]"
        style={{ animationDelay: "4s", background: "radial-gradient(circle, #f726a8, transparent 70%)" }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mad-shimmer-border mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-body text-xs font-medium text-white/70 backdrop-blur"
        >
          <Sparkles size={14} className="text-white/70" />
          8 studios. One house. Zero average.
        </motion.div>

        <h1 className="font-display text-6xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
          {words.map((word, i) => (
            <motion.span
              key={word + i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: EASE }}
              className={`inline-block ${word === "MAD." ? "mad-gradient-text" : ""}`}
            >
              {word}
              {i < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
          className="mx-auto mt-6 max-w-2xl font-body text-lg text-white/70 sm:text-xl"
        >
          One house of creative and technology studios — film, product,
          AI, XR, and growth — so your brand runs on one contract instead
          of five agencies pointing fingers at each other.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <Magnetic>
            <a
              href="#contact"
              className="mad-gradient-bg inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-body text-sm font-semibold text-white shadow-[0_0_40px_-10px_rgba(124,58,255,0.6)] transition hover:shadow-[0_0_55px_-8px_rgba(124,58,255,0.85)]"
            >
              Get an estimate
              <ArrowUpRight size={16} />
            </a>
          </Magnetic>

          <Magnetic strength={0.25}>
            <a
              href="#companies"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 font-body text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              <PlayCircle size={16} />
              Explore our companies
            </a>
          </Magnetic>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-5 font-body text-xs text-white/40"
        >
          No lock-in contracts&nbsp;&nbsp;·&nbsp;&nbsp;Dedicated pod per client&nbsp;&nbsp;·&nbsp;&nbsp;NDA on request
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: EASE }}
          className="mx-auto mt-12 flex max-w-2xl flex-wrap items-center justify-center divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          {STATS.map((s) => (
            <div key={s.label} className="min-w-[140px] flex-1 px-6 py-6 text-center">
              <p className="font-display text-3xl font-bold text-white">
                <AnimatedCounter value={s.value} />
              </p>
              <p className="mt-2 font-mono-mad text-[11px] uppercase tracking-[0.25em] text-white/50">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Work showcase — tilted preview cards */}
      <Reveal delay={0.15} className="relative z-10 mx-auto mt-20 hidden max-w-5xl px-6 sm:block lg:px-10">
        <div className="flex items-end justify-center gap-6">
          {SHOWCASE.map((item, i) => (
            <div
              key={item.label}
              className={`group relative w-1/3 overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50 transition duration-500 hover:z-20 hover:!rotate-0 hover:scale-105 ${
                i === 0
                  ? "rotate-[-6deg] translate-y-3"
                  : i === 1
                    ? "z-10 rotate-0 scale-105"
                    : "rotate-[6deg] translate-y-3"
              }`}
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.label}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-mono-mad text-[10px] uppercase tracking-widest text-white/60">
                  {item.tag}
                </p>
                <p className="font-display text-sm font-bold text-white">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Gradient ribbon marquee */}
      <div className="pointer-events-none relative z-10 mt-20 w-full overflow-hidden">
        <div className="mad-gradient-bg w-[120%] -translate-x-[10%] rotate-[-2deg] overflow-hidden py-3">
          <div className="mad-marquee-track flex w-max items-center gap-10 whitespace-nowrap">
            {[...RIBBON_WORDS, ...RIBBON_WORDS].map((word, i) => (
              <span key={i} className="font-display text-sm font-bold tracking-wide text-black">
                {word}
                <span className="mx-4 opacity-50">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/40 sm:flex"
      >
        <span className="font-mono-mad text-[10px] uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}

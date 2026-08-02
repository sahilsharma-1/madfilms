"use client";

import { ArrowUpRight, Play, Sparkles, CircleCheckBig } from "lucide-react";
import VideoBackground from "./VideoBackground";
import DashboardMockup from "./DashboardMockup";
import Magnetic from "./Magnetic";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";

// Background loop — plays these 3 in order, then wraps back to the first.
// Files live in /public/videos/. Swap for your own brand reel any time,
// just keep the paths pointing at real files with the right extension.
const HERO_VIDEOS = [
  // "/videos/arvrhero.mp4",
  // "/videos/metal-human.mp4",
  // "/videos/sea-storm.mp4",
  "/videos/moon-walk.mp4",
  // "https://assets.mixkit.co/q6cmteclv5i8dsbayhbm6uojy9bu",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#060608] pb-24 pt-40 lg:pb-32 lg:pt-48">
      <VideoBackground
        sources={HERO_VIDEOS}
        overlay="bg-[#060608]/80"
        grain
        className="opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-10 lg:px-10">
        {/* Copy column */}
        <div>
          <Reveal>
            <a
              href="#"
              className="mad-shimmer-border inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 font-body text-xs font-medium text-white/80"
            >
              <Sparkles size={13} className="text-[#00C2FF]" />
              Introducing MAD Agents — autonomous AI workflows
              <ArrowUpRight size={13} />
            </a>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.2rem]">
              Run your entire{" "}
              <span className="mad-gradient-text">operation on autopilot.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-white/60">
              MAD is the AI operations platform that connects your tools, automates
              the busywork, and gives your team one place to see everything that
              matters — without writing a line of code.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Magnetic>
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-body text-sm font-semibold text-white transition hover:scale-[1.03]"
                  style={{
                    background: "linear-gradient(90deg,#0064FA,#00C2FF)",
                    boxShadow: "0 0 45px rgba(0,150,255,.35)",
                  }}
                >
                  Start free trial
                  <ArrowUpRight size={16} />
                </a>
              </Magnetic>
              <Magnetic strength={0.25}>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-body text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                    <Play size={11} className="ml-0.5 fill-white text-white" />
                  </span>
                  Watch demo
                </a>
              </Magnetic>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 font-body text-xs text-white/45">
              <span className="flex items-center gap-1.5">
                <CircleCheckBig size={14} className="text-emerald-400" />
                No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <CircleCheckBig size={14} className="text-emerald-400" />
                14-day free trial
              </span>
              <span className="flex items-center gap-1.5">
                <CircleCheckBig size={14} className="text-emerald-400" />
                Cancel anytime
              </span>
            </div>
          </Reveal>
        </div>

        {/* Visual column */}
        <div className="relative">
          <Reveal delay={0.2} y={40}>
            <DashboardMockup variant="overview" />
          </Reveal>

          {/* Floating proof chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="animate-mad-blob absolute -left-6 top-6 hidden rounded-2xl border border-white/10 bg-[#0e0e14]/90 px-4 py-3 shadow-2xl backdrop-blur sm:flex sm:items-center sm:gap-2.5"
            style={{ animationDuration: "9s" }}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400/15">
              <CircleCheckBig size={15} className="text-emerald-400" />
            </span>
            <div>
              <p className="font-body text-xs font-semibold text-white">Workflow deployed</p>
              <p className="font-mono-mad text-[10px] text-white/40">2 seconds ago</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="animate-mad-blob absolute -bottom-6 right-2 hidden rounded-2xl border border-white/10 bg-[#0e0e14]/90 px-4 py-3 shadow-2xl backdrop-blur sm:block"
            style={{ animationDuration: "11s", animationDirection: "reverse" }}
          >
            <p className="font-mono-mad text-[10px] uppercase tracking-wider text-white/35">
              Output this month
            </p>
            <p className="mad-gradient-text font-display text-2xl font-extrabold">+38%</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

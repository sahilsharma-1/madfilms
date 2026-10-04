"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { EASE, Pic, useLive, useStepper } from "./shared";
import { AGENT_MEDIA as M } from "@/lib/media";

const SRC = ["Reports", "Documents", "CRM", "Analytics"];
export default function HeroLight() {
  const still = useReducedMotion();
  const [ref, live] = useLive();
  const i = useStepper(6, 1400, live);
  const up = (d) => ({ initial: { opacity: 0, y: still ? 0 : 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, delay: d, ease: EASE } });
  return (
    <section data-tone="light" aria-labelledby="hero-h" className="mx-wash-b relative overflow-hidden pb-16 pt-28 md:pt-36" style={{ background: "radial-gradient(circle at 50% 0%, rgba(59,130,246,.12), transparent 60%), #f8fafc" }}>
      <div className="mx-wrap grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <motion.p {...up(0)} className="mx-kicker">ENTERPRISE AI</motion.p>
          <h1 id="hero-h" className="mx-display mt-4" style={{ fontSize: "clamp(2.8rem,6vw,5.8rem)" }}>AI that gets work done.</h1>
          <motion.p {...up(0.3)} className="mx-lead mt-6">AI agents that help teams find information, complete repetitive work and move decisions forward.</motion.p>
          <motion.div {...up(0.45)} className="mt-8 flex flex-wrap gap-3">
            <Link href="/agents" className="mx-btn mx-btn-solid">Explore AI agents <span aria-hidden className="mx-arrow">→</span></Link>
            <Link href="/#contact" className="mx-btn mx-btn-line">Talk to us <span aria-hidden className="mx-arrow">→</span></Link>
          </motion.div>
        </div>
        <div ref={ref} className="relative min-h-[30rem] overflow-hidden rounded-[6px] lg:min-h-[34rem]">
          <Pic m={M.ops} priority className="absolute inset-0" zoom={false} />
          <div className="mx-frag absolute inset-x-4 bottom-4 p-5 md:left-auto md:right-6 md:w-[24rem]">
            <div className="flex justify-between"><p className="mx-tag">Operations assistant</p><p className="mx-tag" style={{ color: "#1d4ed8" }}>Illustrative</p></div>
            <p className="mt-2 font-medium tracking-tight">“Summarize this month’s operations.”</p>
            <ul className="mt-3 flex flex-wrap gap-1.5">{SRC.map((s, k) => (<li key={s} className="rounded-full px-2.5 py-1 text-[.75rem] transition-colors duration-500" style={{ background: k < i ? "#2563eb" : "var(--paper-2)", color: k < i ? "#fff" : "var(--soft)" }}>{s}{k < i ? " ✓" : ""}</li>))}</ul>
            <div className="mt-3 rounded-xl p-3 transition-opacity duration-700" style={{ background: "var(--tint-v)", opacity: i >= 5 ? 1 : 0.3 }}>
              <p className="mx-tag">EXECUTIVE SUMMARY</p>
              <p className="mt-1 text-[.9rem]">Revenue ↑ &nbsp; Issues ↓ &nbsp; 3 recommendations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

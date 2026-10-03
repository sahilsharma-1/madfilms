"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Magnetic from "../MAD COMPANY/Magnetic";

const TEXT = "If you can define the problem, we can engineer the system.";

function Word({ w, range, p, still }) {
  const o = useTransform(p, range, [0.14, 1]);
  return <motion.span style={{ opacity: still ? 1 : o }} className="mr-[0.25em] inline-block">{w}</motion.span>;
}

export default function BuildAnything() {
  const ref = useRef(null);
  const still = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.55"] });
  const words = TEXT.split(" ");
  return (
    <section ref={ref} aria-labelledby="ba-h" className="relative overflow-hidden border-t border-white/10 px-6 py-32 lg:px-10 lg:py-48">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[1100px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]" />
      <div className="relative mx-auto max-w-6xl">
        <h2 id="ba-h" className="mh-h2 text-[clamp(2.5rem,6.5vw,6rem)]">
          {words.map((w, i) => (
            <Word key={i} w={w} p={scrollYProgress} still={still} range={[(i / words.length) * 0.8, ((i + 1) / words.length) * 0.8]} />
          ))}
        </h2>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-white/60">
          From an AI agent operating inside your CRM to a complete data platform, customer portal or autonomous workflow, MAD brings AI, software, data and design together under one roof.
        </p>
        <div className="mt-10">
          <Magnetic>
            <a href="#contact" className="inline-flex items-center gap-2 bg-[#ecece8] px-7 py-4 text-sm font-semibold text-black transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Tell Us What You&rsquo;re Building <ArrowUpRight size={16} />
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}

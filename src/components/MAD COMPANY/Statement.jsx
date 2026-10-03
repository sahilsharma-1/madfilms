"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const WORDS = "Bring us the job. We will build the AI that does it.".split(" ");

function Word({ w, p, a, b, still }) {
  const o = useTransform(p, [a, b], [0.2, 1]);
  return <motion.span style={still ? undefined : { opacity: o }} className="mr-[0.26em] inline-block">{w}</motion.span>;
}

export default function Statement() {
  const ref = useRef(null);
  const still = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "center 40%"] });
  return (
    <section ref={ref} data-tone="dark" aria-labelledby="st-h" className="mh-dark mh-statement relative overflow-hidden py-28 sm:py-40 lg:py-52">
      <div className="mh-wrap relative">
        <h2 id="st-h" className="max-w-6xl font-semibold text-white" style={{ fontSize: "clamp(2.4rem, 7vw, 6.4rem)", lineHeight: 1, letterSpacing: "-0.05em" }}>
          {WORDS.map((w, n) => (
            <Word key={n} w={w} p={scrollYProgress} a={n / WORDS.length * 0.8} b={n / WORDS.length * 0.8 + 0.2} still={still} />
          ))}
        </h2>
        <p className="mt-8 max-w-xl text-lg text-white/80">AI agents, software, data, automation, outreach and creative technology. One team that takes a job from idea to working system.</p>
        <Link href="#contact" className="mh-btn mt-9 bg-white text-black hover:bg-white/90">Build an AI Agent <ArrowUpRight size={15} /></Link>
      </div>
    </section>
  );
}

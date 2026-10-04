"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Lines } from "./shared";
import { JOURNEY } from "./content";

function Step({ s, last }) {
  const ref = useRef(null);
  const on = useInView(ref, { margin: "-42% 0px -42% 0px" });
  const seen = useInView(ref, { margin: "0px 0px -42% 0px" }); // passed once it has crossed the midline
  const lit = on || seen;
  return (
    <li ref={ref} className={`relative pl-12 md:pl-16 ${last ? "" : "pb-16 md:pb-24"}`}>
      <span aria-hidden className="absolute left-0 top-[.55rem] grid h-[27px] w-[27px] place-items-center rounded-full border transition-all duration-700" style={{ background: lit ? "#2563eb" : "#fff", borderColor: lit ? "#2563eb" : "var(--line-strong)", boxShadow: on ? "0 0 0 8px rgba(37,99,235,.14)" : "none" }}>
        <span className="h-[7px] w-[7px] rounded-full" style={{ background: lit ? "#fff" : "var(--line-strong)" }} />
      </span>
      <h3 className="mx-display transition-colors duration-700" style={{ fontSize: "clamp(1.9rem, 3.6vw, 3.1rem)", color: lit ? "var(--ink)" : "var(--mute)" }}>{s.t}</h3>
      <p className="mt-2 max-w-md text-[1.05rem] leading-snug" style={{ color: "var(--soft)" }}>{s.d}</p>
    </li>
  );
}

export default function Journey() {
  const ref = useRef(null);
  const still = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 55%", "end 55%"] });
  const grow = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <section id="process" data-tone="light" aria-labelledby="jr-h" className="mx-sec mx-wash-b">
      <div className="mx-wrap grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Lines id="jr-h" lines={["From idea", "to intelligence."]} dim={[1]} className="mx-display mx-h2" />
          <p className="mx-lead mt-6">One connected path from the first problem to the tenth workflow.</p>
        </div>
        <div ref={ref} className="relative">
          <div aria-hidden className="absolute left-[13px] top-3 h-[calc(100%-1.5rem)] w-px" style={{ background: "var(--line)" }}>
            <motion.div className="h-full w-px origin-top" style={{ background: "#2563eb", scaleY: still ? 1 : grow }} />
          </div>
          <ol className="relative">{JOURNEY.map((s, i) => <Step key={s.t} s={s} last={i === JOURNEY.length - 1} />)}</ol>
        </div>
      </div>
    </section>
  );
}

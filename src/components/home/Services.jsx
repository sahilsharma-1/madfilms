"use client";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Lines, EASE } from "./shared";
import { SERVICES } from "./content";

const R = 29; // orbit radius, % of the box
const pos = (i, n) => { const a = (i / n) * Math.PI * 2 - Math.PI / 2; return { x: 50 + R * Math.cos(a), y: 50 + R * Math.sin(a) }; };

export default function Services() {
  const [id, setId] = useState(SERVICES[0].id);
  const still = useReducedMotion();
  const cur = SERVICES.find((s) => s.id === id);
  return (
    <section id="services" data-tone="light" aria-labelledby="sv-h" className="mx-sec mx-white">
      <div className="mx-wrap grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
        <div>
          <Lines id="sv-h" lines={["One partner.", "From AI strategy", "to production."]} dim={[1, 2]} className="mx-display mx-h2" />
          <div className="mt-10 min-h-[10rem] border-t pt-6" style={{ borderColor: "var(--line)" }} aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div key={id} initial={{ opacity: 0, y: still ? 0 : 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease: EASE }}>
                <p className="mx-h3">{cur.name}</p>
                <p className="mx-lead mt-2" style={{ fontSize: "1.05rem" }}>{cur.line}</p>
                <Link href={cur.href} className="mt-5 inline-flex items-center gap-2 text-[.95rem] font-medium" style={{ color: "var(--violet-ink)" }}>Explore <span aria-hidden className="mx-arrow">→</span></Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* orbit (md+) */}
        <div className="relative mx-auto hidden aspect-square w-full max-w-[42rem] md:block">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
            <circle cx="50" cy="50" r={R} fill="none" stroke="rgba(15,14,20,.12)" strokeWidth=".18" />
            <circle cx="50" cy="50" r={R + 9} fill="none" stroke="rgba(37,99,235,.25)" strokeWidth=".18" strokeDasharray=".4 1.6" className="mx-spin-slow" />
            <circle cx="50" cy="50" r={R - 12} fill="none" stroke="rgba(15,14,20,.08)" strokeWidth=".18" />
            {SERVICES.map((s, i) => { const p = pos(i, SERVICES.length); const a = s.id === id; return <line key={s.id} x1="50" y1="50" x2={p.x} y2={p.y} stroke={a ? "#2563eb" : "rgba(15,14,20,.12)"} strokeWidth={a ? ".35" : ".18"} className={a && !still ? "mx-flow" : ""} style={{ transition: "stroke .5s" }} />; })}
          </svg>
          <div className="absolute left-1/2 top-1/2 grid h-[18%] w-[18%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full" style={{ background: "var(--ink)", color: "var(--paper)" }}>
            <span className="text-[1.5rem] font-medium tracking-[-.04em]">MAD</span>
          </div>
          {SERVICES.map((s, i) => {
            const p = pos(i, SERVICES.length);
            const right = p.x > 52, left = p.x < 48;
            const a = s.id === id;
            return (
              <button key={s.id} onClick={() => setId(s.id)} onMouseEnter={() => setId(s.id)} onFocus={() => setId(s.id)} aria-pressed={a}
                className="group absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2.5" style={{ left: `${p.x}%`, top: `${p.y}%`, flexDirection: left ? "row-reverse" : "row" }}>
                <span className="grid h-5 w-5 place-items-center rounded-full border bg-white transition-all duration-500" style={{ borderColor: a ? "#2563eb" : "var(--line-strong)", boxShadow: a ? "0 0 0 8px rgba(37,99,235,.14)" : "none" }}>
                  <span className="h-2 w-2 rounded-full transition-colors" style={{ background: a ? "#2563eb" : "#0f0e14" }} />
                </span>
                <span className={`w-[7.2rem] text-[.9rem] leading-tight tracking-tight transition-colors ${left ? "text-right" : ""} ${!left && !right ? "absolute left-1/2 w-max -translate-x-1/2 " + (p.y < 50 ? "-top-7" : "top-7") : ""}`} style={{ color: a ? "var(--ink)" : "var(--soft)", fontWeight: a ? 500 : 400 }}>{s.name}</span>
              </button>
            );
          })}
        </div>

        {/* list (mobile) */}
        <ul className="md:hidden">
          {SERVICES.map((s) => (
            <li key={s.id} className="border-t" style={{ borderColor: "var(--line)" }}>
              <button onClick={() => setId(s.id)} aria-pressed={s.id === id} className="flex w-full items-center justify-between py-4 text-left text-[1.25rem] tracking-tight" style={{ color: s.id === id ? "var(--ink)" : "var(--soft)" }}>
                {s.name}<span aria-hidden className="mx-dot" style={{ opacity: s.id === id ? 1 : 0 }} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Lines, Pic, EASE } from "./shared";
import { INDUSTRIES } from "./content";
import { HOME_MEDIA } from "../../lib/media";

function Diagram({ nodes, still }) {
  const X = [50, 150, 250, 350];
  return (
    <div>
      <svg viewBox="0 0 400 44" className="h-auto w-full" aria-hidden>
        <motion.line x1="50" y1="22" x2="350" y2="22" stroke="rgba(15,14,20,.18)" strokeWidth="1" initial={{ pathLength: still ? 1 : 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, ease: EASE }} />
        {!still && <line x1="50" y1="22" x2="350" y2="22" stroke="#2563eb" strokeWidth="1.4" className="mx-flow" />}
        {X.map((x, i) => (
          <motion.g key={x} initial={{ opacity: 0, scale: still ? 1 : 0.4 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 + i * 0.18, duration: 0.6, ease: EASE }} style={{ transformOrigin: `${x}px 22px` }}>
            <circle cx={x} cy="22" r={i === 1 ? 11 : 8} fill="#fff" stroke={i === 1 ? "#2563eb" : "rgba(15,14,20,.4)"} strokeWidth="1.2" />
            <circle cx={x} cy="22" r={i === 1 ? 4.5 : 2.6} fill={i === 1 || i === 3 ? "#2563eb" : "#0f0e14"} />
          </motion.g>
        ))}
        {!still && <circle r="3" fill="#2563eb"><animate attributeName="cx" values="50;350" dur="4.5s" repeatCount="indefinite" /><animate attributeName="cy" values="22;22" dur="4.5s" repeatCount="indefinite" /><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.08;.92;1" dur="4.5s" repeatCount="indefinite" /></circle>}
      </svg>
      <ul className="mt-2 grid grid-cols-4 text-center">
        {nodes.map((n) => <li key={n} className="px-1 text-[.75rem] leading-tight" style={{ color: "var(--soft)" }}>{n}</li>)}
      </ul>
    </div>
  );
}

export default function IndustryExplorer() {
  const still = useReducedMotion();
  const [id, setId] = useState(INDUSTRIES[0].id);
  const tabs = useRef([]);
  const cur = INDUSTRIES.find((x) => x.id === id);

  useEffect(() => {
    const on = (e) => INDUSTRIES.some((x) => x.id === e.detail) && setId(e.detail);
    window.addEventListener("mad:industry", on);
    return () => window.removeEventListener("mad:industry", on);
  }, []);

  const onKey = (e) => {
    const i = INDUSTRIES.findIndex((x) => x.id === id);
    const d = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
    if (!d) return;
    e.preventDefault();
    const n = (i + d + INDUSTRIES.length) % INDUSTRIES.length;
    setId(INDUSTRIES[n].id);
    tabs.current[n]?.focus();
  };

  return (
    <section id="industries" data-tone="light" aria-labelledby="ind-h" className="mx-sec mx-wash-v">
      <div className="mx-wrap">
        <Lines id="ind-h" lines={["AI across every part", "of your business."]} dim={[1]} className="mx-display mx-h2 max-w-4xl" />

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-[17rem_1fr] lg:gap-16">
          <div role="tablist" aria-label="Industries" aria-orientation="vertical" onKeyDown={onKey} className="no-scrollbar -mx-5 flex gap-1 overflow-x-auto px-5 lg:mx-0 lg:flex-col lg:overflow-visible lg:border-l lg:px-0" style={{ borderColor: "var(--line)" }}>
            {INDUSTRIES.map((x, i) => (
              <button key={x.id} ref={(el) => (tabs.current[i] = el)} role="tab" id={`tab-${x.id}`} aria-selected={id === x.id} aria-controls="ind-panel" tabIndex={id === x.id ? 0 : -1} onClick={() => setId(x.id)}
                className="mx-ind-btn shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-[1rem] tracking-tight lg:-ml-px lg:rounded-none lg:border-0 lg:border-l-2 lg:border-transparent lg:px-5 lg:py-3 lg:text-[1.35rem]"
                style={{ borderColor: id === x.id ? "var(--violet)" : "var(--line)" }}>
                {x.name}
              </button>
            ))}
          </div>

          <div id="ind-panel" role="tabpanel" aria-labelledby={`tab-${id}`} className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.div key={id} initial={{ opacity: 0, y: still ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: EASE }}>
                <div className="grid gap-8 xl:grid-cols-[1.1fr_1fr] xl:gap-12">
                  <Pic m={HOME_MEDIA.industry[id]} className="aspect-[16/11] w-full rounded-[2px] xl:aspect-auto xl:min-h-[26rem]" />
                  <div className="flex flex-col justify-between gap-10">
                    <h3 className="mx-display" style={{ fontSize: "clamp(1.9rem, 3.3vw, 3.2rem)", lineHeight: 1.02 }}>
                      {cur.head.map((l, i) => <span key={l} className="block" style={{ color: i === 0 ? "var(--ink)" : i === 1 ? "var(--soft)" : "var(--mute)" }}>{l}</span>)}
                    </h3>
                    <Diagram nodes={cur.nodes} still={!!still} />
                  </div>
                </div>

                <div className="mt-10 grid gap-10 border-t pt-8 md:grid-cols-2 md:gap-14" style={{ borderColor: "var(--line)" }}>
                  <div>
                    <p className="mx-small">Capabilities</p>
                    <ul className="mt-3">
                      {cur.caps.map((c) => <li key={c} className="border-b py-2.5 text-[1.1rem] tracking-tight" style={{ borderColor: "var(--line)" }}>{c}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="mx-small">What changes</p>
                    <ul className="mt-3">
                      {cur.outcomes.map((c) => <li key={c} className="flex items-center gap-3 border-b py-2.5 text-[1.1rem] tracking-tight" style={{ borderColor: "var(--line)" }}><span className="mx-dot" />{c}</li>)}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

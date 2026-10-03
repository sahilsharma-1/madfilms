"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CAPABILITIES } from "./data";
import { Reveal } from "../MAD COMPANY/Reveal";

export default function Capabilities() {
  const [i, setI] = useState(0);
  const cur = CAPABILITIES[i];
  return (
    <section id="capabilities" aria-labelledby="cap-h" className="border-t border-white/10 px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal><h2 id="cap-h" className="mh-h2 max-w-4xl text-[clamp(2.25rem,5vw,4.5rem)]">We can build what your business needs.</h2></Reveal>
        <div className="mt-16 grid gap-10 lg:grid-cols-[320px_1fr]">
          <div role="tablist" aria-label="Capability areas" className="flex gap-2 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-visible no-scrollbar">
            {CAPABILITIES.map((c, n) => (
              <button key={c.id} role="tab" aria-selected={n === i} aria-controls="cap-panel" id={`cap-${c.id}`} onClick={() => setI(n)} onMouseEnter={() => setI(n)}
                className={`flex shrink-0 items-center justify-between gap-6 border-white/10 px-1 py-4 text-left text-lg transition-colors lg:border-b ${n === i ? "text-white" : "text-white/40 hover:text-white/70"} focus-visible:outline focus-visible:outline-2 focus-visible:outline-white`}>
                <span>{c.title}</span>
                <span aria-hidden className={`hidden h-px transition-all duration-300 lg:block ${n === i ? "w-10 bg-[#c7deff]" : "w-4 bg-white/20"}`} />
              </button>
            ))}
          </div>
          <div id="cap-panel" role="tabpanel" aria-labelledby={`cap-${cur.id}`} className="min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.ul key={cur.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="grid border-l border-t border-white/10 sm:grid-cols-2">
                {cur.items.map((it) => (
                  <li key={it} className="border-b border-r border-white/10 px-6 py-6 text-lg text-white/80 transition-colors hover:bg-white/[0.04] hover:text-white">{it}</li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

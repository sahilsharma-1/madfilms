"use client";
import { useState } from "react";
import { PROCESS } from "./data";
import { Reveal } from "../MAD COMPANY/Reveal";

export default function Process() {
  const [i, setI] = useState(0);
  return (
    <section id="process" aria-labelledby="pr-h" className="border-t border-white/10 px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal><h2 id="pr-h" className="mh-h2 text-[clamp(2.25rem,5vw,4.5rem)]">From idea to deployment.</h2></Reveal>
        <div className="relative mt-20">
          <div aria-hidden className="absolute left-0 right-0 top-[7px] hidden h-px bg-white/15 lg:block" />
          <div aria-hidden className="absolute left-0 top-[7px] hidden h-px bg-[#c7deff] transition-all duration-500 lg:block" style={{ width: `${(i / (PROCESS.length - 1)) * 100}%` }} />
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
            {PROCESS.map((p, n) => (
              <li key={p.n}>
                <button onClick={() => setI(n)} onMouseEnter={() => setI(n)} onFocus={() => setI(n)} aria-current={n === i ? "step" : undefined} className="group block w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                  <span className={`relative z-10 mb-6 block h-[15px] w-[15px] border transition-colors ${n <= i ? "border-[#c7deff] bg-[#c7deff]" : "border-white/40 bg-[#050507]"}`} />
                  <span className="mh-label">{p.n}</span>
                  <span className={`mt-2 block text-2xl font-medium tracking-tight transition-colors ${n === i ? "text-white" : "text-white/45"}`}>{p.t}</span>
                  <span className={`mt-3 block text-sm leading-snug transition-colors ${n === i ? "text-white/65" : "text-white/30"}`}>{p.d}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

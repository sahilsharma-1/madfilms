"use client";
import { useState } from "react";
import AgentFlow from "./AgentFlow";
import { Reveal } from "./Reveal";
import { SCENARIOS } from "./data";

export default function Scenarios() {
  const [i, setI] = useState(0);
  const s = SCENARIOS[i];
  return (
    <section id="scenarios" data-tone="light" aria-labelledby="sc-h" className="mh-sec">
      <div className="mh-wrap">
        <Reveal className="max-w-3xl">
          <p className="mh-label mb-5">What an agent can do</p>
          <h2 id="sc-h" className="mh-h2">So what can an AI agent actually do?</h2>
          <p className="mh-lead mt-5">More than answer questions. Pick a job.</p>
        </Reveal>

        <div role="tablist" aria-label="Agent jobs" className="no-scrollbar -mx-6 mt-10 flex gap-2 overflow-x-auto px-6 lg:mx-0 lg:flex-wrap lg:px-0">
          {SCENARIOS.map((x, n) => (
            <button key={x.name} role="tab" aria-selected={n === i} onClick={() => setI(n)}
              className={`flex shrink-0 items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition ${n === i ? "border-black bg-black text-white" : "b-line t-soft hover:border-black hover:text-black"}`}>
              <span aria-hidden className="h-2 w-2 rounded-full" style={{ background: `linear-gradient(120deg, ${x.c1}, ${x.c2})` }} />
              {x.name}
            </button>
          ))}
        </div>

        <div role="tabpanel" className="relative mt-5 overflow-hidden rounded-[2rem] text-white">
          {SCENARIOS.map((x, n) => (
            <div key={x.name} aria-hidden className="absolute inset-0 transition-opacity duration-700" style={{ opacity: n === i ? 1 : 0, background: `radial-gradient(70% 90% at 100% 0%, ${x.c2}, transparent 70%), linear-gradient(135deg, ${x.c1}, ${x.c2})` }} />
          ))}
          <div className="relative grid min-h-[27rem] items-center gap-8 p-6 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:p-14">
            <div>
              <p className="text-sm font-medium text-white/70">{s.agent}</p>
              <h3 className="mt-3 font-semibold" style={{ fontSize: "clamp(1.9rem, 3.8vw, 3.4rem)", lineHeight: 1.04, letterSpacing: "-0.04em" }}>{s.line}</h3>
              <p className="mt-5 max-w-md text-[17px] leading-snug text-white/80">{s.note}</p>
            </div>
            <div className="rounded-3xl bg-white p-6 text-black shadow-[0_30px_80px_-30px_rgba(0,0,0,.55)] sm:p-8">
              <div className="mb-5 flex items-center gap-2 text-xs text-black/50">
                <span aria-hidden className="h-2 w-2 rounded-full mh-grad-bg mh-pulse" /> {s.agent}, working
              </div>
              <AgentFlow key={s.name} steps={s.steps} dark={false} speed={1250} />
            </div>
          </div>
        </div>
        <p className="t-mute mt-5 text-xs">Examples are illustrative.</p>
      </div>
    </section>
  );
}

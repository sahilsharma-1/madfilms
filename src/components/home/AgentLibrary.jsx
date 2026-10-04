"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import * as L from "lucide-react";
import { Lines, Fade, Pic, useLive, useStepper, EASE } from "./shared";
import { TABS } from "./agentsData";

function Demo({ t }) {
  const [ref, live] = useLive();
  const n = t.steps.length + 1;
  const i = useStepper(n, 1500, live);
  const done = i === n - 1;
  return (
    <div ref={ref} className="mx-frag w-full p-5" style={{ background: "#fff" }}>
      <div className="flex items-center justify-between">
        <p className="mx-tag">{t.chip[0]}</p>
        <p className="mx-tag" style={{ color: "#1d4ed8" }}>Example workflow</p>
      </div>
      <p className="mt-3 text-[1.05rem] font-medium tracking-tight">{t.ask}</p>
      <dl className="mt-4 grid grid-cols-3 gap-2">
        {t.facts.map(([k, v]) => (<div key={k} className="rounded-lg p-2" style={{ background: "var(--paper)" }}><dt className="mx-tag">{k}</dt><dd className="mt-0.5 text-[.78rem] leading-tight">{v}</dd></div>))}
      </dl>
      <ol className="mt-4 space-y-2">
        {t.steps.map((s, k) => (
          <li key={s} className="flex items-center gap-2.5 text-[.85rem] transition-opacity duration-500" style={{ opacity: k <= i ? 1 : 0.3 }}>
            <span aria-hidden className="grid h-5 w-5 place-items-center rounded-full text-[.7rem]" style={{ background: k < i ? "#2563eb" : "var(--paper-2)", color: k < i ? "#fff" : "var(--mute)" }}>{k < i ? "✓" : k === i ? <span className="mx-dot mx-dot-live" /> : ""}</span>{s}
          </li>
        ))}
      </ol>
      <div className="mt-4 h-1 overflow-hidden rounded-full" style={{ background: "var(--paper-2)" }}><div className="h-full rounded-full" style={{ background: "#2563eb", width: `${(Math.min(i, n - 1) / (n - 1)) * 100}%`, transition: "width 1.2s cubic-bezier(.21,.47,.32,.98)" }} /></div>
      <div className="mt-4 rounded-xl p-3 transition-opacity duration-700" style={{ background: "var(--tint-v)", opacity: done ? 1 : 0.35 }}>
        <p className="font-medium">{t.result[0]}</p><p className="mx-small mt-0.5" style={{ color: "var(--soft)" }}>{t.result[1]}</p>
      </div>
    </div>
  );
}

export function AgentPanel({ t }) {
  const still = useReducedMotion();
  return (
    <motion.div key={t.id} role="tabpanel" id={`pn-${t.id}`} aria-labelledby={`tb-${t.id}`} initial={{ opacity: 0, y: still ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: EASE }}>
      <p className="mx-small uppercase tracking-wider">{t.full}</p>
      <h3 className="mx-display mt-2" style={{ fontSize: "clamp(2rem,4.4vw,3.9rem)" }}>{t.title}</h3>
      <p className="mx-lead mt-3">{t.line}</p>
      <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
        <div className="relative min-h-[20rem]">
          <Pic m={t.img} className="absolute inset-0 rounded-[4px]" />
          <div className="mx-frag mx-float absolute bottom-4 left-4 p-3 pr-5"><p className="mx-tag">{t.chip[0]}</p><p className="mt-1 flex items-center gap-2 font-medium">{t.chip[1]} <span aria-hidden>→</span> {t.chip[2]}</p></div>
        </div>
        <Demo t={t} />
      </div>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {t.agents.map(([a, d]) => (<li key={a} className="rounded-xl border p-4" style={{ borderColor: "var(--line)", background: "#fff" }}><p className="font-medium tracking-tight">{a} Agent</p><p className="mx-small mt-1">{d}</p></li>))}
      </ul>
      <Link href={`/agents#${t.id}`} className="mt-6 inline-flex items-center gap-2 font-medium" style={{ color: "var(--violet-ink)" }}>See how it works <span aria-hidden className="mx-arrow">→</span></Link>
    </motion.div>
  );
}

export default function AgentLibrary({ headless = false }) {
  const [id, setId] = useState(TABS[0].id);
  useEffect(() => { const h = window.location.hash.slice(1); if (TABS.some((x) => x.id === h)) setId(h); }, []);
  const t = TABS.find((x) => x.id === id);
  const key = (e, i) => { const j = e.key === "ArrowRight" ? i + 1 : e.key === "ArrowLeft" ? i - 1 : null; if (j === null) return; const nx = TABS[(j + TABS.length) % TABS.length]; setId(nx.id); document.getElementById(`tb-${nx.id}`)?.focus(); };
  return (
    <section id="agent-library" data-tone="light" aria-labelledby="al-h" className="mx-sec mx-white">
      <div className="mx-wrap">
        {!headless && (<>
          <p className="mx-kicker">BUILT FOR REAL WORK</p>
          <Lines id="al-h" lines={["AI agents for", "work that matters."]} dim={[1]} className="mx-display mx-h2 mt-4" />
          <Fade delay={0.15}><p className="mx-lead mt-5 max-w-2xl">AI agents can take repetitive, information-heavy workflows off your team’s plate, from screening candidates to resolving customer requests and processing documents.</p></Fade>
        </>)}
        {headless && <h2 id="al-h" className="sr-only">AI agents by department</h2>}
        <div role="tablist" aria-label="Departments" className={`${headless ? "" : "mt-12"} -mx-5 flex gap-2 overflow-x-auto px-5 pb-3 md:mx-0 md:flex-wrap md:px-0`}>
          {TABS.map((x, i) => { const Ic = L[x.icon]; const on = x.id === id; return (
            <button key={x.id} role="tab" id={`tb-${x.id}`} aria-selected={on} aria-controls={`pn-${x.id}`} tabIndex={on ? 0 : -1} onClick={() => setId(x.id)} onKeyDown={(e) => key(e, i)}
              className="flex shrink-0 items-center gap-2.5 rounded-full border py-1.5 pl-1.5 pr-4 text-sm transition-colors" style={{ borderColor: on ? "#2563eb" : "var(--line)", background: on ? "var(--tint-v)" : "#fff", color: on ? "var(--ink)" : "var(--soft)" }}>
              <Pic m={x.img} zoom={false} className="h-8 w-8 rounded-full" />{Ic && <Ic size={15} aria-hidden />}{x.label}
            </button>); })}
        </div>
        <div className="mt-10"><AnimatePresence mode="wait"><AgentPanel key={t.id} t={t} /></AnimatePresence></div>
        <p className="mx-small mt-10 max-w-2xl">Illustrative AI workflows. They show what agents like these can do and are not a list of finished products, customers or results.</p>
      </div>
    </section>
  );
}

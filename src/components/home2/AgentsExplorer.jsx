"use client";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Photo, Win, Pill, Avatar, Flow, EASE, useLive } from "./ui";
import { AGENTS } from "./agentsData2";

function UI({ ui }) {
  if (ui.type === "table") {
    const g = { gridTemplateColumns: ui.cols.length === 3 ? "1.3fr 1.2fr auto" : "1fr 1fr" };
    return (
      <Win title={ui.title}>
        <div className="h2-row h2-th" style={g}>{ui.cols.map((c) => <span key={c}>{c}</span>)}</div>
        {ui.rows.map((r, i) => (
          <div key={i} className="h2-row h2-in" style={{ ...g, animationDelay: `${i * 0.12}s` }}>
            <span className="flex items-center gap-1.5 font-medium"><Avatar n={String(r[0])[0]} />{r[0]}</span>
            {typeof r[1] === "number" ? <span className="flex items-center gap-1.5"><span className="h2-bar w-12"><i style={{ width: `${r[1]}%` }} /></span>{r[1]}%</span> : <span style={{ color: "var(--soft)" }}>{r[1]}</span>}
            {Array.isArray(r[2]) && <Pill k={r[2][0]}>{r[2][1]}</Pill>}
          </div>
        ))}
      </Win>
    );
  }
  if (ui.type === "chat") return (
    <Win title={ui.title}><div className="flex flex-col gap-1.5">{ui.msgs.map((m, i) => <p key={i} className={`h2-bub h2-in ${m[0]}`} style={{ animationDelay: `${i * 0.35}s` }}>{m[1]}</p>)}</div></Win>
  );
  if (ui.type === "brief") return (
    <Win title={ui.title}>{ui.lines.map(([k, v], i) => <div key={k} className="h2-row h2-in" style={{ gridTemplateColumns: "1fr 1.4fr", animationDelay: `${i * 0.12}s` }}><span className="h2-th">{k}</span><span className="font-medium">{v}</span></div>)}</Win>
  );
  return (
    <Win title={ui.title}>
      <div className="grid grid-cols-5 gap-1 text-center">{ui.days.map((d) => <span key={d} className="h2-th">{d}</span>)}
        {ui.days.map((d) => { const it = ui.items.find((x) => x[0] === d); return <div key={d} className="min-h-[3.4rem] rounded-md p-1" style={{ background: "var(--w-light)" }}>{it && <p className="h2-in rounded px-1 py-1 text-left text-[.62rem] font-semibold leading-tight" style={{ background: "#fff", borderLeft: "3px solid var(--w-acc)" }}>{it[1]}</p>}</div>; })}
      </div>
    </Win>
  );
}

export default function AgentsExplorer() {
  const [i, setI] = useState(0);
  const [ref, live] = useLive();
  const still = useReducedMotion();
  const tabs = useRef([]);
  const a = AGENTS[i];
  const v = i % 3; // layout variant: the composition changes tab to tab
  const onKey = (e) => {
    const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!d) return; e.preventDefault();
    const n = (i + d + AGENTS.length) % AGENTS.length; setI(n); tabs.current[n]?.focus();
  };
  return (
    <section id="agents" data-tone="light" aria-labelledby="h2-ag" className="h2-sec" ref={ref}>
      <div className="h2-wrap">
        <div className="grid items-end gap-4 lg:grid-cols-12">
          <h2 id="h2-ag" className="h2-h2 lg:col-span-7">AI that gets the work done.</h2>
          <p className="h2-lead lg:col-span-5">From recruiting to finance, procurement, marketing and support, we build AI workflows around the work your team already does.</p>
        </div>
        <div role="tablist" aria-label="AI agents by team" className="h2-tabs mt-7" onKeyDown={onKey}>
          {AGENTS.map((t, k) => <button key={t.id} ref={(el) => (tabs.current[k] = el)} role="tab" id={`tab-${t.id}`} aria-controls="agent-panel" aria-selected={i === k} tabIndex={i === k ? 0 : -1} onClick={() => setI(k)} className="h2-tab" data-world={t.world}>{t.label}</button>)}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={a.id} id="agent-panel" role="tabpanel" aria-labelledby={`tab-${a.id}`} data-world={a.world}
            initial={{ opacity: 0, y: still ? 0 : 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.45, ease: EASE }}
            className="mt-5 rounded-[18px] p-3 md:p-5" style={{ background: "var(--w-light)" }}>
            <div className="grid grid-cols-12 gap-3 md:gap-4">
              {/* Large photo + overlapping UI. Order and proportions rotate with the variant. */}
              <div className={`relative col-span-12 ${v === 0 ? "lg:col-span-5" : v === 1 ? "lg:col-span-4 lg:order-2" : "lg:col-span-7"}`}>
                <Photo slot={a.photo} className={`rounded-[12px] ${v === 2 ? "h-56 md:h-[22rem]" : "h-64 md:h-[28rem]"}`} />
                <p className="absolute left-3 top-3 max-w-[85%] rounded-full bg-white px-3 py-1.5 text-[.75rem] font-medium shadow-sm md:text-[.8rem]">“{a.ask}”</p>
              </div>
              <div className={`col-span-12 flex flex-col gap-3 md:gap-4 ${v === 0 ? "lg:col-span-7" : v === 1 ? "lg:col-span-8 lg:order-1" : "lg:col-span-5"}`}>
                <h3 className="text-[1.6rem] font-semibold leading-[1.02] tracking-[-.04em] md:text-[2.4rem]" style={{ color: "var(--w-dark)" }}>{a.head}</h3>
                <UI ui={a.ui} />
                <div className="rounded-xl bg-white p-3 md:p-4"><Flow stages={a.stages} run={live} className="!grid-cols-2 md:!grid-cols-4 gap-y-2" />
                  <div className="mt-3 flex flex-wrap items-center gap-2 border-t pt-3" style={{ borderColor: "var(--line)" }}>
                    <span className="h2-th">Human approval</span>
                    <span className="h2-btn-s pri">{a.approve[0]}</span><span className="h2-btn-s">{a.approve[1]}</span>
                    <span className="h2-th ml-auto">Example workflow</span>
                  </div>
                </div>
              </div>
              {/* Agents in this team: unequal widths on purpose. */}
              <div className="col-span-12 flex flex-wrap gap-2 md:gap-3">
                {a.agents.map((n, k) => {
                  const g = (v === 0 ? [4, 3, 3, 2] : v === 1 ? [2, 4, 3, 3] : [3, 2, 4, 3])[k];
                  return <p key={n} className="rounded-xl bg-white/70 px-3 py-3 text-[.82rem] font-medium md:py-4 lg:text-[.9rem]" style={{ flex: `${g} 1 8rem`, color: "var(--w-dark)" }}>{n}</p>;
                })}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

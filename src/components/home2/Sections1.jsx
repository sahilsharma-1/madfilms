"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Photo, Win, Pill, Flow, EASE, useLive, useStepper, Fade } from "./ui";

/* 04 CUSTOM AUTOMATION: company in the middle, five inputs flow into it, one result comes out. */
export function CustomAutomation() {
  const [ref, live] = useLive();
  const ins = ["Your systems", "Your data", "Your approvals", "Your teams", "Your content", "Your processes"];
  const i = useStepper(ins.length, 1100, live);
  return (
    <section id="custom" data-tone="light" aria-labelledby="h2-cu" className="h2-sec" ref={ref} style={{ background: "#fff" }} data-world="blue">
      <div className="h2-wrap grid items-center gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="h2-eyebrow">Custom automation</p>
          <h2 id="h2-cu" className="h2-h2 mt-3">Your workflow. Your rules. Your AI.</h2>
          <p className="h2-lead mt-4">We don&rsquo;t force every company into the same workflow. We build around how you already work.</p>
          <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-1.5 text-[.95rem] font-medium">
            {ins.map((t, k) => <li key={t} className="flex items-center gap-2 border-b py-1.5 transition-colors" style={{ borderColor: "var(--line)", color: k === i ? "var(--w-acc)" : "var(--ink)" }}><span className="h-1.5 w-1.5 rounded-full" style={{ background: k === i ? "var(--w-acc)" : "var(--line)" }} />{t}</li>)}
          </ul>
        </div>
        <div className="lg:col-span-7">
          <div className="rounded-[18px] p-4 md:p-8" style={{ background: "var(--w-light)" }}>
            <div className="grid grid-cols-12 items-center gap-2 md:gap-4">
              <div className="col-span-4 flex flex-col gap-2">
                {["Data", "Tools", "People", "Approvals"].map((t, k) => <p key={t} className="rounded-lg bg-white px-3 py-2.5 text-[.78rem] font-semibold shadow-sm md:py-3" style={{ transform: `translateX(${k % 2 ? 10 : 0}px)` }}>{t}</p>)}
              </div>
              <svg viewBox="0 0 60 120" className="col-span-1 h-full w-full" aria-hidden preserveAspectRatio="none">{[15, 45, 75, 105].map((y) => <path key={y} d={`M0 ${y} C30 ${y} 30 60 60 60`} fill="none" stroke="#2f6fe4" strokeWidth="1.5" className="h2-dash" />)}</svg>
              <div className="col-span-4 grid aspect-square place-items-center rounded-2xl text-center" style={{ background: "var(--w-dark)", color: "#fff" }}>
                <div><p className="text-[.6rem] uppercase tracking-[.14em] opacity-70">Built for</p><p className="mt-1 text-[1rem] font-semibold leading-tight md:text-[1.3rem]">Your company</p><p className="mt-2 text-[.7rem] opacity-80">Custom AI automation</p></div>
              </div>
              <svg viewBox="0 0 30 20" className="col-span-1 w-full" aria-hidden><path d="M0 10H26M20 4L27 10L20 16" fill="none" stroke="#2f6fe4" strokeWidth="1.5" className="h2-dash" /></svg>
              <Win title="Result" className="col-span-2 !rounded-lg" tag="Example"><Pill>Done</Pill><p className="mt-1 text-[.62rem] leading-tight">Approved by your team</p></Win>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 05 SEE IT IN ACTION: a six-step workflow that plays, with a clickable step list. */
const STEPS = [
  { k: "You ask", ui: "ask", t: "“Prepare the Q3 supplier review.”" },
  { k: "AI understands", ui: "think", t: "Goal: compare 12 suppliers. Needs: spend, delivery, contracts." },
  { k: "AI researches", ui: "src", t: "Reading contracts, ERP exports and past reviews." },
  { k: "AI works", ui: "work", t: "Scoring suppliers and drafting findings." },
  { k: "AI delivers", ui: "doc", t: "Review pack ready: summary, table, 3 risks." },
  { k: "You approve", ui: "ok", t: "Approve, edit or send back." },
];
export function WatchAI() {
  const [ref, live] = useLive();
  const [pin, setPin] = useState(null);
  const auto = useStepper(STEPS.length, 2200, live && pin === null);
  const i = pin ?? auto;
  const s = STEPS[i];
  return (
    <section id="watch" data-tone="dark" aria-labelledby="h2-wa" className="h2-sec" ref={ref} style={{ background: "#08142b", color: "#fff" }} data-world="blue">
      <div className="h2-wrap grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="h2-eyebrow" style={{ color: "#8fb4ff" }}>See it in action</p>
          <h2 id="h2-wa" className="h2-h2 mt-3">Watch AI do the work.</h2>
          <p className="mt-3 text-[.7rem] uppercase tracking-[.1em] opacity-60">Illustrative workflow</p>
          <ol className="mt-5">{STEPS.map((x, k) => (
            <li key={x.k}><button onClick={() => setPin(k === pin ? null : k)} aria-current={k === i} className="flex w-full items-center gap-3 border-b py-2.5 text-left transition-opacity" style={{ borderColor: "rgba(255,255,255,.12)", opacity: k === i ? 1 : 0.45 }}>
              <span className="text-[.7rem] tabular-nums opacity-70">0{k + 1}</span><span className="text-[1.05rem] font-medium tracking-tight">{x.k}</span></button></li>))}
          </ol>
        </div>
        <div className="lg:col-span-8">
          <div className="rounded-[18px] p-3 md:p-6" style={{ background: "radial-gradient(70% 80% at 80% 0%, rgba(47,111,228,.35), transparent 70%), #0d1f42" }}>
            <Win title="MAD workspace" dark className="min-h-[19rem]">
              <div key={i} className="h2-in flex min-h-[15rem] flex-col justify-center gap-3 p-2 md:p-6">
                <p className="text-[.65rem] uppercase tracking-[.12em] opacity-60">Step 0{i + 1} · {s.k}</p>
                <p className="text-[1.2rem] font-medium leading-snug tracking-tight md:text-[1.7rem]">{s.t}</p>
                {s.ui === "src" && <div className="flex flex-wrap gap-1.5">{["Contracts", "ERP", "Past reviews", "Emails"].map((x, k) => <span key={x} className="h2-in rounded-full border px-2.5 py-1 text-[.7rem]" style={{ borderColor: "rgba(255,255,255,.2)", animationDelay: `${k * .25}s` }}>{x} ✓</span>)}</div>}
                {s.ui === "work" && <div className="space-y-2">{[78, 54, 91].map((w, k) => <div key={k} className="h2-bar !bg-white/10"><i style={{ width: `${w}%`, background: "#6fa3ff" }} /></div>)}</div>}
                {s.ui === "doc" && <div className="grid grid-cols-3 gap-2">{["Summary", "Table", "3 risks"].map((x) => <p key={x} className="rounded-lg bg-white/10 p-3 text-[.75rem]">{x}</p>)}</div>}
                {s.ui === "ok" && <div className="flex gap-2"><span className="h2-btn-s pri" style={{ background: "#2f6fe4", borderColor: "#2f6fe4" }}>Approve</span><span className="h2-btn-s !bg-transparent">Edit</span><span className="h2-btn-s !bg-transparent">Send back</span></div>}
              </div>
              <div className="h2-bar mt-1 !bg-white/10"><i style={{ width: `${((i + 1) / STEPS.length) * 100}%`, background: "#6fa3ff", transition: "width .8s" }} /></div>
            </Win>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 06 WORKFLOW GALLERY: horizontal scroller, deliberately unequal cards. */
const WF = [
  { n: "Recruiting", w: "blue", p: "hr", f: "CV > Shortlist > Interview", o: "Shortlists ready for review", wd: 22 },
  { n: "Finance", w: "green", p: "finance", f: "Invoice > Match > Approve", o: "Fewer invoices typed by hand", wd: 17 },
  { n: "Procurement", w: "gold", p: "procurement", f: "Request > Checks > Sign-off", o: "Requests arrive pre-checked", wd: 15 },
  { n: "Sales", w: "blue", p: "sales", f: "Lead > Brief > CRM", o: "Account briefs before calls", wd: 22 },
  { n: "Marketing", w: "red", p: "marketing", f: "Brief > Content > Publish", o: "A first draft of the campaign", wd: 17 },
  { n: "Customer Support", w: "green", p: "support", f: "Message > Check > Reply", o: "Routine questions answered", wd: 15 },
  { n: "Operations", w: "gold", p: "operations", f: "Monitor > Flag > Fix", o: "Issues ranked by impact", wd: 22 },
  { n: "Healthcare", w: "green", p: "healthcare", f: "Request > Slot > Follow-up", o: "Admin off the care team", wd: 17 },
  { n: "Reporting", w: "blue", p: null, f: "Sources > Draft > Approve", o: "Monthly reports assembled", wd: 15 },
  { n: "Research", w: "gold", p: null, f: "Question > Sources > Brief", o: "Briefs in minutes", wd: 17 },
  { n: "Content", w: "red", p: null, f: "Idea > Draft > Edit", o: "Drafts for every channel", wd: 15 },
  { n: "Approvals", w: "green", p: null, f: "Request > Route > Decide", o: "Nothing waits unseen", wd: 17 },
];
export function WorkflowScroller() {
  return (
    <section id="workflows" data-tone="light" aria-labelledby="h2-wf" className="h2-sec !pb-10" style={{ background: "#f5f1e8" }}>
      <div className="h2-wrap flex flex-wrap items-end justify-between gap-3">
        <h2 id="h2-wf" className="h2-h2 max-w-3xl">What could your team stop doing manually?</h2>
        <p className="h2-lead !max-w-xs">Scroll the list. Every one is an example, not a product.</p>
      </div>
      <div className="h2-hs mt-8" tabIndex={0} role="region" aria-label="Workflow examples, scrollable">
        {WF.map((c, k) => (
          <article key={c.n} data-world={c.w} className="flex flex-col justify-between rounded-[16px] p-4" style={{ width: `${c.wd}rem`, minHeight: k % 3 === 0 ? "25rem" : k % 3 === 1 ? "21rem" : "23rem", marginTop: k % 2 ? "1.5rem" : 0, background: "var(--w-light)", color: "var(--w-dark)" }}>
            {c.p ? <Photo slot={c.p} className="h-32 rounded-[10px] md:h-40" /> : <div className="h-20 rounded-[10px]" style={{ background: "var(--w-mid)" }} />}
            <div><p className="text-[1.5rem] font-semibold leading-none tracking-[-.04em]">{c.n}</p>
              <p className="mt-3 rounded-lg bg-white/70 px-2.5 py-2 text-[.74rem] font-semibold">{c.f}</p>
              <p className="mt-2 text-[.82rem]">{c.o}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}

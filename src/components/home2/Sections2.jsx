"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Photo, Win, Pill, Avatar, Count, EASE, useLive, useStepper } from "./ui";

/* 07 MARKETING AUTOMATION: light red world. Brief to analytics, with people and content, not just boxes. */
const MK = ["Brand brief", "Trend research", "Creator shortlist", "Outreach", "UGC + video edit", "Caption", "Human approval", "Publish", "Analytics"];
export function MarketingFlow() {
  const [ref, live] = useLive();
  const i = useStepper(MK.length, 1300, live);
  return (
    <section id="marketing" data-tone="light" aria-labelledby="h2-mk" ref={ref} className="h2-sec" data-world="red" style={{ background: "var(--w-light)", color: "var(--w-dark)" }}>
      <div className="h2-wrap">
        <p className="h2-eyebrow">Marketing automation</p>
        <h2 id="h2-mk" className="h2-h1 mt-3" style={{ fontSize: "clamp(2.4rem,6vw,5.6rem)" }}>From idea to post, automatically.</h2>
        <div className="mt-8 grid grid-cols-12 gap-3 md:gap-4">
          <Photo slot="marketing" className="col-span-7 h-72 rounded-[14px] md:h-[26rem] lg:col-span-5" />
          <div className="col-span-5 flex flex-col gap-3 md:gap-4 lg:col-span-3">
            <Photo slot="creator" className="h-36 rounded-[14px] md:h-48" />
            <Win title="Creator shortlist" className="!text-[.7rem]">
              {[["Nia", "Lifestyle", "ok", "Fit 94"], ["Karan", "Tech", "ok", "Fit 88"], ["Zoya", "Food", "wait", "Fit 76"]].map(([n, c, k, f]) => <div key={n} className="h2-row" style={{ gridTemplateColumns: "auto 1fr auto" }}><Avatar n={n[0]} c="#7a1411" /><span><b>{n}</b> <span style={{ color: "var(--soft)" }}>{c}</span></span><Pill k={k}>{f}</Pill></div>)}
            </Win>
          </div>
          <div className="col-span-12 grid grid-cols-2 gap-3 md:gap-4 lg:col-span-4">
            <Win title="Video drafts" className="col-span-2">
              <div className="grid grid-cols-3 gap-1.5">{[0, 1, 2].map((k) => <div key={k} className="relative aspect-[9/16] rounded-md" style={{ background: `linear-gradient(160deg, var(--w-mid), ${k === 1 ? "#d63a2f" : "#7a1411"})` }}><span className="absolute bottom-1 left-1 right-1 rounded bg-white/90 px-1 py-0.5 text-[.5rem] font-semibold leading-tight">Caption draft {k + 1}</span></div>)}</div>
            </Win>
            <div className="col-span-2 rounded-xl bg-white p-3"><p className="h2-th">Publish after approval</p><div className="mt-2 flex flex-wrap gap-1.5">{["Instagram", "LinkedIn", "YouTube", "TikTok"].map((p) => <Pill key={p} k="ok">{p}</Pill>)}</div></div>
          </div>
        </div>
        <ol className="mt-6 grid grid-cols-3 gap-x-3 gap-y-2 md:grid-cols-9">
          {MK.map((s, k) => <li key={s} className="border-t-2 pt-2 text-[.72rem] font-semibold leading-tight transition-all duration-500 md:text-[.8rem]" style={{ borderColor: k <= i ? "var(--w-acc)" : "rgba(122,20,17,.18)", opacity: k <= i ? 1 : 0.45 }}><span className="block text-[.6rem] tabular-nums opacity-70">0{k + 1}</span>{s}</li>)}
        </ol>
        <p className="mt-5 max-w-xl text-[.92rem]" style={{ color: "#5b2a27" }}>Your team approves before anything goes live. APIs and workflow tools such as n8n do the plumbing in the background. Example workflow.</p>
      </div>
    </section>
  );
}

/* 08 MAD FILMS: dark and cinematic. CTA opens the EXISTING /studio/madfilms route. */
export function MadFilmsBand() {
  const items = ["Video editing", "Motion graphics", "UGC", "3D", "AI video", "Product films", "Social content"];
  return (
    <section id="madfilms" data-tone="dark" aria-labelledby="h2-mf" className="h2-film h2-grain relative overflow-hidden h2-sec" data-world="film">
      <div aria-hidden className="absolute inset-0" style={{ background: "radial-gradient(60% 60% at 80% 20%, rgba(255,90,31,.25), transparent 70%), radial-gradient(40% 40% at 0% 100%, rgba(200,30,20,.2), transparent 70%)" }} />
      <div className="h2-wrap relative">
        <p className="h2-eyebrow" style={{ color: "#ff7a45" }}>MAD Films</p>
        <h2 id="h2-mf" className="mt-3 font-semibold uppercase leading-[.9] tracking-[-.04em]" style={{ fontSize: "clamp(2.8rem,9vw,8.5rem)" }}>Automation<br /><span style={{ color: "#ff5a1f" }}>meets creativity.</span></h2>
        <div className="mt-8 grid grid-cols-12 gap-3 md:gap-4">
          <Photo slot="madFilms" className="col-span-12 h-56 rounded-[6px] md:h-[24rem] lg:col-span-7" />
          <Photo slot="filmmaker" className="col-span-7 h-44 rounded-[6px] md:h-[24rem] lg:col-span-3" />
          <Photo slot="creator" className="col-span-5 h-44 rounded-[6px] md:h-[24rem] lg:col-span-2" />
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-5">
          <ul className="flex max-w-2xl flex-wrap gap-2">{items.map((t) => <li key={t} className="rounded-full border px-3 py-1.5 text-[.78rem]" style={{ borderColor: "rgba(255,255,255,.22)" }}>{t}</li>)}</ul>
          <Link href="/studio/madfilms" className="h2-btn h2-btn-orange">Explore MAD Films <span aria-hidden>→</span></Link>
        </div>
      </div>
    </section>
  );
}

/* 09 CUSTOMER STORIES: slider. Only real clients named; no metrics, quotes or logos are invented. */
const STORIES = [
  { co: "Nestlé", tag: "Consumer brand", photo: "story1", world: "blue", t: "Content and automation for a global consumer brand.", note: "Details to be added by the MAD team." },
  { co: "Ministry of Defence", tag: "Government", photo: "story2", world: "gold", t: "Intelligent systems for a public-sector team.", note: "Details to be added by the MAD team." },
  { co: "mCURA", tag: "Healthcare", photo: "story3", world: "green", t: "Care-team workflows with people kept in charge.", note: "Details to be added by the MAD team." },
];
export function Stories() {
  const [i, setI] = useState(0);
  const still = useReducedMotion();
  const s = STORIES[i];
  const go = (d) => setI((v) => (v + d + STORIES.length) % STORIES.length);
  return (
    <section id="work" data-tone="light" aria-labelledby="h2-st" className="h2-sec" onKeyDown={(e) => { if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); }}>
      <div className="h2-wrap">
        <div className="flex items-end justify-between gap-4"><h2 id="h2-st" className="h2-h2 max-w-3xl">Built around real business needs.</h2>
          <div className="flex gap-2"><button aria-label="Previous story" onClick={() => go(-1)} className="grid h-11 w-11 place-items-center rounded-full border"><ChevronLeft size={18} /></button><button aria-label="Next story" onClick={() => go(1)} className="grid h-11 w-11 place-items-center rounded-full border"><ChevronRight size={18} /></button></div></div>
        <AnimatePresence mode="wait">
          <motion.div key={s.co} data-world={s.world} initial={{ opacity: 0, x: still ? 0 : 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} drag="x" dragConstraints={{ left: 0, right: 0 }} onDragEnd={(_, d) => { if (d.offset.x < -60) go(1); if (d.offset.x > 60) go(-1); }} transition={{ duration: 0.5, ease: EASE }}
            className="mt-7 grid grid-cols-12 overflow-hidden rounded-[18px]" style={{ background: "var(--w-light)" }}>
            <Photo slot={s.photo} className="col-span-12 h-60 md:h-[26rem] lg:col-span-8" />
            <div className="col-span-12 flex flex-col justify-between gap-6 p-5 md:p-8 lg:col-span-4" style={{ color: "var(--w-dark)" }}>
              <div><p className="h2-eyebrow">{s.tag}</p><p className="mt-2 text-[2rem] font-semibold tracking-[-.04em]">{s.co}</p><p className="mt-3 text-[1.05rem] leading-snug">{s.t}</p><p className="mt-3 text-[.75rem] opacity-60">{s.note}</p></div>
              <div className="flex items-center justify-between"><a href="#contact" className="h2-btn h2-btn-ink">Talk to us →</a>
                <span className="text-[.75rem] tabular-nums opacity-60">{i + 1} / {STORIES.length}</span></div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="mt-3 flex gap-1.5" aria-hidden>{STORIES.map((x, k) => <i key={x.co} className="h-1 flex-1 rounded" style={{ background: k === i ? "var(--ink)" : "var(--line)" }} />)}</div>
      </div>
    </section>
  );
}

/* 10 HUMAN + AI */
export function HumanAI() {
  const rows = [["AI prepares", "Drafts, checks, researches, routes."], ["You review", "See what it did and why."], ["You decide", "Approve, edit or send back."], ["It escalates", "Hands over when it is unsure."]];
  return (
    <section id="human" data-tone="light" aria-labelledby="h2-hu" className="h2-sec" data-world="gold" style={{ background: "var(--w-light)", color: "var(--w-dark)" }}>
      <div className="h2-wrap grid items-center gap-6 lg:grid-cols-12">
        <Photo slot="human" className="h-64 rounded-[16px] md:h-[28rem] lg:col-span-6" />
        <div className="lg:col-span-6 lg:pl-8">
          <p className="h2-eyebrow">Human + AI</p>
          <h2 id="h2-hu" className="h2-h2 mt-3">People stay in control.</h2>
          <dl className="mt-6 grid grid-cols-2 gap-x-5 gap-y-5">{rows.map(([k, v]) => <div key={k} className="border-t pt-3" style={{ borderColor: "rgba(92,67,8,.25)" }}><dt className="text-[1.05rem] font-semibold tracking-tight">{k}</dt><dd className="mt-1 text-[.88rem]">{v}</dd></div>)}</dl>
        </div>
      </div>
    </section>
  );
}

/* 11 ENTERPRISE: facts we can state without inventing numbers. */
export function Enterprise() {
  const f = [["Your systems", "Connects to the CRM, ERP and APIs you already run."], ["Your permissions", "Works inside the access rules you set."], ["Your approvals", "Sensitive steps wait for a person."], ["Your audit trail", "Each action is logged for review."]];
  return (
    <section id="enterprise" data-tone="light" aria-labelledby="h2-en" className="h2-sec" style={{ background: "#fff" }} data-world="blue">
      <div className="h2-wrap grid gap-8 lg:grid-cols-12">
        <h2 id="h2-en" className="h2-h2 lg:col-span-5">Serious automation. Without the complexity.</h2>
        <div className="grid grid-cols-2 gap-3 lg:col-span-7">{f.map(([k, v], n) => <div key={k} className="rounded-[14px] p-4 md:p-6" style={{ background: n === 0 ? "var(--w-dark)" : "var(--w-light)", color: n === 0 ? "#fff" : "var(--w-dark)", gridColumn: n === 0 ? "span 2" : undefined }}><p className="text-[1.15rem] font-semibold tracking-tight md:text-[1.4rem]">{k}</p><p className="mt-1.5 text-[.85rem] opacity-80">{v}</p></div>)}</div>
      </div>
    </section>
  );
}

/* 12 DARK AI */
export function DarkAI() {
  const [ref, live] = useLive();
  const i = useStepper(4, 1400, live);
  const L = ["Your data", "Your tools", "Reasoning", "Your approval"];
  return (
    <section data-tone="dark" aria-labelledby="h2-da" ref={ref} className="h2-sec" style={{ background: "radial-gradient(60% 60% at 70% 0%, rgba(47,111,228,.3), transparent 70%), #050b1a", color: "#fff" }}>
      <div className="h2-wrap grid items-center gap-8 lg:grid-cols-12">
        <div className="lg:col-span-6"><p className="h2-eyebrow" style={{ color: "#8fb4ff" }}>Behind the work</p><h2 id="h2-da" className="h2-h2 mt-3">The intelligence behind the work.</h2><p className="mt-4 max-w-md text-[1rem] opacity-70">Models read your information, use your tools and hand results to your people.</p></div>
        <div className="lg:col-span-6"><div className="grid gap-2">{L.map((t, k) => <div key={t} className="flex items-center justify-between rounded-xl border px-4 py-3.5 transition-all duration-500" style={{ borderColor: k === i ? "#6fa3ff" : "rgba(255,255,255,.14)", background: k === i ? "rgba(111,163,255,.14)" : "transparent", marginLeft: `${k * 1.2}rem` }}><span className="font-medium">{t}</span><span className="text-[.65rem] uppercase tracking-[.12em] opacity-60">0{k + 1}</span></div>)}</div></div>
      </div>
    </section>
  );
}

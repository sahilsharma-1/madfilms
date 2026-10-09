"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, ShieldCheck, GitBranch, UserCheck, FileCheck2, Film, Layers, Smartphone, Box, Sparkles, Clapperboard, Share2 } from "lucide-react";
import { Photo, Win, Pill, Avatar, EASE, useLive, useStepper } from "./ui";
import VimeoFeature from "./VimeoFeature";

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
  // Concept tiles instead of photo thumbnails: icon + name + one plain line each. No client claims.
  const items = [
    [Film, "Video editing", "Cuts, pacing and polish for brand and product videos."],
    [Layers, "Motion graphics", "Animated identities, explainers and title sequences."],
    [Smartphone, "UGC", "Creator-style content made for social feeds."],
    [Box, "3D", "Product visuals and scenes built in three dimensions."],
    [Sparkles, "AI video", "Generated and AI-assisted footage for ideas that need speed."],
    [Clapperboard, "Product films", "Short films that show what a product does and why it matters."],
    [Share2, "Social content", "Formats and series planned for each channel."],
  ];
  return (
    <section id="madfilms" data-tone="dark" aria-labelledby="h2-mf" className="h2-film h2-grain relative overflow-hidden h2-sec" data-world="film">
      <div aria-hidden className="absolute inset-0" style={{ background: "radial-gradient(60% 60% at 80% 20%, rgba(255,90,31,.25), transparent 70%), radial-gradient(40% 40% at 0% 100%, rgba(200,30,20,.2), transparent 70%)" }} />
      <div className="h2-wrap relative">
        <p className="h2-eyebrow" style={{ color: "#ff7a45" }}>MAD STUDIO · A CAPABILITY OF MAD COMPANY</p>
        <h2 id="h2-mf" className="mt-3 max-w-6xl font-semibold leading-[.95] tracking-[-.05em]" style={{ fontSize: "clamp(2.7rem,7vw,6.8rem)" }}>And when the work needs to be seen,<br /><span style={{ color: "#ff8054" }}>we make that too.</span></h2>
        <p className="mt-5 max-w-2xl text-[1rem] leading-relaxed text-white/65 md:text-[1.15rem]">From product films to motion systems, UGC and AI-powered content, MAD Studio helps businesses turn ideas into visual experiences.</p>
        <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {items.map(([Icon, name, line], k) => (
            <li key={name} className={`rounded-[6px] border p-4 md:p-5 ${k === items.length - 1 ? "col-span-2" : ""}`} style={{ borderColor: "rgba(255,255,255,.16)", background: "linear-gradient(160deg, rgba(255,128,84,.10), rgba(255,255,255,.02))" }}>
              <span className="grid h-10 w-10 place-items-center rounded-full" style={{ background: "rgba(255,128,84,.16)", color: "#ff8054" }}><Icon size={18} strokeWidth={1.7} aria-hidden /></span>
              <p className="mt-4 text-[1.05rem] font-semibold tracking-[-.02em]">{name}</p>
              <p className="mt-1 text-[.82rem] leading-snug text-white/60">{line}</p>
            </li>
          ))}
        </ul>
        <VimeoFeature />
        <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-[.75rem] uppercase tracking-[.1em] text-white/45">Selected work · NESTLEVEL Digital Podcast · Recruiter Toolkit · Talent Attraction Insights</p>
          </div>
          <Link href="/studio/madfilms" className="h2-btn h2-btn-orange">Explore MAD Studio <span aria-hidden>→</span></Link>
        </div>
      </div>
    </section>
  );
}

/* 09 CUSTOMER STORIES: slider. Only real clients named; no metrics, quotes or logos are invented. */
const STORIES = [
  { co: "Nestlé", tag: "Talent Attraction Insights", photo: "story1", world: "blue", t: "A centralised view across talent attraction, campaign performance, reputation and employee advocacy.", note: "Built around an AI-generated NLP system. Pilot across MENA, Oceania, the Philippines and MYSG.", metrics: [["562", "active users"], ["620K+", "content reach"]] },
  { co: "Ministry of Defence", tag: "Government", photo: "story2", world: "gold", t: "Government and defence work built around the needs of a public-sector team.", note: "Selected work from MAD. Contact the team for project details." },
  { co: "mCURA", tag: "Healthcare", photo: "story3", world: "green", t: "Healthcare technology and care-team workflows designed around real operational needs.", note: "Selected work from MAD. Contact the team for project details." },
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
              {s.metrics && (
                <div className="mt-5 grid grid-cols-2 gap-2">
                  {s.metrics.map(([n, label]) => <div key={label} className="rounded-xl border border-black/10 bg-white/45 p-3"><p className="text-[1.45rem] font-semibold tracking-[-.04em]">{n}</p><p className="mt-0.5 text-[.68rem] uppercase tracking-[.08em] opacity-60">{label}</p></div>)}
                </div>
              )}
              <div className="mt-6 flex items-center justify-between"><a href="#contact" className="h2-btn h2-btn-ink">Talk to us →</a>
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
  const f = [
    [ShieldCheck, "Custom-built AI", "Workflows are designed around the job your team needs done."],
    [GitBranch, "Existing tools", "Connect the process to the tools your business already uses."],
    [UserCheck, "Human approval", "Your team reviews and decides when a person needs to be involved."],
    [FileCheck2, "Business workflows", "Built around your rules, information and approval process."],
  ];
  return (
    <section id="enterprise" data-tone="light" aria-labelledby="h2-en" className="h2-sec home-trust" style={{ background: "#fff" }} data-world="blue">
      <div className="h2-wrap">
        <div className="home-trust-intro">
          <p className="h2-eyebrow">Built for the real world</p>
          <h2 id="h2-en" className="h2-h2 mt-3">Made to fit the way your business works.</h2>
          <p className="h2-lead mt-4">Custom workflows connect people, information and the tools you already use.</p>
        </div>
        <div className="home-trust-list">
          {f.map(([Icon, k, v]) => (
            <div key={k} className="home-trust-item">
              <span className="home-trust-icon"><Icon size={17} strokeWidth={1.7} /></span>
              <div><p>{k}</p><span>{v}</span></div>
            </div>
          ))}
        </div>
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

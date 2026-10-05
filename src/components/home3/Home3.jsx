"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Photo } from "../home2/ui";
import { IMG } from "@/data/imagery";
import { EASE } from "../home/shared";
import { TASKS, WORKERS, PACKAGES, SAAS, JOURNEY, STEPS, INTEGRATIONS, WORKS } from "./data";
import "./home3.css";

const Reveal = ({ children, className = "", delay = 0 }) => {
  const still = useReducedMotion();
  return <motion.div className={className} initial={still ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8%" }} transition={{ duration: 0.7, delay, ease: EASE }}>{children}</motion.div>;
};
const Head = ({ eyebrow, title, lead, dark }) => (
  <Reveal className="m3-head"><p className="m3-eyebrow">{eyebrow}</p><h2 className="m3-h2">{title}</h2>{lead && <p className={`m3-lead ${dark ? "on-dark" : ""}`}>{lead}</p>}</Reveal>
);

export function Hero3() {
  const [i, setI] = useState(0);
  const still = useReducedMotion();
  const demo = [TASKS[0], TASKS[1], TASKS[4], TASKS[3]];
  useEffect(() => { if (still) return; const t = setInterval(() => setI((v) => (v + 1) % demo.length), 3600); return () => clearInterval(t); }, [still, demo.length]);
  const d = demo[i];
  return (
    <section className="m3-hero" data-tone="light" aria-labelledby="m3-h1">
      <div className="m3-wrap m3-hero-grid">
        <div className="m3-hero-copy">
          <p className="m3-eyebrow">MAD Company · Enterprise AI</p>
          <h1 id="m3-h1">AI that works<br />for your business.</h1>
          <p className="m3-lead">MAD builds custom AI agents and automation systems around your company&rsquo;s data, tools, rules and workflows.</p>
          <div className="m3-actions"><a href="#automate" className="m3-btn m3-btn-ink">See what we automate <ArrowRight size={16} /></a><a href="#contact" className="m3-btn m3-btn-line">Talk to MAD</a></div>
          <ol className="m3-trail" aria-label="How it works"><li>Your business</li><li>MAD AI</li><li>Understand</li><li>Work</li><li>Report</li><li><b>You approve</b></li></ol>
        </div>
        <div className="m3-hero-visual">
          <Image src="/media/1.jpg" alt="A business leader reviewing work in an office" fill priority sizes="(max-width: 900px) 100vw, 46vw" className="m3-cover" />
          <div className="m3-hero-card" style={{ "--d": d.dark, "--s": d.soft }}>
            <div className="m3-card-top"><small>Example workflow</small><AnimatePresence mode="wait"><motion.b key={d.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.3 }}>{d.label}</motion.b></AnimatePresence></div>
            <ul>{d.steps.map((s, k) => <motion.li key={d.id + k} initial={{ opacity: 0.2 }} animate={{ opacity: 1 }} transition={{ delay: k * 0.35 }}><i />{s}</motion.li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Automate() {
  const [id, setId] = useState(TASKS[0].id);
  const t = TASKS.find((x) => x.id === id);
  return (
    <section id="automate" className="m3-sec" data-tone="light" aria-labelledby="m3-au">
      <div className="m3-wrap">
        <Head eyebrow="What we automate" title="What work should your team stop doing manually?" lead="Bring us the repetitive work. We build the AI system around it." />
        <div className="m3-tabs" role="tablist" aria-label="Tasks we automate">
          {TASKS.map((x) => <button key={x.id} role="tab" aria-selected={x.id === id} onClick={() => setId(x.id)} className="m3-tab" style={{ "--d": x.dark }}>{x.label}</button>)}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={t.id} className="m3-auto" style={{ "--d": t.dark, "--s": t.soft }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35, ease: EASE }}>
            <div className="m3-auto-copy"><p className="m3-eyebrow" style={{ color: t.dark }}>{t.label}</p><h3 id="m3-au">{t.head}</h3>
              <ol className="m3-steps">{t.steps.map((s, k) => <motion.li key={s} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12 * k }}><span>0{k + 1}</span>{s}</motion.li>)}</ol></div>
            <div className="m3-auto-visual"><Photo slot={t.slot} className="m3-auto-photo" />
              <div className="m3-mini"><small>Example workflow</small>{t.ui.map(([a, b]) => <div key={a}><span>{a}</span><em>{b}</em></div>)}<button type="button" className="m3-approve"><Check size={14} /> Approve</button></div></div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export function CustomAI() {
  const inputs = ["Your data", "Your tools", "Your rules", "Your team"];
  return (
    <section id="custom" className="m3-sec m3-dark" data-tone="dark" aria-labelledby="m3-cu">
      <div className="m3-wrap m3-custom">
        <Head dark eyebrow="Custom AI" title={<>Not another AI tool.<br />Your AI system.</>} lead="We build agents around your data, your tools, your rules and the way your team works." />
        <div className="m3-system" aria-label="Your data, tools, rules and team combine into your MAD agent">
          <div className="m3-inputs">{inputs.map((x, k) => <motion.div key={x} className="m3-input" initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 * k, duration: 0.6, ease: EASE }}><span>{x}</span><motion.i initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 * k + 0.4, duration: 0.7 }} /></motion.div>)}</div>
          <motion.div className="m3-agent" initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.1, duration: 0.8, ease: EASE }}><small>Built for you</small><b>Your MAD agent</b></motion.div>
        </div>
      </div>
    </section>
  );
}

export function Workers() {
  const [n, setN] = useState(0);
  const w = WORKERS[n];
  return (
    <section id="workers" className="m3-sec" data-tone="light" aria-labelledby="m3-wk">
      <div className="m3-wrap">
        <Head eyebrow="AI workers" title="Give your team an AI worker for the repetitive stuff." />
        <div className="m3-workers">
          <div className="m3-worker-list" role="tablist" aria-label="AI workers">{WORKERS.map((x, k) => <button key={x.name} role="tab" aria-selected={k === n} onClick={() => setN(k)} style={{ "--d": x.dark }}><span>0{k + 1}</span>{x.name}</button>)}</div>
          <AnimatePresence mode="wait"><motion.div key={w.name} className="m3-worker-panel" style={{ "--d": w.dark, "--s": w.soft }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <small>Example agent</small><h3 id="m3-wk">{w.name}</h3>
            <ul>{w.does.map((x, k) => <motion.li key={x} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 * k }}><Check size={14} />{x}</motion.li>)}</ul>
          </motion.div></AnimatePresence>
        </div>
        <p className="m3-note">Illustrative examples · what an agent does depends on the workflow and connected systems.</p>
      </div>
    </section>
  );
}

export function HowCustom() {
  const four = ["Your data", "Your tools", "Your rules", "Your approval"];
  return (
    <section className="m3-sec m3-warm" data-tone="light" aria-labelledby="m3-hc">
      <div className="m3-wrap">
        <Head eyebrow="How custom is custom?" title="Built around the way your company works." />
        <ol className="m3-four" id="m3-hc">{four.map((x, k) => <li key={x}><span>0{k + 1}</span>{x}</li>)}</ol>
        <div className="m3-links" aria-label="Systems MAD can connect to"><span className="m3-core">MAD agent</span>{INTEGRATIONS.map((x) => <span key={x} className="m3-node">{x}</span>)}</div>
      </div>
    </section>
  );
}

export function Packages() {
  return (
    <section id="packages" className="m3-sec" data-tone="light" aria-labelledby="m3-pk">
      <div className="m3-wrap">
        <Head eyebrow="Packages" title="Start with one workflow. Build from there." />
        <div className="m3-pk">{PACKAGES.map((p, k) => <Reveal key={p.name} delay={k * 0.08} className="m3-pk-col"><p className="m3-eyebrow">{p.name}</p><h3>{p.line}</h3><ul>{p.rows.map((r) => <li key={r}>{r}</li>)}</ul><a href="#contact">Talk to MAD <ArrowRight size={14} /></a></Reveal>)}</div>
        <div id="saas" className="m3-saas"><div><p className="m3-eyebrow">MAD SaaS</p><h3>Need something ready to go?</h3><p>Some workflows don&rsquo;t need to start from zero.</p></div>
          <ul>{SAAS.map((s) => <li key={s}>{s}<em>Coming soon</em></li>)}</ul></div>
      </div>
    </section>
  );
}

export function StudioIntro() {
  return (
    <section className="m3-sec m3-dark m3-studio-intro" data-tone="dark" aria-label="MAD Studio">
      <div className="m3-wrap"><Reveal><h2 className="m3-big">Technology should work.<br /><span>Ideas should move.</span></h2><p className="m3-lead on-dark">MAD Studio is where the work gets seen: motion design, 3D, AI video, UGC, product films, social and campaign content.</p><Link href="/studio/madfilms" className="m3-btn m3-btn-light">Visit MAD Studio <ArrowRight size={16} /></Link></Reveal></div>
    </section>
  );
}

export function Journey() {
  return (
    <section id="about" className="m3-sec" data-tone="light" aria-labelledby="m3-jr">
      <div className="m3-wrap">
        <Head eyebrow="One partner" title="From system to story." lead="One MAD team can build the system and tell the story around it." />
        <ol className="m3-journey" id="m3-jr">{JOURNEY.map((x, k) => <motion.li key={x} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 * k }}><span>0{k + 1}</span>{x}</motion.li>)}</ol>
      </div>
    </section>
  );
}

export function Work() {
  return (
    <section id="work" className="m3-sec m3-warm" data-tone="light" aria-labelledby="m3-wo">
      <div className="m3-wrap">
        <Head eyebrow="Work" title="Built for real-world business." />
        <div className="m3-work" id="m3-wo">{WORKS.map(([t, src, c], k) => <Reveal key={t} delay={k * 0.08} className={k === 0 ? "m3-work-big" : ""}><div className="m3-work-img"><Image src={src} alt={`${t} project`} fill sizes="(max-width: 800px) 100vw, 40vw" /></div><div className="m3-work-cap"><b>{t}</b><span>{c}</span></div></Reveal>)}</div>
        <p className="m3-note">Project names describe MAD work experience only and do not imply endorsement, partnership or current engagement.</p>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="m3-sec" data-tone="light" aria-labelledby="m3-pr">
      <div className="m3-wrap">
        <Head eyebrow="How MAD works" title={<>You bring the problem.<br />We build the solution.</>} />
        <ol className="m3-process" id="m3-pr">{STEPS.map(([t, s], k) => <li key={t}><span>0{k + 1}</span><b>{t}</b><p>{s}</p></li>)}</ol>
      </div>
    </section>
  );
}

export function RoiAndContact() {
  const paths = [["Automate my workflow", "Automate%20my%20workflow"], ["Build my product", "Build%20my%20product"], ["Create my content", "Create%20my%20content"]];
  return (
    <>
      <section className="m3-sec m3-warm" data-tone="light" aria-labelledby="m3-roi">
        <div className="m3-wrap m3-roi"><h2 id="m3-roi" className="m3-h2">Automate the hours.<br />Keep the people.</h2><p className="m3-lead">MAD removes repetitive work so people can spend more time on judgment, relationships, creativity and decisions. Time saved depends on the process and how it is used.</p></div>
      </section>
      <section id="contact" className="m3-sec m3-dark m3-cta" data-tone="dark" aria-labelledby="m3-ct">
        <div className="m3-wrap"><p className="m3-eyebrow">Talk to MAD</p><h2 id="m3-ct" className="m3-big">What should we build for you?</h2><p className="m3-lead on-dark">Tell us the work you want to automate, the product you want to build, or the story you want to tell.</p>
          <div className="m3-paths">{paths.map(([l, s]) => <a key={l} href={`mailto:hello@madcompany.co?subject=${s}`}>{l.toUpperCase()} <ArrowRight size={15} /></a>)}</div>
          <a href="mailto:hello@madcompany.co" className="m3-btn m3-btn-light">Talk to MAD <ArrowRight size={16} /></a></div>
      </section>
    </>
  );
}

/* ---------- Accenture-style black opening: animated headline over a moving gradient, then tall editorial cards, then the company video ---------- */
export const VIDEO_ID = "76979871"; // PLACEHOLDER Vimeo id. Replace with MAD's own video id.
// Card images: save Shutterstock files as /public/media/c1.jpg ... c8.jpg. Until then each card shows its gradient.
const CARDS = [
  { k: "AI & Automation", t: "Agents that take repetitive work off your team", d: "Resume screening, lead research, invoices, support and reporting. Built around your workflow, with your people approving.", href: "#automate", img: "c1", a: "#8a2342", b: "#1b2a5a" },
  { k: "Custom AI", t: "An AI system built around your data and rules", d: "Not another tool. Agents connected to your data, your tools, your rules and the way your team works.", href: "#custom", img: "c2", a: "#1f4fa8", b: "#0a1330" },
  { k: "Software & SaaS", t: "Products and internal tools built for your business", d: "Custom software and ready-to-use workflow products. Products not yet live are labelled Coming soon.", href: "#packages", img: "c3", a: "#6b6f7a", b: "#15171c", light: true },
  { k: "Data & Intelligence", t: "Your information, joined up and usable", d: "Systems that bring your records, spreadsheets and databases together so work and reporting run on one picture.", href: "#custom", img: "c4", a: "#1c7a4a", b: "#08150e" },
  { k: "AI Workers", t: "A worker for sales, support, HR and finance", d: "Pick the repetitive job. See what an agent does step by step, and where a person approves.", href: "#workers", img: "c5", a: "#5b3a9a", b: "#120b24" },
  { k: "MAD Studio", t: "Motion, 3D, AI video, UGC and product films", d: "When the work needs to be seen, the same team creates the motion, video and content around it.", href: "/studio/madfilms", img: "c6", a: "#c2681a", b: "#1c0d04" },
  { k: "Work", t: "Projects already part of MAD's portfolio", d: "A selection of existing work across creative, data and content.", href: "#work", img: "c7", a: "#7d8696", b: "#11151c", light: true },
  { k: "How we work", t: "You bring the problem. We build the solution.", d: "Six clear steps from describing the job to launching it and improving it.", href: "#process", img: "c8", a: "#b88a2c", b: "#1a1206" },
];

const FALL = { c1: ["/media/2.jpg", IMG.hr.remote], c2: ["/media/7.jpg", IMG.it.remote], c3: ["/media/3.jpg", IMG.finance.remote], c4: ["/media/4.jpg", IMG.procurement.remote], c5: ["/media/5.jpg", IMG.sales.remote], c6: ["/media/11.jpg", IMG.creator.remote], c7: ["/media/14.jpg", IMG.story1.remote], c8: ["/media/17.jpg", IMG.human.remote] };
function Slot({ id, alts = [], className = "" }) {
  const list = [`/media/${id}.jpg`, `/media/${id}.jpeg`, `/media/${id}.png`, `/media/${id}.webp`, ...alts];
  const [i, setI] = useState(0);
  const ref = useRef(null);
  const src = list[i];
  useEffect(() => { const el = ref.current; if (el && el.complete && el.naturalWidth === 0) setI((v) => v + 1); }, [src]);
  if (!src) return null;
  return <img ref={ref} key={src} src={src} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer" className={className} onError={() => setI((v) => v + 1)} />;
}

function Ribbon({ paused }) {
  const cv = useRef(null);
  const pausedRef = useRef(paused);
  useEffect(() => { pausedRef.current = paused; }, [paused]);
  useEffect(() => {
    const c = cv.current; if (!c) return;
    const ctx = c.getContext("2d");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const N = window.innerWidth < 700 ? 520 : 1100;
    const pts = Array.from({ length: N }, () => ({ u: Math.random(), v: Math.random() - 0.5, s: 0.6 + Math.random() * 1.3, g: Math.random() < 0.18 }));
    let w = 0, h = 0, t = 0, raf = 0, mx = 0;
    const fit = () => { const r = c.getBoundingClientRect(); const d = Math.min(2, window.devicePixelRatio || 1); w = r.width; h = r.height; c.width = w * d; c.height = h * d; ctx.setTransform(d, 0, 0, d, 0, 0); };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        const th = Math.sin(p.u * Math.PI);
        const x = p.u * w;
        const y = h * 0.52 + Math.sin(p.u * 5 + t) * h * 0.2 + Math.sin(p.u * 11 - t * 1.4) * h * 0.05 + p.v * h * 0.55 * th * (0.55 + 0.45 * Math.sin(p.u * 7 + t * 0.6)) + mx * (p.u - 0.5) * 18;
        ctx.globalAlpha = (0.15 + 0.7 * th) * (p.g ? 0.95 : 0.55);
        ctx.fillStyle = p.g ? "#e8c77a" : "#ffffff";
        ctx.fillRect(x, y, p.s, p.s);
      }
    };
    const loop = () => { if (!pausedRef.current) { t += 0.006; draw(); } raf = requestAnimationFrame(loop); };
    const move = (e) => { mx = (e.clientX / window.innerWidth - 0.5) * 2; };
    fit(); draw();
    if (!still) { raf = requestAnimationFrame(loop); window.addEventListener("pointermove", move, { passive: true }); }
    window.addEventListener("resize", fit);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", fit); window.removeEventListener("pointermove", move); };
  }, []);
  return <canvas ref={cv} className="m3-ribbon" aria-hidden />;
}

export function HeroX() {
  const still = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const lines = [["AI", "that", "works"], ["for", "your", "business."]];
  let n = 0;
  return (
    <section className={`m3-hx ${paused ? "is-paused" : ""}`} data-tone="dark" aria-labelledby="m3-hx-t">
      <div className="m3-hx-gradient" aria-hidden><span /><span /><span /><em /></div>
      <Ribbon paused={paused} />
      <div className="m3-wrap m3-hx-grid">
        <h1 id="m3-hx-t" className="m3-hx-title" aria-label="AI that works for your business.">
          {lines.map((ws, li) => (
            <span key={li} className={`m3-hx-line ${li === 1 ? "is-grad" : ""}`} aria-hidden>
              {ws.map((w) => { const d = 0.12 * n++; return <span key={w} className="m3-hx-mask"><motion.span className="m3-hx-word" initial={still ? false : { y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.15 + d, ease: EASE }}>{w}</motion.span></span>; })}
            </span>
          ))}
        </h1>
        <motion.div className="m3-hx-side" initial={still ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8, ease: EASE }}>
          <b>Work, handled.</b>
          <p>MAD builds custom AI agents and automation around your company&rsquo;s data, tools, rules and workflows.</p>
          <a href="#automate" className="m3-hx-link">See what we automate <i><ArrowRight size={12} /></i></a>
        </motion.div>
        <button type="button" className="m3-hx-pause" onClick={() => setPaused((v) => !v)} aria-label={paused ? "Play background animation" : "Pause background animation"}>{paused ? <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4l14 8-14 8z" /></svg> : <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M5 4h5v16H5zM14 4h5v16h-5z" /></svg>}</button>
      </div>
    </section>
  );
}

export function Cards() {
  const [open, setOpen] = useState(null);
  return (
    <section className="m3-cards" data-tone="dark" aria-label="What MAD does">
      <div className="m3-wrap m3-cards-grid">
        {CARDS.map((c, i) => {
          const internal = c.href.startsWith("/");
          const Tag = internal ? Link : "a";
          return (
            <Reveal key={c.k} delay={(i % 4) * 0.08 + Math.floor(i / 4) * 0.12}>
              <article className={`m3-card ${c.light ? "is-light" : ""} ${open === i ? "is-open" : ""}`} style={{ "--a": c.a, "--b": c.b }}
                onMouseEnter={() => setOpen(i)} onMouseLeave={() => setOpen(null)} onFocus={() => setOpen(i)} onBlur={() => setOpen(null)}>
                <div className="m3-card-art" aria-hidden><i /><i /><Slot id={c.img} alts={FALL[c.img]} className="m3-card-img" /></div>
                <span className="m3-card-no">0{i + 1}</span>
                <span className="m3-card-k">{c.k}</span>
                <h3 className="m3-card-t">{c.t}</h3>
                <div className="m3-card-more"><p>{c.d}</p><Tag href={c.href} className="m3-card-link">Explore <i><ArrowRight size={12} /></i></Tag></div>
                <Tag href={c.href} className="m3-card-hit" aria-label={`${c.k}: ${c.t}`} onClick={() => { if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches && open !== i) setOpen(i); }} />
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export function VideoBand() {
  const [play, setPlay] = useState(false);
  return (
    <section className="m3-sec m3-vid" data-tone="light" aria-labelledby="m3-vd">
      <div className="m3-wrap m3-vid-grid">
        <Reveal><p className="m3-eyebrow">What MAD does</p><h2 id="m3-vd" className="m3-h2">One company. Technology that works, and stories that move.</h2><p className="m3-lead">A short look at how MAD builds AI, software and creative work around your business.</p></Reveal>
        <Reveal delay={0.1} className="m3-vid-frame">
          {play ? <iframe src={`https://player.vimeo.com/video/${VIDEO_ID}?autoplay=1&title=0&byline=0&portrait=0`} title="What MAD does" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen /> :
            <button type="button" onClick={() => setPlay(true)} aria-label="Play video"><Slot id="video" alts={["/media/13.jpg", IMG.madFilms.remote]} className="m3-card-img" /><span className="m3-play"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg></span></button>}
        </Reveal>
      </div>
    </section>
  );
}

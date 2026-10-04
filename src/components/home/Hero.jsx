"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { EASE, Pic } from "./shared";
import { HOME_MEDIA } from "../../lib/media";

// The living system: business input → intelligence → agents → execution → outcome.
const SEG = [
  "M110 70 C110 115 410 115 410 160",
  "M410 160 C410 222 170 222 170 285",
  "M170 285 C170 340 420 340 420 395",
  "M420 395 C420 447 190 447 190 500",
];
const FULL = SEG.map((d, i) => (i === 0 ? d : d.replace(/^M[\d.]+ [\d.]+ /, ""))).join(" ");
const pct = (x, y) => ({ left: `${(x / 600) * 100}%`, top: `${(y / 560) * 100}%` });

function Label({ x, y, anchor = "start", t, s }) {
  return (
    <g>
      <text x={x} y={y} textAnchor={anchor} fill="#f4f3f7" fontSize="15" fontWeight="500" letterSpacing="-0.2">{t}</text>
      <text x={x} y={y + 18} textAnchor={anchor} fill="rgba(244,243,247,.5)" fontSize="12">{s}</text>
    </g>
  );
}

function Engine({ still }) {
  return (
    <svg viewBox="0 0 600 560" className="h-auto w-full" role="img" aria-label="Diagram: business input flows through intelligence and agents to execution and a measured business outcome.">
      <defs>
        <linearGradient id="hg-line" x1="0" x2="1"><stop offset="0" stopColor="#3b82f6" stopOpacity=".15" /><stop offset=".5" stopColor="#7dd3fc" stopOpacity=".9" /><stop offset="1" stopColor="#ff9ad5" stopOpacity=".5" /></linearGradient>
        <radialGradient id="hg-core"><stop offset="0" stopColor="#d9ceff" /><stop offset=".45" stopColor="#3b82f6" /><stop offset="1" stopColor="#2563eb" stopOpacity="0" /></radialGradient>
        <radialGradient id="hg-out"><stop offset="0" stopColor="#fff" /><stop offset=".5" stopColor="#ffb4e0" /><stop offset="1" stopColor="#ff7ac0" stopOpacity="0" /></radialGradient>
        <path id="hg-path" d={FULL} />
      </defs>

      {SEG.map((d, i) => (<g key={i}><path d={d} fill="none" stroke="rgba(255,255,255,.14)" strokeWidth="1" /><path d={d} fill="none" stroke="url(#hg-line)" strokeWidth="1.4" className="mx-flow" /></g>))}

      {/* 0 business input */}
      <g>
        {[[40, 40], [62, 28], [44, 62]].map(([x, y], i) => (<g key={i}><path d={`M${x} ${y} L102 68`} stroke="rgba(255,255,255,.18)" /><circle cx={x} cy={y} r="2.5" fill="rgba(255,255,255,.5)" /></g>))}
        <circle cx="110" cy="70" r="14" fill="#05070b" stroke="rgba(255,255,255,.5)" /><circle cx="110" cy="70" r="5" fill="#fff" />
        <circle cx="110" cy="70" r="14" fill="none" stroke="#7dd3fc" className="mx-ring" />
      </g>
      <Label x={136} y={66} t="Business input" s="Orders, emails, documents" />

      {/* 1 intelligence */}
      <g>
        <circle cx="410" cy="160" r="52" fill="url(#hg-core)" opacity=".55" />
        <circle cx="410" cy="160" r="30" fill="none" stroke="rgba(255,255,255,.22)" />
        <g style={{ transformOrigin: "410px 160px", animation: still ? "none" : "ic-spin 40s linear infinite" }}>
          <circle cx="410" cy="160" r="22" fill="none" stroke="#7dd3fc" strokeDasharray="2 6" />
          {[0, 72, 144, 216, 288].map((a) => { const r = (a * Math.PI) / 180; return <circle key={a} cx={410 + 30 * Math.cos(r)} cy={160 + 30 * Math.sin(r)} r="2.4" fill="#fff" />; })}
        </g>
        <circle cx="410" cy="160" r="8" fill="#fff" />
        <circle cx="410" cy="160" r="30" fill="none" stroke="#3b82f6" className="mx-ring" style={{ animationDelay: "1.2s" }} />
      </g>
      <Label x={462} y={156} t="Intelligence" s="Understands context" />

      {/* 2 agents */}
      <g>
        <path d="M150 300 190 300 170 266Z" fill="rgba(59,130,246,.12)" stroke="rgba(185,168,255,.7)" />
        {[[150, 300], [190, 300], [170, 266]].map(([x, y], i) => (<circle key={i} cx={x} cy={y} r={i === 2 ? 8 : 7} fill="#05070b" stroke={i === 2 ? "#fff" : "#7dd3fc"} />))}
        <circle cx="170" cy="266" r="3" fill="#fff" />
      </g>
      <Label x={128} y={252} anchor="end" t="Agents" s="Sales · Support · Ops" />

      {/* 3 execution */}
      <g>
        <rect x="402" y="377" width="36" height="36" rx="9" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.5)" />
        <path d="m411 396 6 6 11-13" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        {[[455, 372], [462, 418]].map(([x, y], i) => (<g key={i}><path d={`M438 395 L${x} ${y}`} stroke="rgba(255,255,255,.2)" /><circle cx={x} cy={y} r="3" fill="#7dd3fc" /></g>))}
      </g>
      <Label x={482} y={395} t="Execution" s="Acts in your systems" />

      {/* 4 outcome */}
      <g>
        <circle cx="190" cy="500" r="46" fill="url(#hg-out)" opacity=".5" />
        <circle cx="190" cy="500" r="16" fill="#fff" />
        <circle cx="190" cy="500" r="16" fill="none" stroke="#ff9ad5" className="mx-ring" style={{ animationDelay: "2s" }} />
      </g>
      <Label x={222} y={497} t="Business outcome" s="Measured, not assumed" />

      {!still && [0, 4, 8].map((b) => (
        <circle key={b} r="3.2" fill="#fff"><animateMotion dur="12s" begin={`${b}s`} repeatCount="indefinite" rotate="auto"><mpath href="#hg-path" /></animateMotion><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.06;.94;1" dur="12s" begin={`${b}s`} repeatCount="indefinite" /></circle>
      ))}
    </svg>
  );
}

export default function Hero() {
  const still = useReducedMotion();
  const up = (d) => ({ initial: { opacity: 0, y: still ? 0 : 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, delay: d, ease: EASE } });
  return (
    <section data-tone="dark" aria-labelledby="hero-h" className="mx-dark mx-hero-bg relative flex min-h-[100svh] items-center overflow-hidden">
      <div aria-hidden className="mx-dots absolute inset-0" />
      <div className="mx-wrap relative grid w-full items-center gap-10 pb-16 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:pt-24">
        <div className="relative z-10">
          <h1 id="hero-h" className="mx-display" style={{ fontSize: "clamp(2.7rem, 5.2vw, 5.6rem)", lineHeight: 0.97 }}>
            {["AI that moves", "business forward."].map((l, i) => (
              <span key={l} className="block overflow-hidden pb-[.1em] -mb-[.1em]">
                <motion.span className="block" initial={{ y: still ? 0 : "105%" }} animate={{ y: 0 }} transition={{ duration: 1.1, delay: 0.1 + i * 0.12, ease: EASE }}>{l}</motion.span>
              </span>
            ))}
          </h1>
          <motion.p {...up(0.55)} className="mx-lead mt-7">
            We design intelligent systems that turn complex workflows into measurable business outcomes — from customer experience and operations to growth, content and decision-making.
          </motion.p>
          <motion.div {...up(0.7)} className="mt-9 flex flex-wrap gap-3">
            <Link href="/#capabilities" className="mx-btn mx-btn-light">Explore what we build <span aria-hidden className="mx-arrow">→</span></Link>
            <Link href="/#contact" className="mx-btn mx-btn-line">Talk to MAD <span aria-hidden className="mx-arrow">→</span></Link>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.6, delay: 0.4 }} className="relative mx-auto w-full max-w-[640px]">
          <Engine still={!!still} />
          <div aria-hidden className="pointer-events-none absolute inset-0 hidden sm:block">
            <div className="mx-frag mx-frag-dark mx-float absolute px-3 py-2" style={pct(255, 18)}>&ldquo;Where is my order?&rdquo;</div>
            <div className="mx-frag mx-frag-dark mx-float-b absolute flex items-center gap-2 px-3 py-2" style={pct(300, 250)}><span className="mx-dot mx-dot-live" />Lead qualified</div>
            <div className="mx-frag mx-frag-dark mx-float absolute px-3 py-2" style={pct(215, 416)}>CRM updated</div>
            <div className="absolute" style={{ ...pct(26, 128) }}><Pic m={HOME_MEDIA.heroA} dark zoom={false} className="h-[62px] w-[62px] rounded-full ring-1 ring-white/25" /></div>
            <div className="absolute" style={{ ...pct(330, 478) }}><Pic m={HOME_MEDIA.heroB} dark zoom={false} className="h-[62px] w-[62px] rounded-full ring-1 ring-white/25" /></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

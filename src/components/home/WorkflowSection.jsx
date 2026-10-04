"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Lines, Fade } from "./shared";

const MANUAL = ["Email", "Spreadsheet", "Approval", "Follow-up", "CRM", "Report"];
const SYSTEM = [["Understand", "Reads the request, in any channel."], ["Reason", "Weighs context, rules and history."], ["Act", "Updates the systems, sends, routes."], ["Measure", "Tracks what changed, and learns."]];
const OUTCOMES = ["Faster decisions", "Less manual work", "Better customer experience", "Scalable operations"];

export default function WorkflowSection() {
  const ref = useRef(null);
  const still = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 55%"] });
  const draw = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [n, setN] = useState(still ? 4 : 0);
  useMotionValueEvent(scrollYProgress, "change", (v) => setN(still ? 4 : Math.min(4, Math.floor(v * 4.4))));
  const lit = still ? 4 : n;
  return (
    <section ref={ref} id="workflow" data-tone="light" aria-labelledby="wf-h" className="mx-sec mx-white">
      <div className="mx-wrap">
        <Lines id="wf-h" lines={["Bring us the workflow.", "We’ll turn it into", "an intelligent system."]} dim={[1, 2]} className="mx-display mx-h2 max-w-5xl" />

        <div className="mt-16 grid gap-14 md:mt-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* before */}
          <div>
            <p className="mx-small">Manual</p>
            <ol className="mt-6">
              {MANUAL.map((s, i) => (
                <li key={s} className="relative flex items-center gap-4 py-3" style={{ marginLeft: `${[0, 22, 6, 30, 12, 0][i]}px` }}>
                  <span aria-hidden className="h-px w-5" style={{ background: "var(--line-strong)" }} />
                  <span className="text-[1.15rem] tracking-tight" style={{ color: "var(--soft)" }}>{s}</span>
                  {i < MANUAL.length - 1 && <span aria-hidden className="mx-small ml-auto" style={{ marginLeft: "auto" }}>↓</span>}
                </li>
              ))}
            </ol>
            <p className="mx-small mt-5 max-w-[16rem]">Six handoffs. Each one waits on a person.</p>
          </div>

          {/* after */}
          <div className="relative">
            <p className="mx-small" style={{ color: "var(--violet-ink)" }}>MAD AI system</p>
            <div className="relative mt-6 pl-10 md:pl-14">
              <svg aria-hidden className="absolute left-[10px] top-0 h-full w-[2px] md:left-[18px]" preserveAspectRatio="none" viewBox="0 0 2 100">
                <line x1="1" y1="0" x2="1" y2="100" stroke="var(--line)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                <motion.line x1="1" y1="0" x2="1" y2="100" stroke="#2563eb" strokeWidth="2" vectorEffect="non-scaling-stroke" style={{ pathLength: still ? 1 : draw }} />
              </svg>
              <ol className="space-y-9 md:space-y-12">
                {SYSTEM.map(([t, d], i) => (
                  <li key={t} className="relative transition-opacity duration-700" style={{ opacity: i < lit || still ? 1 : 0.28 }}>
                    <span aria-hidden className="absolute -left-[38px] top-[.7rem] grid h-[11px] w-[11px] place-items-center rounded-full border md:-left-[46px]" style={{ background: i < lit ? "#2563eb" : "#fff", borderColor: i < lit ? "#2563eb" : "var(--line-strong)", transition: "all .6s" }} />
                    <h3 className="mx-display" style={{ fontSize: "clamp(1.9rem, 3.8vw, 3.2rem)" }}>{t}</h3>
                    <p className="mt-1 max-w-sm" style={{ color: "var(--soft)" }}>{d}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        <Fade className="mt-16 md:mt-24">
          <ul className="flex flex-wrap border-t" style={{ borderColor: "var(--line)" }}>
            {OUTCOMES.map((o, i) => (
              <li key={o} className="flex-1 basis-1/2 py-5 pr-6 text-[1.05rem] tracking-tight md:basis-0" style={{ borderLeft: i ? "1px solid var(--line)" : 0, paddingLeft: i ? "1.25rem" : 0 }}>{o}</li>
            ))}
          </ul>
        </Fade>
      </div>
    </section>
  );
}

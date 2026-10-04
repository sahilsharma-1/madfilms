"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Lines, Fade, Pic, useLive, useStepper, EASE } from "./shared";
import { TABS } from "./agentsData";
import { AGENT_MEDIA as M } from "@/lib/media";

const STEPS = [["You ask", "“Screen these applications.”"], ["AI understands", "Reads the role requirements."], ["AI works", "Reviews 124 candidates."], ["AI delivers", "Creates the shortlist."], ["You decide", "The recruiter approves."]];

export function SeeItInAction() {
  const [ref, live] = useLive();
  const i = useStepper(5, 2200, live);
  return (
    <section ref={ref} id="see-it" data-tone="light" aria-labelledby="si-h" className="mx-sec mx-wash-b">
      <div className="mx-wrap">
        <p className="mx-kicker">SEE IT IN ACTION</p>
        <Lines id="si-h" lines={["Watch AI do the work."]} className="mx-display mx-h2 mt-4" />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="relative min-h-[26rem] overflow-hidden rounded-[6px]">
            <Pic m={M.hr} className="absolute inset-0" />
            <div className="mx-frag absolute inset-x-4 bottom-4 p-5 md:left-auto md:right-6 md:w-[22rem]">
              <div className="flex justify-between"><p className="mx-tag">AI Screening Agent</p><p className="mx-tag" style={{ color: "#1d4ed8" }}>Illustrative AI workflow</p></div>
              <p className="mt-3 text-[2rem] font-medium leading-none tracking-tight">{i < 2 ? "124" : i < 3 ? "124 → …" : "124 → 18"}</p>
              <p className="mx-small mt-1">{i < 3 ? "applications reviewed" : "candidates shortlisted"}</p>
              <div className="mt-4 h-1 rounded-full" style={{ background: "var(--paper-2)" }}><div className="h-1 rounded-full" style={{ background: "#2563eb", width: `${(i / 4) * 100}%`, transition: "width 1.4s cubic-bezier(.21,.47,.32,.98)" }} /></div>
              <p className="mt-3 text-[.85rem]" style={{ opacity: i >= 4 ? 1 : 0.35, transition: "opacity .6s" }}>Waiting for recruiter approval</p>
            </div>
          </div>
          <ol className="flex flex-col justify-between gap-3">
            {STEPS.map(([t, d], k) => (<li key={t} className="flex gap-4 border-t pt-4 transition-opacity duration-500" style={{ borderColor: "var(--line)", opacity: k === i ? 1 : 0.4 }}><span className="mx-small w-6">0{k + 1}</span><div><p className="text-[1.15rem] font-medium tracking-tight">{t}</p><p className="mx-small mt-0.5" style={{ color: "var(--soft)" }}>{d}</p></div></li>))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function FeatureHub() {
  return (
    <section id="platform" data-tone="light" aria-labelledby="fh-h" className="mx-sec mx-white">
      <div className="mx-wrap">
        <Lines id="fh-h" lines={["One platform.", "Every workflow."]} dim={[1]} className="mx-display mx-h2" />
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TABS.filter((t) => t.id !== "ops").map((t) => (
            <li key={t.id}><Link href={`/agents#${t.id}`} className="group block h-full overflow-hidden rounded-2xl border bg-white transition-transform duration-300 hover:-translate-y-1" style={{ borderColor: "var(--line)" }}>
              <Pic m={t.img} className="aspect-[4/3] w-full" />
              <div className="p-5"><p className="mx-small uppercase tracking-wider">{t.label}</p><h3 className="mt-1 text-[1.2rem] font-medium leading-tight tracking-tight">{t.title}</h3>
                <p className="mx-small mt-2">{t.agents[0][0]} Agent</p>
                <p className="mt-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[.78rem]" style={{ background: "var(--tint-v)" }}>{t.chip[1]} <span aria-hidden>→</span> {t.chip[2]}</p>
                <p className="mt-4 text-[.9rem] font-medium" style={{ color: "var(--violet-ink)" }}>View workflow <span aria-hidden className="mx-arrow">→</span></p></div>
            </Link></li>))}
        </ul>
        <p className="mx-small mt-6">Example workflows. Not a list of finished products.</p>
      </div>
    </section>
  );
}

const BEFORE = ["Email chains", "Spreadsheets", "Manual searching", "Copy/paste", "Waiting"];
const AFTER = ["Finds", "Understands", "Summarizes", "Acts", "Escalates"];
export function BeforeAfter() {
  const still = useReducedMotion();
  return (
    <section id="difference" data-tone="light" aria-labelledby="ba-h" className="mx-sec mx-wash-v">
      <div className="mx-wrap">
        <p className="mx-kicker">THE DIFFERENCE</p>
        <Lines id="ba-h" lines={["Less busywork.", "More progress."]} dim={[1]} className="mx-display mx-h2 mt-4" />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border p-7" style={{ borderColor: "var(--line)", background: "var(--paper-2)" }}>
            <p className="mx-small">WITHOUT AI</p>
            <ul className="mt-5 space-y-3">{BEFORE.map((b, k) => (<motion.li key={b} initial={{ x: still ? 0 : (k % 2 ? 18 : -14), rotate: still ? 0 : (k % 2 ? 1.2 : -1.2) }} whileInView={{ x: 0, rotate: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 1.1, delay: k * 0.08, ease: EASE }} className="rounded-lg bg-white px-4 py-3 text-[1.05rem]" style={{ color: "var(--soft)" }}>{b}</motion.li>))}</ul>
          </div>
          <div className="rounded-2xl border p-7" style={{ borderColor: "#2563eb", background: "#fff" }}>
            <p className="mx-small" style={{ color: "#1d4ed8" }}>WITH AI</p>
            <ul className="mt-5 space-y-3">{AFTER.map((a, k) => (<motion.li key={a} initial={{ opacity: 0, y: still ? 0 : 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.8, delay: 0.5 + k * 0.1, ease: EASE }} className="flex items-center gap-3 rounded-lg px-4 py-3 text-[1.05rem] font-medium" style={{ background: "var(--tint-v)" }}><span className="mx-dot" />{a}</motion.li>))}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HumanApproval() {
  const [d, setD] = useState(null);
  return (
    <section id="human-control" data-tone="light" aria-labelledby="hc-h" className="mx-sec mx-white">
      <div className="mx-wrap grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mx-kicker">HUMAN IN CONTROL</p>
          <Lines id="hc-h" lines={["People stay", "in control."]} dim={[1]} className="mx-display mx-h2 mt-4" />
          <p className="mx-lead mt-5">AI prepares the work. A person decides what happens next.</p>
          <ol className="mt-8 flex flex-wrap items-center gap-2 text-[.95rem]">{["AI completes the task", "Human review", "Approve", "Action"].map((s, k, a) => (<li key={s} className="flex items-center gap-2"><span className="rounded-full border px-3 py-1.5" style={{ borderColor: "var(--line)" }}>{s}</span>{k < a.length - 1 && <span aria-hidden style={{ color: "var(--mute)" }}>→</span>}</li>))}</ol>
        </div>
        <div className="relative min-h-[24rem] overflow-hidden rounded-[6px]">
          <Pic m={M.ops} className="absolute inset-0" />
          <div className="mx-frag absolute inset-x-4 bottom-4 p-5 md:inset-x-auto md:right-6 md:w-[21rem]" aria-live="polite">
            <p className="mx-tag">AI recommendation · Illustrative</p>
            <p className="mt-2 font-medium">{d === "Approve" ? "Approved. Interviews are being scheduled." : d ? `${d}: nothing happens until you confirm.` : "Shortlist the top 18 candidates and schedule 5 interviews."}</p>
            <div className="mt-4 flex gap-2">{["Approve", "Review", "Edit"].map((b) => (<button key={b} onClick={() => setD(b)} className="rounded-full border px-4 py-1.5 text-[.85rem]" style={{ borderColor: b === "Approve" ? "#2563eb" : "var(--line-strong)", background: b === "Approve" ? "#2563eb" : "#fff", color: b === "Approve" ? "#fff" : "var(--ink)" }}>{b}</button>))}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

const TRUST = [["Security", "Agents work only in the systems you connect."], ["Privacy", "Sensitive data stays inside your agreed boundaries."], ["Governance", "Clear rules for what an agent may do."], ["Access", "Agents follow your existing permissions."], ["Auditability", "Every action can be reviewed afterwards."], ["Human approval", "Important steps wait for a person."]];
export function EnterpriseTrust() {
  return (
    <section id="enterprise" data-tone="light" aria-labelledby="et-h" className="mx-sec mx-wash-b">
      <div className="mx-wrap">
        <Lines id="et-h" lines={["Built for enterprise."]} className="mx-display mx-h2" />
        <Fade><ul className="mt-12 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">{TRUST.map(([k, d]) => (<li key={k} className="border-t pt-4" style={{ borderColor: "var(--line)" }}><p className="text-[1.15rem] font-medium tracking-tight">{k}</p><p className="mx-small mt-1">{d}</p></li>))}</ul></Fade>
        <p className="mx-small mt-8 max-w-xl">These describe how we design our solutions. We do not claim any certifications on this page.</p>
      </div>
    </section>
  );
}

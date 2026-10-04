"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Photo, Win, Pill, Flow, EASE, useLive } from "./ui";
import { MAIL } from "../home/content";

const SRC = ["Sales", "Finance", "CRM", "Documents"];

export default function Hero2() {
  const still = useReducedMotion();
  const [ref, live] = useLive();
  const up = (d) => ({ initial: { opacity: 0, y: still ? 0 : 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, delay: d, ease: EASE } });
  return (
    <section data-tone="light" aria-labelledby="h2-hero" className="relative overflow-hidden pt-24 md:pt-28" data-world="blue" style={{ background: "linear-gradient(180deg,#f3f7ff 0%,#fbfaf7 100%)" }}>
      <div className="h2-wrap grid items-center gap-8 pb-10 md:pb-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <motion.p {...up(0)} className="h2-eyebrow">Enterprise AI + Automation</motion.p>
          <h1 id="h2-hero" className="h2-h1 mt-4">AI that gets work done.</h1>
          <motion.p {...up(0.25)} className="h2-lead mt-5">We build AI-powered workflows around the way your business actually works.</motion.p>
          <motion.div {...up(0.4)} className="mt-7 flex flex-wrap gap-2.5">
            <a href="#agents" className="h2-btn h2-btn-ink">Explore what we automate <span aria-hidden>→</span></a>
            <a href={MAIL} className="h2-btn h2-btn-line">Talk to us</a>
          </motion.div>
        </div>

        {/* Person stays dominant: photo fills the column, UI sits to the side and below, never over the face. */}
        <div ref={ref} className="relative lg:col-span-7">
          <div className="grid grid-cols-12 gap-3 md:gap-4">
            <Photo slot="hero" priority className="col-span-7 min-h-[22rem] rounded-[10px] md:min-h-[34rem]" />
            <div className="col-span-5 flex flex-col justify-end gap-3 md:gap-4">
              <Win title="Monthly reporting" className="h2-in">
                <p className="text-[.7rem] font-semibold">Automate monthly reporting</p>
                <ul className="mt-2 flex flex-wrap gap-1">{SRC.map((s) => <li key={s}><Pill k="no">{s}</Pill></li>)}</ul>
                <svg viewBox="0 0 100 18" className="my-2 w-full" aria-hidden><path d="M50 0V18" stroke="#2f6fe4" className="h2-dash" strokeWidth="1.5" fill="none" /></svg>
                <div className="rounded-lg p-2" style={{ background: "var(--w-light)" }}>
                  <p className="flex items-center gap-1.5 text-[.7rem] font-semibold"><span className="h2-live inline-block h-1.5 w-1.5 rounded-full" style={{ background: "var(--w-acc)" }} />AI working</p>
                  <div className="h2-bar mt-1.5"><i style={{ width: live ? "78%" : "10%", transition: "width 2.4s cubic-bezier(.21,.47,.32,.98)" }} /></div>
                </div>
              </Win>
              <Win title="Report ready" className="hidden md:block">
                <div className="flex items-center justify-between"><span className="text-[.72rem] font-semibold">October report</span><Pill>Ready</Pill></div>
                <p className="mt-1 text-[.68rem]" style={{ color: "var(--soft)" }}>Revenue, open issues, 3 recommendations.</p>
                <div className="mt-2 flex gap-1.5"><span className="h2-btn-s pri">Approve</span><span className="h2-btn-s">Edit</span></div>
              </Win>
            </div>
          </div>
        </div>
      </div>
      <div className="h2-wrap pb-8"><Flow stages={[{ k: "01 Task", t: "Monthly report" }, { k: "02 AI work", t: "Pulls data from 4 sources" }, { k: "03 Result", t: "Draft report" }, { k: "04 Human", t: "You approve" }]} run={live} className="max-w-3xl" /></div>
    </section>
  );
}

"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CalendarCheck } from "lucide-react";
import AgentFlow from "./AgentFlow";
import Photo from "./Photo";
import { HERO_COLLAGE } from "@/lib/media";

const EASE = [0.21, 0.47, 0.32, 0.98];
export const HERO_STEPS = [
  { t: "Lead found", d: "Healthcare, India" },
  { t: "Researching company" },
  { t: "Finding decision maker" },
  { t: "Personalizing message" },
  { t: "Sending outreach" },
  { t: "Reply received" },
  { t: "Meeting booked" },
];

export default function Hero() {
  const still = useReducedMotion();
  return (
    <section data-tone="dark" className="mh-dark mh-aurora relative flex min-h-[100svh] items-center overflow-hidden">
      <div aria-hidden className="mh-dots absolute inset-0" />
      <div className="mh-wrap relative grid w-full items-center gap-16 pb-24 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-16 lg:pt-28">
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="mh-label">MAD Company</motion.p>
          <h1 className="mh-h1 mt-5" style={{ fontSize: "clamp(3.3rem, 9.4vw, 8.25rem)", lineHeight: 0.94, letterSpacing: "-0.055em" }}>
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span className="block" initial={{ y: still ? 0 : "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.1, ease: EASE }}>AI that does</motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.12em]">
              <motion.span className="mh-grad-text block" initial={{ y: still ? 0 : "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.22, ease: EASE }}>the work.</motion.span>
            </span>
          </h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.5, ease: EASE }} className="mh-lead mt-7">
            AI agents that find leads, talk to customers, automate workflows and help your team move faster.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.65, ease: EASE }} className="mt-9 flex flex-wrap gap-3">
            <Link href="#contact" className="mh-btn mh-btn-grad">Build an AI Agent <ArrowUpRight size={15} /></Link>
            <Link href="#scenarios" className="mh-btn mh-btn-line">See What We Build</Link>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="t-mute mt-10 text-sm">
            Works with email, WhatsApp, LinkedIn, your CRM, databases and APIs.
          </motion.p>
        </div>

        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.45, ease: EASE }} className="relative pb-12">
          <div className="grid grid-cols-[1.1fr_0.9fr] gap-3 sm:gap-4">
            <Photo m={HERO_COLLAGE[0]} priority vignette className="mh-zoom aspect-[3/4] rounded-[2rem]" />
            <div className="grid gap-3 sm:gap-4">
              <Photo m={HERO_COLLAGE[1]} priority className="mh-zoom aspect-square rounded-[2rem]" />
              <Photo m={HERO_COLLAGE[2]} className="mh-zoom aspect-[4/3] rounded-[2rem]" />
            </div>
          </div>
          <div aria-hidden className="mh-float mh-bubble absolute left-3 top-6 sm:-left-6">I&rsquo;ve booked your appointment for Thursday.</div>
          <div aria-hidden className="mh-float-b mh-glass absolute -top-5 right-3 flex items-center gap-3 rounded-2xl px-4 py-3 sm:-right-4">
            <span className="mh-grad-bg grid h-9 w-9 place-items-center rounded-xl text-white"><CalendarCheck size={18} /></span>
            <span className="text-sm leading-tight"><span className="block font-medium">Meeting booked</span><span className="t-mute text-xs">Thursday, 4:00 PM</span></span>
          </div>
          <div className="mh-glass absolute bottom-0 left-3 right-3 rounded-3xl p-4 sm:left-6 sm:right-auto sm:w-[19rem]">
            <div className="mb-3 flex items-center gap-2 text-xs t-mute"><span aria-hidden className="h-2 w-2 rounded-full mh-grad-bg mh-pulse" /> Sales agent, working</div>
            <AgentFlow steps={HERO_STEPS.slice(0, 5)} speed={1200} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

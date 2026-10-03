"use client";
import { Check, CalendarCheck, Mail, Briefcase, MessageCircle } from "lucide-react";
import useLoop from "./useLoop";
import { OUTREACH_STEPS } from "./data";
import { Reveal } from "./Reveal";

const LOG = ["Companies found", "Companies researched", "Decision makers identified", "Message written", "Message sent", "Follow-up sent", "Reply understood", "Meeting booked"];

function View({ n }) {
  const row = "flex items-center gap-3 rounded-xl bg-white/[.07] px-4 py-3 text-[15px]";
  switch (n) {
    case 0:
      return (<div><p className="mb-3 text-xs t-mute">Target</p><p className="mb-5 inline-block rounded-full mh-grad-bg px-4 py-1.5 text-sm font-medium text-white">Healthcare companies in India</p>
        <div className="space-y-2">{["Northwind Health", "Asteria Diagnostics", "Lumen Care Clinics"].map((c) => <p key={c} className={row}><Check size={15} className="text-[#7fe3b0]" />{c}</p>)}</div></div>);
    case 1:
      return (<div><p className="mb-4 text-xs t-mute">Northwind Health</p><div className="space-y-2">{["Reading the website", "Checking recent news", "Looking at hiring pages"].map((c) => <p key={c} className={row}><Check size={15} className="text-[#7fe3b0]" />{c}</p>)}</div></div>);
    case 2:
      return (<div><p className="mb-4 text-xs t-mute">Northwind Health</p><div className="space-y-2">{["CEO identified", "CTO identified", "Work email verified"].map((c) => <p key={c} className={row}><Check size={15} className="text-[#7fe3b0]" />{c}</p>)}</div></div>);
    case 3:
      return (<div><p className="mb-4 text-xs t-mute">Message to the CTO</p><p className="rounded-2xl bg-white/[.07] p-5 text-[15px] leading-relaxed t-soft">Hi, I noticed Northwind is growing its telehealth service. We build AI agents that handle appointment requests and patient questions, so your team can focus on care. Worth a short chat?</p></div>);
    case 4:
      return (<div><p className="mb-4 text-xs t-mute">Sent on the channels they use</p><div className="grid gap-2 sm:grid-cols-3">{[[Mail, "Email"], [Briefcase, "LinkedIn"], [MessageCircle, "WhatsApp"]].map(([I, l]) => <p key={l} className={row}><I size={16} />{l}<Check size={14} className="ml-auto text-[#7fe3b0]" /></p>)}</div></div>);
    case 5:
      return (<div><p className="mb-4 text-xs t-mute">3 days later</p><div className="space-y-2"><p className={row}>No reply yet</p><p className={row}><Check size={15} className="text-[#7fe3b0]" />Follow-up written and sent</p></div></div>);
    case 6:
      return (<div><p className="mb-4 text-xs t-mute">Reply received</p><p className="mb-4 inline-block max-w-[85%] rounded-2xl bg-white/10 px-4 py-2.5 text-[15px]">This looks relevant. Can you share more?</p><div className="flex flex-wrap gap-2 text-xs">{["Interested", "Good fit", "Decision maker"].map((t) => <span key={t} className="rounded-full border border-white/25 px-3 py-1">{t}</span>)}</div></div>);
    default:
      return (<div><p className="mb-4 text-xs t-mute">Calendar</p><div className="mh-grad-bg flex items-center gap-4 rounded-2xl p-5 text-white"><CalendarCheck size={28} /><div><p className="text-lg font-semibold">Meeting booked</p><p className="text-sm text-white/85">Thursday, 4:00 PM</p></div></div><p className="t-mute mt-4 text-sm">Added to the calendar. CRM updated.</p></div>);
  }
}

export default function Outreach() {
  const { ref, i } = useLoop(OUTREACH_STEPS.length, 2100, 2);
  return (
    <section id="outreach" data-tone="dark" aria-labelledby="out-h" className="mh-dark mh-aurora-soft mh-sec overflow-hidden">
      <div ref={ref} className="mh-wrap relative">
        <Reveal className="max-w-3xl">
          <p className="mh-label mb-5">MAD Outreach</p>
          <h2 id="out-h" className="mh-h2">Your AI sales team.</h2>
          <p className="mh-lead mt-5">Find the right companies. Start the right conversations.</p>
        </Reveal>

        <div className="mt-12">
          <ol aria-label="Outreach workflow" className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
            {OUTREACH_STEPS.map((s, n) => (
              <li key={s} className={`rounded-full border px-3 py-2 text-center text-sm transition-all duration-500 ${n === i ? "mh-grad-bg border-transparent font-medium text-white" : n < i ? "border-white/35 text-white" : "border-white/12 t-mute"}`}>{s}</li>
            ))}
          </ol>
          <div aria-hidden className="mt-3 h-px w-full bg-white/10"><div className="mh-grad-bg h-px transition-all duration-700" style={{ width: `${((i + 1) / OUTREACH_STEPS.length) * 100}%` }} /></div>
        </div>

        <Reveal delay={0.1} className="mh-glass mt-8 grid gap-8 rounded-[2rem] p-6 sm:p-9 lg:grid-cols-[1.2fr_0.8fr]">
          <div key={i} className="mh-fade min-h-[16rem]"><View n={i} /></div>
          <ol aria-label="Activity" className="space-y-3 border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            {LOG.map((l, n) => (
              <li key={l} className={`flex items-center gap-3 text-[15px] transition-opacity duration-500 ${n <= i ? "opacity-100" : "opacity-30"}`}>
                <span aria-hidden className={`grid h-5 w-5 place-items-center rounded-full border ${n < i ? "mh-grad-bg border-transparent text-white" : n === i ? "border-[#9b8cff] mh-pulse" : "border-white/20"}`}>{n < i && <Check size={12} strokeWidth={3} />}</span>{l}
              </li>
            ))}
          </ol>
        </Reveal>
        <p className="t-mute mt-8 max-w-2xl text-xs">Illustrative example with sample data. Results depend on your market, offer and data. We don&rsquo;t promise leads, meetings or revenue.</p>
      </div>
    </section>
  );
}

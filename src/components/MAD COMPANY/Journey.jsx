"use client";
import { Check } from "lucide-react";
import useLoop from "./useLoop";
import { JOURNEY } from "./data";
import { Reveal } from "./Reveal";

const SYSTEMS = ["CRM", "Email", "WhatsApp", "Database", "APIs"];

function Scene({ n }) {
  switch (n) {
    case 0:
      return (<div className="space-y-3"><p className="text-xs t-mute">You</p><p className="inline-block max-w-[90%] rounded-2xl bg-white/12 px-5 py-3 text-lg leading-snug">Find healthcare companies in India and book meetings for us.</p><p className="t-mute text-sm">That is the whole brief.</p></div>);
    case 1:
      return (<div><p className="mb-4 text-xs t-mute">The agent plan</p><div className="flex flex-wrap items-center gap-2 text-sm">{["Goal", "Decisions", "Tools", "Workflow"].map((x, k) => (<span key={x} className="flex items-center gap-2"><span className="rounded-xl border border-white/25 bg-white/[.08] px-4 py-2.5">{x}</span>{k < 3 && <span aria-hidden className="t-mute">&rarr;</span>}</span>))}</div></div>);
    case 2:
      return (<div><p className="mb-4 text-xs t-mute">Connected to your systems</p><div className="grid gap-2 sm:grid-cols-2">{SYSTEMS.map((x, k) => (<p key={x} style={{ animationDelay: `${k * 160}ms` }} className="mh-fade flex items-center gap-3 rounded-xl bg-white/[.08] px-4 py-3 text-[15px]"><Check size={15} className="text-[#7fe3b0]" />{x}</p>))}</div></div>);
    case 3:
      return (<div><p className="mb-5 flex items-center gap-2 text-sm"><span aria-hidden className="h-2.5 w-2.5 rounded-full bg-[#7fe3b0] mh-pulse" />Agent live</p><div className="space-y-2 text-[15px] t-soft"><p className="mh-fade">Lead found</p><p className="mh-fade" style={{ animationDelay: "250ms" }}>Message sent</p><p className="mh-fade" style={{ animationDelay: "500ms" }}>Reply received</p></div></div>);
    default:
      return (<div><p className="mb-4 text-xs t-mute">Monitor. Learn. Optimize.</p><svg viewBox="0 0 320 120" className="w-full" aria-hidden><defs><linearGradient id="jl" x1="0" x2="1"><stop offset="0" stopColor="#7fa0ff" /><stop offset="1" stopColor="#ffa56b" /></linearGradient></defs><path d="M10 100 C60 96 80 70 120 72 S190 40 230 36 S290 18 310 12" fill="none" stroke="url(#jl)" strokeWidth="3" strokeLinecap="round" className="mh-draw" /></svg></div>);
  }
}

export default function Journey() {
  const { ref, i, setRaw } = useLoop(JOURNEY.length, 3200, 1);
  return (
    <section id="process" data-tone="dark" aria-labelledby="jo-h" className="mh-dark mh-journey mh-sec overflow-hidden">
      <div ref={ref} className="mh-wrap relative">
        <Reveal className="max-w-3xl">
          <p className="mh-label mb-5">How it works</p>
          <h2 id="jo-h" className="mh-h2">From idea to agent.</h2>
          <p className="mh-lead mt-5">Five simple steps. You bring the job.</p>
        </Reveal>
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <ol className="space-y-2">
            {JOURNEY.map((s, n) => (
              <li key={s.t}>
                <button onClick={() => setRaw(n)} aria-current={n === i ? "step" : undefined} className={`flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition-all duration-500 sm:p-5 ${n === i ? "border-white/30 bg-white/10" : "border-transparent opacity-55 hover:opacity-90"}`}>
                  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm font-semibold ${n === i ? "mh-grad-bg text-white" : "border border-white/25"}`}>{n + 1}</span>
                  <span><span className="block text-lg font-semibold tracking-tight">{s.t}</span><span className="t-soft mt-1 block text-[15px]">{s.d}</span></span>
                </button>
              </li>
            ))}
          </ol>
          <div className="mh-glass flex min-h-[20rem] items-center rounded-[2rem] p-6 sm:p-10">
            <div key={i} className="mh-fade w-full"><Scene n={i} /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

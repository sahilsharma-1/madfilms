import { Plug, Wand2, Activity, TrendingUp } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "./Reveal";

const STEPS = [
  {
    icon: Plug,
    step: "01",
    title: "Connect your tools",
    desc: "Link your CRM, inbox, calendar, and the rest of your stack in a few clicks — no engineering ticket required.",
  },
  {
    icon: Wand2,
    step: "02",
    title: "Build the workflow",
    desc: "Pick a template or drag your own together: trigger, condition, action. Test it against real data before it goes live.",
  },
  {
    icon: Activity,
    step: "03",
    title: "Let it run",
    desc: "MAD watches for the trigger and executes instantly, 24/7 — logging every run so you can audit exactly what happened.",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Scale what works",
    desc: "See which automations save the most time from the analytics dashboard, then clone and tune them across teams.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="bg-[#060608] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="font-mono-mad text-xs uppercase tracking-widest text-white/40">
            How it works
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Live in an afternoon,{" "}
            <span className="mad-gradient-text">not a quarter.</span>
          </h2>
        </Reveal>

        <RevealStagger className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block"
          />
          {STEPS.map((s) => (
            <RevealItem key={s.step} className="relative flex flex-col items-start">
              <div
                className="mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-white/10 bg-[#0a0a0f]"
                style={{ boxShadow: "0 0 0 6px #060608" }}
              >
                <s.icon size={24} className="text-[#00C2FF]" />
              </div>
              <span className="mad-gradient-text font-mono-mad text-xs font-bold tracking-widest">
                {s.step}
              </span>
              <h3 className="mt-2 font-display text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-white/55">{s.desc}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

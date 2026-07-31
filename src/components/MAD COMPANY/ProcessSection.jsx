import { Compass, Layers, Rocket, TrendingUp } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "./Reveal";

const STEPS = [
  {
    n: "01",
    icon: Compass,
    title: "Discover",
    copy: "We embed with your team for a week — brand, KPIs, and a brief everyone actually agreed to, in writing.",
  },
  {
    n: "02",
    icon: Layers,
    title: "Design & build",
    copy: "One pod, every discipline you need — no handoffs between agencies, no re-explaining the brief twice.",
  },
  {
    n: "03",
    icon: Rocket,
    title: "Launch",
    copy: "Shipped on your timeline, reviewed against your brand and compliance standards before it goes live.",
  },
  {
    n: "04",
    icon: TrendingUp,
    title: "Scale",
    copy: "We stay on as the data comes in — doubling down on what works, killing what doesn't.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="bg-[#060608] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-14 max-w-2xl">
          <p className="font-mono-mad text-xs uppercase tracking-widest text-white/40">
            How it works
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            From brief to launch,{" "}
            <span className="mad-gradient-text">without the agency runaround.</span>
          </h2>
          <p className="mt-4 font-body text-white/60">
            Every engagement runs through the same four gates — whether
            you&apos;re briefing one studio or all eight at once.
          </p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => {
            const Icon = s.icon;
            return (
              <RevealItem key={s.n} className="h-full">
                <div className="mad-gradient-border relative flex h-full flex-col rounded-3xl bg-white/[0.03] p-6 transition">
                  <span className="font-display text-sm font-bold text-white/20">
                    {s.n}
                  </span>
                  <div className="mad-gradient-bg mt-6 flex h-11 w-11 items-center justify-center rounded-xl">
                    <Icon size={20} className="text-white" />
                  </div>
                  <p className="mt-6 font-display text-lg font-bold text-white">
                    {s.title}
                  </p>
                  <p className="mt-2 font-body text-sm leading-relaxed text-white/55">
                    {s.copy}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}

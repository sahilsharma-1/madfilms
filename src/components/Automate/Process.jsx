import { ScanSearch, Wand2, Plug, Rocket } from "lucide-react";

const STEPS = [
  {
    n: "01",
    icon: "ScanSearch",
    title: "Audit & Map",
    description:
      "We shadow your team for a week, map every repetitive task, and flag which ones are actually worth automating first.",
  },
  {
    n: "02",
    icon: "Wand2",
    title: "Build the Workflow",
    description:
      "We build in n8n, Zapier, or Make against your real tools — not a demo environment you'll have to redo later.",
  },
  {
    n: "03",
    icon: "Plug",
    title: "Connect & Test",
    description:
      "Every integration gets tested against real data before it ever touches a real customer or a real lead.",
  },
  {
    n: "04",
    icon: "Rocket",
    title: "Launch & Monitor",
    description:
      "We watch the first two weeks closely, tune what's off, then hand you a system you can actually see inside.",
  },
];

const ICONS = { ScanSearch, Wand2, Plug, Rocket };

export default function Process() {
  return (
    <section className="bg-[#060608] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="font-mono-mad text-xs uppercase tracking-widest text-white/40">
            How it works
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Four steps.{" "}
            <span className="mad-gradient-text">No black box.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <div
                key={s.n}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6"
              >
                <p className="font-display text-4xl font-extrabold text-white/10">{s.n}</p>
                <div
                  className="-mt-6 mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: "linear-gradient(135deg, #7c3aff, #00c2ff)" }}
                >
                  <Icon size={20} className="text-white" />
                </div>
                <p className="font-display text-lg font-bold text-white">{s.title}</p>
                <p className="mt-2 font-body text-sm leading-snug text-white/50">{s.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Compass, Wand2, Box, Rocket } from "lucide-react";

const STEPS = [
  {
    n: "01",
    icon: "Compass",
    title: "Discovery & Concept",
    description:
      "We map your goal — product try-on, a virtual tour, a brand activation — to the simplest tech that actually delivers it.",
  },
  {
    n: "02",
    icon: "Wand2",
    title: "Design & 3D Assets",
    description:
      "Our film team's CGI and motion pipeline builds the models, environments, and animation your experience runs on.",
  },
  {
    n: "03",
    icon: "Box",
    title: "Build & Test",
    description:
      "We build it in WebAR, VR, or both, then test across real phones and headsets before it ever reaches a customer.",
  },
  {
    n: "04",
    icon: "Rocket",
    title: "Launch & Iterate",
    description:
      "We ship it, watch how people actually use it, and refine — immersive work gets better with real usage data.",
  },
];

const ICONS = { Compass, Wand2, Box, Rocket };

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
                  style={{ background: "linear-gradient(135deg, #0064fa, #00c2ff)" }}
                >
                  <Icon size={20} className="text-white" />
                </div>
                <p className="font-display text-lg font-bold text-white">{s.title}</p>
                <p className="mt-2 font-body text-sm leading-snug text-white/50">
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

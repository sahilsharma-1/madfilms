import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "./Reveal";

const STORIES = [
  {
    company: "Nova",
    category: "Fintech · 120 employees",
    result: "+64%",
    resultLabel: "faster lead response",
    summary: "Replaced a five-app lead-routing chain with two MAD workflows and cut response time from hours to minutes.",
    gradient: ["#0064FA", "#00C2FF"],
  },
  {
    company: "Ferro",
    category: "Logistics · 340 employees",
    result: "18 hrs",
    resultLabel: "saved per week, per ops lead",
    summary: "Automated exception handling across three carriers, freeing the ops team to work escalations instead of data entry.",
    gradient: ["#7C3AFF", "#F726A8"],
  },
  {
    company: "Vantra",
    category: "B2B SaaS · 65 employees",
    result: "3x",
    resultLabel: "pipeline visibility",
    summary: "Connected CRM, billing, and support into one dashboard so revenue and success teams finally see the same numbers.",
    gradient: ["#00C2FF", "#7C3AFF"],
  },
];

export default function CustomerStories() {
  return (
    <section id="customers" className="bg-[#060608] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="font-mono-mad text-xs uppercase tracking-widest text-white/40">
            Customer stories
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Real teams,{" "}
            <span className="mad-gradient-text">real hours back.</span>
          </h2>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {STORIES.map((s) => (
            <RevealItem
              key={s.company}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition hover:border-white/20"
            >
              <div
                className="relative flex h-36 items-center justify-center overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${s.gradient[0]}, ${s.gradient[1]})` }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-25 mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 25% 25%, white, transparent 40%), radial-gradient(circle at 75% 75%, white, transparent 40%)",
                  }}
                />
                <span className="font-display text-3xl font-extrabold text-white/90">
                  {s.company}
                </span>
              </div>

              <div className="p-6">
                <p className="font-mono-mad text-[11px] uppercase tracking-wider text-white/35">
                  {s.category}
                </p>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="mad-gradient-text font-display text-3xl font-extrabold">
                    {s.result}
                  </span>
                  <span className="font-body text-xs text-white/50">{s.resultLabel}</span>
                </div>
                <p className="mt-3 font-body text-sm leading-relaxed text-white/55">
                  {s.summary}
                </p>
                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-white/80 transition group-hover:text-white"
                >
                  Read the story
                  <ArrowUpRight size={14} className="transition group-hover:translate-x-0.5" />
                </a>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

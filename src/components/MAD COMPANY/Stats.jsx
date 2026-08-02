import { Reveal, RevealStagger, RevealItem } from "./Reveal";
import AnimatedCounter from "./AnimatedCounter";

const STATS = [
  { value: "10K+", label: "Teams onboarded" },
  { value: "99.98%", label: "Platform uptime" },
  { value: "4.9/5", label: "Avg. customer rating" },
  { value: "35+", label: "Hours saved / team / mo" },
];

export default function Stats() {
  return (
    <section className="bg-[#060608] px-6 py-20 lg:px-10">
      <Reveal className="mx-auto mb-10 max-w-2xl text-center">
        <p className="font-mono-mad text-xs uppercase tracking-widest text-white/40">
          By the numbers
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Numbers your{" "}
          <span className="mad-gradient-text">finance team will like too.</span>
        </h2>
      </Reveal>
      <RevealStagger className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 rounded-3xl border border-white/10 bg-white/[0.02] px-6 py-12 sm:grid-cols-4 sm:divide-x sm:divide-white/10">
        {STATS.map((s) => (
          <RevealItem key={s.label} className="text-center">
            <p className="mad-gradient-text font-display text-4xl font-extrabold sm:text-5xl">
              <AnimatedCounter value={s.value} />
            </p>
            <p className="mt-2 font-mono-mad text-xs uppercase tracking-wider text-white/40">
              {s.label}
            </p>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}

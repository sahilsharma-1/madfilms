import {
  ArrowUpRight,
  Clapperboard,
  Code2,
  BrainCircuit,
  Glasses,
  TrendingUp,
  Cloud,
  BarChart3,
  FlaskConical,
} from "lucide-react";
import { studios } from "./studios";

const ICONS = {
  Clapperboard,
  Code2,
  BrainCircuit,
  Glasses,
  TrendingUp,
  Cloud,
  BarChart3,
  FlaskConical,
};

export default function CompaniesShowcase() {
  return (
    <section id="companies" className="bg-[#060608] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="font-mono-mad text-xs uppercase tracking-widest text-white/40">
            Our companies
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Eight studios.{" "}
            <span className="mad-gradient-text">One obsession with craft.</span>
          </h2>
          <p className="mt-4 font-body text-white/60">
            Every studio ships independently and rolls up under one company —
            so you can hire exactly the specialist you need, or the whole
            house at once.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {studios.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <a
                key={s.slug}
                href={s.href}
                className="mad-gradient-border group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white/[0.03] p-6 transition"
              >
                <div>
                  <div className="mb-10 flex items-center justify-between">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{
                        background: `linear-gradient(135deg, ${s.gradient[0]}, ${s.gradient[1]})`,
                      }}
                    >
                      <Icon size={20} className="text-white" />
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-white/30 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                    />
                  </div>
                  <p className="font-mono-mad text-[11px] uppercase tracking-widest text-white/40">
                    {s.category}
                  </p>
                  <p className="mt-1 font-display text-xl font-bold text-white">{s.name}</p>
                </div>
                <p className="mt-8 font-body text-sm leading-snug text-white/50">
                  {s.tagline}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

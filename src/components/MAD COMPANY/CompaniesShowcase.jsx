"use client";

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
import { Reveal, RevealStagger, RevealItem } from "./Reveal";

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

// Cursor-tracked spotlight glow — see .mad-spotlight in globals-additions.css
function handleSpotlight(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  card.style.setProperty("--x", `${e.clientX - rect.left}px`);
  card.style.setProperty("--y", `${e.clientY - rect.top}px`);
}

export default function CompaniesShowcase() {
  return (
    <section id="companies" className="bg-[#060608] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-14 max-w-2xl">
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
        </Reveal>

        <RevealStagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {studios.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <RevealItem key={s.slug} className="h-full">
                <a
                  href={s.href}
                  onMouseMove={handleSpotlight}
                  className="mad-gradient-border mad-spotlight group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-white/[0.03] p-6 transition"
                >
                  {/* Hover preview — set `video` or `image` on this studio in
                      studios.js and it plays/shows behind the card on hover. */}
                  {(s.video || s.image) && (
                    <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      {s.video ? (
                        <video autoPlay muted loop playsInline className="h-full w-full object-cover">
                          <source src={s.video} type="video/mp4" />
                        </video>
                      ) : (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={s.image} alt="" className="h-full w-full object-cover" />
                      )}
                      <div className="absolute inset-0 bg-black/75" />
                    </div>
                  )}

                  <div>
                    <div className="mb-10 flex items-center justify-between">
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
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
                  <p className="mt-8 font-body text-sm leading-snug text-white/50 transition group-hover:text-white/75">
                    {s.tagline}
                  </p>
                </a>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}

"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "./Reveal";

// Placeholder case studies with Picsum stock imagery — swap `image`
// for real project shots and `href` for real case-study pages
// as you have them.
const CASES = [
  {
    client: "Nova Finance",
    studio: "MAD Tech × MAD Growth",
    project: "Rebrand & web platform",
    result: "+38% signup conversion",
    image: "https://picsum.photos/seed/mad-case-nova/900/700",
    href: "#",
  },
  {
    client: "Atlas Labs",
    studio: "MAD Reality",
    project: "AR product configurator",
    result: "-24% return rate",
    image: "https://picsum.photos/seed/mad-case-atlas/900/700",
    href: "#",
  },
  {
    client: "Verda",
    studio: "MAD Growth × MAD Data",
    project: "Full-funnel growth engine",
    result: "3.2x ROAS",
    image: "https://picsum.photos/seed/mad-case-verda/900/700",
    href: "#",
  },
  {
    client: "Pulse Health",
    studio: "MAD Mind",
    project: "AI patient-intake agent",
    result: "60% faster first response",
    image: "https://picsum.photos/seed/mad-case-pulse/900/700",
    href: "#",
  },
  {
    client: "Zenith Retail",
    studio: "MAD Cloud",
    project: "Global infrastructure migration",
    result: "99.98% uptime since launch",
    image: "https://picsum.photos/seed/mad-case-zenith/900/700",
    href: "#",
  },
  {
    client: "Halo Studios",
    studio: "MAD Films",
    project: "Launch film & CGI",
    result: "12M views, 40 territories",
    image: "https://picsum.photos/seed/mad-case-halo/900/700",
    href: "#",
  },
];

function handleSpotlight(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  card.style.setProperty("--x", `${e.clientX - rect.left}px`);
  card.style.setProperty("--y", `${e.clientY - rect.top}px`);
}

export default function CaseStudies() {
  return (
    <section id="work" className="bg-[#060608] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-14 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="font-mono-mad text-xs uppercase tracking-widest text-white/40">
              Selected work
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Work built for boardrooms,{" "}
              <span className="mad-gradient-text">not just portfolios.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/15 px-5 py-2.5 font-body text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white"
          >
            Start a project
            <ArrowUpRight size={15} />
          </a>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CASES.map((c) => (
            <RevealItem key={c.client} className="h-full">
              <a
                href={c.href}
                onMouseMove={handleSpotlight}
                className="mad-spotlight group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition hover:border-white/20"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.image}
                    alt={`${c.client} — ${c.project}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition group-hover:bg-white group-hover:text-black">
                    <ArrowUpRight size={16} />
                  </span>
                  <div className="absolute bottom-4 left-5 right-5">
                    <p className="font-mono-mad text-[11px] uppercase tracking-widest text-white/70">
                      {c.studio}
                    </p>
                    <p className="mt-1 font-display text-lg font-bold text-white">
                      {c.client}
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-between gap-3 p-5">
                  <p className="font-body text-sm text-white/60">{c.project}</p>
                  <p className="mad-gradient-text shrink-0 font-display text-sm font-bold">
                    {c.result}
                  </p>
                </div>
              </a>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

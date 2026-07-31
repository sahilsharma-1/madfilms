"use client";

import { Quote, Star } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "./Reveal";

// Placeholder quotes from fictional companies — swap in real client
// testimonials as you collect them. `avatar` uses pravatar.cc
// placeholder headshots so no card ships with an empty badge.
const TESTIMONIALS = [
  {
    quote:
      "MAD Mind built us a WhatsApp outreach agent that qualifies leads while we sleep. Our response time went from hours to minutes.",
    name: "Priya S.",
    role: "Head of Marketing, Nova Finance",
    initials: "NF",
    avatar: "https://i.pravatar.cc/150?img=25",
    rating: 5,
  },
  {
    quote:
      "The AR product configurator MAD Reality shipped for us cut returns dramatically. Customers finally know what they're buying.",
    name: "Daniel O.",
    role: "Founder, Atlas Labs",
    initials: "AL",
    avatar: "https://i.pravatar.cc/150?img=13",
    rating: 5,
  },
  {
    quote:
      "One team handled our rebrand, our site, and our ad spend. No more three-way calls between agencies pointing fingers.",
    name: "Meera J.",
    role: "CMO, Verda",
    initials: "VD",
    avatar: "https://i.pravatar.cc/150?img=32",
    rating: 5,
  },
  {
    quote:
      "MAD Cloud migrated three legacy systems with zero downtime. Our board actually asked who to compliment — that never happens.",
    name: "Marcus T.",
    role: "CTO, Zenith Retail",
    initials: "ZR",
    avatar: "https://i.pravatar.cc/150?img=51",
    rating: 5,
  },
  {
    quote:
      "The launch film MAD Films delivered got more organic pickup than our paid campaign. Genuinely felt like a studio, not an agency.",
    name: "Elena R.",
    role: "Head of Brand, Halo Studios",
    initials: "HS",
    avatar: "https://i.pravatar.cc/150?img=44",
    rating: 5,
  },
  {
    quote:
      "MAD Mind's intake agent cut our first-response time by more than half without adding headcount. Compliance signed off in a week.",
    name: "Sanjay K.",
    role: "Director of Product, Pulse Health",
    initials: "PH",
    avatar: "https://i.pravatar.cc/150?img=60",
    rating: 5,
  },
];

// Cursor-tracked spotlight glow — see .mad-spotlight in globals-additions.css
function handleSpotlight(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  card.style.setProperty("--x", `${e.clientX - rect.left}px`);
  card.style.setProperty("--y", `${e.clientY - rect.top}px`);
}

export default function Testimonials() {
  return (
    <section className="bg-[#060608] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-14 max-w-2xl">
          <p className="font-mono-mad text-xs uppercase tracking-widest text-white/40">
            Kind words
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Don&apos;t take our word for it
          </h2>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <RevealItem key={t.name} className="h-full">
              <div
                onMouseMove={handleSpotlight}
                className="mad-spotlight flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-white/20"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <Quote size={22} className="text-white/25" />
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating ?? 5 }).map((_, i) => (
                        <Star key={i} size={12} className="fill-[#f726a8] text-[#f726a8]" />
                      ))}
                    </div>
                  </div>
                  <p className="font-body text-[15px] leading-relaxed text-white/80">
                    {t.quote}
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-3">
                  {t.avatar ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="h-10 w-10 shrink-0 rounded-full object-cover"
                    />
                  ) : (
                    <div className="mad-gradient-bg flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-xs font-bold text-white">
                      {t.initials}
                    </div>
                  )}
                  <div>
                    <p className="font-body text-sm font-semibold text-white">{t.name}</p>
                    <p className="font-body text-xs text-white/50">{t.role}</p>
                  </div>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

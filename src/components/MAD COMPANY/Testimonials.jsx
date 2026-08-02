import { Star } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "./Reveal";

// avatar art via pravatar.cc (free, no key) — swap for real customer photos
// whenever you have them.
const TESTIMONIALS = [
  {
    quote: "We killed four different tools in our first month. Onboarding was the fastest of any platform we've bought.",
    name: "Priya Anand",
    role: "Head of Ops, Nova",
    avatar: "https://i.pravatar.cc/80?img=32",
  },
  {
    quote: "The automation builder is the first no-code tool our engineers actually trust in production.",
    name: "Daniel Ferro",
    role: "CTO, Ferro",
    avatar: "https://i.pravatar.cc/80?img=12",
  },
  {
    quote: "Support response time alone would justify the price. The product just happens to be great too.",
    name: "Maya Lindqvist",
    role: "COO, Halcyon",
    avatar: "https://i.pravatar.cc/80?img=47",
  },
  {
    quote: "We went from a 6-person ops team to 2, and they're doing higher-leverage work than ever.",
    name: "Owen Cassidy",
    role: "Founder, Driftline",
    avatar: "https://i.pravatar.cc/80?img=53",
  },
  {
    quote: "Rolled it out to 40 people in a week. The learning curve is basically zero.",
    name: "Sana Kessler",
    role: "VP Revenue, Vantra",
    avatar: "https://i.pravatar.cc/80?img=25",
  },
  {
    quote: "Security review was painless — SOC 2 report was ready before our compliance team even asked.",
    name: "Ravi Okonkwo",
    role: "IT Director, Northwind",
    avatar: "https://i.pravatar.cc/80?img=8",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#060608] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="font-mono-mad text-xs uppercase tracking-widest text-white/40">
            Customers
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Loved by teams who{" "}
            <span className="mad-gradient-text">hate busywork.</span>
          </h2>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <RevealItem
              key={t.name}
              className="mad-spotlight flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="mb-4 flex gap-0.5 text-[#00C2FF]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-current" />
                ))}
              </div>
              <p className="font-body text-sm leading-relaxed text-white/75">
                "{t.quote}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-10 w-10 rounded-full border border-white/10 object-cover"
                />
                <div>
                  <p className="font-body text-sm font-semibold text-white">{t.name}</p>
                  <p className="font-mono-mad text-[11px] text-white/40">{t.role}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

import { Quote } from "lucide-react";

// Placeholder quotes from fictional companies — swap in real client
// testimonials as you collect them.
const TESTIMONIALS = [
  {
    quote:
      "MAD Mind built us a WhatsApp outreach agent that qualifies leads while we sleep. Our response time went from hours to minutes.",
    name: "Priya S.",
    role: "Head of Marketing, Nova Finance",
    initials: "NF",
  },
  {
    quote:
      "The AR product configurator MAD Reality shipped for us cut returns dramatically. Customers finally know what they're buying.",
    name: "Daniel O.",
    role: "Founder, Atlas Labs",
    initials: "AL",
  },
  {
    quote:
      "One team handled our rebrand, our site, and our ad spend. No more three-way calls between agencies pointing fingers.",
    name: "Meera J.",
    role: "CMO, Verda",
    initials: "VD",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#060608] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="font-mono-mad text-xs uppercase tracking-widest text-white/40">
            Kind words
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Don&apos;t take our word for it
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-7"
            >
              <div>
                <Quote size={22} className="mb-4 text-white/25" />
                <p className="font-body text-[15px] leading-relaxed text-white/80">
                  {t.quote}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <div className="mad-gradient-bg flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-xs font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-white">{t.name}</p>
                  <p className="font-body text-xs text-white/50">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

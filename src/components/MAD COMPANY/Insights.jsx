import { ArrowUpRight, Clock } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "./Reveal";

// Placeholder posts — point `href` at real articles once your blog is live.
const POSTS = [
  {
    tag: "MAD Mind",
    title: "Why most AI agents fail at the handoff, not the chat",
    excerpt:
      "The demo always looks great. Here's what actually breaks once an AI agent has to hand a real customer back to a human.",
    read: "6 min read",
    image: "https://picsum.photos/seed/mad-insight-ai/800/600",
    href: "#",
  },
  {
    tag: "MAD Company",
    title: "The real cost of a five-agency stack",
    excerpt:
      "We priced out what it actually costs a mid-size brand to run separate vendors for brand, web, ads, and video.",
    read: "4 min read",
    image: "https://picsum.photos/seed/mad-insight-stack/800/600",
    href: "#",
  },
  {
    tag: "MAD Reality",
    title: "What AR try-on actually does to return rates",
    excerpt:
      "We pulled the numbers from three retail AR launches. The results weren't what the pitch decks promised.",
    read: "5 min read",
    image: "https://picsum.photos/seed/mad-insight-ar/800/600",
    href: "#",
  },
];

export default function Insights() {
  return (
    <section id="insights" className="bg-[#060608] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-14 max-w-2xl">
          <p className="font-mono-mad text-xs uppercase tracking-widest text-white/40">
            Field notes
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Insights from inside{" "}
            <span className="mad-gradient-text">eight studios.</span>
          </h2>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {POSTS.map((p) => (
            <RevealItem key={p.title} className="h-full">
              <a
                href={p.href}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition hover:border-white/20"
              >
                <div className="aspect-[16/10] w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono-mad text-[11px] uppercase tracking-widest text-white/40">
                    {p.tag}
                  </p>
                  <p className="mt-2 font-display text-lg font-bold leading-snug text-white">
                    {p.title}
                  </p>
                  <p className="mt-2 font-body text-sm leading-relaxed text-white/55">
                    {p.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between pt-1">
                    <span className="flex items-center gap-1.5 font-body text-xs text-white/40">
                      <Clock size={13} />
                      {p.read}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-white/30 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                    />
                  </div>
                </div>
              </a>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

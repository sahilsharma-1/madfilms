"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "Do I need to already use n8n or Zapier?",
    a: "No. Most of what we build runs on n8n, but we'll use Zapier or Make instead if that's what your team already knows — the tool serves the workflow, not the other way around.",
  },
  {
    q: "What happens if an integration breaks?",
    a: "Every workflow ships with error alerts and retry logic built in, so you hear about a failed run before your customer or lead ever does.",
  },
  {
    q: "Is our customer data safe going through these tools?",
    a: "Yes — we build with the same data-handling discipline as the rest of MAD Company. Nothing is stored longer than the workflow actually needs it, and every connection uses your own accounts and API keys, not ours.",
  },
  {
    q: "How fast can an automation actually go live?",
    a: "A single workflow — lead routing, a booking flow, a content pipeline — usually ships in 1–2 weeks. Multi-system builds take longer, but you'll see the plan and timeline up front.",
  },
  {
    q: "Do you build custom AI agents, or just connect existing tools?",
    a: "Both. Sometimes the right answer is wiring HubSpot to Slack; sometimes it's a custom AI agent making decisions in the middle. We won't oversell you the second when the first already solves it.",
  },
  {
    q: "What if we already have automations that are half-broken?",
    a: "We audit what's already running before we build anything new — often the fix is smaller and cheaper than starting over.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-[#060608] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="font-mono-mad text-xs uppercase tracking-widest text-white/40">FAQ</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Questions before you{" "}
            <span className="mad-gradient-text">hand us the keys.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-body text-sm font-semibold text-white sm:text-base">
                    {item.q}
                  </span>
                  <Plus
                    size={18}
                    className={`shrink-0 text-white/50 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="px-6 pb-5 font-body text-sm leading-relaxed text-white/55">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

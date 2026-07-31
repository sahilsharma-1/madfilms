"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "./Reveal";

const FAQS = [
  {
    q: "Do we need to brief all eight studios, or just one?",
    a: "Just the one you need. Most clients start with a single studio — MAD Tech for a rebuild, MAD Mind for an AI agent — and pull in others later once they see how the pod works. Nothing forces you into the whole house.",
  },
  {
    q: "Can you work inside our existing vendor and NDA process?",
    a: "Yes. We regularly run through MSAs, security questionnaires, and NDAs before a single deliverable ships — route it to hello@madcompany.co and we'll get it moving in parallel with kickoff.",
  },
  {
    q: "Who actually works on our account?",
    a: "A dedicated pod, not a rotating cast. You get a lead from each relevant studio plus a single point of contact who owns the whole engagement — the same people from kickoff through launch.",
  },
  {
    q: "How fast can you actually start?",
    a: "Discovery typically kicks off within a week of a signed SOW. Full production timelines depend on scope, but most single-studio engagements are live within 6-10 weeks.",
  },
  {
    q: "Do you work with regulated industries like finance or healthcare?",
    a: "Regularly. Our finance and health clients bring their own compliance requirements to discovery, and we build the review gates into the timeline — nothing ships without your sign-off.",
  },
  {
    q: "What does pricing look like — project or retainer?",
    a: "Both. One-off builds are scoped and quoted per project; ongoing work (growth, data, cloud) usually moves to a monthly retainer once the first engagement proves out.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-[#060608] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <Reveal className="mb-12 text-center">
          <p className="font-mono-mad text-xs uppercase tracking-widest text-white/40">
            Before you ask
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Questions procurement{" "}
            <span className="mad-gradient-text">always asks first.</span>
          </h2>
        </Reveal>

        <RevealStagger className="flex flex-col gap-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <RevealItem key={item.q}>
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
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
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}

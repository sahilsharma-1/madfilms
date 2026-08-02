"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "./Reveal";

const FAQS = [
  {
    q: "Do I need to know how to code?",
    a: "No. Every workflow is built visually with triggers, conditions, and actions. Our API and webhooks are there if your engineers want to go further, but nothing requires them.",
  },
  {
    q: "How does the 14-day free trial work?",
    a: "Full access to the Growth plan for 14 days, no credit card required. If you don't add a payment method by day 14, your account simply drops to a limited free tier — nothing gets charged automatically.",
  },
  {
    q: "Can I change or cancel my plan at any time?",
    a: "Yes — upgrade, downgrade, or cancel from account settings whenever you like. Downgrades and cancellations take effect at the end of your current billing period.",
  },
  {
    q: "Is my data secure?",
    a: "MAD is SOC 2 Type II audited and GDPR-ready, with data encrypted in transit and at rest. Enterprise plans add SSO/SCIM provisioning and custom data-retention controls.",
  },
  {
    q: "What happens if an integration goes down?",
    a: "Workflows automatically retry with backoff, and you'll get an alert if a run fails after retries. Every run is logged, so nothing silently disappears.",
  },
  {
    q: "Do you offer discounts for nonprofits or startups?",
    a: "Yes — reach out to our team with proof of status and we'll get you set up with a discounted rate on the Growth plan.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-[#060608] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <Reveal className="mb-12 text-center">
          <p className="font-mono-mad text-xs uppercase tracking-widest text-white/40">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Questions people{" "}
            <span className="mad-gradient-text">ask before signing up.</span>
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

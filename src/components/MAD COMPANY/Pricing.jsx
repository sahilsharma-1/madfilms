"use client";

import { useState } from "react";
import { Check, ArrowUpRight } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "./Reveal";
import Magnetic from "./Magnetic";

const PLANS = [
  {
    name: "Starter",
    desc: "For small teams automating their first workflows.",
    monthly: 29,
    annual: 24,
    cta: "Start free trial",
    featured: false,
    features: [
      "Up to 5 active workflows",
      "3 team seats",
      "10 integrations",
      "Email support",
      "7-day run history",
    ],
  },
  {
    name: "Growth",
    desc: "For teams ready to automate across the whole org.",
    monthly: 79,
    annual: 65,
    cta: "Start free trial",
    featured: true,
    features: [
      "Unlimited workflows",
      "20 team seats",
      "All 100+ integrations",
      "Priority support",
      "90-day run history",
      "AI agent actions",
    ],
  },
  {
    name: "Enterprise",
    desc: "For orgs that need security, SSO, and a dedicated CSM.",
    monthly: null,
    annual: null,
    cta: "Talk to sales",
    featured: false,
    features: [
      "Everything in Growth",
      "Unlimited seats",
      "SSO & SCIM provisioning",
      "Dedicated CSM",
      "Custom data retention",
      "99.99% uptime SLA",
    ],
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="bg-[#060608] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-10 max-w-2xl text-center">
          <p className="font-mono-mad text-xs uppercase tracking-widest text-white/40">
            Pricing
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Simple pricing,{" "}
            <span className="mad-gradient-text">room to grow.</span>
          </h2>
          <p className="mt-4 font-body text-white/55">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </Reveal>

        <Reveal className="mb-12 flex items-center justify-center gap-3">
          <span className={`font-body text-sm ${!annual ? "text-white" : "text-white/45"}`}>
            Monthly
          </span>
          <button
            onClick={() => setAnnual((v) => !v)}
            className="relative h-7 w-14 shrink-0 rounded-full bg-white/10 transition-colors"
            aria-label="Toggle annual pricing"
          >
            <span
              className={`absolute top-1 h-5 w-5 rounded-full mad-gradient-bg transition-transform ${
                annual ? "translate-x-8" : "translate-x-1"
              }`}
            />
          </button>
          <span className={`font-body text-sm ${annual ? "text-white" : "text-white/45"}`}>
            Annual
          </span>
          <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 font-mono-mad text-[10px] font-semibold text-emerald-400">
            Save ~20%
          </span>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => {
            const price = annual ? plan.annual : plan.monthly;
            return (
              <RevealItem
                key={plan.name}
                className={`relative flex flex-col rounded-3xl border p-8 ${
                  plan.featured
                    ? "border-transparent bg-[#0e0e14] shadow-[0_25px_80px_rgba(0,100,250,.25)]"
                    : "border-white/10 bg-white/[0.03]"
                }`}
                style={
                  plan.featured
                    ? {
                        backgroundImage:
                          "linear-gradient(#0e0e14,#0e0e14), linear-gradient(120deg,#0064FA,#7C3AFF,#F726A8)",
                        backgroundOrigin: "border-box",
                        backgroundClip: "padding-box, border-box",
                        border: "1px solid transparent",
                      }
                    : undefined
                }
              >
                {plan.featured && (
                  <span className="mad-gradient-bg absolute -top-3 left-8 rounded-full px-3 py-1 font-mono-mad text-[10px] font-bold uppercase tracking-wider text-white">
                    Most popular
                  </span>
                )}

                <h3 className="font-display text-xl font-bold text-white">{plan.name}</h3>
                <p className="mt-1.5 font-body text-sm text-white/50">{plan.desc}</p>

                <div className="mt-6 flex items-baseline gap-1.5">
                  {price === null ? (
                    <span className="font-display text-4xl font-extrabold text-white">Custom</span>
                  ) : (
                    <>
                      <span className="font-display text-4xl font-extrabold text-white">
                        ${price}
                      </span>
                      <span className="font-body text-sm text-white/45">/ mo</span>
                    </>
                  )}
                </div>

                <ul className="mt-7 flex flex-col gap-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check size={16} className="mt-0.5 shrink-0 text-[#00C2FF]" />
                      <span className="font-body text-sm text-white/70">{f}</span>
                    </li>
                  ))}
                </ul>

                <Magnetic strength={0.2} className="mt-8 w-full">
                  <a
                    href="#"
                    className={`flex w-full items-center justify-center gap-1.5 rounded-full px-6 py-3 font-body text-sm font-semibold transition ${
                      plan.featured
                        ? "text-white hover:scale-[1.02]"
                        : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
                    }`}
                    style={plan.featured ? { background: "linear-gradient(90deg,#0064FA,#00C2FF)" } : undefined}
                  >
                    {plan.cta}
                    <ArrowUpRight size={15} />
                  </a>
                </Magnetic>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  Workflow,
  BarChart3,
  Users,
  ShieldCheck,
  Puzzle,
  Bot,
  ArrowUpRight,
} from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "./Reveal";

const EASE = [0.21, 0.47, 0.32, 0.98];

const FEATURES = [
  {
    icon: BarChart3,
    title: "Analytics",
    desc: "Every workflow's performance in one live dashboard — no spreadsheets.",
    gradient: ["#7C3AFF", "#0064FA"],
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "Shared queues and inline comments keep everyone on the same task.",
    gradient: ["#F726A8", "#7C3AFF"],
  },
  {
    icon: Puzzle,
    title: "Integrations",
    desc: "Connects to the 100+ tools your team already lives in.",
    gradient: ["#00C2FF", "#7C3AFF"],
  },
  {
    icon: ShieldCheck,
    title: "Enterprise security",
    desc: "SOC 2 Type II, GDPR-ready, and SSO on every plan.",
    gradient: ["#0064FA", "#F726A8"],
  },
  {
    icon: Bot,
    title: "AI agents",
    desc: "Let an agent triage, draft, and route work while you sleep.",
    gradient: ["#7C3AFF", "#00C2FF"],
  },
];

function MiniFlow() {
  const nodes = ["Trigger", "Condition", "Action"];
  return (
    <div className="flex items-center gap-2">
      {nodes.map((n, i) => (
        <div key={n} className="flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.12 }}
            className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 font-mono-mad text-[10px] text-white/60"
          >
            {n}
          </motion.div>
          {i < nodes.length - 1 && (
            <svg width="24" height="8" viewBox="0 0 24 8" className="shrink-0">
              <motion.line
                x1="0" y1="4" x2="24" y2="4"
                stroke="url(#flowLine)" strokeWidth="2" strokeDasharray="3 3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 + 0.2 }}
              />
              <defs>
                <linearGradient id="flowLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#0064FA" />
                  <stop offset="100%" stopColor="#00C2FF" />
                </linearGradient>
              </defs>
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="bg-[#060608] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="font-mono-mad text-xs uppercase tracking-widest text-white/40">
            Everything, in one place
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Built to replace{" "}
            <span className="mad-gradient-text">your entire tool stack.</span>
          </h2>
          <p className="mt-4 font-body text-white/55">
            Automations, analytics, and your team's day-to-day — running on
            one platform instead of six disconnected apps.
          </p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Large hero feature card */}
          <RevealItem className="mad-spotlight group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:col-span-2 sm:row-span-2">
            <div
              className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl"
              style={{ background: "linear-gradient(135deg,#0064FA,#00C2FF)" }}
            >
              <Workflow size={20} className="text-white" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white">
              No-code automation builder
            </h3>
            <p className="mt-2 max-w-md font-body text-sm leading-relaxed text-white/55">
              Drag triggers, conditions, and actions together to automate any
              process — from lead routing to weekly reporting. Ships live in
              minutes, not sprints.
            </p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-[#0a0a0f] p-6">
              <MiniFlow />
            </div>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-white/80 transition group-hover:text-white"
            >
              Explore automations
              <ArrowUpRight size={14} />
            </a>
          </RevealItem>

          {FEATURES.map((f) => (
            <RevealItem
              key={f.title}
              className="mad-spotlight mad-gradient-border rounded-3xl border border-white/10 bg-white/[0.03] p-7"
            >
              <div
                className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: `linear-gradient(135deg, ${f.gradient[0]}, ${f.gradient[1]})` }}
              >
                <f.icon size={18} className="text-white" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">{f.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-white/55">{f.desc}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

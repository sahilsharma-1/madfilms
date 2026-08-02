"use client";

import { useEffect, useState } from "react";
import { Workflow, BarChart3, Users, Puzzle } from "lucide-react";
import { Reveal } from "./Reveal";
import DashboardMockup from "./DashboardMockup";

const TABS = [
  {
    id: "automation",
    icon: Workflow,
    label: "Automations",
    title: "Build workflows without writing code.",
    desc: "Drag together triggers, conditions, and actions across every tool you use. MAD watches for the event and does the work — routing leads, syncing records, notifying the right channel.",
  },
  {
    id: "analytics",
    icon: BarChart3,
    label: "Analytics",
    title: "See exactly where the output comes from.",
    desc: "Every automation reports back in real time, so you can see what's actually driving growth instead of guessing from a monthly export.",
  },
  {
    id: "team",
    icon: Users,
    label: "Collaboration",
    title: "One shared queue instead of six chat threads.",
    desc: "Tasks land where the right person can see them, with status, owner, and history attached — no more \"did anyone follow up on this?\"",
  },
  {
    id: "overview",
    icon: Puzzle,
    label: "Integrations",
    title: "Plugs into the stack you already run.",
    desc: "CRM, email, calendar, spreadsheets, payments — MAD reads and writes to the tools your team already lives in, so nothing has to move.",
  },
];

const AUTO_MS = 6000;

export default function ProductShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % TABS.length), AUTO_MS);
    return () => clearInterval(id);
  }, []);

  const tab = TABS[active];

  return (
    <section className="relative overflow-hidden bg-[#060608] px-6 py-24 lg:px-10">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2 rounded-full opacity-20 blur-[140px]"
        style={{ background: "radial-gradient(circle, #7C3AFF, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="font-mono-mad text-xs uppercase tracking-widest text-white/40">
            See it in action
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            One platform,{" "}
            <span className="mad-gradient-text">every workflow.</span>
          </h2>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[380px_1fr] lg:items-center lg:gap-14">
          {/* Tab list */}
          <div className="flex flex-col gap-2">
            {TABS.map((t, i) => {
              const isActive = i === active;
              return (
                <button
                  key={t.id}
                  onClick={() => setActive(i)}
                  className={`group relative overflow-hidden rounded-2xl border px-5 py-4 text-left transition-colors ${
                    isActive
                      ? "border-white/15 bg-white/[0.05]"
                      : "border-white/5 bg-transparent hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${
                        isActive ? "text-white" : "text-white/30"
                      }`}
                      style={isActive ? { background: "linear-gradient(135deg,#0064FA,#7C3AFF)" } : undefined}
                    >
                      <t.icon size={15} />
                    </div>
                    <div className="min-w-0">
                      <p className={`font-body text-sm font-semibold ${isActive ? "text-white" : "text-white/60"}`}>
                        {t.label}
                      </p>
                      {isActive && (
                        <p className="mt-1.5 font-body text-xs leading-relaxed text-white/50">
                          {t.desc}
                        </p>
                      )}
                    </div>
                  </div>

                  {isActive && (
                    <div className="mt-3 h-0.5 w-full overflow-hidden rounded-full bg-white/5">
                      <div
                        key={active}
                        className="mad-tab-progress h-full rounded-full mad-gradient-bg"
                        style={{ animationDuration: `${AUTO_MS}ms` }}
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Visual */}
          <div>
            <p className="mb-6 font-display text-2xl font-bold text-white sm:text-3xl lg:hidden">
              {tab.title}
            </p>
            <DashboardMockup variant={tab.id} />
          </div>
        </div>
      </div>
    </section>
  );
}

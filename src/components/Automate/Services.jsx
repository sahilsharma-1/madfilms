import { Target, Video, Headphones, Workflow, RefreshCw, TrendingUp, ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    name: "Lead Gen & Outreach Automation",
    icon: "Target",
    gradient: ["#0064fa", "#00c2ff"],
    description:
      "Enrichment, AI lead scoring, and personalized cold email + LinkedIn sequences at scale — every reply synced straight into your CRM.",
  },
  {
    name: "AI Video & Auto-Posting",
    icon: "Video",
    gradient: ["#00c2ff", "#7c3aff"],
    description:
      "HeyGen avatar videos scripted from trending topics in your niche, auto-published daily to TikTok, Instagram, YouTube, and LinkedIn.",
  },
  {
    name: "AI Voice & Chat Agents",
    icon: "Headphones",
    gradient: ["#7c3aff", "#0064fa"],
    description:
      "24/7 voice agents that answer calls and book appointments, and chatbots that qualify leads before a human ever sees the thread.",
  },
  {
    name: "Workflow & Back-Office Automation",
    icon: "Workflow",
    gradient: ["#0064fa", "#00c2ff"],
    description:
      "Custom n8n, Zapier, or Make builds that kill manual data entry — invoicing, reporting, reconciliation, the stuff nobody wants to do.",
  },
  {
    name: "AI Content Repurposing",
    icon: "RefreshCw",
    gradient: ["#00c2ff", "#7c3aff"],
    description:
      "One blog post or video becomes a week of platform-native content — auto-drafted, auto-scheduled, and it still sounds like you.",
  },
  {
    name: "CRM & Sales Ops Automation",
    icon: "TrendingUp",
    gradient: ["#7c3aff", "#f726a8"],
    description:
      "Pipeline sync, deal-stage alerts, and revenue dashboards — your CRM finally reflects reality without anyone updating it by hand.",
  },
];

const ICONS = { Target, Video, Headphones, Workflow, RefreshCw, TrendingUp };

export default function Services() {
  return (
    <section id="services" className="bg-[#060608] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="font-mono-mad text-xs uppercase tracking-widest text-white/40">
            What we automate
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Six systems,{" "}
            <span className="mad-gradient-text">one less team to hire.</span>
          </h2>
          <p className="mt-4 font-body text-white/60">
            Every build below runs on the same tools the top automation
            agencies use in 2026 — n8n, HeyGen, Apollo, Vapi — wired
            together and handed to you working, not left half-finished in
            a demo account.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <div
                key={s.name}
                className="mad-gradient-border group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white/[0.03] p-6 transition"
              >
                <div>
                  <div className="mb-10 flex items-center justify-between">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{ background: `linear-gradient(135deg, ${s.gradient[0]}, ${s.gradient[1]})` }}
                    >
                      <Icon size={20} className="text-white" />
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-white/30 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                    />
                  </div>
                  <p className="font-display text-xl font-bold text-white">{s.name}</p>
                </div>
                <p className="mt-8 font-body text-sm leading-snug text-white/50">{s.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

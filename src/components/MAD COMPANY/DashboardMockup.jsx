"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  LayoutGrid,
  Workflow,
  BarChart3,
  Users,
  Puzzle,
  Settings,
  Bell,
  Zap,
  Bot,
  Clock,
  ArrowUpRight,
  CircleCheck,
  MessageSquare,
  Mail,
  Database,
} from "lucide-react";

const EASE = [0.21, 0.47, 0.32, 0.98];

const SIDEBAR_ICONS = [LayoutGrid, Workflow, BarChart3, Users, Puzzle, Settings];
const VARIANT_INDEX = { overview: 0, automation: 1, analytics: 2, team: 3 };

const BARS = [38, 62, 48, 80, 54, 92, 66, 74, 58, 100, 70, 86];

function StatCard({ icon: Icon, label, value, delta }) {
  return (
    <div className="mad-spotlight rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="flex items-center justify-between">
        <div
          className="flex h-8 w-8 items-center justify-center rounded-lg"
          style={{ background: "linear-gradient(135deg,#0064FA,#7C3AFF)" }}
        >
          <Icon size={15} className="text-white" />
        </div>
        <span className="flex items-center gap-0.5 rounded-full bg-emerald-400/10 px-2 py-0.5 font-mono-mad text-[10px] font-semibold text-emerald-400">
          <ArrowUpRight size={10} />
          {delta}
        </span>
      </div>
      <p className="mt-3 font-display text-xl font-bold text-white sm:text-2xl">{value}</p>
      <p className="mt-0.5 font-body text-[11px] text-white/45">{label}</p>
    </div>
  );
}

function Toggle({ on }) {
  return (
    <div
      className={`relative h-5 w-9 shrink-0 rounded-full transition-colors ${
        on ? "bg-[#0064FA]" : "bg-white/10"
      }`}
    >
      <div
        className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-transform ${
          on ? "translate-x-4" : "translate-x-0.5"
        }`}
      />
    </div>
  );
}

function OverviewPanel() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-3">
        <StatCard icon={Zap} label="Workflows live" value="128" delta="12%" />
        <StatCard icon={Bot} label="Tasks automated" value="2,430" delta="34%" />
        <StatCard icon={Clock} label="Hours saved / wk" value="46.5" delta="8%" />
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <div className="mb-4 flex items-center justify-between">
          <p className="font-body text-xs font-semibold text-white/70">
            Automation volume — last 12 days
          </p>
          <span className="font-mono-mad text-[10px] uppercase tracking-wider text-white/30">
            Live
          </span>
        </div>
        <div className="flex h-24 items-end gap-2">
          {BARS.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.6, delay: i * 0.04, ease: EASE }}
              className="flex-1 rounded-t-md"
              style={{
                background:
                  i === 9
                    ? "linear-gradient(180deg,#00C2FF,#0064FA)"
                    : "rgba(255,255,255,0.12)",
              }}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {[
          { icon: Mail, text: "Weekly digest sent to 340 leads" },
          { icon: Database, text: "CRM synced — 18 records updated" },
        ].map((item) => (
          <div
            key={item.text}
            className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2.5"
          >
            <item.icon size={13} className="shrink-0 text-white/40" />
            <p className="font-body text-[11px] leading-snug text-white/55">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AutomationPanel() {
  const nodes = [
    { label: "New lead created", sub: "Trigger · CRM", icon: Database },
    { label: "Lead score > 80", sub: "Condition", icon: Zap },
    { label: "Notify #sales-hot", sub: "Action · Chat", icon: MessageSquare },
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
        <p className="mb-5 font-body text-xs font-semibold text-white/70">
          Workflow — Hot lead router
        </p>
        <div className="flex flex-col gap-0">
          {nodes.map((n, i) => (
            <div key={n.label}>
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15, ease: EASE }}
                className="mad-gradient-border flex items-center gap-3 rounded-xl border border-white/10 bg-[#0e0e14] px-4 py-3"
              >
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: "linear-gradient(135deg,#7C3AFF,#F726A8)" }}
                >
                  <n.icon size={14} className="text-white" />
                </div>
                <div className="min-w-0">
                  <p className="truncate font-body text-xs font-semibold text-white">
                    {n.label}
                  </p>
                  <p className="font-mono-mad text-[10px] uppercase tracking-wider text-white/35">
                    {n.sub}
                  </p>
                </div>
                <CircleCheck size={15} className="ml-auto shrink-0 text-emerald-400" />
              </motion.div>
              {i < nodes.length - 1 && (
                <div className="ml-8 h-5 w-px bg-gradient-to-b from-white/25 to-white/5" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        {[
          { label: "Sync Salesforce leads", on: true },
          { label: "Send weekly investor digest", on: true },
          { label: "Archive stale support tickets", on: false },
        ].map((row) => (
          <div key={row.label} className="flex items-center justify-between py-1">
            <p className="font-body text-[11px] text-white/60">{row.label}</p>
            <Toggle on={row.on} />
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsPanel() {
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <p className="mb-3 font-body text-xs font-semibold text-white/70">
          Output growth — 6 months
        </p>
        <svg viewBox="0 0 300 90" className="h-24 w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0064FA" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#0064FA" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,70 L50,58 L100,62 L150,38 L200,44 L250,18 L300,24 L300,90 L0,90 Z"
            fill="url(#areaFill)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.path
            d="M0,70 L50,58 L100,62 L150,38 L200,44 L250,18 L300,24"
            fill="none"
            stroke="#00C2FF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.1, ease: EASE }}
          />
        </svg>
      </div>

      <div className="grid grid-cols-[auto_1fr] items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <div
          className="h-20 w-20 shrink-0 rounded-full"
          style={{
            background:
              "conic-gradient(#0064FA 0% 46%, #7C3AFF 46% 74%, #F726A8 74% 100%)",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 10px), #000 calc(100% - 9px))",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 10px), #000 calc(100% - 9px))",
          }}
        />
        <div className="flex flex-col gap-2">
          {[
            { c: "#0064FA", label: "Automations", v: "46%" },
            { c: "#7C3AFF", label: "Reports", v: "28%" },
            { c: "#F726A8", label: "Integrations", v: "26%" },
          ].map((row) => (
            <div key={row.label} className="flex items-center gap-2 text-[11px]">
              <span
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ background: row.c }}
              />
              <span className="font-body text-white/55">{row.label}</span>
              <span className="ml-auto font-mono-mad text-white/70">{row.v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TeamPanel() {
  const people = [
    { initials: "AK", role: "Ops lead", status: "online" },
    { initials: "MR", role: "RevOps", status: "online" },
    { initials: "SJ", role: "Support", status: "away" },
    { initials: "TL", role: "Growth", status: "online" },
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-3">
        <StatCard icon={Users} label="Members" value="24" delta="3" />
        <StatCard icon={Zap} label="Online now" value="8" delta="2" />
        <StatCard icon={Bot} label="Tasks / week" value="132" delta="19%" />
      </div>
      <div className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
        {people.map((p, i) => (
          <motion.div
            key={p.initials}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-center gap-3 rounded-xl px-2 py-2 hover:bg-white/[0.03]"
          >
            <div className="relative shrink-0">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-full font-mono-mad text-[10px] font-bold text-white"
                style={{ background: "linear-gradient(135deg,#0064FA,#F726A8)" }}
              >
                {p.initials}
              </div>
              <span
                className={`absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#0a0a0f] ${
                  p.status === "online" ? "bg-emerald-400" : "bg-white/25"
                }`}
              />
            </div>
            <p className="font-body text-xs text-white/70">{p.role}</p>
            <div className="ml-auto h-1.5 w-16 overflow-hidden rounded-full bg-white/5">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${40 + i * 15}%`,
                  background: "linear-gradient(90deg,#0064FA,#00C2FF)",
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const PANELS = {
  overview: OverviewPanel,
  automation: AutomationPanel,
  analytics: AnalyticsPanel,
  team: TeamPanel,
};

/**
 * Custom-built fake product UI — no screenshots required. Swap `variant`
 * to reuse the same glass "app frame" for the hero shot and every tab in
 * <ProductShowcase>. Replace with real product screenshots whenever you
 * have them: drop an <img>/<video> in place of the panel components.
 */
export default function DashboardMockup({ variant = "overview", className = "" }) {
  const Panel = PANELS[variant] ?? OverviewPanel;
  const activeIcon = VARIANT_INDEX[variant] ?? 0;

  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[3rem] opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 30%, rgba(0,100,250,.35), transparent 70%), radial-gradient(50% 50% at 80% 80%, rgba(247,38,168,.25), transparent 70%)",
        }}
      />

      <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0a0a0f]/95 shadow-[0_30px_100px_rgba(0,0,0,.55)] backdrop-blur">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <div className="hidden rounded-full border border-white/10 bg-white/[0.03] px-4 py-1 font-mono-mad text-[10px] text-white/35 sm:block">
            app.mad.co/dashboard
          </div>
          <div className="flex items-center gap-3">
            <Bell size={13} className="text-white/30" />
            <div
              className="h-6 w-6 rounded-full"
              style={{ background: "linear-gradient(135deg,#0064FA,#7C3AFF)" }}
            />
          </div>
        </div>

        {/* Body */}
        <div className="grid grid-cols-[56px_1fr]">
          <div className="flex flex-col items-center gap-3 border-r border-white/10 py-5">
            {SIDEBAR_ICONS.map((Icon, i) => (
              <div
                key={i}
                className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                  i === activeIcon ? "text-white" : "text-white/25"
                }`}
                style={
                  i === activeIcon
                    ? { background: "linear-gradient(135deg,#0064FA,#7C3AFF)" }
                    : undefined
                }
              >
                <Icon size={15} />
              </div>
            ))}
          </div>

          <div className="min-w-0 p-4 sm:p-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={variant}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                <Panel />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

import {
  MessageSquare,
  Mail,
  Calendar,
  Database,
  CreditCard,
  FileSpreadsheet,
  Code2,
  Cloud,
  PieChart,
  FormInput,
  Phone,
  FolderKanban,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { ArrowUpRight } from "lucide-react";

const INTEGRATIONS = [
  { icon: MessageSquare, label: "Team chat" },
  { icon: Mail, label: "Email" },
  { icon: Calendar, label: "Calendar" },
  { icon: Database, label: "CRM" },
  { icon: CreditCard, label: "Payments" },
  { icon: FileSpreadsheet, label: "Spreadsheets" },
  { icon: Code2, label: "Code hosting" },
  { icon: Cloud, label: "Cloud storage" },
  { icon: PieChart, label: "Analytics" },
  { icon: FormInput, label: "Forms" },
  { icon: Phone, label: "Calling" },
  { icon: FolderKanban, label: "Project mgmt" },
];

export default function Integrations() {
  const track = [...INTEGRATIONS, ...INTEGRATIONS];

  return (
    <section id="integrations" className="bg-[#060608] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="font-mono-mad text-xs uppercase tracking-widest text-white/40">
            Integrations
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Connects with the tools{" "}
            <span className="mad-gradient-text">you already run.</span>
          </h2>
          <p className="mt-4 font-body text-white/55">
            100+ native integrations, plus an open API and webhooks for
            everything else.
          </p>
        </Reveal>

        <div className="relative mx-auto max-w-5xl overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#060608] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#060608] to-transparent" />

          <div className="mad-marquee-track-slow flex w-max gap-4">
            {track.map((item, i) => (
              <div
                key={`${item.label}-${i}`}
                className="mad-spotlight flex w-40 shrink-0 flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-6 text-center"
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: "linear-gradient(135deg,#0064FA,#7C3AFF)" }}
                >
                  <item.icon size={19} className="text-white" />
                </div>
                <p className="font-body text-xs font-medium text-white/60">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <Reveal className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-white/80 transition hover:text-white"
          >
            View all 100+ integrations
            <ArrowUpRight size={15} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

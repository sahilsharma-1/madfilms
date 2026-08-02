import { ShieldCheck, Lock, FileCheck2, Globe2 } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "./Reveal";

const BADGES = [
  { icon: ShieldCheck, label: "SOC 2 Type II" },
  { icon: Lock, label: "SSO & SCIM" },
  { icon: FileCheck2, label: "GDPR-ready" },
  { icon: Globe2, label: "99.99% uptime SLA" },
];

export default function SecurityBand() {
  return (
    <section id="security" className="bg-[#060608] px-6 py-16 lg:px-10">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/[0.02] px-6 py-10 sm:px-10">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
          <Reveal className="max-w-sm text-center lg:text-left">
            <p className="font-mono-mad text-xs uppercase tracking-widest text-white/40">
              Enterprise-ready
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold text-white">
              Built for procurement, not just product.
            </h3>
          </Reveal>

          <RevealStagger className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {BADGES.map((b) => (
              <RevealItem
                key={b.label}
                className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-center"
              >
                <b.icon size={18} className="text-[#00C2FF]" />
                <span className="font-body text-xs font-medium text-white/60">{b.label}</span>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}

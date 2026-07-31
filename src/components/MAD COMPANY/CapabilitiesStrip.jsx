import { Reveal } from "./Reveal";

const ROW_1 = [
  "3D Animation",
  "CGI & VFX",
  "Motion Graphics",
  "Web Development",
  "App Development",
  "SaaS Products",
  "AI Agents",
];

const ROW_2 = [
  "Workflow Automation",
  "Voice AI",
  "WhatsApp Outreach",
  "AR Experiences",
  "VR Experiences",
  "SEO",
  "Google Ads",
  "Lead Generation",
  "Brand Strategy",
  "Cloud & DevOps",
  "Data Dashboards",
];

function Row({ items, trackClass }) {
  const loop = [...items, ...items];
  return (
    <div className="group overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
      <div className={`${trackClass} flex w-max items-center gap-3 whitespace-nowrap`}>
        {loop.map((item, i) => (
          <span
            key={i}
            className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 font-body text-sm text-white/70 transition duration-300 hover:scale-105 hover:border-white/20 hover:bg-white/[0.06] hover:text-white hover:shadow-[0_0_24px_-6px_rgba(124,58,255,0.5)]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function CapabilitiesStrip() {
  return (
    <section id="capabilities" className="border-y border-white/10 bg-[#060608] py-16">
      <Reveal className="mx-auto mb-10 max-w-2xl px-6 text-center lg:px-10">
        <p className="font-mono-mad text-xs uppercase tracking-widest text-white/40">
          What we do
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Everything a modern brand needs.{" "}
          <span className="mad-gradient-text">None of it outsourced.</span>
        </h2>
      </Reveal>
      <Reveal className="flex flex-col gap-4" y={16} delay={0.1}>
        <Row items={ROW_1} trackClass="mad-marquee-track" />
        <Row items={ROW_2} trackClass="mad-marquee-track-reverse" />
      </Reveal>
    </section>
  );
}

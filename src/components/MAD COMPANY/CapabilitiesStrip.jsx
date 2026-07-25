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
    <div className="group overflow-hidden">
      <div className={`${trackClass} flex w-max items-center gap-3 whitespace-nowrap`}>
        {loop.map((item, i) => (
          <span
            key={i}
            className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 font-body text-sm text-white/70"
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
    <section id="capabilities" className="border-y border-white/10 bg-[#060608] py-10">
      <div className="flex flex-col gap-4">
        <Row items={ROW_1} trackClass="mad-marquee-track" />
        <Row items={ROW_2} trackClass="mad-marquee-track-reverse" />
      </div>
    </section>
  );
}

import { Reveal } from "./Reveal";

// NOTE: These are placeholder wordmarks, not real companies.
// Swap them out once you have real client logos to display —
// showing real brands as "clients" without their sign-off isn't a good idea.
const LOGOS = ["NOVA", "ORBITAL", "FLUX", "VERDA", "ATLAS LABS", "PULSE", "ZENITH", "HALO", "KIRA", "DRIFT"];

export default function ClientLogos() {
  const loop = [...LOGOS, ...LOGOS];
  return (
    <section id="clients" className="bg-[#060608] py-16">
      <Reveal>
        <p className="mb-8 text-center font-mono-mad text-xs uppercase tracking-widest text-white/40">
          Trusted by teams who move fast
        </p>
      </Reveal>
      <div className="group overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="mad-marquee-track-slow flex w-max items-center gap-16 whitespace-nowrap">
          {loop.map((logo, i) => (
            <span
              key={i}
              className="font-display text-2xl font-bold tracking-wide text-white/25 transition duration-300 hover:scale-110 hover:text-white/70"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Reveal } from "./Reveal";

// Placeholder wordmarks — swap for real customer logos (SVGs in /public/logos)
// once you have permission to display them. Keeping the array here means the
// marquee resizes itself automatically no matter how many you add.
const LOGOS = [
  "Nova", "Fintra", "Loopwave", "Orbital", "Vantra",
  "Halcyon", "Driftline", "Cobalt Labs", "Ferro", "Northwind",
];

export default function ClientLogos() {
  const track = [...LOGOS, ...LOGOS];

  return (
    <section id="clients" className="relative bg-[#060608] px-6 py-16 lg:px-10">
      <Reveal className="mx-auto mb-9 max-w-xl text-center">
        <p className="font-mono-mad text-xs uppercase tracking-widest text-white/40">
          Trusted by fast-moving teams at
        </p>
      </Reveal>

      <div className="group relative mx-auto max-w-6xl overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#060608] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#060608] to-transparent" />

        <div className="mad-marquee-track flex w-max items-center gap-16">
          {track.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-white/30 transition-colors hover:text-white/70"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

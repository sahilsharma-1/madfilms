// Real tools and platforms this studio builds with — not client logos.
const TOOLS = [
  "WebXR",
  "8th Wall",
  "Meta Spark Studio",
  "Unity",
  "Blender",
  "Cinema 4D",
  "model-viewer",
  "ARKit",
  "ARCore",
];

export default function TechStack() {
  const loop = [...TOOLS, ...TOOLS];
  return (
    <section className="bg-[#060608] py-16">
      <p className="mb-8 text-center font-mono-mad text-xs uppercase tracking-widest text-white/40">
        Built with
      </p>
      <div className="group overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="mad-marquee-track-slow flex w-max items-center gap-16 whitespace-nowrap">
          {loop.map((tool, i) => (
            <span
              key={i}
              className="font-display text-2xl font-bold tracking-wide text-white/25 transition hover:text-white/60"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

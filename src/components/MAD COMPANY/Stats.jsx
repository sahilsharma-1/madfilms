const STATS = [
  { value: "150+", label: "Projects shipped" },
  { value: "40+", label: "Brands served" },
  { value: "8", label: "Studios in-house" },
  { value: "4.9/5", label: "Avg. client rating" },
];

export default function Stats() {
  return (
    <section className="bg-[#060608] px-6 py-20 lg:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 rounded-3xl border border-white/10 bg-white/[0.02] px-6 py-12 sm:grid-cols-4 sm:divide-x sm:divide-white/10">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <p className="mad-gradient-text font-display text-4xl font-extrabold sm:text-5xl">
              {s.value}
            </p>
            <p className="mt-2 font-mono-mad text-xs uppercase tracking-wider text-white/40">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

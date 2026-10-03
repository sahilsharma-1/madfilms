import { Reveal } from "../MAD COMPANY/Reveal";

const NAMES = ["NESTLÉ", "MINISTRY OF DEFENCE", "mCURA"];

export default function TrustBar() {
  return (
    <section aria-labelledby="trust-h" className="border-y border-white/10 px-6 py-14 lg:px-10">
      <Reveal className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 id="trust-h" className="text-xl font-medium tracking-tight text-white sm:text-2xl">Trusted by teams building what comes next.</h2>
          <p className="mt-2 text-sm text-white/45">Experience across enterprise, healthcare, government and technology.</p>
        </div>
        <ul className="flex flex-wrap items-center gap-x-12 gap-y-4">
          {NAMES.map((n) => (
            <li key={n} className="text-lg font-semibold tracking-[0.12em] text-white/35 transition-colors hover:text-white/80">{n}</li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

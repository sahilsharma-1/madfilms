import { PILLARS } from "./data";
import { Reveal, RevealStagger, RevealItem } from "../MAD COMPANY/Reveal";

export default function WhyMad() {
  return (
    <section id="about" aria-labelledby="why-h" className="border-t border-white/10 px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal><h2 id="why-h" className="mh-h2 max-w-4xl text-[clamp(2.25rem,5vw,4.5rem)]">Built by engineers. Designed for business.</h2></Reveal>
        <RevealStagger className="mt-16 grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <RevealItem key={p.t} className="border-b border-r border-white/10">
              <div className="h-full p-8 transition-colors hover:bg-white/[0.03]">
                <h3 className="text-2xl font-medium tracking-tight text-white">{p.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/55">{p.d}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

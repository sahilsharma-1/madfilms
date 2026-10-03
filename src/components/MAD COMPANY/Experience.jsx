import { EXPERIENCE } from "./data";
import { Reveal, RevealStagger, RevealItem } from "./Reveal";

export default function Experience() {
  return (
    <section id="work" data-tone="light" aria-labelledby="ex-h" className="mh-sec mh-alt">
      <div className="mh-wrap">
        <Reveal className="max-w-3xl">
          <p className="mh-label mb-5">Work</p>
          <h2 id="ex-h" className="mh-h2">Built across real-world environments.</h2>
          <p className="mh-lead mt-5">Enterprise, government and healthcare.</p>
        </Reveal>
        <RevealStagger stagger={0.08} className="mt-14 divide-y divide-[var(--line)] border-y b-line">
          {EXPERIENCE.map((e) => (
            <RevealItem key={e.name}>
              <div className="mh-xrow grid items-center gap-2 py-9 md:grid-cols-[auto_1fr_auto] md:gap-10 md:py-11" style={{ "--c1": e.c1, "--c2": e.c2 }}>
                <span aria-hidden className="hidden h-3.5 w-3.5 rounded-full md:block" style={{ background: `linear-gradient(120deg, ${e.c1}, ${e.c2})` }} />
                <h3 className="mh-xname font-semibold" style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)", letterSpacing: "-0.045em", lineHeight: 1.02 }}>{e.name}</h3>
                <p className="mh-label">{e.kind}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
        <p className="t-mute mt-6 max-w-xl text-xs leading-relaxed">Names reflect work experience only and do not imply endorsement, partnership or a current engagement.</p>
      </div>
    </section>
  );
}

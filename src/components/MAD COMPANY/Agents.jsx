import { TEAM } from "./data";
import { Reveal, RevealStagger, RevealItem } from "./Reveal";

export default function Agents() {
  return (
    <section id="agents" data-tone="light" aria-labelledby="ag-h" className="mh-sec mh-alt">
      <div className="mh-wrap">
        <Reveal className="max-w-3xl">
          <p className="mh-label mb-5">MAD AI</p>
          <h2 id="ag-h" className="mh-h2">Meet your digital team.</h2>
          <p className="mh-lead mt-5">AI agents built around the work your team already does.</p>
        </Reveal>
        <RevealStagger stagger={0.07} className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((a) => (
            <RevealItem key={a.name}>
              <article tabIndex={0} className="mh-team group relative flex h-full min-h-[380px] flex-col justify-between overflow-hidden rounded-[1.75rem] p-7 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" style={{ background: `linear-gradient(150deg, ${a.c1}, ${a.c2})` }}>
                <div aria-hidden className="mh-team-shine absolute inset-0" />
                <div className="relative">
                  <h3 className="font-semibold" style={{ fontSize: "clamp(1.75rem, 2.4vw, 2.2rem)", letterSpacing: "-0.035em", lineHeight: 1.05 }}>{a.name} Agent</h3>
                  <ul className="mt-5 space-y-1 text-[16px] leading-snug text-white/85">{a.does.map((d) => <li key={d}>{d}</li>)}</ul>
                </div>
                <div className="relative mt-10">
                  <p className="mh-status flex items-center gap-2 text-sm text-white/90"><span aria-hidden className="h-2 w-2 rounded-full bg-white mh-pulse" />{a.status}</p>
                  <div aria-hidden className="mh-bar mt-3 h-1 overflow-hidden rounded-full bg-white/20"><i className="block h-full w-0 rounded-full bg-white" /></div>
                  <ol aria-label={`Example: ${a.flow.join(", ")}`} className="mt-4 flex flex-wrap gap-1.5 text-[12px]">
                    {a.flow.map((f, n) => (
                      <li key={f} style={{ transitionDelay: `${n * 450}ms` }} className="mh-chip rounded-full bg-white/15 px-3 py-1 backdrop-blur transition-colors duration-500">{f}</li>
                    ))}
                  </ol>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
        <p className="t-mute mt-6 text-xs">Examples of agents we design and build. Illustrative, not shipped products.</p>
      </div>
    </section>
  );
}

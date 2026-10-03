import Photo from "./Photo";
import { MEDIA, PILLAR_MEDIA } from "@/lib/media";
import { PILLARS } from "./data";
import { Reveal, RevealStagger, RevealItem } from "./Reveal";

const ACCENT = ["#2f55ff", "#7a3cff", "#d03cc8", "#ff7a45"];

function Tinted({ m, className = "", parallax = false }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Photo m={m} parallax={parallax} className="!absolute inset-0 h-full w-full" />
      <div aria-hidden className="mh-tint pointer-events-none absolute inset-0" />
    </div>
  );
}

export default function People() {
  return (
    <section id="people" data-tone="light" aria-labelledby="pe-h" className="mh-sec">
      <div className="mh-wrap">
        <Reveal className="max-w-3xl">
          <p className="mh-label mb-5">People</p>
          <h2 id="pe-h" className="mh-h2">Built for people. Powered by AI.</h2>
          <p className="mh-lead mt-5">The best AI doesn&rsquo;t replace the way your team works. It makes the team better.</p>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-[1.7fr_1fr]">
          <Reveal><Tinted m={MEDIA.team} parallax className="aspect-[4/3] rounded-[2rem] lg:aspect-[16/11]" /></Reveal>
          <Reveal delay={0.1}><Tinted m={MEDIA.team2} parallax className="aspect-[4/3] rounded-[2rem] lg:aspect-auto lg:h-full" /></Reveal>
        </div>

        <RevealStagger stagger={0.07} className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <RevealItem key={p.t}>
              <div className="h-full rounded-[1.75rem] bg-[#f5f5f7] p-3">
                {PILLAR_MEDIA[i] && <Tinted m={PILLAR_MEDIA[i]} className="aspect-[4/3] rounded-[1.25rem]" />}
                <div className="px-3 pb-4 pt-5">
                  <span aria-hidden className="mb-4 block h-1 w-10 rounded-full" style={{ background: ACCENT[i % 4] }} />
                  <h3 className="mh-h3 text-xl">{p.t}</h3>
                  <p className="t-soft mt-2 text-[15px] leading-snug">{p.d}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

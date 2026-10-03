import Photo from "./Photo";
import { MOMENTS } from "@/lib/media";
import { Reveal } from "./Reveal";

// 4-col bento: tall | wide | square / (tall continues) square | wide
const CELLS = ["lg:row-span-2", "lg:col-span-2", "", "", "lg:col-span-2"];

export default function Moments() {
  return (
    <section data-tone="light" aria-labelledby="mo-h" className="mh-sec mh-alt">
      <div className="mh-wrap">
        <Reveal className="max-w-3xl">
          <p className="mh-label mb-5">Made for people</p>
          <h2 id="mo-h" className="mh-h2">Technology that feels human.</h2>
          <p className="mh-lead mt-5">Behind every task is a person who just wants it done. Our agents handle the work so they can get on with their day.</p>
        </Reveal>
        <div className="mt-14 grid auto-rows-[15rem] gap-3 sm:grid-cols-2 sm:auto-rows-[17rem] lg:grid-cols-4 lg:gap-4">
          {MOMENTS.map((m, n) => (
            <Reveal key={m.src} delay={n * 0.06} className={`${CELLS[n]} min-h-0`}>
              <div className="mh-zoom relative h-full overflow-hidden rounded-[1.75rem]">
                <Photo m={m} light className="!absolute inset-0 h-full w-full" />
                {m.say && (
                  <>
                    <div aria-hidden className="mh-shade pointer-events-none absolute inset-0" />
                    <p className="mh-bubble absolute bottom-4 left-4 right-4 sm:right-auto">{m.say}</p>
                  </>
                )}
              </div>
            </Reveal>
          ))}
        </div>
        <p className="t-mute mt-5 text-xs">Messages shown are illustrative examples.</p>
      </div>
    </section>
  );
}

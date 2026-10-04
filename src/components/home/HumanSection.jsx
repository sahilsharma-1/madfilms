"use client";
import { Lines, Fade, Pic } from "./shared";
import { HOME_MEDIA } from "../../lib/media";

export default function HumanSection() {
  return (
    <section id="about" data-tone="light" aria-labelledby="hu-h" className="mx-sec mx-wash-v">
      <div className="mx-wrap">
        <Lines id="hu-h" lines={["Built for people.", "Powered by intelligence."]} dim={[1]} className="mx-display mx-h2 max-w-5xl" />

        <div className="relative mt-14 lg:mt-20">
          <Pic m={HOME_MEDIA.human} reveal className="aspect-[4/5] w-full rounded-[2px] sm:aspect-[16/9] lg:aspect-[21/9]" />
          <div aria-hidden className="mx-frag mx-float absolute -bottom-5 left-4 flex items-center gap-3 px-4 py-3 md:left-10 lg:left-16">
            <span className="mx-dot mx-dot-live" /><span><b>Report drafted</b><span className="mx-dim"> · ready for review</span></span>
          </div>
          <div aria-hidden className="mx-frag mx-float-b absolute -top-5 right-4 hidden px-4 py-3 sm:block md:right-10 lg:right-16">
            <b>3 follow-ups sent</b><span className="mx-dim"> · you were in a meeting</span>
          </div>
        </div>

        <Fade className="mt-20 grid gap-8 lg:mt-28 lg:grid-cols-[1fr_1fr]">
          <p className="mx-display" style={{ fontSize: "clamp(1.7rem, 3vw, 2.6rem)", lineHeight: 1.08 }}>AI shouldn&rsquo;t make work feel robotic.</p>
          <p className="mx-lead lg:justify-self-end" style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.6rem)", lineHeight: 1.35, color: "var(--ink)" }}>It should give people more time to do meaningful work.</p>
        </Fade>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Lines, Fade } from "./shared";
import { OUTCOMES } from "./content";

// The only figures on this page. Both come from existing MAD project content (components/Madfilms/Campaigns.jsx).
// Confirm each is cleared for public use before launch.
const PROOF = [
  { n: "562", l: "active users onboarded", s: "Nestlé Talent Attraction Insights, pilot" },
  { n: "620K+", l: "employee advocacy content reach", s: "Nestlé Talent Attraction Insights, pilot" },
  { n: "35K+", l: "listens across platforms", s: "Nestlé NESTLEVEL Digital Podcast" },
];

export default function Outcomes() {
  const [on, setOn] = useState(0);
  return (
    <section id="outcomes" data-tone="light" aria-labelledby="out-h" className="mx-sec">
      <div className="mx-wrap">
        <Lines id="out-h" lines={["AI is only valuable", "when it changes", "the numbers."]} dim={[1, 2]} className="mx-display mx-h2 max-w-5xl" />

        <ol className="mt-16 border-t lg:mt-24" style={{ borderColor: "var(--line)" }}>
          {OUTCOMES.map((o, i) => (
            <motion.li key={o.k} onViewportEnter={() => setOn(i)} viewport={{ margin: "-45% 0px -45% 0px" }} className="mx-outcome-row grid items-baseline gap-2 border-b py-6 md:grid-cols-[1.5fr_1fr] md:gap-10 md:py-9"
              style={{ borderColor: "var(--line)", color: on === i ? "var(--ink)" : "var(--mute)" }}>
              <span className="mx-display block" style={{ fontSize: "clamp(3rem, 10vw, 9.5rem)", lineHeight: 0.95, color: "inherit" }}>{o.k}</span>
              <p className="max-w-sm text-[1.1rem] leading-snug transition-opacity duration-500 md:justify-self-end" style={{ color: "var(--soft)", opacity: on === i ? 1 : 0.55 }}>{o.d}</p>
            </motion.li>
          ))}
        </ol>

        <Fade className="mt-20 grid gap-10 lg:mt-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <h3 className="mx-h3 max-w-xs">From work we&rsquo;ve already shipped.</h3>
            <p className="mx-small mt-3 max-w-xs">For your project, we measure against your own baseline before anything is built.</p>
          </div>
          <dl className="grid gap-px sm:grid-cols-3" style={{ background: "var(--line)" }}>
            {PROOF.map((p) => (
              <div key={p.l} className="flex flex-col justify-between gap-8 p-6" style={{ background: "var(--paper)" }}>
                <dd className="mx-display" style={{ fontSize: "clamp(2.4rem, 4.4vw, 4rem)" }}>{p.n}</dd>
                <dt>
                  <span className="block text-[.95rem] leading-snug">{p.l}</span>
                  <span className="mx-small mt-1 block">{p.s}</span>
                </dt>
              </div>
            ))}
          </dl>
        </Fade>
      </div>
    </section>
  );
}

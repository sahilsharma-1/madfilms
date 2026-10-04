"use client";
import { useState } from "react";
import { Lines, Fade } from "./shared";

// No client logo files exist in the project, so names are set as type. Swap in SVG logos from /public/logos when permission allows.
const CLIENTS = [
  { name: "Nestlé", kind: "Enterprise" },
  { name: "Ministry of Defence", kind: "Government" },
  { name: "mCURA", kind: "Healthcare" },
];

export default function TrustStrip() {
  const [on, setOn] = useState(null);
  return (
    <section data-tone="light" aria-labelledby="trust-h" className="mx-sec mx-wash-v">
      <div className="mx-wrap">
        <p className="mx-kicker">Trusted in the real world</p>
        <Lines id="trust-h" lines={["Built for businesses", "where complexity matters."]} dim={[1]} className="mx-display mx-h2 mt-5 max-w-4xl" />
        <Fade delay={0.2}>
          <ul className="mt-16 border-t b-line" style={{ borderColor: "var(--line)" }} onMouseLeave={() => setOn(null)}>
            {CLIENTS.map((c) => (
              <li key={c.name} className="border-b transition-opacity duration-500" style={{ borderColor: "var(--line)", opacity: on && on !== c.name ? 0.35 : 1 }}
                onMouseEnter={() => setOn(c.name)} onFocus={() => setOn(c.name)} onBlur={() => setOn(null)} tabIndex={0}>
                <div className="flex items-baseline justify-between gap-6 py-7 md:py-9">
                  <span className="mx-display transition-transform duration-500" style={{ fontSize: "clamp(2rem, 5.6vw, 4.75rem)", transform: on === c.name ? "translateX(14px)" : "none" }}>{c.name}</span>
                  <span className="mx-small shrink-0">{c.kind}</span>
                </div>
              </li>
            ))}
          </ul>
          <p className="mx-small mt-5 max-w-xl">Names reflect work experience only and do not imply endorsement, partnership or a current engagement.</p>
        </Fade>
      </div>
    </section>
  );
}

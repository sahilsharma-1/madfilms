"use client";
import Link from "next/link";
import { Lines, Fade } from "./shared";
import { MAIL } from "./content";

export default function CTA() {
  return (
    <section id="contact" data-tone="dark" aria-labelledby="cta-h" className="mx-dark relative overflow-hidden py-28 md:py-40" style={{ background: "radial-gradient(60% 70% at 85% 100%, rgba(37,99,235,.35), transparent 70%), #0b1220" }}>
      <div className="mx-wrap relative">
        <p className="mx-kicker">GET STARTED</p>
        <Lines id="cta-h" lines={["Build a smarter", "organization."]} dim={[1]} className="mx-display mt-4" style={{ fontSize: "clamp(2.7rem,7vw,6.5rem)", lineHeight: 0.97 }} />
        <Fade delay={0.2} className="mt-8"><p className="mx-lead">Bring people, information and AI together.</p>
          <div className="mt-8 flex flex-wrap gap-3"><a href={MAIL} className="mx-btn mx-btn-light">Talk to us <span aria-hidden className="mx-arrow">→</span></a><Link href="/agents" className="mx-btn mx-btn-line">Explore AI agents <span aria-hidden className="mx-arrow">→</span></Link></div></Fade>
      </div>
    </section>
  );
}

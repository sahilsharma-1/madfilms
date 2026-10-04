"use client";
import Link from "next/link";
import { Lines, Fade, Pic } from "./shared";
import { CASES } from "./content";

const Row = ({ k, v }) => (
  <div className="grid gap-1 border-t py-4 sm:grid-cols-[8.5rem_1fr] sm:gap-6" style={{ borderColor: "var(--line)" }}>
    <dt className="mx-small">{k}</dt><dd className="text-[1rem] leading-snug">{v}</dd>
  </div>
);

export default function CaseStudies() {
  const [lead, ...rest] = CASES;
  return (
    <section id="work" data-tone="light" aria-labelledby="wk-h" className="mx-sec">
      <div className="mx-wrap">
        <Lines id="wk-h" lines={["Built for the real world.", "Not demos."]} dim={[1]} className="mx-display mx-h2 max-w-5xl" />

        <Fade className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Pic m={lead.img} reveal className="aspect-[4/3] w-full rounded-[2px] lg:aspect-auto lg:min-h-[34rem]" />
          <div>
            <p className="mx-small">{lead.sector}</p>
            <h3 className="mx-display mt-2" style={{ fontSize: "clamp(2.2rem, 4vw, 3.6rem)" }}>{lead.client}</h3>
            <p className="mx-h3 mt-3" style={{ color: "var(--soft)" }}>{lead.title}</p>
            <dl className="mt-8">
              <Row k="Challenge" v={lead.challenge} />
              <Row k="MAD approach" v={lead.approach} />
              <Row k="What was built" v={lead.built} />
              <Row k="Outcome" v={lead.outcome} />
            </dl>
            <ul className="mt-2 flex flex-wrap gap-x-10 gap-y-4 border-t pt-6" style={{ borderColor: "var(--line)" }}>
              {lead.metrics.map(([n, l]) => (
                <li key={l}><span className="mx-display block" style={{ fontSize: "2.4rem" }}>{n}</span><span className="mx-small">{l}</span></li>
              ))}
            </ul>
            <Link href={lead.href} className="mt-8 inline-flex items-center gap-2 text-[1rem] font-medium" style={{ color: "var(--violet-ink)" }}>Explore project <span aria-hidden className="mx-arrow">→</span></Link>
          </div>
        </Fade>

        <ul className="mt-20 grid gap-4 md:grid-cols-2 lg:mt-28">
          {rest.map((c, i) => (
            <li key={c.id}>
              <Link href={c.href} className="group flex min-h-[20rem] flex-col justify-between p-7 transition-colors duration-500 md:p-10" style={{ background: i ? "var(--tint-p)" : "var(--tint-b)", border: "1px solid var(--line)" }}>
                <p className="mx-small">{c.sector}</p>
                <div>
                  <h3 className="mx-display" style={{ fontSize: "clamp(2.2rem, 4.4vw, 4rem)" }}>{c.client}</h3>
                  <span className="mt-6 inline-flex items-center gap-2 text-[1rem] font-medium" style={{ color: "var(--violet-ink)" }}>Explore project <span aria-hidden className="mx-arrow">→</span></span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mx-small mt-6 max-w-xl">Names reflect work experience only and do not imply endorsement, partnership or a current engagement.</p>
      </div>
    </section>
  );
}

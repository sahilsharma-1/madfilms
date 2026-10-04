"use client";
import AnimIcon from "./Icons";
import { Lines, Fade } from "./shared";
import { CAPABILITIES } from "./content";

export default function Capabilities() {
  const [feat, ...rest] = CAPABILITIES;
  const cell = "group relative flex flex-col justify-between border-b border-r p-6 transition-colors duration-500 hover:bg-white/70 md:p-8";
  return (
    <section id="capabilities" data-tone="light" aria-labelledby="cap-h" className="mx-sec mx-wash-p">
      <div className="mx-wrap">
        <Lines id="cap-h" lines={["One intelligence layer.", "Built around your business."]} dim={[1]} className="mx-display mx-h2 max-w-5xl" />
        <Fade delay={0.15}><p className="mx-lead mt-6">Nine capabilities, one way of working. Combine them around the workflow, not the technology.</p></Fade>

        <ul className="mt-14 grid grid-cols-1 border-l border-t sm:grid-cols-2 lg:mt-20 lg:grid-cols-4" style={{ borderColor: "var(--line)" }}>
          <li className={`${cell} min-h-[22rem] sm:col-span-2 lg:row-span-2 lg:min-h-[34rem]`} style={{ borderColor: "var(--line)", background: "rgba(255,255,255,.55)" }}>
            <div className="-ml-2 -mt-2"><AnimIcon name={feat.id} size={150} /></div>
            <div>
              <h3 className="mx-display" style={{ fontSize: "clamp(2rem, 3.4vw, 3rem)" }}>{feat.name}</h3>
              <p className="mt-2 max-w-sm" style={{ color: "var(--soft)" }}>{feat.line}</p>
              <p className="mx-small mt-5">Email · CRM · Calendar · Documents · APIs</p>
            </div>
          </li>
          {rest.map((c) => (
            <li key={c.id} className={`${cell} min-h-[15rem]`} style={{ borderColor: "var(--line)" }}>
              <AnimIcon name={c.id} size={60} />
              <div className="mt-10">
                <h3 className="text-[1.2rem] font-medium tracking-tight">{c.name}</h3>
                <p className="mt-1.5 text-[.9375rem] leading-snug" style={{ color: "var(--soft)" }}>{c.line}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

"use client";
import AnimIcon from "./Icons";
import { Lines } from "./shared";
import { ROLES } from "./content";

// Asymmetric editorial grid: sizes and tints vary on purpose.
const LAYOUT = {
  strategist: { cls: "lg:col-span-7 lg:min-h-[26rem]", bg: "var(--tint-v)", icon: 120 },
  operator: { cls: "lg:col-span-5", bg: "#fff", icon: 76 },
  analyst: { cls: "lg:col-span-4", bg: "#fff", icon: 76 },
  growth: { cls: "lg:col-span-4", bg: "var(--tint-b)", icon: 76 },
  customer: { cls: "lg:col-span-4", bg: "#fff", icon: 76 },
  content: { cls: "lg:col-span-12", bg: "var(--tint-p)", icon: 84, wide: true },
};

function Role({ r }) {
  const L = LAYOUT[r.id];
  return (
    <li className={`group relative flex min-h-[17rem] flex-col justify-between overflow-hidden p-7 md:p-9 ${L.wide ? "lg:flex-row lg:items-end lg:gap-16" : ""} ${L.cls}`} style={{ background: L.bg, border: "1px solid var(--line)" }}>
      <AnimIcon name={r.id} size={L.icon} />
      <div className={L.wide ? "lg:flex lg:flex-1 lg:items-end lg:justify-between lg:gap-10" : ""}>
        <div>
          <h3 className="mx-display" style={{ fontSize: r.id === "strategist" ? "clamp(2rem, 3.4vw, 3rem)" : "clamp(1.5rem, 2.2vw, 2rem)" }}>{r.name}</h3>
          <p className="mt-2 max-w-sm leading-snug" style={{ color: "var(--soft)" }}>{r.line}</p>
        </div>
        <p className="mx-small mt-6 flex items-center gap-2 transition-all duration-500 [@media(hover:hover)]:translate-y-1 [@media(hover:hover)]:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 lg:mt-0">
          <span className="mx-dot mx-dot-live" />Now: {r.now}
        </p>
      </div>
    </li>
  );
}

export default function AITeam() {
  return (
    <section id="team" data-tone="light" aria-labelledby="team-h" className="mx-sec mx-white">
      <div className="mx-wrap">
        <Lines id="team-h" lines={["Your AI team,", "on demand."]} dim={[1]} className="mx-display mx-h2" />
        <ul className="mt-14 grid grid-cols-1 gap-3 md:grid-cols-2 lg:mt-20 lg:grid-cols-12 lg:gap-4">
          {ROLES.map((r) => <Role key={r.id} r={r} />)}
        </ul>
      </div>
    </section>
  );
}

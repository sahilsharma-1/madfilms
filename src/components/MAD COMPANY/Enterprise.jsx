import { ENGINE, SYSTEMS } from "./data";
import { Reveal } from "./Reveal";

function Stack() {
  const order = [...ENGINE].reverse();
  return (
    <svg viewBox="0 0 400 490" aria-hidden className="mx-auto w-full max-w-md">
      <defs>
        {ENGINE.map((l) => (
          <linearGradient key={l.k} id={`eg-${l.k}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={l.c1} /><stop offset="1" stopColor={l.c2} /></linearGradient>
        ))}
      </defs>
      {order.map((l) => {
        const y = ENGINE.indexOf(l) * 120;
        return (
          <g key={l.k}>
            <polygon points={`70,${y + 55} 200,${y + 110} 200,${y + 124} 70,${y + 69}`} fill={`url(#eg-${l.k})`} />
            <polygon points={`70,${y + 55} 200,${y + 110} 200,${y + 124} 70,${y + 69}`} fill="#000" opacity=".3" />
            <polygon points={`200,${y + 110} 330,${y + 55} 330,${y + 69} 200,${y + 124}`} fill={`url(#eg-${l.k})`} />
            <polygon points={`200,${y + 110} 330,${y + 55} 330,${y + 69} 200,${y + 124}`} fill="#000" opacity=".15" />
            <polygon points={`200,${y} 330,${y + 55} 200,${y + 110} 70,${y + 55}`} fill={`url(#eg-${l.k})`} />
            <polyline points={`70,${y + 55} 200,${y} 330,${y + 55}`} fill="none" stroke="#fff" strokeOpacity=".4" />
            <circle cx="200" cy={y + 55} r="5" fill="#fff" className="mh-pulse" />
          </g>
        );
      })}
      <line x1="200" y1="55" x2="200" y2="415" stroke="#fff" strokeOpacity=".85" strokeWidth="1.5" className="mh-flow" />
    </svg>
  );
}

export default function Enterprise() {
  return (
    <section id="engine" data-tone="light" aria-labelledby="en-h" className="mh-sec mh-alt overflow-hidden">
      <div className="mh-wrap grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <Reveal>
          <p className="mh-label mb-5">MAD Software &amp; Data</p>
          <h2 id="en-h" className="mh-h2">AI needs an engine.</h2>
          <p className="mh-lead mt-5">We build the software, data and infrastructure behind intelligent systems.</p>
          <ul className="mt-9 divide-y divide-[var(--line)] border-y b-line">
            {ENGINE.map((l) => (
              <li key={l.k} className="flex items-center gap-4 py-4">
                <span aria-hidden className="h-3 w-3 rounded-full" style={{ background: `linear-gradient(120deg, ${l.c1}, ${l.c2})` }} />
                <span className="text-lg font-semibold tracking-tight">{l.t}</span>
                <span className="t-soft ml-auto text-right text-[15px]">{l.d}</span>
              </li>
            ))}
          </ul>
          <p className="t-mute mt-6 max-w-md text-sm leading-relaxed">Connects to {SYSTEMS.slice(0, 6).join(", ").toLowerCase()} and the systems you already run on.</p>
        </Reveal>
        <Reveal delay={0.1}><Stack /></Reveal>
      </div>
    </section>
  );
}

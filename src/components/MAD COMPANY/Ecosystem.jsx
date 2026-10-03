import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DIVISIONS } from "./data";
import { Reveal, RevealStagger, RevealItem } from "./Reveal";

function Hub() {
  const cx = 280, cy = 250;
  return (
    <svg viewBox="0 0 560 500" aria-hidden className="hidden w-full lg:block">
      <defs>
        <linearGradient id="hub" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#2f55ff" /><stop offset=".55" stopColor="#c23ad0" /><stop offset="1" stopColor="#ff7a45" /></linearGradient>
        {DIVISIONS.map((d, i) => (<linearGradient key={d.name} id={`n${i}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={d.c1} /><stop offset="1" stopColor={d.c2} /></linearGradient>))}
      </defs>
      {DIVISIONS.map((d, i) => {
        const a = ((-90 + i * 60) * Math.PI) / 180;
        const x = cx + 205 * Math.cos(a), y = cy + 175 * Math.sin(a);
        return (<g key={d.name}>
          <line x1={cx} y1={cy} x2={x} y2={y} stroke={d.c1} strokeOpacity=".25" strokeWidth="2" />
          <line x1={cx} y1={cy} x2={x} y2={y} stroke={d.c1} strokeWidth="2" className="mh-flow" style={{ animationDelay: `${i * -0.4}s` }} />
          <circle cx={x} cy={y} r="46" fill={`url(#n${i})`} />
          <text x={x} y={y + 4} textAnchor="middle" fontSize="11.5" fontWeight="700" letterSpacing="1" fill="#fff">{d.short}</text>
        </g>);
      })}
      <circle cx={cx} cy={cy} r="68" fill="url(#hub)" />
      <text x={cx} y={cy + 2} textAnchor="middle" fontSize="26" fontWeight="700" letterSpacing="-1" fill="#fff">MAD</text>
      <text x={cx} y={cy + 22} textAnchor="middle" fontSize="10.5" letterSpacing="3" fill="#fff" fillOpacity=".9">COMPANY</text>
    </svg>
  );
}

export default function Ecosystem() {
  return (
    <section id="studios" data-tone="light" aria-labelledby="eco-h" className="mh-sec overflow-hidden">
      <div className="mh-wrap">
        <Reveal className="max-w-3xl">
          <p className="mh-label mb-5">MAD Company</p>
          <h2 id="eco-h" className="mh-h2">One company. Everything you need to build.</h2>
          <p className="mh-lead mt-5">Six MAD companies. One team behind them.</p>
        </Reveal>
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal><Hub /><p className="mh-grad-bg inline-block rounded-full px-5 py-2 text-sm font-semibold text-white lg:hidden">MAD COMPANY</p></Reveal>
          <RevealStagger stagger={0.06} className="b-line relative space-y-2 border-l-2 pl-5 lg:border-l-0 lg:pl-0">
            {DIVISIONS.map((d) => (
              <RevealItem key={d.name}>
                <Link href={d.href} className="mh-card group relative flex items-center gap-4 rounded-2xl border b-line px-5 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black">
                  <span aria-hidden className="h-3.5 w-3.5 shrink-0 rounded-full" style={{ background: `linear-gradient(120deg, ${d.c1}, ${d.c2})` }} />
                  <span><span className="block text-lg font-semibold tracking-tight">{d.name}</span><span className="t-soft block text-[15px]">{d.line}</span></span>
                  <ArrowUpRight size={18} className="t-mute ml-auto transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black" />
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";
import { useLive } from "./shared";

// MAD icon language: thin line, geometric, built from nodes, lines and flows.
// 64x64 grid. `.ln` neutral line, `.ac` accent line, `.dt`/`.ad` dots. Motion classes are defined in home.css.
const G = {
  agent: (<>
    <circle className="ln" cx="32" cy="32" r="20" strokeDasharray="1 4" />
    <g className="a-spin">
      <path className="ln" d="M32 32 32 12M32 32 49.3 42M32 32 14.7 42" />
      <circle className="ad" cx="32" cy="12" r="3.2" /><circle className="dt" cx="49.3" cy="42" r="3.2" /><circle className="dt" cx="14.7" cy="42" r="3.2" />
    </g>
    <circle className="ft a-grow" cx="32" cy="32" r="9" /><circle className="ad" cx="32" cy="32" r="4.5" />
  </>),
  automation: (<>
    {[14, 32, 50].map((y, i) => (<g key={y}>
      <rect className={`ln a-collapse d${i}`} style={{ "--dx": "22px" }} x="6" y={y - 4} width="12" height="8" rx="2" />
      <path className="ln" d={`M18 ${y}H36`} opacity=".4" />
    </g>))}
    <rect className="ft" x="38" y="18" width="20" height="28" rx="5" />
    <rect className="ac a-arrive" x="38" y="18" width="20" height="28" rx="5" />
    <path className="ac" d="m44 32 4 4 6-8" />
  </>),
  vision: (<>
    <path className="ln" d="M8 20V10a2 2 0 0 1 2-2h10M44 8h10a2 2 0 0 1 2 2v10M56 44v10a2 2 0 0 1-2 2H44M20 56H10a2 2 0 0 1-2-2V44" />
    <circle className="ln" cx="32" cy="30" r="9" /><path className="ln" d="M24 44c2-5 14-5 16 0" />
    <rect className="ac a-blink" x="20" y="18" width="24" height="26" rx="3" />
    <path className="ac a-scan" d="M10 12H54" />
  </>),
  predictive: (<>
    <path className="ln" d="M6 46H58" opacity=".4" />
    <path className="ln" d="M8 40 20 34 30 38 38 28" /><circle className="dt" cx="8" cy="40" r="2" /><circle className="dt" cx="20" cy="34" r="2" /><circle className="dt" cx="30" cy="38" r="2" />
    <path className="ac" d="M38 28 48 20 56 12" strokeDasharray="3 4" />
    <circle className="ad" cx="38" cy="28" r="2.6" />
    <circle className="ac a-grow" cx="56" cy="12" r="5" /><circle className="ad" cx="56" cy="12" r="2.2" />
  </>),
  conversational: (<>
    <path className="ln" d="M8 12h28a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H20l-8 7v-7H8a4 4 0 0 1-4-4V16a4 4 0 0 1 4-4Z" transform="translate(2 0)" />
    <circle className="dt a-grow" cx="16" cy="23" r="1.6" /><circle className="dt a-grow d1" cx="24" cy="23" r="1.6" /><circle className="dt a-grow d2" cx="32" cy="23" r="1.6" />
    <path className="ac a-draw" style={{ "--len": 26 }} d="M34 42H52" /><path className="ac a-draw d1" style={{ "--len": 12 }} d="m47 37 5 5-5 5" />
  </>),
  data: (<>
    <g className="a-out">
      {[[10, 14], [22, 8], [14, 28], [30, 20], [8, 40], [26, 46], [38, 12], [44, 36], [52, 50], [50, 22]].map(([x, y], i) => <circle key={i} className="dt" cx={x + 3} cy={y + 6} r="1.6" />)}
    </g>
    <g className="a-in">
      <path className="ln" d="M14 40 28 24 44 34 52 16M28 24 30 50M44 34 30 50" />
      {[[14, 40], [28, 24], [44, 34], [52, 16], [30, 50]].map(([x, y], i) => <circle key={i} className={i === 1 ? "ad" : "dt"} cx={x} cy={y} r="3" />)}
    </g>
  </>),
  workflow: (<>
    <rect className="ln" x="6" y="26" width="12" height="12" rx="3" />
    <path className="ln" d="M18 32H28M28 32 40 16M28 32 40 48" /><path className="ln" d="M40 16H48M40 48H48" />
    <rect className="ln" x="46" y="10" width="12" height="12" rx="3" /><rect className="ac" x="46" y="42" width="12" height="12" rx="3" />
    <circle className="ad a-travel" style={{ "--dx": "10px" }} cx="19" cy="32" r="2.4" />
    <path className="ac a-draw" style={{ "--len": 40 }} d="M28 32 40 48H46" />
  </>),
  generative: (<>
    <path className="ac a-grow" d="M32 8c1.5 12 4 14.5 16 16-12 1.5-14.5 4-16 16-1.5-12-4-14.5-16-16 12-1.5 14.5-4 16-16Z" />
    <path className="ln" d="M48 38c.7 6 2 7.3 8 8-6 .7-7.3 2-8 8-.7-6-2-7.3-8-8 6-.7 7.3-2 8-8Z" />
    <circle className="ad a-hop" style={{ "--dx": "-8px", "--dy": "-6px" }} cx="22" cy="48" r="2" /><circle className="dt a-hop d2" style={{ "--dx": "-10px", "--dy": "4px" }} cx="14" cy="34" r="1.5" />
  </>),
  integration: (<>
    <path className="ln" d="M12 14 32 32 52 14M12 50 32 32 52 50" />
    {[[12, 14], [52, 14], [12, 50], [52, 50]].map(([x, y], i) => <circle key={i} className="ln" cx={x} cy={y} r="5" fill="var(--paper)" />)}
    <circle className="ft a-grow" cx="32" cy="32" r="10" /><circle className="ac" cx="32" cy="32" r="6" /><circle className="ad" cx="32" cy="32" r="2.4" />
    <circle className="ad a-hop" style={{ "--dx": "20px", "--dy": "18px" }} cx="12" cy="14" r="1.8" /><circle className="ad a-hop d2" style={{ "--dx": "-20px", "--dy": "-18px" }} cx="52" cy="50" r="1.8" />
  </>),
  // team roles
  strategist: (<>
    <circle className="ln" cx="32" cy="32" r="22" /><circle className="ln" cx="32" cy="32" r="12" strokeDasharray="2 4" />
    <g className="a-spin"><path className="ac" d="M32 10 38 32 32 54 26 32Z" /></g><circle className="ad" cx="32" cy="32" r="2.6" />
  </>),
  operator: (<>
    <circle className="ln" cx="32" cy="32" r="20" />
    <g className="a-spin"><path className="ac" d="M32 12a20 20 0 0 1 20 20" /><circle className="ad" cx="52" cy="32" r="3" /></g>
    <path className="ln" d="M24 32l6 6 11-12" />
  </>),
  analyst: (<>
    <path className="ln" d="M8 52H56M8 52V10" />
    {[[16, 28], [28, 20], [40, 30], [52, 14]].map(([x, h], i) => <rect key={i} className={`ft a-grow d${i % 3}`} x={x - 4} y={52 - h} width="8" height={h} rx="1.5" style={{ transformBox: "view-box", transformOrigin: `${x}px 52px` }} />)}
    <path className="ac a-draw" style={{ "--len": 70 }} d="M16 26 28 18 40 28 52 12" />
  </>),
  growth: (<>
    <path className="ln" d="M8 54H56" opacity=".4" />
    {[[14, 46], [28, 36], [42, 24], [54, 10]].map(([x, y], i) => <circle key={i} className={i === 3 ? "ad a-grow" : "dt"} cx={x} cy={y} r={i === 3 ? 4 : 2.6} />)}
    <path className="ac" d="M14 46 28 36 42 24 54 10" />
    <path className="ac a-hop" style={{ "--dx": "0px", "--dy": "-8px" }} d="M54 4v4M52 6h4" />
  </>),
  customer: (<>
    <circle className="ln" cx="32" cy="22" r="9" /><path className="ln" d="M14 52c2-12 10-16 18-16s16 4 18 16" />
    <circle className="ad a-grow" cx="48" cy="14" r="4" /><path className="ac a-draw" style={{ "--len": 14 }} d="m46 14 2 2 3-4" />
  </>),
  content: (<>
    <rect className="ln" x="8" y="14" width="34" height="26" rx="3" /><path className="ln" d="M8 34l10-9 8 7 6-5 10 8" />
    <rect className="ac a-draw" style={{ "--len": 110 }} x="22" y="26" width="34" height="26" rx="3" />
    <circle className="ad a-grow" cx="48" cy="34" r="2.6" />
  </>),
};

export default function AnimIcon({ name, size = 64, className = "", hot: hotProp }) {
  const [ref, live] = useLive("0px");
  const [hot, setHot] = useState(false);
  return (
    <span ref={ref} onPointerEnter={() => setHot(true)} onPointerLeave={() => setHot(false)} className={`inline-block ${className}`}>
      <svg className="ic" width={size} height={size} viewBox="0 0 64 64" data-live={live ? 1 : 0} data-hot={(hotProp ?? hot) ? 1 : 0} aria-hidden="true" focusable="false">
        {G[name]}
      </svg>
    </span>
  );
}

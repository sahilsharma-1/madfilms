"use client";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/** Work-type filter. Combines with the industry filter. Categories with nothing to show are disabled. */
export default function AgentCategoryTabs({ categories, counts, active, onChange }) {
  const still = useReducedMotion();
  const wrap = useRef(null);
  const refs = useRef({});
  const first = useRef(true);

  // Keep the active pill in view on small screens (also returns the strip to the start when the filter resets to "All").
  useEffect(() => {
    if (first.current) { first.current = false; return; }
    const c = wrap.current, b = refs.current[active];
    if (!c || !b) return;
    c.scrollTo({ left: Math.max(0, b.offsetLeft - (c.clientWidth - b.offsetWidth) / 2), behavior: still ? "auto" : "smooth" });
  }, [active, still]);

  return (
    <div className="wf-cats-scroll" ref={wrap}>
      <div className="wf-cats" role="group" aria-label="Filter by type of work">
        {categories.map((c) => {
          const n = counts[c] || 0, on = c === active;
          return (
            <button key={c} ref={(el) => (refs.current[c] = el)} type="button" className="wf-cat" aria-pressed={on} disabled={n === 0} onClick={() => onChange(c)}>
              {c}<em aria-label={`${n} agents`}>{n}</em>
            </button>
          );
        })}
      </div>
    </div>
  );
}

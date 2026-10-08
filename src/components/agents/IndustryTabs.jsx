"use client";
import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PAIRS } from "@/data/agents";

/** Industry selector. Horizontally scrollable on small screens, animated underline, arrow-key navigation. */
export default function IndustryTabs({ items, activeId, onChange, panelId }) {
  const still = useReducedMotion();
  const wrap = useRef(null);
  const refs = useRef({});
  const first = useRef(true);

  useEffect(() => {
    if (first.current) { first.current = false; return; }
    const c = wrap.current, b = refs.current[activeId];
    if (!c || !b) return;
    const left = b.offsetLeft - (c.clientWidth - b.offsetWidth) / 2;
    c.scrollTo({ left: Math.max(0, left), behavior: still ? "auto" : "smooth" });
  }, [activeId, still]);

  const move = (e, i) => {
    const k = e.key;
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(k)) return;
    e.preventDefault();
    const n = k === "Home" ? 0 : k === "End" ? items.length - 1 : (i + (k === "ArrowRight" ? 1 : -1) + items.length) % items.length;
    onChange(items[n].id);
    refs.current[items[n].id]?.focus();
  };

  return (
    <div className="wf-tabs-scroll" ref={wrap}>
      <div className="wf-tabs" role="tablist" aria-label="Choose your industry">
        {items.map((it, i) => {
          const on = it.id === activeId;
          return (
            <button key={it.id} ref={(el) => (refs.current[it.id] = el)} type="button" role="tab" id={`wf-ind-${it.id}`}
              aria-selected={on} aria-controls={panelId} tabIndex={on ? 0 : -1} className="wf-tab"
              style={{ "--d": PAIRS[it.accent].d, "--s": PAIRS[it.accent].s }}
              onClick={() => onChange(it.id)} onKeyDown={(e) => move(e, i)}>
              {it.label}
              {on && <motion.span layoutId="wf-ind-line" className="wf-tab-line" transition={still ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 38 }} />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

export const EASE = [0.21, 0.47, 0.32, 0.98];

/** True while the element is on screen (toggles, so loops can pause off-screen). */
export function useLive(margin = "-10% 0px") {
  const ref = useRef(null);
  const live = useInView(ref, { margin });
  return [ref, live];
}

/** Steps through 0..n-1 on an interval while `run` is true. Static (last step) under reduced motion. */
export function useStepper(n, ms, run) {
  const still = useReducedMotion();
  const [i, setI] = useState(0);
  useEffect(() => {
    if (!run || still) return;
    const t = setInterval(() => setI((v) => (v + 1) % n), ms);
    return () => clearInterval(t);
  }, [n, ms, run, still]);
  return still ? n - 1 : i;
}

/** Image with graphite fallback. `reveal` wipes it in horizontally once; `zoom` adds a slow hover scale. */
export function Pic({ m, className = "", priority = false, reveal = false, zoom = true, dark = false, imgClass = "" }) {
  const still = useReducedMotion();
  const img = useRef(null);
  useEffect(() => {
    const el = img.current;
    if (el && el.complete && el.naturalWidth === 0) el.style.display = "none";
  }, []);
  const wipe = reveal && !still;
  return (
    <motion.div
      className={`mx-pic mx-pic-warm ${zoom ? "mx-pic-zoom" : ""} ${dark ? "mx-pic-dark" : ""} ${className}`}
      initial={wipe ? { clipPath: "inset(0 100% 0 0)" } : false}
      whileInView={wipe ? { clipPath: "inset(0 0% 0 0)" } : undefined}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 1.3, ease: EASE }}
    >
      {m?.src && (
        <motion.img
          ref={img}
          src={m.src}
          alt={m.alt || ""}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          referrerPolicy="no-referrer"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
          initial={wipe ? { scale: 1.12 } : false}
          whileInView={wipe ? { scale: 1 } : undefined}
          viewport={{ once: true, margin: "-8%" }}
          transition={{ duration: 1.8, ease: EASE }}
          className={imgClass}
        />
      )}
    </motion.div>
  );
}

/** Headline that rises line by line. `lines` is an array of strings; `dim` indexes render in the muted tone. */
export function Lines({ lines, className = "", dim = [], as: Tag = "h2", id, delay = 0, style }) {
  const still = useReducedMotion();
  return (
    <Tag id={id} className={className} style={style}>
      {lines.map((l, i) => (
        <span key={i} className="block overflow-hidden pb-[.1em] -mb-[.1em]">
          <motion.span
            className={`block ${dim.includes(i) ? "mx-dim" : ""}`}
            initial={{ y: still ? 0 : "105%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, delay: delay + i * 0.09, ease: EASE }}
          >
            {l}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

export function Fade({ children, delay = 0, y = 14, className = "", as = "div" }) {
  const still = useReducedMotion();
  const C = motion[as] ?? motion.div;
  return (
    <C initial={{ opacity: 0, y: still ? 0 : y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8%" }} transition={{ duration: 0.9, delay, ease: EASE }} className={className}>
      {children}
    </C>
  );
}

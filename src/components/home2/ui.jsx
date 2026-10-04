"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { IMG } from "@/data/imagery";
import { EASE, useLive, useStepper, Fade } from "../home/shared";

export { EASE, useLive, useStepper, Fade };

/** Photo from the central config: local file first, then remote, then a labelled tinted tile. */
export function Photo({ slot, className = "", priority = false, eager = false }) {
  const m = IMG[slot];
  const list = [m?.local, m?.remote].filter(Boolean);
  const [i, setI] = useState(0);
  const ref = useRef(null);
  const src = list[i];
  // The server-rendered <img> can fail before React attaches onError, so re-check once mounted and on every src change.
  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setI((v) => v + 1);
  }, [src]);
  return (
    <div className={`h2-photo ${className}`} data-slot={slot}>
      <span className="h2-ph" aria-hidden>{m?.role}</span>
      {src && (
        <img ref={ref} key={src} src={src} alt={m.alt} loading={priority || eager ? "eager" : "lazy"} decoding="async" referrerPolicy="no-referrer"
          fetchPriority={priority ? "high" : "auto"} style={{ objectPosition: m.pos }} onError={() => setI((v) => v + 1)} />
      )}
    </div>
  );
}

/** Window chrome for conceptual product UI. Always labelled so nothing reads as a shipped product. */
export function Win({ title, children, className = "", tag = "Example workflow", dark = false }) {
  return (
    <div className={`h2-win ${dark ? "h2-win-dark" : ""} ${className}`}>
      <div className="h2-win-bar"><i /><i /><i /><b>{title}</b><em>{tag}</em></div>
      <div className="h2-win-body">{children}</div>
    </div>
  );
}

export const Pill = ({ k = "ok", children }) => <span className={`h2-pill h2-pill-${k}`}>{children}</span>;
export const Avatar = ({ n, c = "var(--w-dark)" }) => <span className="h2-av" style={{ background: c }}>{n}</span>;

/** Counts up once when visible. Only used for clearly labelled example figures. */
export function Count({ to, suffix = "" }) {
  const still = useReducedMotion();
  const [ref, live] = useLive("-5% 0px");
  const [v, setV] = useState(still ? to : 0);
  useEffect(() => {
    if (!live || still) return;
    let r, t0;
    const f = (t) => { t0 ??= t; const p = Math.min(1, (t - t0) / 1100); setV(Math.round(to * (1 - Math.pow(1 - p, 3)))); if (p < 1) r = requestAnimationFrame(f); };
    r = requestAnimationFrame(f);
    return () => cancelAnimationFrame(r);
  }, [live, to, still]);
  return <span ref={ref}>{v}{suffix}</span>;
}

/** Task > AI work > Result > Human approval. The active stage lights up; lines draw between them. */
export function Flow({ stages, run = true, ms = 1500, className = "" }) {
  const i = useStepper(stages.length, ms, run);
  return (
    <ol className={`h2-flow ${className}`}>
      {stages.map((s, k) => (
        <li key={s.k} data-on={k <= i ? 1 : 0} data-now={k === i ? 1 : 0}>
          <span className="h2-flow-k">{s.k}</span>
          <span className="h2-flow-t">{s.t}</span>
          {s.s && <span className="h2-flow-s">{s.s}</span>}
        </li>
      ))}
    </ol>
  );
}

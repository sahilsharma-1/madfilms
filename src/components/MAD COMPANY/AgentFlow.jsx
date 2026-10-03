"use client";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";

// One reusable "agent at work" runner. Steps complete one by one while on screen.
// A step with `who` renders as a chat bubble; otherwise as a task row.
export default function AgentFlow({ steps, label, dark = true, speed = 1300, className = "" }) {
  const ref = useRef(null);
  const still = useReducedMotion();
  const [n, setN] = useState(0);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setVis(e.isIntersecting), { threshold: 0.3 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    if (still || !vis) return;
    const id = setInterval(() => setN((v) => (v > steps.length + 1 ? 0 : v + 1)), speed);
    return () => clearInterval(id);
  }, [still, vis, steps.length, speed]);
  const done = still ? steps.length : Math.min(n, steps.length);
  const fg = dark ? "text-white" : "text-black";
  const mute = dark ? "text-white/45" : "text-black/45";
  return (
    <div ref={ref} className={className}>
      {label && <p className={`mb-4 text-xs ${mute}`}>{label}</p>}
      <ol className="space-y-2.5" aria-label="Example of an AI agent completing a task">
        {steps.map((s, i) => {
          const state = i < done ? "done" : i === done ? "active" : "wait";
          if (s.who) {
            return (
              <li key={i} aria-hidden={state === "wait"} className={`flex transition-all duration-500 ${s.who === "ai" ? "justify-start" : "justify-end"} ${state === "wait" ? "translate-y-2 opacity-0" : "opacity-100"}`}>
                <span className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-snug ${s.who === "ai" ? "mh-grad-bubble text-white" : dark ? "bg-white/10 text-white" : "bg-black/[.06] text-black"}`}>{s.t}</span>
              </li>
            );
          }
          return (
            <li key={i} className={`flex items-center gap-3 text-[15px] transition-opacity duration-500 ${state === "wait" ? "opacity-30" : "opacity-100"} ${fg}`}>
              <span aria-hidden className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border transition-colors duration-500 ${state === "done" ? "mh-grad-bg border-transparent text-white" : state === "active" ? "border-[#7c6cff] mh-pulse" : dark ? "border-white/20" : "border-black/20"}`}>
                {state === "done" && <Check size={12} strokeWidth={3} />}
              </span>
              <span>{s.t}</span>
              {s.d && <span className={`ml-auto hidden text-xs sm:block ${mute}`}>{s.d}</span>}
              <span className="sr-only">{state === "done" ? "done" : state === "active" ? "in progress" : "waiting"}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

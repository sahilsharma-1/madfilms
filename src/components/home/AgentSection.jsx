"use client";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Lines, useLive, useStepper, EASE } from "./shared";

const STEPS = [
  { t: "Customer request", d: "“Can I change my delivery address?”", g: <path d="M6 8h16a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H13l-5 4v-4H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z" /> },
  { t: "AI understands", d: "Intent found: change the delivery address.", g: <><circle cx="14" cy="14" r="3" /><path d="M14 3v4M14 21v4M3 14h4M21 14h4M6.3 6.3l2.8 2.8M18.9 18.9l2.8 2.8M21.7 6.3l-2.8 2.8M9.1 18.9l-2.8 2.8" /></> },
  { t: "AI reasons", d: "Checks the order status and the change policy.", g: <path d="M5 14h6l4-7h8M11 14l4 7h8" /> },
  { t: "AI accesses systems", d: "Opens the order system and customer record.", g: <><rect x="4" y="5" width="20" height="5" rx="1.5" /><rect x="4" y="12" width="20" height="5" rx="1.5" /><rect x="4" y="19" width="20" height="5" rx="1.5" /></> },
  { t: "AI takes action", d: "Updates the address and confirms the change.", g: <path d="M15 3 7 15h6l-1 10 9-13h-6Z" /> },
  { t: "Customer gets result", d: "“Done. Your new address is confirmed.”", g: <path d="m6 14 6 6 11-12" /> },
];

export default function AgentSection() {
  const [ref, live] = useLive();
  const still = useReducedMotion();
  const a = useStepper(STEPS.length, 2300, live);
  return (
    <section ref={ref} id="agents" data-tone="light" aria-labelledby="ag-h" className="mx-sec mx-white">
      <div className="mx-wrap">
        <Lines id="ag-h" lines={["AI doesn’t just answer.", "It acts."]} dim={[1]} className="mx-display mx-h2" />

        <ol className="relative mt-16 grid gap-0 lg:mt-24 lg:grid-cols-6">
          {/* rail (desktop) */}
          <div aria-hidden className="absolute left-0 right-0 top-[27px] hidden h-px lg:block" style={{ background: "var(--line)" }}>
            <div className="h-px" style={{ background: "#2563eb", width: `${(a / (STEPS.length - 1)) * 100}%`, transition: "width 1.6s cubic-bezier(.21,.47,.32,.98)" }} />
          </div>
          {STEPS.map((s, i) => {
            const on = i <= a;
            return (
              <li key={s.t} className="relative flex gap-5 pb-8 lg:block lg:pb-0 lg:pr-5">
                {i < STEPS.length - 1 && <span aria-hidden className="absolute left-[27px] top-14 h-[calc(100%-3.25rem)] w-px lg:hidden" style={{ background: i < a ? "#2563eb" : "var(--line)" }} />}
                <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full border transition-colors duration-700" style={{ background: i === a ? "#2563eb" : "#fff", borderColor: on ? "#2563eb" : "var(--line-strong)", color: i === a ? "#fff" : on ? "#2563eb" : "var(--mute)" }}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>{s.g}</svg>
                  {i === a && !still && <span aria-hidden className="mx-ring absolute inset-0 rounded-full border" style={{ borderColor: "#2563eb" }} />}
                </span>
                <div className="lg:mt-6">
                  <h3 className="text-[1.05rem] font-medium tracking-tight transition-colors duration-700" style={{ color: on ? "var(--ink)" : "var(--mute)" }}>{s.t}</h3>
                  <p className="mx-small mt-1 max-w-[14rem] lg:max-w-none">{s.d}</p>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="mt-14 border-t pt-8 lg:mt-20 lg:pt-10" style={{ borderColor: "var(--line)" }} aria-live="off">
          <p className="mx-small">Now</p>
          <div className="relative mt-2 min-h-[5.5rem] md:min-h-[4.5rem]">
            <AnimatePresence mode="wait">
              <motion.p key={a} initial={{ opacity: 0, y: still ? 0 : 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: EASE }} className="mx-display" style={{ fontSize: "clamp(1.6rem, 3.4vw, 3rem)", lineHeight: 1.05 }}>
                {STEPS[a].d}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

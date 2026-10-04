"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, useReducedMotion } from "framer-motion";
import { EASE } from "./shared";
import { LAYERS } from "./content";

const W = [66, 74, 82, 91, 100]; // widths: the foundation is the widest layer

export default function Architecture() {
  const ref = useRef(null);
  const still = useReducedMotion();
  const [wide, setWide] = useState(true);
  useEffect(() => { const q = window.matchMedia("(min-width: 1024px)"); const f = () => setWide(q.matches); f(); q.addEventListener("change", f); return () => q.removeEventListener("change", f); }, []);
  const { scrollYProgress } = useScroll({ target: ref, offset: wide ? ["start start", "end end"] : ["start 55%", "end 70%"] });
  const [p, setP] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => setP(v));
  // layers reveal from the bottom up: Foundation first, Experience last
  const shown = still ? LAYERS.length : Math.min(LAYERS.length, Math.floor(p * (LAYERS.length + 0.6)) + (p > 0.02 ? 1 : 0));
  const topIdx = Math.max(0, LAYERS.length - shown); // index of the top-most revealed layer
  const active = still ? 0 : Math.min(topIdx, LAYERS.length - 1);

  return (
    <section ref={ref} id="architecture" data-tone="dark" aria-labelledby="arch-h" className="mx-dark mx-arch-bg relative lg:h-[290vh]">
      <div className="mx-wrap py-24 lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center lg:py-0">
        <div className="grid w-full gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
          <div>
            <h2 id="arch-h" className="mx-display mx-h2">The intelligence layer<br /><span className="mx-dim">behind your business.</span></h2>
            <div className="mt-10 min-h-[8.5rem] border-t pt-6" style={{ borderColor: "var(--line)" }} aria-live="polite">
              <motion.div key={active} initial={{ opacity: 0, y: still ? 0 : 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: EASE }}>
                <p className="text-[1.5rem] font-medium tracking-tight">{LAYERS[active].k}</p>
                <p className="mx-lead mt-2" style={{ fontSize: "1.05rem" }}>{LAYERS[active].d}</p>
              </motion.div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[40rem]">
            <div aria-hidden className="absolute inset-y-0 left-1/2 w-px" style={{ background: "linear-gradient(to bottom, transparent, rgba(185,168,255,.45) 15%, rgba(185,168,255,.45) 85%, transparent)" }}>
              {!still && shown >= LAYERS.length - 1 && <><span className="mx-packet" /><span className="mx-packet" style={{ animationDelay: "2.7s" }} /></>}
            </div>
            <ul className="relative flex flex-col gap-3">
              {LAYERS.map((l, i) => {
                const vis = still || i >= LAYERS.length - shown;
                const isActive = i === active;
                return (
                  <li key={l.k} className="mx-auto" style={{ width: `${W[i]}%` }}>
                    <motion.div animate={{ opacity: vis ? 1 : 0.1, y: vis || still ? 0 : 14 }} transition={{ duration: 0.8, ease: EASE }}
                      className="flex items-center justify-between gap-4 px-5 py-5 backdrop-blur-sm md:px-7 md:py-6"
                      style={{ background: isActive ? "rgba(37,99,235,.22)" : "rgba(255,255,255,.04)", border: `1px solid ${isActive ? "rgba(185,168,255,.7)" : "rgba(255,255,255,.14)"}`, transition: "background .6s, border-color .6s" }}>
                      <span className="text-[1.15rem] font-medium tracking-tight md:text-[1.35rem]">{l.k}</span>
                      <span className="text-right text-[.78rem] leading-tight md:text-[.85rem]" style={{ color: "var(--mute)" }}>{l.sub}</span>
                    </motion.div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

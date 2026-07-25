"use client";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const STATS = [
  { value: 500, suffix: "+", label: "Productions delivered" },
  { value: 60, suffix: "%", label: "Faster turnaround vs. traditional crews" },
  { value: 2, suffix: "x", label: "More setups per shoot day" },
  { value: 40, suffix: "%", label: "Lower cost per finished minute" },
];

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 1.4, bounce: 0 });

  useEffect(() => {
    if (inView) motionVal.set(value);
  }, [inView, value, motionVal]);

  const displayRef = useRef(null);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (displayRef.current) {
        displayRef.current.textContent = Math.round(v) + suffix;
      }
    });
  }, [spring, suffix]);

  return (
    <span ref={ref}>
      <span ref={displayRef}>0{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-black px-6 py-24 md:px-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 uppercase tracking-[5px] text-white/70 text-sm">
          Measurable results
        </p>
        <h2 className="text-3xl font-light text-white md:text-5xl">
          The proof is in the{" "}
          <span className="italic text-white/60">footage</span>
        </h2>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-4xl font-light text-white md:text-5xl">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-2 text-sm text-white/55">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

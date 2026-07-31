"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * Counts up to `value` once it scrolls into view. Understands the
 * shapes this site uses for stats — "150+", "40+", "8", "4.9/5" —
 * by animating the leading number and keeping any suffix static.
 *
 *   <AnimatedCounter value="150+" />
 */
export default function AnimatedCounter({ value, duration = 1.6, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(() => String(value).replace(/[\d.]+/, "0"));

  useEffect(() => {
    if (!isInView) return;

    const match = String(value).match(/^([\d.]+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const [, numStr, suffix] = match;
    const end = parseFloat(numStr);
    const isDecimal = numStr.includes(".");
    const startTime = performance.now();
    let frame;

    function tick(now) {
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
      const current = end * eased;
      setDisplay(`${isDecimal ? current.toFixed(1) : Math.round(current)}${suffix}`);
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

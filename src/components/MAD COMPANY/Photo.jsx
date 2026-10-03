"use client";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * Editorial photo with graphite fallback, lazy loading and optional gentle parallax.
 *   <Photo m={MEDIA.team} className="aspect-[21/9]" mono parallax />
 */
export default function Photo({ m, className = "", mono = false, parallax = false, priority = false, vignette = false, light = false, imgClass = "" }) {
  const ref = useRef(null);
  const img = useRef(null);
  // An image can fail before React attaches onError (SSR + slow hydrate), so re-check on mount.
  useEffect(() => {
    const el = img.current;
    if (el && el.complete && el.naturalWidth === 0) el.style.display = "none";
  }, []);
  const still = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const move = parallax && !still;
  return (
    <div ref={ref} className={`mh-photo ${light ? "mh-photo-light" : ""} ${mono ? "mh-mono" : ""} ${vignette ? "mh-vignette" : ""} ${className}`}>
      <motion.img
        ref={img}
        src={m.src}
        alt={m.alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        referrerPolicy="no-referrer"
        onError={(e) => { e.currentTarget.style.display = "none"; }}
        style={move ? { y, scale: 1.12 } : undefined}
        className={imgClass}
      />
    </div>
  );
}

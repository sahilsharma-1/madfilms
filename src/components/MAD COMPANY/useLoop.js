"use client";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

// Steps an animation forward while its element is on screen, holds on the last step, then loops.
// With reduced motion it simply rests on the finished state.
export default function useLoop(len, speed = 1500, hold = 2) {
  const ref = useRef(null);
  const still = useReducedMotion();
  const [vis, setVis] = useState(false);
  const [raw, setRaw] = useState(0);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setVis(e.isIntersecting), { threshold: 0.2 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    if (still || !vis) return;
    const id = setInterval(() => setRaw((v) => (v + 1) % (len + hold)), speed);
    return () => clearInterval(id);
  }, [still, vis, len, speed, hold]);
  const i = still ? len - 1 : Math.min(raw, len - 1);
  return { ref, i, setRaw, still };
}

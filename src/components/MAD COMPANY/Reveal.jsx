"use client";

import { motion } from "framer-motion";

const EASE = [0.21, 0.47, 0.32, 0.98];

/**
 * Fade-and-rise wrapper for anything that should animate in as it
 * scrolls into view. Plays once by default.
 *
 *   <Reveal><h2>Heading</h2></Reveal>
 */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.7,
  once = true,
  className = "",
  as = "div",
}) {
  const Comp = motion[as] ?? motion.div;
  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-100px" }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
    >
      {children}
    </Comp>
  );
}

/**
 * Stagger container — pair with <RevealItem> children so a grid or
 * list animates in one item after another instead of all at once.
 *
 *   <RevealStagger className="grid grid-cols-3 gap-5">
 *     {items.map((i) => <RevealItem key={i.id}>...</RevealItem>)}
 *   </RevealStagger>
 */
export function RevealStagger({ children, className = "", stagger = 0.08, delayChildren = 0 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ staggerChildren: stagger, delayChildren }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className = "", y = 24 }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

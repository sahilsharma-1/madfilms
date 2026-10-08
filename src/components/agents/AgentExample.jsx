"use client";
import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "../home/shared";

/** A short illustrative exchange. Always labelled as an example. */
export default function AgentExample({ example, agentKey }) {
  const still = useReducedMotion();
  return (
    <figure className="wf-example">
      <figcaption><span className="wf-kicker">Example</span><span className="wf-chip-plain">{example.channel}</span><small>Illustrative only</small></figcaption>
      <div className="wf-bubbles">
        {example.messages.map((m, i) => (
          <motion.p key={agentKey + i} className={`wf-bubble is-${m.from}`} initial={still ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.18 * i + 0.15, ease: EASE }}>
            {m.from === "agent" && <b>MAD agent</b>}
            {m.from === "customer" && <b>Customer</b>}
            {m.from === "system" && <b>Event</b>}
            {m.text.split("\n").map((l, k) => <span key={k}>{l}</span>)}
          </motion.p>
        ))}
      </div>
    </figure>
  );
}

"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { EASE } from "../home/shared";

/** The action chain. Steps light up once in sequence when an agent is selected. Vertical on every screen size. */
export default function AgentWorkflow({ steps, trigger, agentKey }) {
  const still = useReducedMotion();
  return (
    <div className="wf-flow">
      <p className="wf-kicker">Action</p>
      <p className="wf-trigger">Starts when: <b>{trigger}</b></p>
      <ol className="wf-steps" aria-label="Workflow steps">
        {steps.map((s, i) => (
          <motion.li key={agentKey + i} initial={still ? false : { opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.08 * i, ease: EASE }}>
            <span className="wf-step"><i>{i + 1}</i>{s}</span>
            {i < steps.length - 1 && <ArrowDown className="wf-step-arrow" size={14} aria-hidden />}
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

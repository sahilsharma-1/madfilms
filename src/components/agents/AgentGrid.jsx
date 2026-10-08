"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PAIRS } from "@/data/agents";
import { AgentIcon } from "./AgentArt";
import { EASE } from "../home/shared";

/** Touch-friendly agent list. Cards are real buttons; the selected card shows its accent. */
export default function AgentGrid({ agents, selectedKey, onSelect, groupKey, labelledBy }) {
  const still = useReducedMotion();
  return (
    <motion.ul key={groupKey} className="wf-grid" aria-labelledby={labelledBy}
      initial={still ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: EASE }}>
      {agents.map((a, i) => {
        const p = PAIRS[a.accent], on = a.key === selectedKey;
        return (
          <motion.li key={a.key} initial={still ? false : { opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: Math.min(i, 8) * 0.03, ease: EASE }}>
            <button type="button" className="wf-card" aria-pressed={on} onClick={() => onSelect(a.key)} style={{ "--d": p.d, "--s": p.s }}>
              <span className="wf-card-top">
                <span className="wf-card-icon"><AgentIcon name={a.icon} /></span>
                <span className="wf-card-cat">{a.category}</span>
              </span>
              <span className="wf-card-name">{a.name}</span>
              <span className="wf-card-desc">{a.shortDescription}</span>
              <span className="wf-card-go" aria-hidden>{on ? "Viewing" : "See how it works"} <ArrowRight size={14} /></span>
            </button>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}

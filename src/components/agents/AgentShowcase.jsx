"use client";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { PAIRS } from "@/data/agents";
import { EASE } from "../home/shared";
import { AgentIcon, ImageSlot } from "./AgentArt";
import AgentWorkflow from "./AgentWorkflow";
import AgentExample from "./AgentExample";

/** Editorial panel for one agent: Problem | MAD agent + action | Outcome, then Example, Best for, Works with. */
export default function AgentShowcase({ agent, industryLabel, industryId }) {
  const still = useReducedMotion();
  const p = PAIRS[agent.accent];
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.article key={agent.key} className="wf-panel" style={{ "--d": p.d, "--s": p.s }}
        aria-labelledby="wf-agent-title"
        initial={still ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={still ? undefined : { opacity: 0, y: -6 }} transition={{ duration: 0.38, ease: EASE }}>
        <header className="wf-panel-head">
          <p className="wf-kicker"><AgentIcon name={agent.icon} size={15} /> {agent.category}{industryId !== "all" ? ` · ${industryLabel}` : ""}</p>
          <h3 id="wf-agent-title" aria-live="polite">{agent.name}</h3>
        </header>

        <div className="wf-cols">
          <section className="wf-col wf-problem" aria-label="The problem">
            <p className="wf-kicker">The problem</p>
            <p className="wf-quote">{agent.problem}</p>
          </section>

          <section className="wf-col wf-agent" aria-label="MAD agent">
            <ImageSlot src={agent.image} alt={`Illustration of the ${agent.name}`} icon={agent.icon} number={agent.n} label={agent.name} className="wf-agent-art" sizes="(max-width: 900px) 92vw, 34vw" />
            <p className="wf-kicker">MAD agent</p>
            <p className="wf-agent-copy">{agent.description}</p>
            <AgentWorkflow steps={agent.steps} trigger={agent.trigger} agentKey={agent.key} />
          </section>

          <section className="wf-col wf-outcome" aria-label="The potential outcome">
            <p className="wf-kicker">Potential outcome</p>
            <p className="wf-quote">{agent.outcome}</p>
            <small>Results depend on your workflow, data and connected systems.</small>
          </section>
        </div>

        <div className="wf-below">
          <AgentExample example={agent.example} agentKey={agent.key} />
          <div className="wf-meta">
            <div>
              <p className="wf-kicker">Best for</p>
              <ul className="wf-tags">{agent.bestFor.map((b) => <li key={b} data-on={b === industryLabel ? 1 : 0}>{b}</li>)}</ul>
            </div>
            <div>
              <p className="wf-kicker">Works with</p>
              <ul className="wf-tags is-plain">{agent.integrations.map((b) => <li key={b}>{b}</li>)}</ul>
              <small>Connections depend on the tools your team uses.</small>
            </div>
          </div>
        </div>
      </motion.article>
    </AnimatePresence>
  );
}

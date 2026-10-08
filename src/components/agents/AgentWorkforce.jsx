"use client";
import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Head } from "../home3/Home3";
import { CATEGORIES, PAIRS } from "@/data/agents";
import { INDUSTRIES, INDUSTRY_BY_ID, featuredKey, resolveEntries } from "@/data/industries";
import { EASE } from "../home/shared";
import IndustryTabs from "./IndustryTabs";
import AgentCategoryTabs from "./AgentCategoryTabs";
import AgentGrid from "./AgentGrid";
import AgentShowcase from "./AgentShowcase";
import CustomAgentCTA from "./CustomAgentCTA";
import GovernanceStrip from "./GovernanceStrip";
import AgentIndex from "./AgentIndex";
import { ImageSlot } from "./AgentArt";
import "./workforce.css";

export default function AgentWorkforce() {
  const still = useReducedMotion();
  const [industryId, setIndustryId] = useState("all");
  const [category, setCategory] = useState("All");
  const [selectedKey, setSelectedKey] = useState(() => featuredKey("all"));
  const panelTop = useRef(null);

  const industry = INDUSTRY_BY_ID[industryId];
  const pair = PAIRS[industry.accent];
  const entries = useMemo(() => resolveEntries(industryId), [industryId]);
  const counts = useMemo(() => {
    const c = { All: entries.length };
    entries.forEach((a) => { c[a.category] = (c[a.category] || 0) + 1; });
    return c;
  }, [entries]);
  const visible = category === "All" ? entries : entries.filter((a) => a.category === category);
  const selected = visible.find((a) => a.key === selectedKey) || visible[0];

  const changeIndustry = (id) => {
    if (id === industryId) return;
    setIndustryId(id);
    setCategory("All");
    setSelectedKey(featuredKey(id));
  };
  const changeCategory = (c) => {
    setCategory(c);
    const next = c === "All" ? entries : entries.filter((a) => a.category === c);
    if (!next.some((a) => a.key === selectedKey)) setSelectedKey(next[0]?.key);
  };
  const pick = (key) => {
    setSelectedKey(key);
    // On narrow screens the panel sits far below the card, so bring it into view.
    if (typeof window !== "undefined" && window.matchMedia("(max-width: 900px)").matches) {
      requestAnimationFrame(() => panelTop.current?.scrollIntoView({ behavior: still ? "auto" : "smooth", block: "start" }));
    }
  };

  return (
    <section id="workers" className="m3-sec wf" data-tone="light" aria-labelledby="wf-title" style={{ "--d": pair.d, "--s": pair.s }}>
      <div className="m3-wrap">
        <Head
          eyebrow="AI agents that do real business work"
          title={<span id="wf-title">Meet your AI workforce</span>}
          lead="Tell us what kind of business you run. We'll show you the work an AI workforce can take off your team's hands."
        />

        <p className="wf-step-label"><i>1</i> Your business</p>
        <IndustryTabs items={INDUSTRIES} activeId={industryId} onChange={changeIndustry} panelId="wf-results" />

        <div id="wf-results" role="tabpanel" aria-labelledby={`wf-ind-${industryId}`} className="wf-results">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={industryId} className="wf-band" initial={still ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={still ? undefined : { opacity: 0 }} transition={{ duration: 0.32, ease: EASE }}>
              <div className="wf-band-copy">
                <p className="wf-kicker">{industry.id === "all" ? "Full library" : industry.label}</p>
                <h3>{industry.headline}</h3>
                <p>{industry.line}</p>
              </div>
              {industry.image && (
                <ImageSlot key={industry.image} src={`/images/industries/${industry.image}.png`} alt={`${industry.label} workplace`} label={industry.label} className="wf-band-art" sizes="(max-width: 900px) 92vw, 30vw" />
              )}
            </motion.div>
          </AnimatePresence>

          <p className="wf-step-label" id="wf-work-label"><i>2</i> The work you want off your team</p>
          <AgentCategoryTabs categories={CATEGORIES} counts={counts} active={category} onChange={changeCategory} />

          <p className="wf-count" role="status">{visible.length} {visible.length === 1 ? "agent" : "agents"}{industry.id !== "all" ? ` for ${industry.label}` : ""}{category !== "All" ? ` · ${category}` : ""}</p>

          {visible.length > 0 && (
            <AgentGrid agents={visible} selectedKey={selected?.key} onSelect={pick} groupKey={`${industryId}-${category}`} labelledBy="wf-work-label" />
          )}

          <div ref={panelTop} className="wf-panel-anchor">
            {selected && <AgentShowcase agent={selected} industryId={industryId} industryLabel={industry.label} />}
          </div>
          <p className="m3-note">Illustrative examples. Agents are built around your workflow, data and approvals. Outcomes are potential, not guaranteed.</p>
        </div>

        <CustomAgentCTA />
        <GovernanceStrip />
        <AgentIndex />
      </div>
    </section>
  );
}

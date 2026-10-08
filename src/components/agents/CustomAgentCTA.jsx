"use client";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../home3/Home3";

const INPUTS = ["Your data", "Your tools", "Your rules", "Your team"];

export default function CustomAgentCTA() {
  return (
    <Reveal className="wf-custom">
      <div className="wf-custom-copy">
        <p className="wf-eyebrow-on-dark">Custom agents</p>
        <h3>Don&rsquo;t see your workflow?</h3>
        <p>Bring us the work. We&rsquo;ll build the AI that does it.</p>
        <a className="wf-btn" href="mailto:hello@madcompany.co?subject=Build%20my%20agent">Build My Agent <ArrowRight size={16} aria-hidden /></a>
      </div>
      <ol className="wf-formula" aria-label="Your data, tools, rules and team together make your MAD agent">
        {INPUTS.map((x, i) => (
          <li key={x}><span>{x}</span>{i < INPUTS.length - 1 && <b aria-hidden>+</b>}</li>
        ))}
        <li className="wf-formula-eq" aria-hidden>=</li>
        <li className="wf-formula-res"><small>Built for you</small>Your MAD agent</li>
      </ol>
    </Reveal>
  );
}

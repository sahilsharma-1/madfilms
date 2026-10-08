"use client";
import { ShieldCheck } from "lucide-react";
import { Reveal } from "../home3/Home3";

// Descriptions of how MAD builds, not certifications or standards claims.
const POINTS = [
  "Human approval for sensitive actions",
  "Permission-based integrations",
  "Audit-friendly workflows",
  "Company-specific knowledge",
  "Configurable business rules",
];

export default function GovernanceStrip() {
  return (
    <Reveal className="wf-gov">
      <div className="wf-gov-head"><ShieldCheck size={18} aria-hidden /><h3>Human controlled</h3></div>
      <ul>{POINTS.map((p) => <li key={p}>{p}</li>)}</ul>
    </Reveal>
  );
}

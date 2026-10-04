"use client";
import { Lines, Fade } from "./shared";

const HOW = [["You ask", "“Screen these applications.”"], ["AI understands", "Reads the role requirements."], ["AI works", "Reviews every candidate."], ["You decide", "Approve the shortlist."]];
const CTRL = ["You or a teammate asks", "AI agent does the routine work", "A person approves", "The action happens"];
const DOES = [["Observes", "Watches the data you point it at."], ["Analyzes", "Finds what matters."], ["Acts", "Takes the next step."], ["Escalates", "Hands exceptions to a person."]];

export default function AgentExtras() {
  return (
    <>
      <section id="how-agents-work" data-tone="light" aria-labelledby="hw-h" className="mx-sec mx-wash-v">
        <div className="mx-wrap">
          <Lines id="hw-h" lines={["How it works."]} className="mx-display mx-h2" />
          <ol className="mt-12 grid gap-4 md:grid-cols-4">
            {HOW.map(([t, d], i) => (<li key={t}><Fade delay={i * 0.1} className="h-full rounded-2xl border bg-white p-6"><p className="mx-small">0{i + 1}</p><h3 className="mt-6 text-[1.4rem] font-medium tracking-tight">{t}</h3><p className="mt-1" style={{ color: "var(--soft)" }}>{d}</p></Fade></li>))}
          </ol>
        </div>
      </section>
      <section id="people-in-control" data-tone="light" aria-labelledby="pc-h" className="mx-sec mx-white">
        <div className="mx-wrap">
          <Lines id="pc-h" lines={["People stay in control."]} className="mx-display mx-h2" />
          <p className="mx-lead mt-4">Agents handle the routine work and hand anything unusual to a person.</p>
          <ol className="mt-10 flex flex-col gap-2 md:flex-row md:items-stretch">
            {CTRL.map((c, i) => (<li key={c} className="flex flex-1 items-center gap-2 md:contents"><span className="flex-1 rounded-xl border px-4 py-4 font-medium" style={{ borderColor: i % 2 ? "var(--violet)" : "var(--line)", background: i % 2 ? "var(--tint-v)" : "var(--paper)" }}>{c}</span>{i < 3 && <span aria-hidden className="self-center px-1 text-center" style={{ color: "var(--mute)" }}>→</span>}</li>))}
          </ol>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {DOES.map(([k, d]) => (<li key={k} className="border-t pt-4" style={{ borderColor: "var(--line)" }}><p className="font-medium">{k}</p><p className="mx-small mt-1">{d}</p></li>))}
          </ul>
        </div>
      </section>
    </>
  );
}

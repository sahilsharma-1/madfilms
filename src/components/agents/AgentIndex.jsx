import { INDUSTRIES, resolveEntries } from "@/data/industries";

/** Plain-HTML index of every agent per industry, so the content is readable without JavaScript interactions. */
export default function AgentIndex() {
  const list = INDUSTRIES.filter((i) => i.id !== "all");
  return (
    <details className="wf-index">
      <summary>Browse every agent by industry</summary>
      <div className="wf-index-grid">
        {list.map((ind) => (
          <section key={ind.id} aria-label={ind.label}>
            <h4>{ind.label}</h4>
            <ul>{resolveEntries(ind.id).map((a) => <li key={a.key}><b>{a.name}</b> <span>{a.shortDescription}</span></li>)}</ul>
          </section>
        ))}
      </div>
    </details>
  );
}

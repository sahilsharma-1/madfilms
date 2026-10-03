import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../MAD COMPANY/Reveal";

// id="pricing" keeps the shared Navbar's existing "Pricing" and "Start a project"
// anchors working. There is intentionally no pricing on the homepage.
export default function Engagement() {
  return (
    <section id="pricing" aria-labelledby="eng-h" className="border-t border-white/10 px-6 py-20 lg:px-10">
      <Reveal className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <h2 id="eng-h" className="mh-h2 max-w-xl text-[clamp(1.75rem,3.2vw,2.75rem)]">Every system is engineered around the business.</h2>
        <a href="mailto:hello@madcompany.co?subject=Consultation%20request" className="inline-flex items-center gap-2 border border-white/25 px-7 py-4 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
          Request a Consultation <ArrowUpRight size={16} />
        </a>
      </Reveal>
    </section>
  );
}

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import Photo from "./Photo";
import { CTA_BG } from "@/lib/media";

export default function FinalCTA() {
  return (
    <section id="contact" data-tone="dark" aria-labelledby="cta-h" className="mh-dark mh-cta relative overflow-hidden py-32 sm:py-44 lg:py-56">
      <Photo m={CTA_BG} className="!absolute inset-0 h-full w-full opacity-60" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-black via-black/55 to-black" />
      <div aria-hidden className="mh-glow absolute left-1/2 top-[55%] h-[30rem] w-[min(64rem,130%)] -translate-x-1/2 -translate-y-1/2" />
      <Reveal className="mh-wrap relative text-left">
        <h2 id="cta-h" className="mh-h1 max-w-5xl" style={{ fontSize: "clamp(2.8rem, 7.6vw, 6.6rem)", lineHeight: 0.98, letterSpacing: "-0.05em" }}>What should we build next?</h2>
        <p className="mh-lead mt-7">Tell us the job. We&rsquo;ll build the system.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="mailto:hello@madcompany.co?subject=Build%20with%20MAD" className="mh-btn mh-btn-grad">Build with MAD <ArrowUpRight size={15} /></a>
          <Link href="#work" className="mh-btn mh-btn-line">Explore our work</Link>
        </div>
      </Reveal>
    </section>
  );
}

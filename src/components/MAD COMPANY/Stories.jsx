import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Photo from "./Photo";
import { STORIES } from "@/lib/media";
import { Reveal } from "./Reveal";

export default function Stories() {
  return (
    <section id="stories" data-tone="dark" aria-labelledby="stv-h" className="mh-dark mh-aurora-soft mh-sec overflow-hidden">
      <div className="mh-wrap">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <p className="mh-label mb-5">Where agents work</p>
            <h2 id="stv-h" className="mh-h2">Every industry. Every team.</h2>
            <p className="mh-lead mt-5">From the clinic to the checkout counter, agents take on the repetitive work so people can do the human part.</p>
          </div>
          <Link href="#contact" className="mh-btn mh-btn-line">Talk to us <ArrowUpRight size={15} /></Link>
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STORIES.map((s, n) => (
            <Reveal key={s.k} delay={n * 0.07}>
              <Link href="#contact" className="mh-zoom group relative block aspect-[3/4] overflow-hidden rounded-[1.75rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <Photo m={s} className="!absolute inset-0 h-full w-full" />
                <div aria-hidden className="mh-shade absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="mh-glass rounded-full px-3 py-1 text-xs font-medium">{s.k}</span>
                  <p className="mt-4 text-xl font-semibold leading-tight tracking-tight">{s.t}</p>
                  <ArrowUpRight size={18} className="mt-4 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

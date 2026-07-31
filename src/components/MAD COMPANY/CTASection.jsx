import { ArrowUpRight, PhoneCall } from "lucide-react";
import VideoBackground from "./VideoBackground";
import Magnetic from "./Magnetic";
import { Reveal } from "./Reveal";

// Optional: drop a short muted clip in /public/videos and list it here —
// it plays behind the gradient at low opacity, tinted by mix-blend-mode
// so it never fights the brand colors. Leave empty to keep the flat
// gradient exactly as before.
const CTA_VIDEOS = [
  // "/videos/cta-loop.mp4",
];

export default function CTASection() {
  return (
    <section id="contact" className="bg-[#060608] px-6 py-24 lg:px-10">
      <Reveal>
        <div className="mad-gradient-bg relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] px-8 py-16 text-center sm:px-16">
          {CTA_VIDEOS.length > 0 && (
            <VideoBackground
              sources={CTA_VIDEOS}
              overlay="bg-black/45 mix-blend-multiply"
              className="-z-10 opacity-70"
            />
          )}

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, white, transparent 35%), radial-gradient(circle at 80% 80%, white, transparent 35%)",
            }}
          />
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Got an idea? Let&apos;s make it MAD.
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-white/85">
            Tell us what you&apos;re building and we&apos;ll match you with the
            right studio — or bring the whole house on board.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Magnetic>
              <a
                href="mailto:hello@madcompany.co"
                className="inline-flex items-center gap-2 rounded-full bg-black px-7 py-3.5 font-body text-sm font-semibold text-white transition hover:bg-black/80"
              >
                Get an estimate
                <ArrowUpRight size={16} />
              </a>
            </Magnetic>
            <Magnetic strength={0.25}>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 font-body text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                <PhoneCall size={16} />
                Schedule a call
              </a>
            </Magnetic>
          </div>
          <p className="mt-6 font-body text-xs text-white/60">
            Response within one business day&nbsp;&nbsp;·&nbsp;&nbsp;NDA on request&nbsp;&nbsp;·&nbsp;&nbsp;No obligation
          </p>
        </div>
      </Reveal>
    </section>
  );
}

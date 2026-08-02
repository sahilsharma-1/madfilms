import { ArrowUpRight, PhoneCall } from "lucide-react";
import VideoBackground from "./VideoBackground";
import Magnetic from "./Magnetic";
import { Reveal } from "./Reveal";

// Free-license loop (Mixkit) — swap for your own brand reel later.
const CTA_VIDEOS = ["https://assets.mixkit.co/8llsbe99s3d3yrfx6mkw3dreeuh6"];
const CTA_POSTER = "https://assets.mixkit.co/olsekdc3r4m8dhle603agyuq8sxg";

export default function CTASection() {
  return (
    <section id="contact" className="bg-[#060608] px-6 py-24 lg:px-10">
      <Reveal>
        <div className="mad-gradient-bg relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] px-8 py-16 text-center sm:px-16">
          <VideoBackground
            sources={CTA_VIDEOS}
            poster={CTA_POSTER}
            overlay="bg-black/45 mix-blend-multiply"
            className="-z-10 opacity-70"
          />

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, white, transparent 35%), radial-gradient(circle at 80% 80%, white, transparent 35%)",
            }}
          />
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Ready to put your busywork on autopilot?
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-white/85">
            Start free, connect your first tool in minutes, and see your
            first workflow run today.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Magnetic>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full bg-black px-7 py-3.5 font-body text-sm font-semibold text-white transition hover:bg-black/80"
              >
                Start free trial
                <ArrowUpRight size={16} />
              </a>
            </Magnetic>
            <Magnetic strength={0.25}>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 font-body text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                <PhoneCall size={16} />
                Talk to sales
              </a>
            </Magnetic>
          </div>
          <p className="mt-6 font-body text-xs text-white/60">
            No credit card required&nbsp;&nbsp;·&nbsp;&nbsp;14-day free trial&nbsp;&nbsp;·&nbsp;&nbsp;Cancel anytime
          </p>
        </div>
      </Reveal>
    </section>
  );
}

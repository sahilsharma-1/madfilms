import { ArrowUpRight, PhoneCall } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="bg-[#060608] px-6 py-24 lg:px-10">
      <div
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] px-8 py-16 text-center sm:px-16"
        style={{ background: "linear-gradient(90deg, #0064fa, #00c2ff)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, white, transparent 35%), radial-gradient(circle at 80% 80%, white, transparent 35%)",
          }}
        />
        <h2 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Put your brand in AR/VR.
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-body text-white/85">
          We&apos;re a new studio, backed by MAD Films&apos; existing 3D and
          creative pipeline — which means senior creative direction on your
          first immersive project, not junior hands learning on your budget.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:hello@madcompany.co"
            className="inline-flex items-center gap-2 rounded-full bg-black px-7 py-3.5 font-body text-sm font-semibold text-white transition hover:bg-black/80"
          >
            Start a project
            <ArrowUpRight size={16} />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 font-body text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            <PhoneCall size={16} />
            Schedule a call
          </a>
        </div>
      </div>
    </section>
  );
}

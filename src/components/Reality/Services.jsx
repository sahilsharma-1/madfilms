import { Scan, RotateCw, Box, Glasses, Sparkles, Layers, ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    name: "WebAR Experiences",
    icon: "Scan",
    gradient: ["#0064fa", "#00c2ff"],
    description:
      "No app required — AR product try-ons and interactive experiences that run straight in a browser or camera.",
  },
  {
    name: "360° Virtual Tours",
    icon: "RotateCw",
    gradient: ["#00c2ff", "#7c3aff"],
    description:
      "Immersive walkthroughs for real estate, events, and showrooms — built on our film team's camera and editing pipeline.",
  },
  {
    name: "3D Product Configurators",
    icon: "Box",
    gradient: ["#7c3aff", "#0064fa"],
    description:
      "Let customers rotate, customize, and explore a product in 3D before they ever add it to cart.",
  },
  {
    name: "VR Walkthroughs",
    icon: "Glasses",
    gradient: ["#0064fa", "#00c2ff"],
    description:
      "Headset-ready spatial experiences for showrooms, training, and events — built to be explored, not just watched.",
  },
  {
    name: "AR Filters & Lenses",
    icon: "Sparkles",
    gradient: ["#00c2ff", "#7c3aff"],
    description:
      "Branded camera effects for Instagram, Snapchat, and TikTok that put your audience inside the campaign.",
  },
  {
    name: "Immersive Brand Activations",
    icon: "Layers",
    gradient: ["#7c3aff", "#0064fa"],
    description:
      "Interactive installations and pop-ups that blend physical space with digital layers for launches and events.",
  },
];

const ICONS = { Scan, RotateCw, Box, Glasses, Sparkles, Layers };

export default function Services() {
  return (
    <section id="services" className="bg-[#060608] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="font-mono-mad text-xs uppercase tracking-widest text-white/40">
            What we build
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Immersive work,{" "}
            <span className="mad-gradient-text">grounded in real craft.</span>
          </h2>
          <p className="mt-4 font-body text-white/60">
            Every service below draws on MAD Films&apos; existing 3D, CGI,
            and motion pipeline — we&apos;re not starting from zero, just
            pointing it somewhere new.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <div
                key={s.name}
                className="mad-gradient-border group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white/[0.03] p-6 transition"
              >
                <div>
                  <div className="mb-10 flex items-center justify-between">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{
                        background: `linear-gradient(135deg, ${s.gradient[0]}, ${s.gradient[1]})`,
                      }}
                    >
                      <Icon size={20} className="text-white" />
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-white/30 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                    />
                  </div>
                  <p className="font-display text-xl font-bold text-white">{s.name}</p>
                </div>
                <p className="mt-8 font-body text-sm leading-snug text-white/50">
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

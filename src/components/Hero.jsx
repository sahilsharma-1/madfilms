"use client";

import HeroSlider from "./HeroSlider";

export default function Hero() {
  const cards = [
    "Performance video",
    "Commercial ads",
    "Video specialists",
    "Creative concepts",
    "Social media videos",
  ];

  return (
    <section className="relative h-screen overflow-hidden">
      <HeroSlider />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45 z-10" />

      {/* Hero Content */}
      <div className="absolute inset-0 z-20">
        <div className="mx-auto flex h-full max-w-7xl items-center px-12">
          <div className="max-w-3xl">
            <p className="mb-8 text-sm uppercase tracking-[6px] text-white/90">
              Video Production Services
            </p>

            <h1 className="text-[58px] leading-[1.08] font-light text-white">
              On-brand{" "}
              <span className="font-serif italic font-normal">
                video storytelling
              </span>{" "}
              that moves as fast as your campaign calendar
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-8 text-white/85">
              Get video production from and for world-class creative teams,
              powered by AI. Over 1000 videos delivered, on brief and always on
              time.
            </p>

            <button className="mt-10 rounded-full bg-lime-300 px-10 py-4 text-lg font-semibold text-black transition hover:scale-105">
              Book a demo
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Service Cards
      <div className="absolute bottom-6 left-0 z-30 w-full overflow-hidden">
        <div className="mx-auto flex max-w-7xl gap-4 px-6">
          {cards.map((item) => (
            <div
              key={item}
              className="flex h-20 min-w-[220px] items-center rounded-2xl bg-[#EEF2E5] px-6 shadow-lg"
            >
              <p className="text-base font-medium text-neutral-900">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
}
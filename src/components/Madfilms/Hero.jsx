"use client";

import HeroSlider from "./HeroSlider";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <HeroSlider />

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/45" />

      {/* Content */}
      <div className="absolute inset-0 z-20">
        <div className="mx-auto flex h-full max-w-7xl items-end md:items-center px-6 sm:px-8 lg:px-12 pb-12 md:pb-0">
          <div className="max-w-3xl">

            <p className="mb-4 md:mb-8 text-[11px] md:text-sm uppercase tracking-[4px] md:tracking-[6px] text-white/90">
              VIDEO PRODUCTION SERVICES
            </p>

            <h1 className="font-light leading-[1.08] text-white
               text-[40px]
               sm:text-[46px]
               md:text-[52px]
               lg:text-[58px]">
              On-brand{" "}
              <span className="font-serif italic font-normal">
                video storytelling
              </span>
              <br className="hidden md:block" />
              that moves as fast as
              <br className="hidden md:block" />
              your campaign calendar
            </h1>

            <p className="mt-6 max-w-xl text-base md:text-xl leading-7 md:leading-8 text-white/85">
              Get video production from and for world-class creative teams,
              powered by AI. Over 1000 videos delivered, on brief and always on
              time.
            </p>

            <button className="mt-8 md:mt-10 w-full sm:w-auto rounded-full bg-lime-300 px-10 py-4 text-lg font-semibold text-black transition hover:scale-105">
              Book a demo
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
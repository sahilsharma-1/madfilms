"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Smartphone, Compass, Sparkles, Box, Glasses } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CATEGORIES = [
  {
    icon: "Smartphone",
    title: "Retail Try-On",
    description: "See a product on you or in your space before you buy — right from a phone camera.",
    gradient: ["#0064fa", "#00c2ff"],
  },
  {
    icon: "Compass",
    title: "Real Estate Tours",
    description: "Walk a property from anywhere, at any hour, without booking a single showing.",
    gradient: ["#00c2ff", "#7c3aff"],
  },
  {
    icon: "Sparkles",
    title: "Event Activations",
    description: "AR filters and installations that turn attendees into your best marketing channel.",
    gradient: ["#7c3aff", "#f726a8"],
  },
  {
    icon: "Box",
    title: "Product Launches",
    description: "A 3D configurator that lets customers explore every color and detail pre-launch.",
    gradient: ["#f726a8", "#0064fa"],
  },
  {
    icon: "Glasses",
    title: "Training Simulations",
    description: "Practice a real scenario in VR before doing it for real — safer and cheaper to repeat.",
    gradient: ["#0064fa", "#7c3aff"],
  },
];

const ICONS = { Smartphone, Compass, Sparkles, Box, Glasses };

export default function Showcase() {
  return (
    <section className="bg-[#060608] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-mono-mad text-xs uppercase tracking-widest text-white/40">
              Where this fits
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              What we can build{" "}
              <span className="mad-gradient-text">for you.</span>
            </h2>
            <p className="mt-4 font-body text-white/60">
              As a new studio, our portfolio is still growing — here&apos;s
              the kind of experience each category unlocks.
            </p>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          loop
          spaceBetween={20}
          slidesPerView={1.05}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="mad-reality-swiper !pb-14"
        >
          {CATEGORIES.map((c) => {
            const Icon = ICONS[c.icon];
            return (
              <SwiperSlide key={c.title}>
                <div className="flex h-72 flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{
                      background: `linear-gradient(135deg, ${c.gradient[0]}, ${c.gradient[1]})`,
                    }}
                  >
                    <Icon size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="font-display text-xl font-bold text-white">{c.title}</p>
                    <p className="mt-2 font-body text-sm leading-relaxed text-white/50">
                      {c.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

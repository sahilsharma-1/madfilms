"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Home, ShoppingCart, Briefcase, Camera, Stethoscope } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CATEGORIES = [
  {
    icon: "Home",
    title: "Real Estate & Local Services",
    description: "Missed-call text-back, instant lead follow-up, and appointment reminders that fill the calendar without a receptionist.",
    gradient: ["#0064fa", "#00c2ff"],
  },
  {
    icon: "ShoppingCart",
    title: "E-commerce",
    description: "Abandoned-cart recovery, review requests, and restock alerts running on autopilot around every order.",
    gradient: ["#00c2ff", "#7c3aff"],
  },
  {
    icon: "Briefcase",
    title: "B2B SaaS & Agencies",
    description: "Demo bookings, onboarding sequences, and churn-risk alerts synced straight into your CRM.",
    gradient: ["#7c3aff", "#f726a8"],
  },
  {
    icon: "Camera",
    title: "Coaches & Creators",
    description: "Daily AI avatar content and DM auto-replies that capture leads while you're actually filming.",
    gradient: ["#f726a8", "#0064fa"],
  },
  {
    icon: "Stethoscope",
    title: "Healthcare & Professional Services",
    description: "Intake forms, appointment confirmations, and follow-ups handled without adding front-desk headcount.",
    gradient: ["#0064fa", "#7c3aff"],
  },
];

const ICONS = { Home, ShoppingCart, Briefcase, Camera, Stethoscope };

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
              Built for how{" "}
              <span className="mad-gradient-text">your business actually runs.</span>
            </h2>
            <p className="mt-4 font-body text-white/60">
              The tools are the same across industries — what changes is
              which workflow actually moves the needle for you.
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
          className="mad-automate-swiper !pb-14"
        >
          {CATEGORIES.map((c) => {
            const Icon = ICONS[c.icon];
            return (
              <SwiperSlide key={c.title}>
                <div className="flex h-72 flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ background: `linear-gradient(135deg, ${c.gradient[0]}, ${c.gradient[1]})` }}
                  >
                    <Icon size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="font-display text-xl font-bold text-white">{c.title}</p>
                    <p className="mt-2 font-body text-sm leading-relaxed text-white/50">{c.description}</p>
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

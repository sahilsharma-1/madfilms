"use client";
import { motion } from "framer-motion";

const TEAM = [
  { name: "Sahil Sharma", role: "cinematics", img: "/images/heromobile.jpg" },
  { name: "Rupesh Rao", role: "motion design", img: "/images/hero2.jpg" },
  { name: "Yashi", role: "storywriter", img: "/images/hero3.jpg" },
  { name: "Shruti", role: "Creator", img: "/images/hero.jpg" },
];

export default function Team() {
  return (
    <section className="bg-black px-6 py-24 md:px-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 uppercase tracking-[5px] text-white/70 text-sm">
          Our team
        </p>
        <h2 className="text-3xl font-light text-white md:text-5xl">
          The people behind the{" "}
          <span className="italic text-white/60">frame</span>
        </h2>
      </div>

      <div className="mx-auto mt-16 flex max-w-6xl gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {TEAM.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="w-56 flex-shrink-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={m.img}
              alt={m.name}
              className="h-72 w-full rounded-2xl object-cover"
            />
            <h3 className="mt-4 text-base font-medium text-white">
              {m.name}
            </h3>
            <p className="text-sm text-lime-300/80">{m.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

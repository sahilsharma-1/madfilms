"use client";
import { motion } from "framer-motion";

const BENEFITS = [
  {
    title: "Speed without shortcuts",
    copy:
      "A tighter pipeline means faster turnarounds — without touching the craft that makes the final cut worth watching.",
  },
  {
    title: "One team, every format",
    copy:
      "Broadcast spot, social cutdown, or full-length feature — the same crew adapts across every deliverable you need.",
  },
  {
    title: "Original, every time",
    copy:
      "No stock footage, no recycled setups. Every frame is shot and built specifically for your story.",
  },
  {
    title: "Room to experiment",
    copy:
      "New looks, new formats, new storytelling techniques — tested and iterated without blowing the schedule.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-black px-6 py-24 md:px-16">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-3 uppercase tracking-[5px] text-white/70 text-sm">
            Why madfilm
          </p>
          <h2 className="text-3xl font-light text-white md:text-5xl">
            Built to move{" "}
            <span className="italic text-white/60">faster</span> than
            the brief
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-white/10">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-6 py-6"
            >
              <span className="text-sm text-white/30">
                0{i + 1}
              </span>
              <div>
                <h3 className="text-lg font-medium text-white">
                  {b.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-white/55">
                  {b.copy}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";

const CAPABILITIES = [
  { label: "Cinematic Grading", icon: "🎞️" },
  { label: "Motion VFX", icon: "✨" },
  { label: "Sound Design", icon: "🎧" },
  { label: "AI Storyboarding", icon: "🖊️" },
  { label: "Rapid Previz", icon: "⚡" },
  { label: "Character Work", icon: "🎭" },
  { label: "Voiceover Sync", icon: "🎙️" },
  { label: "Scene Extension", icon: "🌆" },
];

export default function CapabilitiesStrip() {
  const loop = [...CAPABILITIES, ...CAPABILITIES];

  return (
    <section className="relative w-full overflow-hidden border-y border-white/10 bg-black py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />

      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {loop.map((c, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/80"
          >
            <span className="text-base">{c.icon}</span>
            <span className="font-medium tracking-wide">{c.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

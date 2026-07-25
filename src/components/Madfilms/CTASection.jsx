"use client";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden px-6 py-32 md:px-16">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-3xl text-center"
      >
        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-white/60">
          madfilm
        </p>
        <h2 className="text-3xl font-light text-white md:text-5xl">
          Your story&apos;s creative team,{" "}
          <span className="italic text-white/70">on call</span>
        </h2>
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="mt-10 rounded-full bg-lime-300 px-10 py-5 text-black font-semibold"
        >
          Book a call
        </motion.button>
      </motion.div>
    </section>
  );
}

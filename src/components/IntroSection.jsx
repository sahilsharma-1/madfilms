"use client";

import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section className="bg-[#F4F1EA] px-8 py-28 md:px-16">
      <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
        {/* Left Column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm uppercase tracking-[5px] text-neutral-900">
              A NEW ERA OF BUSINESSES
            </p>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-6 h-px w-full origin-left bg-neutral-900/30"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-10 text-5xl leading-[1.1] text-neutral-900 md:text-6xl"
          >
            Your shortcut to{" "}
            <span className="font-serif italic">
              cinematic work
            </span>{" "}
            at campaign speed
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 max-w-xl text-xl leading-9 text-neutral-700"
          >
            AI-assisted production is a smarter way to keep pace with the
            marketing calendar, without cutting corners on craft.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-12 rounded-full bg-black px-8 py-4 text-white font-medium"
          >
            Book a Call
          </motion.button>
        </div>

        {/* Right Column */}
        <motion.div
  initial={{ opacity: 0, scale: 0.96 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="relative h-[430px] w-full overflow-hidden rounded-[28px] shadow-2xl bg-black"
>
  <iframe
  className="absolute inset-0 h-full w-full"
  src="https://www.youtube.com/embed/OPvvoq3CX8Q?autoplay=1&mute=1&loop=1&playlist=OPvvoq3CX8Q&controls=0&disablekb=1&fs=0&iv_load_policy=3&modestbranding=1&rel=0&playsinline=1"
  title="MAD Films Showreel"
  allow="autoplay; encrypted-media; picture-in-picture"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen={false}
/>
</motion.div>
      </div>
    </section>
  );
}
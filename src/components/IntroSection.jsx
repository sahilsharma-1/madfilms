"use client";

import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section className="bg-[#F4F1EA] px-5 py-16 sm:px-8 sm:py-20 md:px-16 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-20">
        {/* Left Column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs uppercase tracking-[3px] text-neutral-900 sm:text-sm sm:tracking-[5px]">
              A New Era of Businesses
            </p>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-5 h-px w-full origin-left bg-neutral-900/30 sm:mt-6"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-3xl leading-[1.15] text-neutral-900 sm:mt-8 sm:text-4xl md:mt-10 md:text-5xl lg:text-6xl lg:leading-[1.1]"
          >
            Your shortcut to{" "}
            <span className="font-serif italic">cinematic work</span> at
            campaign speed
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-7 text-neutral-700 sm:mt-8 sm:text-lg md:mt-10 md:text-xl md:leading-9"
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
            className="mt-8 w-full rounded-full bg-black px-8 py-3.5 font-medium text-white sm:w-auto sm:py-4 md:mt-12"
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
  className="relative h-64 w-full overflow-hidden rounded-2xl bg-black shadow-2xl sm:h-80 md:h-96 lg:h-[430px] lg:rounded-[28px]"
>
  <iframe
    className="absolute inset-0 h-full w-full"
    src="https://1drv.ms/v/c/9D204D9914DB706E/IQQszjHWTw5tSpAiJtm918jfASEGmoYh_Cl3aLhkr11kPkg"
    title="MADFILMS Showreel"
    frameBorder="0"
    scrolling="no"
    allow="autoplay; fullscreen"
    allowFullScreen
  />
</motion.div>
      </div>
    </section>
  );
}
"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const FAQS = [
  {
    q: "Do you handle projects end-to-end, or just parts of production?",
    a: "End-to-end by default — concept, shoot, edit, grade, delivery. We can also plug into an existing pipeline for a single stage if that's all you need.",
  },
  {
    q: "How fast can you turn around a project?",
    a: "Most short-form work ships in 1–2 weeks from final brief. Longer productions get a schedule up front so there are no surprises.",
  },
  {
    q: "Can you match our existing brand or franchise look?",
    a: "Yes. We build a reference deck from your existing material before the shoot so grading and framing stay consistent with what's already out there.",
  },
  {
    q: "Do you work with remote or distributed teams?",
    a: "Regularly. Reviews happen over shared cuts and timestamped notes, so approvals don't depend on everyone being in the same room.",
  },
];

function FAQItem({ item, isOpen, onClick }) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <span className="text-base font-medium text-white md:text-lg">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className={`ml-4 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border text-sm ${
            isOpen
              ? "border-lime-300 text-lime-300"
              : "border-white/20 text-white/70"
          }`}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm leading-relaxed text-white/55 md:text-base">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-black px-6 py-24 md:px-16">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 uppercase tracking-[5px] text-white/70 text-sm">
          FAQs
        </p>
        <h2 className="mb-10 text-3xl font-light text-white md:text-5xl">
          Frequently asked{" "}
          <span className="italic text-white/60">questions</span>
        </h2>

        {FAQS.map((item, i) => (
          <FAQItem
            key={item.q}
            item={item}
            isOpen={open === i}
            onClick={() => setOpen(open === i ? -1 : i)}
          />
        ))}
      </div>
    </section>
  );
}

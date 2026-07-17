"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// Pool of real demo reels pulled from a working video-production channel
// (youtube.com/@zeliosagency). Swap these for your own reels whenever you
// have them — cards are randomly assigned one each page load.
const VIDEO_POOL = [
  "n2hFQGoHJZY",
  "wMLfK9ZWn_A",
  "J2ZaHBNorls",
  "NPqJjlVNuV8",
  "dTolKTTrbh4",
  "zSatDgjE-wk",
  "oIHsfOKr-5o",
  "0r5473B9A9s",
  "fYeY3-6StHo",
];

const COL1 = [
  {
    title: "Full-service video production",
    copy: "From script to final export, every stage of the shoot handled by one crew.",
    height: "h-56",
  },
  {
    title: "Motion & post-production",
    copy: "Grading, compositing, and finishing that gives every deliverable a consistent look.",
    height: "h-52",
  },
  {
    title: "Localization & versioning",
    copy: "One shoot, cut and voiced for every market you launch in.",
    height: "h-[26rem]",
  },
];

const COL2 = [
  {
    title: "Character & concept work",
    copy: "Design and animate characters that carry a brand's storytelling across campaigns.",
    height: "h-[34rem]",
  },
  {
    title: "Talent & voice direction",
    copy: "On-camera performance and voiceover direction tuned to brand tone.",
    height: "h-[26rem]",
  },
];

const COL3 = [
  {
    title: "Product & commercial visuals",
    copy: "New shoot every season? Not anymore — visuals built for reuse across channels.",
    height: "h-[34rem]",
  },
  {
    title: "Production at scale",
    copy: "Adapt one shoot into dozens of cuts to keep pace with the campaign calendar.",
    height: "h-52",
  },
  {
    title: "Brand showreels",
    copy: "A ready-to-use reel that's on-brand every time, no scramble for last-minute content.",
    height: "h-52",
  },
];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Assigns a random, non-repeating videoId from the pool to each card slot.
// Runs client-side only (useEffect) so server and first client render match,
// avoiding a hydration mismatch — the shuffled videos pop in a moment after load.
function useRandomizedColumns() {
  const base = [...COL1, ...COL2, ...COL3];
  const [columns, setColumns] = useState({
    col1: COL1.map((c) => ({ ...c, videoId: VIDEO_POOL[0] })),
    col2: COL2.map((c) => ({ ...c, videoId: VIDEO_POOL[0] })),
    col3: COL3.map((c) => ({ ...c, videoId: VIDEO_POOL[0] })),
  });

  useEffect(() => {
    const shuffled = shuffle(VIDEO_POOL).slice(0, base.length);
    let cursor = 0;
    const withVideo = (list) =>
      list.map((item) => ({ ...item, videoId: shuffled[cursor++] }));

    setColumns({
      col1: withVideo(COL1),
      col2: withVideo(COL2),
      col3: withVideo(COL3),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return columns;
}

function VideoCard({ item, onPlay }) {
  return (
    <motion.button
      onClick={() => onPlay(item.videoId)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className={`group relative w-full overflow-hidden rounded-2xl text-left ${item.height}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      <div className="absolute inset-x-0 top-0 p-5">
        <h3 className="text-base font-medium text-white">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/70">
          {item.copy}
        </p>
      </div>

      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ opacity: 1, scale: 1 }}
        className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-lime-300 text-black">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
            <path d="M4 2.5v15l14-7.5-14-7.5z" />
          </svg>
        </span>
      </motion.span>
    </motion.button>
  );
}

export default function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState(null);
  const { col1, col2, col3 } = useRandomizedColumns();

  return (
    <section className="bg-[#F4F1EA] px-8 py-28 md:px-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[5px] text-neutral-900">
          Let&apos;s talk production
        </p>
        <h2 className="mt-6 text-4xl text-neutral-900 md:text-5xl">
          <span className="font-serif italic">Full-service</span> video
          production
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-600">
          From concept to final cut, every discipline your production
          needs is handled by one team — not stitched together across
          vendors.
        </p>
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 rounded-full bg-neutral-900 px-8 py-4 font-medium text-white"
        >
          Book a call
        </motion.button>
      </div>

      <div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3">
        <div className="flex flex-col gap-5">
          {col1.map((item, i) => (
            <VideoCard key={item.title + i} item={item} onPlay={setActiveVideo} />
          ))}
        </div>
        <div className="flex flex-col gap-5">
          {col2.map((item, i) => (
            <VideoCard key={item.title + i} item={item} onPlay={setActiveVideo} />
          ))}
        </div>
        <div className="flex flex-col gap-5">
          {col3.map((item, i) => (
            <VideoCard key={item.title + i} item={item} onPlay={setActiveVideo} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="aspect-video w-full max-w-3xl overflow-hidden rounded-2xl"
            >
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="Video reel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white"
              aria-label="Close video"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


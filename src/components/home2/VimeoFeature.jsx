"use client";

import { useEffect, useState } from "react";
import { Play, X } from "lucide-react";

export default function VimeoFeature() {
  const [videos, setVideos] = useState([]);
  const [active, setActive] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/videos", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : []))
      .then((data) => {
        if (!cancelled && Array.isArray(data)) setVideos(data.slice(0, 3));
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, []);

  if (!videos.length) return null;

  return (
    <>
      <div className="mt-8 grid gap-3 md:grid-cols-12 md:gap-4">
        {videos.map((video, i) => (
          <button
            key={video.id}
            type="button"
            onClick={() => setActive(video)}
            className={`group relative overflow-hidden rounded-[10px] text-left ${i === 0 ? "md:col-span-7 md:row-span-2" : "md:col-span-5"}`}
          >
            <div className={i === 0 ? "aspect-video md:h-full md:aspect-auto" : "aspect-video"}>
              <img src={video.thumb} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[.7rem] font-medium text-white backdrop-blur">
                <Play size={11} fill="currentColor" /> Watch reel
              </span>
              <div className="absolute inset-x-4 bottom-4">
                <p className="line-clamp-2 text-base font-semibold text-white md:text-lg">{video.title}</p>
                <p className="mt-1 text-xs text-white/65">Vimeo · MAD Films</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4 md:p-8" onClick={() => setActive(null)}>
          <div className="relative aspect-video w-full max-w-6xl overflow-hidden rounded-xl bg-black" onClick={(e) => e.stopPropagation()}>
            <iframe
              className="h-full w-full"
              src={`https://player.vimeo.com/video/${active.id}?autoplay=1&title=0&byline=0&portrait=0`}
              title={active.title}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
            <button type="button" onClick={() => setActive(null)} aria-label="Close video" className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white backdrop-blur">
              <X size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

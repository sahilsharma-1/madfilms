"use client";

import { useEffect, useState } from "react";

/**
 * Drop-in animated background for any `relative` section. Point it
 * at real files whenever you have them — until then it renders a
 * slow animated gradient so the layout never shows an empty box.
 *
 *   <div className="relative overflow-hidden">
 *     <VideoBackground
 *       sources={["/videos/hero-1.mp4", "/videos/hero-2.mp4"]}
 *       poster="/videos/hero-poster.jpg"
 *     />
 *     ...your content, given position:relative + a z-index above this...
 *   </div>
 *
 * Multiple `sources` crossfade on a timer, like a mini carousel.
 */
export default function VideoBackground({
  sources = ["/videos/moon-walk.mp4"], 
  poster, // e.g. "/videos/reel-poster.jpg" — shown while video loads, or as a static fallback
  overlay = "bg-black/60",
  cycle = 7000,
  grain = false,
  className = "",
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (sources.length < 2) return;
    const id = setInterval(() => setActive((p) => (p + 1) % sources.length), cycle);
    return () => clearInterval(id);
  }, [sources.length, cycle]);

  const hasVideo = sources.length > 0;

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {hasVideo ? (
        sources.map((src, i) => (
          <video
            key={src}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={poster}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              active === i ? "opacity-100" : "opacity-0"
            }`}
          >
            <source src={src} type="video/mp4" />
          </video>
        ))
      ) : poster ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={poster} alt="" className="h-full w-full object-cover" />
      ) : (
        // Nothing supplied yet — animated gradient placeholder so the
        // section still feels alive. Pass `sources` or `poster` when ready.
        <div className="mad-placeholder-gradient h-full w-full" />
      )}

      {grain && <div className="mad-grain absolute inset-0" />}
      <div className={`absolute inset-0 ${overlay}`} />
    </div>
  );
}

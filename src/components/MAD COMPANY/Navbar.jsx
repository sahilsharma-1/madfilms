// import logo from "public/images/logo.png"

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  Clapperboard,
  Code2,
  BrainCircuit,
  Glasses,
  TrendingUp,
  Cloud,
  BarChart3,
  FlaskConical,
} from "lucide-react";
import { studios } from "./studios";
import GlassSurface from "./GlassSurface";

const ICONS = {
  Clapperboard,
  Code2,
  BrainCircuit,
  Glasses,
  TrendingUp,
  Cloud,
  BarChart3,
  FlaskConical,
};

const NAV_LINKS = [
  { label: "Services", href: "#capabilities" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Team", href: "#team" },
];

const EASE = [0.21, 0.47, 0.32, 0.98];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progressX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Shared glass "recipe" — slightly more opaque/frosted once scrolled
  // or when the mega-menu is open, mirroring the old bg-black/55 vs
  // bg-white/5 states, but rendered through the SVG refraction filter.
  const active = scrolled || megaOpen;
  const glassProps = {
    borderRadius: 28,
    brightness: active ? 35 : 55,
    opacity: active ? 0.85 : 0.55,
    blur: active ? 14 : 9,
    backgroundOpacity: active ? 0.35 : 0.08,
    saturation: 1.4,
    distortionScale: -140,
    displace: 0.5,
    className: "navbar-glass",
    contentClassName: "navbar-glass-content",
  };

  return (
    <>
      {/* Scroll progress */}
      <motion.div
        aria-hidden
        className="mad-gradient-bg fixed inset-x-0 top-0 z-[60] h-[2px] origin-left"
        style={{ scaleX: progressX }}
      />

      <header
        className="fixed inset-x-0 top-6 z-50 flex flex-col items-center gap-3"
        onMouseLeave={() => setMegaOpen(false)}
      >
        {/* Main pill + mega-menu, sharing one continuous glass surface */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className={`w-[calc(100%-32px)] max-w-7xl overflow-hidden rounded-[28px] border transition-all duration-500 ${
            active
              ? "border-white/15 shadow-[0_15px_50px_rgba(0,0,0,.45)]"
              : "border-white/10"
          }`}
        >
          <GlassSurface width="100%" height="auto" {...glassProps}>
            <div className="flex items-center justify-between px-7 py-4 lg:px-8">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 font-display">
                <span className="text-2xl font-extrabold tracking-tight text-white">
                  MAD
                </span>
                <span className="rounded-full mad-gradient-bg px-2.5 py-0.5 text-xs font-semibold text-white font-body">
                  company
                </span>
              </Link>

              {/* Desktop nav */}
              <nav className="hidden items-center gap-1 lg:flex">
                <button
                  onMouseEnter={() => setMegaOpen(true)}
                  onClick={() => setMegaOpen((v) => !v)}
                  className="flex items-center gap-1 rounded-full px-4 py-2 font-body text-sm text-white/75 transition-all duration-300 hover:bg-white/10 hover:text-white"
                >
                  Our Companies
                  <ChevronDown
                    size={15}
                    className={`transition-transform ${megaOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-full px-4 py-2 font-body text-sm text-white/75 transition-all duration-300 hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="hidden lg:block">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 font-body text-sm font-semibold text-white transition-all duration-300 hover:scale-105 shadow-[0_0_35px_rgba(0,194,255,.35)]"
                  style={{
                    background: "linear-gradient(90deg,#0064FA,#00C2FF)",
                  }}
                >
                  Start a project
                  <ArrowUpRight size={15} />
                </a>
              </div>

              {/* Mobile toggle */}
              <button
                className="text-white lg:hidden"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>

            {/* Mega menu */}
            <div
              className={`hidden overflow-hidden border-t border-white/10 transition-[grid-template-rows] duration-300 lg:grid ${
                megaOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
              style={{ display: "grid" }}
            >
              <div className="min-h-0">
                <div className="mx-auto grid max-w-7xl grid-cols-[220px_1fr] gap-8 px-10 py-10">
                  <div className="flex flex-col gap-1 font-body">
                    <p className="mb-2 font-mono-mad text-xs uppercase tracking-widest text-white/40">
                      Browse
                    </p>
                    <a
                      href="#companies"
                      className="mad-gradient-bg rounded-xl px-4 py-3 text-sm font-semibold text-white"
                    >
                      All 8 companies ↗
                    </a>
                    <a
                      href="#capabilities"
                      className="rounded-xl px-4 py-3 text-sm text-white/70 hover:bg-white/5 hover:text-white"
                    >
                      By discipline ↘
                    </a>
                    <a
                      href="#clients"
                      className="rounded-xl px-4 py-3 text-sm text-white/70 hover:bg-white/5 hover:text-white"
                    >
                      By industry ↘
                    </a>
                    <a
                      href="#careers"
                      className="rounded-xl px-4 py-3 text-sm text-white/70 hover:bg-white/5 hover:text-white"
                    >
                      Careers at MAD ↘
                    </a>
                  </div>

                  <div className="grid grid-cols-4 gap-4">
                    {studios.map((s) => {
                      const Icon = ICONS[s.icon];
                      return (
                        <a
                          key={s.slug}
                          href={s.href}
                          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-white/20"
                        >
                          <div
                            className="mb-8 flex h-9 w-9 items-center justify-center rounded-lg"
                            style={{
                              background: `linear-gradient(135deg, ${s.gradient[0]}, ${s.gradient[1]})`,
                            }}
                          >
                            <Icon size={18} className="text-white" />
                          </div>
                          <ArrowUpRight
                            size={16}
                            className="absolute right-4 top-4 text-white/30 transition group-hover:text-white/80"
                          />
                          <p className="font-display text-sm font-bold text-white">
                            {s.name}
                          </p>
                          <p className="mt-1 font-body text-xs leading-snug text-white/50">
                            {s.tagline}
                          </p>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </GlassSurface>
        </motion.div>

        {/* Mobile menu — its own glass surface, same recipe */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="w-[calc(100%-32px)] max-w-7xl overflow-hidden rounded-[28px] border border-white/15 shadow-[0_15px_50px_rgba(0,0,0,.45)] lg:hidden"
            >
              <GlassSurface width="100%" height="auto" {...glassProps}>
                <div className="max-h-[80vh] overflow-y-auto px-6 py-6 font-body">
                  <p className="mb-3 font-mono-mad text-xs uppercase tracking-widest text-white/40">
                    Our companies
                  </p>
                  <div className="mb-6 grid grid-cols-2 gap-3">
                    {studios.map((s) => (
                      <a
                        key={s.slug}
                        href={s.href}
                        className="rounded-xl border border-white/10 bg-white/[0.03] p-3"
                      >
                        <p className="text-sm font-semibold text-white">{s.name}</p>
                        <p className="mt-0.5 text-xs text-white/50">{s.category}</p>
                      </a>
                    ))}
                  </div>
                  <div className="flex flex-col gap-1 border-t border-white/10 pt-4">
                    {NAV_LINKS.map((link) => (
                      <a key={link.label} href={link.href} className="py-2 text-sm text-white/80">
                        {link.label}
                      </a>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    className="mt-4 flex items-center justify-center gap-1.5 rounded-full py-3 text-sm font-semibold text-white shadow-[0_0_35px_rgba(0,194,255,.35)]"
                    style={{
                      background: "linear-gradient(90deg,#0064FA,#00C2FF)",
                    }}
                  >
                    Start a project
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </GlassSurface>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

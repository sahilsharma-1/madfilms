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
  Bot,
  Globe,
  Megaphone,
  TrendingUp,
  Glasses,
} from "lucide-react";

// Each studio: `image` is a live placehold.co URL for now (a real service,
// actually loads) so the cards show something today. Swap each one for a
// real photo whenever you have it — same convention as before: drop the
// file in /public/images/studios/... and point `image` at "/images/studios/xxx.jpg".
// If a file 404s, onError hides the <img> and the gradient behind it shows
// instead, so a card never breaks either way.
const STUDIOS = [
  {
    name: "MAD FILMS",
    tagline: "Film, photo & content production",
    icon: Clapperboard,
href: "/studio/madfilms",
    image: "/images/MADFILM NAVBAR.png",
  },
  {
    name: "MAD AI",
    tagline: "AI agents & automation",
    icon: Bot,
href: "/studio/automate",
    image: "https://placehold.co/800x600/7C3AFF/FFFFFF?font=montserrat&text=MAD+AI",
  },
  {
    name: "MAD WEB",
    tagline: "Websites, apps & SaaS platforms",
    icon: Globe,
href: "/studios/web",
    image: "https://placehold.co/800x600/0064FA/FFFFFF?font=montserrat&text=MAD+WEB",
  },
  {
    name: "MAD MARKETING",
    tagline: "Paid media, Google Ads & brand",
    icon: Megaphone,
    href: "/studios/marketing",
    image: "https://placehold.co/800x600/00C2FF/FFFFFF?font=montserrat&text=MAD+MARKETING",
  },
  {
    name: "MAD GEN",
    tagline: "SEO, analytics & lead generation",
    icon: TrendingUp,
href: "/studios/automate",
    image: "https://placehold.co/800x600/0064FA/FFFFFF?font=montserrat&text=MAD+GEN",
  },
  {
    name: "MAD REALITY",
    tagline: "AR/VR & immersive experiences",
    icon: Glasses,
href: "/studios/reality",

    image: "https://placehold.co/800x600/00C2FF/FFFFFF?font=montserrat&text=MAD+REALITY",
  },
];

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

const EASE = [0.21, 0.47, 0.32, 0.98];

// Neutral frosted-glass panel — no brand color in the fill itself, just a
// dark, blurred, translucent sheet (this is what Apple's nav.apple.com bar
// actually is: rgba(black) + backdrop-filter blur, nothing more). A hairline
// inset highlight along the top edge is what sells the "glass" read.
const PANEL_IDLE =
  "border-white/10 bg-black/25 backdrop-blur-xl backdrop-saturate-150 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.10),0_10px_40px_-15px_rgba(0,0,0,0.4)]";
const PANEL_ACTIVE =
  "border-white/15 bg-black/55 backdrop-blur-2xl backdrop-saturate-150 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),0_20px_60px_-15px_rgba(0,0,0,0.6)]";

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

  const active = scrolled || megaOpen;

  return (
    <>
      <motion.div
        aria-hidden
        className="mad-gradient-bg fixed inset-x-0 top-0 z-[60] h-[2px] origin-left"
        style={{ scaleX: progressX }}
      />

      {/* No onMouseLeave here — the header spans the full viewport width
          (inset-x-0), so listening here meant you had to move the mouse all
          the way below a tall menu before it counted as "leaving". The
          listener now lives on the visible pill below instead. */}
      <header className="fixed inset-x-0 top-6 z-50 flex flex-col items-center gap-3">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          onMouseLeave={() => setMegaOpen(false)}
          className={`w-[calc(100%-32px)] max-w-7xl overflow-hidden rounded-[28px] border transition-all duration-500 ${
            active ? PANEL_ACTIVE : PANEL_IDLE
          }`}
        >
          <div className="flex items-center justify-between px-7 py-4 lg:px-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 font-display">
              <span className="text-2xl font-extrabold tracking-tight text-white">MAD</span>
              <span className="rounded-full mad-gradient-bg px-2.5 py-0.5 text-xs font-semibold text-white font-body">
                os
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 lg:flex">
              <button
                onMouseEnter={() => setMegaOpen(true)}
                onClick={() => setMegaOpen((v) => !v)}
                className="flex items-center gap-1 rounded-full px-4 py-2 font-body text-sm text-white/75 transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                Studios
                <ChevronDown size={15} className={`transition-transform ${megaOpen ? "rotate-180" : ""}`} />
              </button>
              {NAV_LINKS.map((link) => (
<Link
  key={link.label}
  href={link.href}
  className="rounded-full px-4 py-2 font-body text-sm text-white/75 transition-all duration-300 hover:bg-white/10 hover:text-white"
>
  {link.label}
</Link>
              ))}
            </nav>

            <div className="hidden items-center gap-2 lg:flex">
              <a
                href="#"
                className="rounded-full px-4 py-2.5 font-body text-sm font-medium text-white/70 transition hover:text-white"
              >
                Log in
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 font-body text-sm font-semibold text-white transition-all duration-300 hover:scale-105 shadow-[0_0_35px_rgba(0,194,255,.35)]"
                style={{ background: "linear-gradient(90deg,#0064FA,#00C2FF)" }}
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

          {/* Mega menu — shorter now: tighter padding/gaps and a wider,
              flatter card ratio instead of the old tall aspect-[5/4]. */}
          <div
            className={`hidden overflow-hidden border-t border-white/10 transition-[grid-template-rows] duration-300 lg:grid ${
              megaOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
            style={{ display: "grid" }}
          >
            <div className="min-h-0">
              <div className="mx-auto grid max-w-7xl grid-cols-[200px_1fr] gap-6 px-10 py-6">
                <div className="flex flex-col gap-1 font-body">
                  <p className="mb-2 font-mono-mad text-xs uppercase tracking-widest text-white/40">
                    The MAD House
                  </p>
                  <a href="#studios" className="mad-gradient-bg rounded-xl px-4 py-3 text-sm font-semibold text-white">
                    Explore all 6 studios ↗
                  </a>
                  <a href="#work" className="rounded-xl px-4 py-3 text-sm text-white/70 hover:bg-white/5 hover:text-white">
                    Our work ↘
                  </a>
                  <a href="#pricing" className="rounded-xl px-4 py-3 text-sm text-white/70 hover:bg-white/5 hover:text-white">
                    Pricing ↘
                  </a>
                  <a href="#about" className="rounded-xl px-4 py-3 text-sm text-white/70 hover:bg-white/5 hover:text-white">
                    About MAD ↘
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {STUDIOS.map((item) => (
                    <StudioCard key={item.name} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: EASE }}
              className={`w-[calc(100%-32px)] max-w-7xl overflow-hidden rounded-[28px] border lg:hidden ${PANEL_ACTIVE}`}
            >
              <div className="max-h-[80vh] overflow-y-auto px-6 py-6 font-body">
                <p className="mb-3 font-mono-mad text-xs uppercase tracking-widest text-white/40">
                  Studios
                </p>
                <div className="mb-6 grid grid-cols-2 gap-3">
                  {STUDIOS.map((item) => (
                    <a key={item.name} href={item.href} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                      <p className="text-sm font-semibold text-white">{item.name}</p>
                      <p className="mt-0.5 text-xs text-white/50">{item.tagline}</p>
                    </a>
                  ))}
                </div>
                <div className="flex flex-col gap-1 border-t border-white/10 pt-4">
{NAV_LINKS.map((link) => (
  <Link key={link.label} href={link.href} className="py-2 text-sm text-white/80">
    {link.label}
  </Link>
))}
                  <a href="#" className="py-2 text-sm text-white/80">
                    Log in
                  </a>
                </div>
                <a
                  href="#pricing"
                  className="mt-4 flex items-center justify-center gap-1.5 rounded-full py-3 text-sm font-semibold text-white shadow-[0_0_35px_rgba(0,194,255,.35)]"
                  style={{ background: "linear-gradient(90deg,#0064FA,#00C2FF)" }}
                >
                  Start a project
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

function StudioCard({ item }) {
  return (
    <a
      href={item.href}
      className="group relative flex aspect-[16/10] flex-col overflow-hidden rounded-2xl border border-white/10 transition duration-300 hover:border-white/25 hover:-translate-y-0.5"
    >
      {/* fallback gradient — always visible underneath */}
   
      {/* photo layer — hides itself cleanly if a URL ever 404s */}
      <img
        src={item.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-60 transition duration-500 group-hover:scale-105 group-hover:opacity-75"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
      {/* scrim for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/10" />

      <div className="relative z-10 flex flex-1 flex-col justify-between p-3.5">
        <div className="flex items-start justify-between">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/15 bg-white/10 backdrop-blur-sm">
            <item.icon size={14} className="text-white" />
          </div>
          <ArrowUpRight
            size={15}
            className="text-white/50 transition duration-300 group-hover:rotate-45 group-hover:text-white"
          />
        </div>
        <div>
          <p className="font-display text-sm font-bold text-white">{item.name}</p>
          <p className="mt-0.5 font-body text-xs leading-snug text-white/60">{item.tagline}</p>
        </div>
      </div>
    </a>
  );
}
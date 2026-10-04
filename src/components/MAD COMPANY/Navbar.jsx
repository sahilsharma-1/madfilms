"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { SERVICES, INDUSTRIES } from "../home/content";

// Every target is a real route or a homepage anchor. Studio pages render this bar with no props (always dark);
// the homepage passes `adaptive` and the bar flips between dark and light depending on the section beneath it.
const LINKS = [
  { label: "Platform", href: "/#custom" },
  { label: "Solutions", href: "/#workflows" },
  { label: "AI Agents", href: "/#agents" },
  { label: "Automation", href: "/studio/automate" },
  { label: "Creative", href: "/#marketing" },
  { label: "Customers", href: "/#work" },
  { label: "Resources", href: "/agents" },
];
const EASE = [0.21, 0.47, 0.32, 0.98];
const DARK = { bar: "text-white", solid: "bg-[#05070b]/85", link: "text-white/75 hover:bg-white/10 hover:text-white", sub: "text-white/50", rule: "border-white/10", hover: "hover:bg-white/8", cta: "bg-white text-black hover:bg-[#dbeafe]", edge: "border-white/10" };
const LIGHT = { bar: "text-[#0f0e14]", solid: "bg-[#f7f6f3]/85", link: "text-black/65 hover:bg-black/5 hover:text-black", sub: "text-black/50", rule: "border-black/10", hover: "hover:bg-black/5", cta: "bg-[#0f0e14] text-white hover:bg-[#1d4ed8]", edge: "border-black/10" };

export default function Navbar({ adaptive = false }) {
  const [light, setLight] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(null); // "what" | "ind" | null
  const [mobile, setMobile] = useState(false);
  const header = useRef(null);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      raf = 0;
      setScrolled(window.scrollY > 8);
      if (!adaptive) return;
      const el = document.elementsFromPoint(window.innerWidth / 2, 40).find((n) => n.closest?.("[data-tone]"));
      const tone = el?.closest("[data-tone]")?.getAttribute("data-tone");
      if (tone) setLight(tone === "light");
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick); };
    tick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(raf); };
  }, [adaptive]);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    const esc = (e) => { if (e.key === "Escape") { setMobile(false); setMenu(null); } };
    window.addEventListener("keydown", esc);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", esc); };
  }, [mobile]);

  const open = !!menu || mobile;
  const T = adaptive && light && !mobile ? LIGHT : DARK;
  const pickIndustry = (id) => { setMenu(null); setMobile(false); if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("mad:industry", { detail: id })); };

  const Trigger = ({ id, children }) => (
    <button onMouseEnter={() => setMenu(id)} onFocus={() => setMenu(id)} onClick={() => setMenu((m) => (m === id ? null : id))} aria-expanded={menu === id} aria-haspopup="true"
      className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm transition-colors ${T.link}`}>
      {children} <ChevronDown size={14} className={`transition-transform ${menu === id ? "rotate-180" : ""}`} />
    </button>
  );

  return (
    <header ref={header} className={`fixed inset-x-0 top-0 z-50 ${T.bar}`} onMouseLeave={() => setMenu(null)}>
      <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }}
        className={`border-b backdrop-blur-xl backdrop-saturate-150 transition-colors duration-500 ${open || scrolled ? `${T.solid} ${T.edge}` : "border-transparent bg-transparent"}`}>
        <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between px-5 md:px-8 xl:px-12">
          <Link href="/" aria-label="MAD Company home" className="flex items-center">
            <Image src="/images/MAD FILMS LOGO.png" alt="MAD" width={180} height={60} priority className={`h-9 w-auto transition ${adaptive && light && !mobile ? "invert" : ""}`} />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
            {LINKS.map((l) => (
              <Link key={l.label} href={l.href} onMouseEnter={() => setMenu(null)} className={`rounded-full px-4 py-2 text-sm transition-colors ${T.link}`}>{l.label}</Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Link href="/studio/madfilms" className="rounded-full border border-[#ff5a1f] px-4 py-2 text-sm font-semibold tracking-wide text-[#ff5a1f] transition-colors hover:bg-[#ff5a1f] hover:text-white">MAD FILMS</Link>
            <Link href="/#contact" className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${T.cta}`}>
              Talk to us <span aria-hidden>→</span>
            </Link>
          </div>

          <button className="-mr-2 p-2 lg:hidden" onClick={() => setMobile((v) => !v)} aria-label={mobile ? "Close menu" : "Open menu"} aria-expanded={mobile}>
            {mobile ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop mega menu */}
        <div className="hidden lg:block" aria-hidden={!menu}>
          <AnimatePresence initial={false}>
            {menu && (
              <motion.div key="panel" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.32, ease: EASE }} className="overflow-hidden">
                <div className={`mx-auto grid max-w-[90rem] grid-cols-[260px_1fr] gap-12 border-t px-12 py-9 ${T.rule}`}>
                  <p className={`max-w-[15rem] text-[1.05rem] leading-snug tracking-tight ${T.sub}`}>
                    {menu === "what" ? "One partner. From AI strategy to production." : "AI across every part of your business."}
                  </p>
                  <ul className="grid grid-cols-3 gap-x-6 gap-y-1">
                    {menu === "what" && SERVICES.map((c) => (
                      <li key={c.id}>
                        <Link href={c.href} onClick={() => setMenu(null)} className={`group block rounded-xl px-4 py-3 transition-colors ${T.hover}`}>
                          <span className="flex items-center justify-between text-[15px] font-medium">{c.name}<ArrowUpRight size={14} className="opacity-0 transition group-hover:opacity-60" /></span>
                          <span className={`mt-0.5 block text-sm leading-snug ${T.sub}`}>{c.line}</span>
                        </Link>
                      </li>
                    ))}
                    {menu === "ind" && INDUSTRIES.map((c) => (
                      <li key={c.id}>
                        <Link href="/#industries" onClick={() => pickIndustry(c.id)} className={`group block rounded-xl px-4 py-3 transition-colors ${T.hover}`}>
                          <span className="flex items-center justify-between text-[15px] font-medium">{c.name}<ArrowUpRight size={14} className="opacity-0 transition group-hover:opacity-60" /></span>
                          <span className={`mt-0.5 block text-sm leading-snug ${T.sub}`}>{c.caps.slice(0, 2).join(", ")}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Mobile sheet */}
      <AnimatePresence>
        {mobile && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
            className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-[#05070b] px-6 pb-10 pt-6 text-white lg:hidden">
            <p className="mb-2 text-sm text-white/45">What we do</p>
            <ul>
              {SERVICES.map((c, i) => (
                <motion.li key={c.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.025 * i, duration: 0.35 }} className="border-b border-white/10">
                  <Link href={c.href} onClick={() => setMobile(false)} className="block py-3.5 text-xl font-medium tracking-tight">{c.name}</Link>
                </motion.li>
              ))}
            </ul>
            <p className="mb-2 mt-9 text-sm text-white/45">Industries</p>
            <ul className="grid grid-cols-2 gap-x-5">
              {INDUSTRIES.map((c) => (<li key={c.id}><Link href="/#industries" onClick={() => pickIndustry(c.id)} className="block border-b border-white/10 py-3 text-[15px] text-white/85">{c.name}</Link></li>))}
            </ul>
            <Link href="/studio/madfilms" onClick={() => setMobile(false)} className="mt-8 block rounded-full border border-[#ff5a1f] py-3 text-center text-sm font-semibold text-[#ff5a1f]">MAD FILMS</Link>
            <ul className="mt-6 grid grid-cols-2 gap-x-4">
              {LINKS.map((l) => (<li key={l.label}><Link href={l.href} onClick={() => setMobile(false)} className="block border-b border-white/10 py-3 text-[15px] text-white/85">{l.label}</Link></li>))}
            </ul>
            <Link href="/#contact" onClick={() => setMobile(false)} className="mt-10 flex items-center justify-center gap-2 rounded-full bg-white py-4 text-sm font-medium text-black">Talk to us <span aria-hidden>→</span></Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

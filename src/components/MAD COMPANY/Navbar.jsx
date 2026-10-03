"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";

// Every target below is a real route or a real homepage anchor.
const CAPABILITIES = [
  { name: "AI Agents", line: "AI that does the work", href: "/#agents" },
  { name: "Software", line: "Software and SaaS", href: "/#engine" },
  { name: "Data", line: "Data science and intelligence", href: "/#engine" },
  { name: "Automation", line: "Business automation", href: "/studio/automate" },
  { name: "Outreach", line: "AI sales and lead generation", href: "/#outreach" },
  { name: "MAD Films", line: "Creative technology", href: "/studio/madfilms" },
];
const COMPANY = [
  { label: "Solutions", href: "/#scenarios" },
  { label: "Work", href: "/#work" },
  { label: "Company", href: "/#people" },
  { label: "Careers", href: "mailto:hello@madcompany.co?subject=Careers" },
  { label: "Contact", href: "/#contact" },
];
const EASE = [0.21, 0.47, 0.32, 0.98];

// Studio pages are dark and pass no props. The homepage passes `adaptive`, and the bar
// switches between dark and light glass depending on which section sits beneath it.
const DARK = { bar: "border-white/12 bg-black/35 text-white", bar2: "bg-black/70", link: "text-white/75 hover:bg-white/10 hover:text-white", sub: "text-white/50", rule: "border-white/10", hover: "hover:bg-white/8", cta: "bg-white text-black hover:bg-white/90" };
const LIGHT = { bar: "border-black/10 bg-white/70 text-black", bar2: "bg-white/90", link: "text-black/65 hover:bg-black/5 hover:text-black", sub: "text-black/50", rule: "border-black/10", hover: "hover:bg-black/5", cta: "bg-black text-white hover:bg-black/85" };

export default function Navbar({ adaptive = false }) {
  const [light, setLight] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);
  const [mobile, setMobile] = useState(false);
  const header = useRef(null);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      raf = 0;
      setScrolled(window.scrollY > 8);
      if (!adaptive || !header.current) return;
      const el = document.elementsFromPoint(window.innerWidth / 2, 56).find((n) => n.closest?.("[data-tone]"));
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
    const esc = (e) => { if (e.key === "Escape") { setMobile(false); setMega(false); } };
    window.addEventListener("keydown", esc);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", esc); };
  }, [mobile]);

  const T = adaptive && light && !mobile ? LIGHT : DARK;
  const open = mega || mobile;

  return (
    <header ref={header} className="fixed inset-x-0 top-0 z-50" onMouseLeave={() => setMega(false)}>
      <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }}
        className={`border-b backdrop-blur-xl backdrop-saturate-150 transition-colors duration-500 ${T.bar} ${open || scrolled ? T.bar2 : "bg-transparent border-transparent"}`}>
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link href="/" aria-label="MAD Company home" className="flex items-center">
            <Image src="/images/MAD FILMS LOGO.png" alt="MAD" width={180} height={60} priority className={`h-10 w-auto transition ${adaptive && light && !mobile ? "invert" : ""}`} />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            <button onMouseEnter={() => setMega(true)} onFocus={() => setMega(true)} onClick={() => setMega((v) => !v)} aria-expanded={mega} aria-haspopup="true"
              className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm transition-colors ${T.link}`}>
              Products <ChevronDown size={14} className={`transition-transform ${mega ? "rotate-180" : ""}`} />
            </button>
            {COMPANY.map((l) => (
              <Link key={l.label} href={l.href} onMouseEnter={() => setMega(false)} className={`rounded-full px-4 py-2 text-sm transition-colors ${T.link}`}>{l.label}</Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link href="/#contact" className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${T.cta}`}>
              Build with MAD <ArrowUpRight size={14} />
            </Link>
          </div>

          <button className="-mr-2 p-2 lg:hidden" onClick={() => setMobile((v) => !v)} aria-label={mobile ? "Close menu" : "Open menu"} aria-expanded={mobile}>
            {mobile ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop mega menu */}
        <div className={`hidden grid-rows-[0fr] overflow-hidden transition-[grid-template-rows] duration-300 lg:grid ${mega ? "!grid-rows-[1fr]" : ""}`} style={{ display: "grid" }} aria-hidden={!mega}>
          <div className="min-h-0">
            <div className={`mx-auto grid max-w-7xl grid-cols-[220px_1fr] gap-10 border-t px-10 py-8 ${T.rule}`}>
              <p className={`text-sm leading-snug ${T.sub}`}>One company. Everything you need to build.</p>
              <ul className="grid grid-cols-3 gap-x-6 gap-y-1">
                {CAPABILITIES.map((c) => (
                  <li key={c.name}>
                    <Link href={c.href} tabIndex={mega ? 0 : -1} onClick={() => setMega(false)} className={`group block rounded-xl px-4 py-3 transition-colors ${T.hover}`}>
                      <span className="flex items-center justify-between text-[15px] font-medium">{c.name}<ArrowUpRight size={14} className="opacity-0 transition group-hover:opacity-60" /></span>
                      <span className={`mt-0.5 block text-sm ${T.sub}`}>{c.line}</span>
                    </Link>
                  </li>
                ))}
                <li className="col-span-3 mt-2 px-4"><Link href="/studio/reality" tabIndex={mega ? 0 : -1} onClick={() => setMega(false)} className={`text-sm underline-offset-4 hover:underline ${T.sub}`}>Also: MAD Reality, immersive experiences</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile sheet */}
      <AnimatePresence>
        {mobile && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
            className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-black px-6 pb-10 pt-6 text-white lg:hidden">
            <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-white/40">Products</p>
            <ul>
              {CAPABILITIES.map((c, i) => (
                <motion.li key={c.name} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.03 * i, duration: 0.35 }} className="border-b border-white/10">
                  <Link href={c.href} onClick={() => setMobile(false)} className="flex items-baseline justify-between py-4 text-2xl font-medium tracking-tight">
                    {c.name}<span className="text-sm font-normal text-white/40">{c.line}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            <p className="mb-2 mt-10 font-mono text-[11px] uppercase tracking-[0.14em] text-white/40">Company</p>
            <ul className="grid grid-cols-2 gap-x-6">
              {COMPANY.map((l) => (<li key={l.label}><Link href={l.href} onClick={() => setMobile(false)} className="block border-b border-white/10 py-3 text-lg text-white/85">{l.label}</Link></li>))}
            </ul>
            <Link href="/#contact" onClick={() => setMobile(false)} className="mt-10 flex items-center justify-center gap-1.5 rounded-full bg-white py-4 text-sm font-medium text-black">Build with MAD <ArrowUpRight size={15} /></Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

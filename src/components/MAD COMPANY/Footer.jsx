"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
// Lucide dropped all brand/social logos as of v1.0 — react-icons is the
// right place for these now (it's already on your recommended-additions
// list). Run: npm install react-icons
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa6";

const COLUMNS = [
  {
    title: "Product",
    links: ["Automations", "Analytics", "Collaboration", "Integrations", "Pricing", "Changelog"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Contact"],
  },
  {
    title: "Resources",
    links: ["Docs", "API reference", "Community", "Help center"],
  },
  {
    title: "Legal",
    links: ["Privacy policy", "Terms of service", "Security", "DPA"],
  },
];

const SOCIALS = [
  { icon: FaGithub, href: "#" },
  { icon: FaLinkedin, href: "#" },
  { icon: FaYoutube, href: "#" },
  { icon: FaInstagram, href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060608] px-6 pt-16 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 pb-14 lg:grid-cols-[1.3fr_repeat(4,1fr)]">
          <div>
            <Link href="/" className="flex items-center gap-2 font-display">
              <span className="text-2xl font-extrabold tracking-tight text-white">MAD</span>
              <span className="rounded-full mad-gradient-bg px-2.5 py-0.5 text-xs font-semibold text-white font-body">
                os
              </span>
            </Link>
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-white/50">
              The AI operations platform that automates your busywork so your
              team can do the work that matters.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex max-w-xs items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1.5"
            >
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="w-full bg-transparent px-3 py-1.5 font-body text-sm text-white placeholder:text-white/30 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full mad-gradient-bg text-white transition hover:scale-105"
              >
                <ArrowUpRight size={15} />
              </button>
            </form>
            <p className="mt-2 font-mono-mad text-[11px] text-white/30">
              Product news, no spam. Unsubscribe anytime.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="font-mono-mad text-xs uppercase tracking-widest text-white/40">
                {col.title}
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-white/60 transition hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 border-t border-white/10 py-7 sm:flex-row sm:justify-between">
          <p className="font-body text-xs text-white/40">
            © {new Date().getFullYear()} MAD OS, Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-2 font-body text-xs text-white/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            All systems operational
          </div>

          <div className="flex items-center gap-4">
            {SOCIALS.map((s, i) => (
              <a key={i} href={s.href} className="text-white/40 transition hover:text-white">
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

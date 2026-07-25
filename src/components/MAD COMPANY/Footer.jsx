import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { studios } from "./studios";

const SOCIALS = ["Instagram", "LinkedIn", "X", "YouTube"];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060608] px-6 pb-10 pt-16 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 font-display">
              <span className="text-2xl font-extrabold text-white">MAD</span>
              <span className="mad-gradient-bg rounded-full px-2.5 py-0.5 font-body text-xs font-semibold text-white">
                company
              </span>
            </Link>
            <p className="mt-4 max-w-xs font-body text-sm text-white/50">
              A house of creative and technology studios building films,
              products, AI, and growth for brands that refuse to be boring.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 font-body text-xs text-white/50">
              {SOCIALS.map((s) => (
                <a key={s} href="#" className="transition hover:text-white">
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono-mad text-xs uppercase tracking-widest text-white/40">
              Companies
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 font-body text-sm text-white/60">
              {studios.map((s) => (
                <li key={s.slug}>
                  <a href={s.href} className="transition hover:text-white">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono-mad text-xs uppercase tracking-widest text-white/40">
              Company
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 font-body text-sm text-white/60">
              <li><a href="#" className="transition hover:text-white">About</a></li>
              <li><a href="#team" className="transition hover:text-white">Team</a></li>
              <li><a href="#careers" className="transition hover:text-white">Careers</a></li>
              <li><a href="#" className="transition hover:text-white">Insights</a></li>
              <li><a href="#" className="transition hover:text-white">Portfolio</a></li>
            </ul>
          </div>

          <div>
            <p className="font-mono-mad text-xs uppercase tracking-widest text-white/40">
              Get in touch
            </p>
            <ul className="mt-4 flex flex-col gap-3 font-body text-sm text-white/60">
              <li className="flex items-center gap-2">
                <Mail size={15} className="text-white/40" /> hello@madcompany.co
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} className="text-white/40" /> +1 (888) 000-0000
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={15} className="text-white/40" /> Remote-first, everywhere
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 font-body text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} MAD Company. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition hover:text-white">Privacy</a>
            <a href="#" className="transition hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

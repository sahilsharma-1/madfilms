import Link from "next/link";
import { FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa6";
import { DIVISIONS } from "./data";

// Set real profile URLs here. Entries still set to "#" are not rendered, so no dead links ship.
const SOCIALS = [
  { icon: FaLinkedin, label: "LinkedIn", href: "#" },
  { icon: FaYoutube, label: "YouTube", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
].filter((s) => s.href && s.href !== "#");
const COMPANY = [["About", "#people"], ["Work", "#work"], ["Careers", "mailto:hello@madcompany.co?subject=Careers"], ["Contact", "#contact"]];

export default function HomeFooter() {
  return (
    <footer data-tone="dark" className="mh-dark pt-4">
      <div className="mh-wrap"><div className="border-t b-line">
        <div className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="t-ink text-2xl font-semibold tracking-tight">MAD Company</p>
            <p className="mh-label mt-3">AI that does the work</p>
          </div>
          <nav aria-label="Capabilities">
            <p className="mh-label mb-5">Capabilities</p>
            <ul className="space-y-3">{DIVISIONS.map((d) => (<li key={d.name}><Link href={d.href} className="t-soft text-sm transition hover:text-white">{d.name}</Link></li>))}</ul>
          </nav>
          <nav aria-label="Company">
            <p className="mh-label mb-5">Company</p>
            <ul className="space-y-3">{COMPANY.map(([l, h]) => (<li key={l}><a href={h} className="t-soft text-sm transition hover:text-white">{l}</a></li>))}</ul>
          </nav>
        </div>
        <div className="flex flex-col gap-4 border-t b-line py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="t-mute text-xs">&copy; {new Date().getFullYear()} MAD Company</p>
          {SOCIALS.length > 0 && (
            <div className="flex items-center gap-5">{SOCIALS.map((s) => (<a key={s.label} href={s.href} aria-label={s.label} className="t-mute transition hover:text-white"><s.icon size={16} /></a>))}</div>
          )}
        </div>
      </div>
      </div>
    </footer>
  );
}

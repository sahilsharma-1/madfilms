import Link from "next/link";
import { FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa6";
import { INDUSTRIES, EMAIL } from "./content";

// Set real profile URLs here. Entries left as "#" are not rendered, so no dead links ship.
const SOCIALS = [
  { icon: FaLinkedin, label: "LinkedIn", href: "#" },
  { icon: FaYoutube, label: "YouTube", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
].filter((s) => s.href && s.href !== "#");
const COMPANY = [["Work", "/#work"], ["About", "/#about"], ["Careers", `mailto:${EMAIL}?subject=Careers`], ["Contact", "/#contact"]];
const SOLUTIONS = [
  ["AI Agents", "/#agents"],
  ["Business Automation", "/#agents"],
  ["SaaS & Software", "/#packages"],
  ["Data & Intelligence", "/#capabilities"],
  ["Creative & Motion", "/#madfilms"],
  ["UGC & Content", "/#madfilms"],
];

const Col = ({ title, children }) => (
  <nav aria-label={title}>
    <p className="mx-small mb-5">{title}</p>
    <ul className="space-y-3">{children}</ul>
  </nav>
);
const A = ({ href, children }) => (<li><Link href={href} className="text-[.95rem] transition-colors hover:text-white" style={{ color: "var(--soft)" }}>{children}</Link></li>);

export default function Footer() {
  return (
    <footer data-tone="dark" className="mx-dark relative overflow-hidden">
      <div className="mx-wrap pt-8">
        <div className="grid gap-12 border-t py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]" style={{ borderColor: "var(--line)" }}>
          <div>
            <p className="max-w-[16rem] text-[1.35rem] leading-snug tracking-tight">Technology and creative systems for the work your business needs done.</p>
            <a href={`mailto:${EMAIL}`} className="mt-6 inline-block text-[.95rem] underline underline-offset-4" style={{ color: "var(--soft)" }}>{EMAIL}</a>
            {SOCIALS.length > 0 && (
              <div className="mt-6 flex items-center gap-5">{SOCIALS.map((s) => (<a key={s.label} href={s.href} aria-label={s.label} className="transition-colors hover:text-white" style={{ color: "var(--mute)" }}><s.icon size={17} /></a>))}</div>
            )}
          </div>
          <Col title="Solutions">{SOLUTIONS.map(([label, href]) => <A key={label} href={href}>{label}</A>)}</Col>
          <Col title="Industries">{INDUSTRIES.map((s) => <A key={s.id} href="/#industries">{s.name}</A>)}</Col>
          <Col title="Company">{COMPANY.map(([l, h]) => <A key={l} href={h}>{l}</A>)}</Col>
        </div>
      </div>
      <div aria-hidden className="mx-wrap select-none">
        <p className="-mb-[.16em] text-center font-medium leading-[.8] tracking-[-.07em]" style={{ fontSize: "clamp(9rem, 34vw, 34rem)", color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,.2)" }}>MAD</p>
      </div>
      <div className="mx-wrap relative pb-8 pt-6">
        <p className="mx-small">&copy; {new Date().getFullYear()} MAD Company</p>
      </div>
    </footer>
  );
}

import Link from "next/link";

const COLUMNS = [
  {
    title: "Services",
    links: [
      { label: "Video production", href: "#" },
      { label: "Motion & VFX", href: "#" },
      { label: "Color & grading", href: "#" },
      { label: "Sound design", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our work", href: "#" },
      { label: "Our team", href: "#" },
      { label: "About us", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Case studies", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-16 md:px-16">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <span className="text-xl font-semibold text-white">madfilm</span>
          <p className="mt-3 max-w-xs text-sm text-white/50">
            Your creative team&apos;s creative team — production, post,
            and everything in between.
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="mb-4 text-sm font-medium text-white/70">
              {col.title}
            </h4>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/50 transition-colors hover:text-lime-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 pt-6 text-xs text-white/40">
        © {new Date().getFullYear()} madfilm. All rights reserved.
      </div>
    </footer>
  );
}

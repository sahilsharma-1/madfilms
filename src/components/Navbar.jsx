"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 100);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    "Services",
    "Our Work",
    "Why Us",
    "Resources",
    "Pricing",
    "Enterprise",
  ];

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#071A16]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

        {/* Logo */}
        <Link href="/">
          <h1 className="text-3xl font-bold text-white">MADFILM</h1>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-10 text-white lg:flex">
          {links.map((item) => (
            <Link key={item} href="#">
              {item}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-4 lg:flex">
          <button className="rounded-full bg-lime-300 px-7 py-3 font-semibold text-black">
            Book a demo
          </button>

          <button className="rounded-full border border-white px-7 py-3 text-white">
            Sign in
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="space-y-5 bg-[#071A16] px-6 py-8 text-white">

          {links.map((item) => (
            <Link
              key={item}
              href="#"
              className="block text-lg"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </Link>
          ))}

          <button className="mt-4 w-full rounded-full bg-lime-300 py-4 font-semibold text-black">
            Book a demo
          </button>

          <button className="w-full rounded-full border border-white py-4">
            Sign in
          </button>

        </div>
      </div>
    </header>
  );
}
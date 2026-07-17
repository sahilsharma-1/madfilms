"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        <h1 className="text-white text-4xl font-bold">
          Superside
        </h1>

        <nav className="hidden lg:flex gap-10 text-white">

          <Link href="#">Services</Link>
          <Link href="#">Our Work</Link>
          <Link href="#">Why Us</Link>
          <Link href="#">Resources</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Enterprise</Link>

        </nav>

        <div className="flex gap-4">

          <button className="bg-lime-300 px-7 py-3 rounded-full font-semibold text-black">
            Book a demo
          </button>

          <button className="border border-white px-7 py-3 rounded-full text-white">
            Sign in
          </button>

        </div>

      </div>
    </header>
  );
}
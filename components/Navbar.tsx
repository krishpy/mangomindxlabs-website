"use client";

import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="MangomindX Labs"
            width={240}
            height={80}
            className="h-auto w-[165px] object-contain sm:w-[220px]"
            priority
          />
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition hover:text-orange-600"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="/contact"
          className="hidden rounded-full border border-orange-500 px-5 py-2.5 text-sm font-semibold text-orange-600 transition hover:bg-orange-500 hover:text-white lg:inline-flex"
        >
          Contact Us
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-slate-900 transition ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-5 rounded-full bg-slate-900 transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-slate-900 transition ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 shadow-lg md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-orange-50 hover:text-orange-600"
              >
                {link.label}
              </a>
            ))}

            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-orange-500 px-5 py-3 text-center text-base font-semibold text-white shadow-sm shadow-orange-200 transition hover:bg-orange-600"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

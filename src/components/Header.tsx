import React, { useState } from "react";

const navItems: [string, string][] = [
  ["Highlights", "#highlights"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Testimonials", "#testimonials"],
  ["Skills", "#skills"],
  ["About", "#about"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl">
            <img
              src="/assets/images/favicon.png"
              alt="Ben Wille Logo"
              className="h-9 w-9 rounded-xl object-cover"
            />
          </div>
          <div className="text-sm font-semibold">
            Ben Wille{" "}
            <span className="ml-2 rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">
              Product Manager
            </span>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-zinc-700 md:flex">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="hover:text-emerald-600 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>


        <div className="hidden md:block">
          <a href="#contact" className="btn rounded-xl bg-emerald-600 px-3 py-2 text-xs font-medium text-white hover:bg-emerald-700">
            Contact
          </a>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-lg border border-zinc-300 p-2"
        >
          <div className="h-0.5 w-5 bg-zinc-800" />
          <div className="mt-1 h-0.5 w-5 bg-zinc-800" />
          <div className="mt-1 h-0.5 w-5 bg-zinc-800" />
        </button>
      </div>

      {open && (
        <div className="md:hidden">
          <div className="mx-4 mb-3 rounded-2xl border border-zinc-200 bg-white p-4 shadow">
            <nav className="flex flex-col gap-3 text-sm">
              {navItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-1 hover:bg-zinc-50 hover:text-emerald-600 transition-colors"
                >
                  {label}
                </a>

              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn mt-2 rounded-xl bg-emerald-600 px-3 py-2 text-xs font-medium text-white hover:bg-emerald-700"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

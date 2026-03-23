"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/kolektsii", label: "Колекции" },
  { href: "/novini", label: "Новини" },
  { href: "/za-nas", label: "За Нас" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 h-20 bg-black/80 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="flex justify-between items-center px-8 md:px-16 w-full max-w-screen-2xl mx-auto h-full relative">
        {/* Left nav */}
        <nav className="hidden md:flex flex-1 items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[11px] font-bold uppercase tracking-[0.18em] transition-colors duration-200 pb-1 ${
                pathname.startsWith(link.href)
                  ? "text-primary border-b-2 border-primary"
                  : "text-secondary hover:text-on-surface"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 -ml-2 text-on-surface"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="square" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="square" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Centered wordmark */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link
            href="/"
            className="text-3xl font-black tracking-tighter text-on-surface select-none hover:opacity-80 transition-opacity"
          >
            PLENTY
          </Link>
        </div>

        {/* Right CTA */}
        <div className="hidden md:flex flex-1 justify-end">
          <Link
            href="/poseti-ni"
            className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-300"
          >
            Посети Ни
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface-container border-t border-white/[0.06] px-8 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-[11px] font-bold uppercase tracking-[0.18em] ${
                pathname.startsWith(link.href) ? "text-primary" : "text-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/poseti-ni"
            onClick={() => setMenuOpen(false)}
            className="text-[11px] font-black uppercase tracking-[0.18em] text-primary"
          >
            Посети Ни →
          </Link>
        </div>
      )}
    </header>
  );
}

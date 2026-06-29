"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/language";

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const { lang, setLang, t } = useLanguage();

  const isHome = pathname === "/";

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 40);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(total > 0 ? (y / total) * 100 : 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
  }

  const showBg = !isHome || scrolled;

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Scroll progress bar */}
      <div id="scroll-progress" style={{ width: `${scrollPct}%` }} />

      <header
        className="fixed top-0 w-full z-50 h-20"
        style={{
          background: showBg ? "rgba(12,11,10,0.78)" : "transparent",
          backdropFilter: showBg ? "blur(18px) saturate(1.3)" : "none",
          WebkitBackdropFilter: showBg ? "blur(18px) saturate(1.3)" : "none",
          borderBottom: `1px solid ${showBg ? "var(--line)" : "transparent"}`,
          transition:
            "background 0.5s var(--ease), backdrop-filter 0.5s var(--ease), border-color 0.5s var(--ease)",
        }}
      >
        <div className="flex justify-between items-center px-8 md:px-16 w-full max-w-screen-2xl mx-auto h-full relative">
          {/* Left nav */}
          <nav className="hidden md:flex flex-1 items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-[11px] font-bold uppercase tracking-[0.18em] transition-colors duration-200 ${
                  isActive(link.href)
                    ? "active text-on-surface"
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
            aria-label="Menu"
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

          {/* Right: theme toggle + language toggle */}
          <div className="hidden md:flex flex-1 justify-end items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-1.5 text-secondary hover:text-on-surface transition-colors duration-200"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? (
                /* Sun icon — shown in dark mode (switch to light) */
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="square"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="4.5" />
                  <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
              ) : (
                /* Moon icon — shown in light mode (switch to dark) */
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="square"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
                </svg>
              )}
            </button>

            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === "bg" ? "en" : "bg")}
              className="text-[10px] font-black uppercase tracking-[0.15em] text-secondary hover:text-on-surface transition-colors duration-200 border hover:border-white/30 px-3 py-1.5"
              style={{ borderColor: "var(--line-2)" }}
              aria-label="Switch language"
            >
              {lang === "bg" ? "EN" : "БГ"}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden border-t px-8 py-6 flex flex-col gap-5"
            style={{ background: "var(--bg-2)", borderColor: "var(--line)" }}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-[11px] font-bold uppercase tracking-[0.18em] ${
                  isActive(link.href) ? "text-primary" : "text-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-1">
              <button
                onClick={() => {
                  setLang(lang === "bg" ? "en" : "bg");
                  setMenuOpen(false);
                }}
                className="text-[10px] font-black uppercase tracking-[0.15em] text-secondary"
              >
                {lang === "bg" ? "Switch to English" : "Смени на Български"}
              </button>
              <button
                onClick={toggleTheme}
                className="text-secondary"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="square" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="4.5" />
                    <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="square" viewBox="0 0 24 24">
                    <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

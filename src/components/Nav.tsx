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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("plenty-theme", next);
  }

  const showBg = !isHome || scrolled || menuOpen;
  const navFg = showBg ? "var(--fg)" : "var(--fg-on-dark)";
  const navFgMuted = showBg ? "var(--fg-2)" : "rgba(246,242,236,0.75)";

  useEffect(() => {
    const saved = localStorage.getItem("plenty-theme");
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const themeIcon =
    theme === "dark" ? (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="square" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="4.5" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    ) : (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="square" viewBox="0 0 24 24">
        <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
      </svg>
    );

  return (
    <>
      <div id="scroll-progress" style={{ width: `${scrollPct}%` }} />

      <header
        className="fixed top-0 w-full z-50 h-20"
        style={{
          background: showBg ? "var(--nav-bg)" : "transparent",
          backdropFilter: showBg ? "blur(18px) saturate(1.3)" : "none",
          WebkitBackdropFilter: showBg ? "blur(18px) saturate(1.3)" : "none",
          borderBottom: `1px solid ${showBg ? "var(--line)" : "transparent"}`,
          transition:
            "background 0.5s var(--ease), backdrop-filter 0.5s var(--ease), border-color 0.5s var(--ease)",
        }}
      >
        <div className="flex justify-between items-center px-8 md:px-16 w-full max-w-screen-2xl mx-auto h-full relative">
          <nav className="hidden md:flex flex-1 items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-[11px] font-bold uppercase tracking-[0.18em] transition-colors duration-200 ${
                  isActive(link.href) ? "active" : ""
                }`}
                style={{ color: isActive(link.href) ? navFg : navFgMuted }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2 -ml-2"
            style={{ color: navFg }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="square" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="square" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className="absolute left-1/2 -translate-x-1/2">
            <Link
              href="/"
              className="text-3xl font-black tracking-tighter select-none hover:opacity-80 transition-opacity"
              style={{ color: menuOpen ? "var(--fg)" : navFg }}
              onClick={() => setMenuOpen(false)}
            >
              PLENTY
            </Link>
          </div>

          <div className="hidden md:flex flex-1 justify-end items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-1.5 transition-colors duration-200"
              style={{ color: navFgMuted }}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {themeIcon}
            </button>
            <button
              onClick={() => setLang(lang === "bg" ? "en" : "bg")}
              className="text-[10px] font-black uppercase tracking-[0.15em] transition-colors duration-200 px-3 py-1.5"
              style={{ color: navFgMuted, border: `1px solid ${showBg ? "var(--line-2)" : "rgba(246,242,236,0.35)"}` }}
              aria-label="Switch language"
            >
              {lang === "bg" ? "EN" : "БГ"}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] md:hidden flex flex-col"
          style={{ background: "var(--bg-0)" }}
        >
          <div className="flex justify-between items-center h-20 px-8 shrink-0">
            <button
              className="p-2 -ml-2"
              style={{ color: menuOpen ? "var(--fg)" : navFg }}
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <span className="text-3xl font-black tracking-tighter" style={{ color: "var(--fg)" }}>
              PLENTY
            </span>
            <div className="w-9" aria-hidden="true" />
          </div>

          <nav className="flex-1 flex flex-col justify-center items-center gap-10 px-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-black uppercase tracking-[0.14em] transition-opacity"
                style={{ color: isActive(link.href) ? "var(--coral)" : "var(--fg)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-center gap-8 pb-14 pt-6">
            <button
              onClick={() => {
                setLang(lang === "bg" ? "en" : "bg");
                setMenuOpen(false);
              }}
              className="text-[11px] font-black uppercase tracking-[0.15em]"
              style={{ color: "var(--fg-2)" }}
            >
              {lang === "bg" ? "English" : "Български"}
            </button>
            <span style={{ color: "var(--line-2)" }} aria-hidden="true">|</span>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.15em]"
              style={{ color: "var(--fg-2)" }}
              aria-label="Toggle theme"
            >
              {themeIcon}
              {theme === "dark" ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

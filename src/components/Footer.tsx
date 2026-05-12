"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/language";

export default function Footer() {
  const { t } = useLanguage();

  const sections = [
    {
      heading: t.footer.nav,
      links: [
        { href: "/", label: t.nav.home },
        { href: "/news", label: t.nav.news },
        { href: "/about", label: t.nav.about },
        { href: "/visit", label: t.nav.visit },
      ],
    },
    {
      heading: t.footer.social,
      links: [
        { href: "#", label: "Instagram" },
        { href: "#", label: "Facebook" },
      ],
    },
  ];

  return (
    <footer className="bg-black/80 backdrop-blur-xl border-t border-white/[0.06] py-20 md:py-24 px-8 md:px-16 lg:px-24">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div>
            <Link href="/" className="text-2xl font-black tracking-tighter mb-6 block text-white">
              PLENTY
            </Link>
            <p className="text-[11px] tracking-[0.05em] uppercase text-white/50 leading-loose mb-4">
              {t.footer.tagline}
            </p>
            <p className="text-[11px] tracking-[0.05em] uppercase text-white/50 leading-loose">
              {t.footer.address}
            </p>
          </div>

          {sections.map((section) => (
            <div key={section.heading}>
              <h4 className="text-[10px] tracking-[0.2em] uppercase font-black mb-8 text-primary">
                {section.heading}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[11px] tracking-[0.08em] uppercase text-white/50 hover:text-white hover:underline decoration-primary decoration-2 underline-offset-4 transition-all"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] tracking-[0.25em] uppercase text-white/40">
            {t.footer.copyright}
          </p>
          <p className="text-[10px] tracking-[0.15em] uppercase text-white/40">
            {t.footer.family}
          </p>
        </div>
      </div>
    </footer>
  );
}

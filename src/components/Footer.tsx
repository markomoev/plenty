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
        { href: "/about", label: t.nav.about },
        { href: "/contact", label: t.nav.contact },
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
    <footer
      className="py-20 md:py-24 px-8 md:px-16 lg:px-24"
      style={{
        background: "rgba(12,11,10,0.92)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderTop: "1px solid var(--line)",
      }}
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div>
            <Link
              href="/"
              className="text-2xl font-black tracking-tighter mb-6 block"
              style={{ color: "var(--fg)" }}
            >
              PLENTY
            </Link>
            <p
              className="text-[11px] tracking-[0.05em] uppercase leading-loose mb-4"
              style={{ color: "var(--fg-3)" }}
            >
              {t.footer.tagline}
            </p>
            <p
              className="text-[11px] tracking-[0.05em] uppercase leading-loose"
              style={{ color: "var(--fg-3)" }}
            >
              {t.footer.address}
            </p>
          </div>

          {sections.map((section) => (
            <div key={section.heading}>
              <h4
                className="text-[10px] tracking-[0.2em] uppercase font-black mb-8"
                style={{ color: "var(--coral)" }}
              >
                {section.heading}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="footer-link text-[11px] tracking-[0.08em] uppercase transition-colors duration-200"
                      style={{ color: "var(--fg-3)" }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.color = "var(--fg)")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.color = "var(--fg-3)")
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: "var(--line)" }}
        >
          <p
            className="text-[10px] tracking-[0.25em] uppercase"
            style={{ color: "var(--fg-3)" }}
          >
            {t.footer.copyright}
          </p>
          <p
            className="text-[10px] tracking-[0.15em] uppercase"
            style={{ color: "var(--fg-3)" }}
          >
            {t.footer.family}
          </p>
        </div>
      </div>
    </footer>
  );
}

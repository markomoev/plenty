"use client";

import { useRef, type CSSProperties } from "react";
import { useLanguage } from "@/contexts/language";
import { AnimateIn } from "@/components/AnimateIn";
import { StoreStatus } from "@/components/StoreStatus";
import { useHeroLoad } from "@/hooks/useHeroLoad";

export function ContactPage() {
  const { t } = useLanguage();
  const headerRef = useRef<HTMLElement>(null);

  useHeroLoad(headerRef);

  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=ул.+Търговска+60,+Ловеч,+България";

  return (
    <>
      {/* ── Page header ──────────────────────────────── */}
      <section
        ref={headerRef}
        className="py-28 px-8 md:px-16 lg:px-24"
        style={{ background: "var(--bg-1)" }}
      >
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          <div>
            <p
              className="hero-fade text-[10px] tracking-[0.35em] uppercase font-bold mb-4"
              style={{ "--hero-delay": "50ms", color: "var(--coral)" } as CSSProperties}
            >
              {t.contact.eyebrow}
            </p>
            <h1
              className="text-5xl md:text-7xl font-black uppercase leading-none"
              style={{ letterSpacing: "-0.015em" }}
            >
              <span
                className="hero-clip-wrap"
                style={{ "--hero-delay": "150ms" } as CSSProperties}
              >
                <span className="hero-clip-inner block" style={{ color: "var(--fg)" }}>
                  {t.contact.page_title}
                </span>
              </span>
            </h1>
          </div>
          <p
            className="hero-rise text-base max-w-md"
            style={
              {
                "--hero-delay": "300ms",
                color: "var(--fg-2)",
                lineHeight: "1.7",
              } as CSSProperties
            }
          >
            {t.contact.header_body}
          </p>
        </div>
      </section>

      {/* ── Info + Map ───────────────────────────────── */}
      <section className="py-24 px-8 md:px-16 lg:px-24" style={{ background: "var(--bg-0)" }}>
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Address card — matches homepage card styling */}
            <AnimateIn
              delay={80}
              className="p-10 flex flex-col justify-between"
              style={{ background: "var(--bg-2)" } as CSSProperties}
            >
              <div className="space-y-8">
                <div>
                  <p
                    className="text-[10px] tracking-[0.3em] uppercase font-bold mb-2"
                    style={{ color: "var(--fg-3)" }}
                  >
                    {t.contact.address_label}
                  </p>
                  <p
                    className="text-lg font-black uppercase leading-snug whitespace-pre-line"
                    style={{ color: "var(--fg)" }}
                  >
                    {t.contact.address_value}
                  </p>
                </div>
                <div>
                  <p
                    className="text-[10px] tracking-[0.3em] uppercase font-bold mb-2"
                    style={{ color: "var(--fg-3)" }}
                  >
                    {t.contact.phone_label}
                  </p>
                  <p
                    className="text-lg font-black uppercase leading-snug"
                    style={{ color: "var(--fg)" }}
                  >
                    {t.contact.phone_value}
                  </p>
                </div>
                <div>
                  <p
                    className="text-[10px] tracking-[0.3em] uppercase font-bold mb-2"
                    style={{ color: "var(--fg-3)" }}
                  >
                    {t.contact.hours_label}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between gap-8">
                      <p className="text-sm" style={{ color: "var(--fg-2)" }}>
                        {t.contact.hours_label_detail}
                      </p>
                      <p className="text-sm font-bold" style={{ color: "var(--fg)" }}>
                        {t.contact.hours_value}
                      </p>
                    </div>
                    <div className="flex justify-between gap-8">
                      <p className="text-sm" style={{ color: "var(--fg-2)" }}>
                        {t.contact.closed_label}
                      </p>
                      <p className="text-sm font-bold" style={{ color: "var(--fg-3)" }}>
                        {t.contact.closed_value}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Live status pill */}
                <StoreStatus />
              </div>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 inline-block px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em]"
                style={{
                  border: "1px solid var(--line-2)",
                  color: "var(--fg)",
                  transition: "background var(--t1) var(--ease), color var(--t1) var(--ease)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "var(--fg)";
                  el.style.color = "var(--bg-0)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "";
                  el.style.color = "var(--fg)";
                }}
              >
                {t.contact.open_maps}
              </a>
            </AnimateIn>

            {/* Map embed */}
            <div className="md:col-span-2 h-[480px] md:h-auto min-h-[480px]">
              <iframe
                src="https://maps.google.com/maps?q=ул.+Търговска+60,+Ловеч,+България&output=embed&z=17"
                width="100%"
                height="100%"
                className="w-full h-full border-0"
                loading="lazy"
                title="PLENTY Lovech location"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── What to expect ───────────────────────────── */}
      <section className="py-24 px-8 md:px-16 lg:px-24" style={{ background: "var(--bg-0)" }}>
        <div className="max-w-screen-2xl mx-auto">
          <AnimateIn className="mb-16">
            <p
              className="text-[10px] tracking-[0.35em] uppercase font-bold mb-4"
              style={{ color: "var(--coral)" }}
            >
              {t.contact.expect_eyebrow}
            </p>
            <h2
              className="text-4xl md:text-5xl font-black uppercase leading-tight max-w-3xl"
              style={{ letterSpacing: "-0.015em", color: "var(--fg)" }}
            >
              {t.contact.expect_title_1}
              <br />
              {t.contact.expect_title_2}
            </h2>
            <p
              className="text-base mt-6 max-w-xl"
              style={{ color: "var(--fg-2)", lineHeight: "1.7" }}
            >
              {t.contact.expect_body}
            </p>
          </AnimateIn>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t"
            style={{ borderColor: "var(--line)" }}
          >
            {[
              { num: "01", title: t.contact.expect1_title, body: t.contact.expect1_body },
              { num: "02", title: t.contact.expect2_title, body: t.contact.expect2_body },
              { num: "03", title: t.contact.expect3_title, body: t.contact.expect3_body },
            ].map((item, i) => (
              <AnimateIn
                key={item.num}
                delay={i * 100}
                className="hover-raise pt-12 pb-12 md:px-12 first:md:pl-0 last:md:pr-0 border-b md:border-b-0 md:border-r last:md:border-r-0 last:border-b-0"
                style={{ borderColor: "var(--line)" } as CSSProperties}
              >
                <span
                  className="text-[11px] font-black tracking-[0.3em] uppercase block mb-8"
                  style={{ color: "var(--coral)" }}
                >
                  {item.num}
                </span>
                <h3
                  className="text-xl font-black uppercase mb-5"
                  style={{ letterSpacing: "-0.01em", color: "var(--fg)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--fg-2)", lineHeight: "1.7" }}>
                  {item.body}
                </p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Good to know ─────────────────────────────── */}
      <section className="py-24 px-8 md:px-16 lg:px-24" style={{ background: "var(--bg-1)" }}>
        <div className="max-w-screen-2xl mx-auto">
          <AnimateIn>
            <p
              className="text-[10px] tracking-[0.35em] uppercase font-bold mb-4"
              style={{ color: "var(--coral)" }}
            >
              {t.contact.why_eyebrow}
            </p>
            <h2
              className="text-4xl md:text-5xl font-black uppercase leading-tight max-w-3xl"
              style={{ letterSpacing: "-0.015em", color: "var(--fg)" }}
            >
              {t.contact.why_title_1}
              {t.contact.why_title_2 && (
                <>
                  <br />
                  {t.contact.why_title_2}
                </>
              )}
            </h2>
            <p
              className="text-base mt-6 max-w-xl"
              style={{ color: "var(--fg-2)", lineHeight: "1.7" }}
            >
              {t.contact.why_body}
            </p>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}

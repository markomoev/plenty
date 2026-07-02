"use client";

import { useRef, useState, useEffect, type CSSProperties } from "react";
import { useLanguage } from "@/contexts/language";
import { AnimateIn } from "@/components/AnimateIn";
import { StoreStatus } from "@/components/StoreStatus";
import { MagneticLink } from "@/components/MagneticLink";
import { useHeroLoad } from "@/hooks/useHeroLoad";
import { getStoreState } from "@/lib/hours";

const PHONE = "+359898418915";
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=ул.+Търговска+60,+Ловеч,+България";
const dirUrl =
  "https://www.google.com/maps/dir/?api=1&destination=ул.+Търговска+60,+Ловеч,+България";

/* ── Small line icons ──────────────────────────── */
function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="square" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.4 1.8.7 2.7a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.4-1.2a2 2 0 012.1-.5c.9.3 1.8.6 2.7.7a2 2 0 011.7 2z" />
    </svg>
  );
}
function DirectionsIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="square" viewBox="0 0 24 24" aria-hidden="true">
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  );
}
function ExternalIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="square" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

/* ── Live weekly hours list ────────────────────── */
function WeeklyHours() {
  const { t, lang } = useLanguage();
  const [state, setState] = useState<ReturnType<typeof getStoreState> | null>(null);

  useEffect(() => {
    const update = () => setState(getStoreState(new Date(), lang));
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, [lang]);

  return (
    <ul className="border-t" style={{ borderColor: "var(--line)" }}>
      {t.contact.week_days.map((day, i) => {
        const isSunday = i === 6;
        const isToday = state?.todayIndex === i;
        const hours = isSunday ? t.contact.closed_value : t.contact.hours_value;

        return (
          <li
            key={day}
            className="flex justify-between items-center gap-8 py-4 px-4 border-b"
            style={{
              borderColor: "var(--line)",
              background: isToday ? "color-mix(in srgb, var(--coral) 12%, transparent)" : "transparent",
            }}
          >
            <span
              className="text-sm font-bold uppercase tracking-[0.1em]"
              style={{ color: isToday ? "var(--coral)" : "var(--fg-2)" }}
            >
              {isToday ? t.contact.now : day}
            </span>
            <div className="flex flex-col items-end gap-0.5">
              <span
                className="text-sm font-bold"
                style={{ color: isToday ? "var(--coral)" : isSunday ? "var(--fg-3)" : "var(--fg)" }}
              >
                {isToday && state ? state.todayState : hours}
              </span>
              {isToday && !isSunday && (
                <span
                  className="text-[11px] font-bold tracking-[0.05em]"
                  style={{ color: "var(--fg-3)" }}
                >
                  {t.contact.hours_value}
                </span>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export function ContactPage() {
  const { t } = useLanguage();
  const headerRef = useRef<HTMLElement>(null);

  useHeroLoad(headerRef);

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
              <span className="hero-clip-wrap" style={{ "--hero-delay": "150ms" } as CSSProperties}>
                <span className="hero-clip-inner block" style={{ color: "var(--fg)" }}>
                  {t.contact.page_title}
                </span>
              </span>
            </h1>
          </div>
          <p
            className="hero-rise text-base max-w-md"
            style={
              { "--hero-delay": "300ms", color: "var(--fg-2)", lineHeight: "1.7" } as CSSProperties
            }
          >
            {t.contact.header_body}
          </p>
        </div>
      </section>

      {/* ── Map centerpiece + floating glass card ────── */}
      <section className="px-8 md:px-16 lg:px-24 pb-24" style={{ background: "var(--bg-0)" }}>
        <div className="max-w-screen-2xl mx-auto relative">
          {/* Floating info card — above map on mobile, overlapping on desktop */}
          <div className="md:absolute md:z-20 md:top-10 md:left-10 md:w-[380px] mb-6 md:mb-0">
            <AnimateIn className="glass-card p-8 md:p-9">
              <StoreStatus flush />

              <div className="mt-7 space-y-6">
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase font-bold mb-2" style={{ color: "var(--fg-3)" }}>
                    {t.contact.address_label}
                  </p>
                  <p className="text-lg font-black uppercase leading-snug whitespace-pre-line" style={{ color: "var(--fg)" }}>
                    {t.contact.address_value}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase font-bold mb-2" style={{ color: "var(--fg-3)" }}>
                    {t.contact.phone_label}
                  </p>
                  <a
                    href={`tel:${PHONE}`}
                    className="text-lg font-black uppercase leading-snug transition-colors"
                    style={{ color: "var(--fg)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--coral)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg)")}
                  >
                    {t.contact.phone_value}
                  </a>
                </div>
              </div>

              {/* One-tap actions */}
              <div className="mt-8 flex flex-col gap-3">
                <MagneticLink href={`tel:${PHONE}`} variant="primary" showArrow={false} className="!px-6 w-full">
                  <PhoneIcon />
                  {t.contact.call}
                </MagneticLink>
                <div className="grid grid-cols-2 gap-3">
                  <MagneticLink href={dirUrl} variant="ghost" showArrow={false} className="!px-4 w-full">
                    <DirectionsIcon />
                    {t.contact.directions_btn}
                  </MagneticLink>
                  <MagneticLink href={mapsUrl} variant="ghost" showArrow={false} className="!px-4 w-full">
                    <ExternalIcon />
                    Maps
                  </MagneticLink>
                </div>
              </div>
            </AnimateIn>
          </div>

          {/* Enlarged map */}
          <div className="h-[70vh] min-h-[520px] w-full overflow-hidden img-rounded">
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
      </section>

      {/* ── Live weekly hours ────────────────────────── */}
      <section className="py-24 px-8 md:px-16 lg:px-24" style={{ background: "var(--bg-1)" }}>
        <div className="max-w-2xl mx-auto">
          <AnimateIn className="mb-10">
            <p className="text-[10px] tracking-[0.35em] uppercase font-bold mb-4" style={{ color: "var(--coral)" }}>
              {t.contact.hours_label}
            </p>
            <h2
              className="text-3xl md:text-5xl font-black uppercase"
              style={{ letterSpacing: "-0.015em", color: "var(--fg)" }}
            >
              {t.contact.hours_heading}
            </h2>
          </AnimateIn>
          <AnimateIn delay={80}>
            <WeeklyHours />
          </AnimateIn>
        </div>
      </section>

      {/* ── What to expect (card row) ────────────────── */}
      <section className="py-24 px-8 md:px-16 lg:px-24" style={{ background: "var(--bg-0)" }}>
        <div className="max-w-screen-2xl mx-auto">
          <AnimateIn className="mb-16 max-w-3xl">
            <p className="text-[10px] tracking-[0.35em] uppercase font-bold mb-4" style={{ color: "var(--coral)" }}>
              {t.contact.expect_eyebrow}
            </p>
            <h2
              className="text-4xl md:text-5xl font-black uppercase leading-tight"
              style={{ letterSpacing: "-0.015em", color: "var(--fg)" }}
            >
              {t.contact.expect_title_1}
              <br />
              {t.contact.expect_title_2}
            </h2>
            <p className="text-base mt-6 max-w-xl" style={{ color: "var(--fg-2)", lineHeight: "1.7" }}>
              {t.contact.expect_body}
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { num: "01", title: t.contact.expect1_title, body: t.contact.expect1_body },
              { num: "02", title: t.contact.expect2_title, body: t.contact.expect2_body },
              { num: "03", title: t.contact.expect3_title, body: t.contact.expect3_body },
            ].map((item, i) => (
              <AnimateIn
                key={item.num}
                delay={i * 100}
                className="hover-raise p-10 img-rounded flex flex-col"
                style={{ background: "var(--bg-2)", border: "1px solid var(--line)" } as CSSProperties}
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
            <p className="text-[10px] tracking-[0.35em] uppercase font-bold mb-4" style={{ color: "var(--coral)" }}>
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
            <p className="text-base mt-6 max-w-xl" style={{ color: "var(--fg-2)", lineHeight: "1.7" }}>
              {t.contact.why_body}
            </p>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}

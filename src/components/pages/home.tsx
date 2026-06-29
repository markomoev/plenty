"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useCallback, type CSSProperties, type ReactNode } from "react";
import { useLanguage } from "@/contexts/language";
import { AnimateIn } from "@/components/AnimateIn";

/* ── Store status pill ─────────────────────────────────── */
function StoreStatus() {
  const { lang } = useLanguage();
  const [status, setStatus] = useState<{ open: boolean; label: string } | null>(null);

  const compute = useCallback(() => {
    const now = new Date();
    const day = now.getDay(); // 0 = Sun, 6 = Sat
    const mins = now.getHours() * 60 + now.getMinutes();
    const OPEN = 10 * 60;       // 10:00
    const CLOSE = 18 * 60 + 30; // 18:30
    const isWeekday = day >= 1 && day <= 6;
    const isOpen = isWeekday && mins >= OPEN && mins < CLOSE;

    let label: string;
    if (isOpen) {
      label = lang === "bg" ? "Отворено · затваря 18:30" : "Open · closes 18:30";
    } else if (day === 0 || (day === 6 && mins >= CLOSE)) {
      label = lang === "bg"
        ? "Затворено · отваря пон 10:00"
        : "Closed · opens Mon 10:00";
    } else if (mins >= CLOSE) {
      label = lang === "bg"
        ? "Затворено · отваря утре 10:00"
        : "Closed · opens tomorrow 10:00";
    } else {
      label = lang === "bg"
        ? "Затворено · отваря 10:00"
        : "Closed · opens at 10:00";
    }
    return { open: isOpen, label };
  }, [lang]);

  useEffect(() => {
    setStatus(compute());
    const id = setInterval(() => setStatus(compute()), 30_000);
    return () => clearInterval(id);
  }, [compute]);

  if (!status) return null;

  return (
    <div className="status-pill mt-6">
      <span className={`status-dot ${status.open ? "open" : "closed"}`} />
      {status.label}
    </div>
  );
}

/* ── Magnetic CTA link ─────────────────────────────────── */
type MagneticLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

function MagneticLink({ href, children, variant = "primary", className = "" }: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const canMag = useRef(false);

  useEffect(() => {
    canMag.current =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  function onMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!canMag.current || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    ref.current.style.transform = `translate(${dx * 0.18}px, ${dy * 0.32}px)`;
    ref.current.style.transition = "transform 0.08s linear";
  }

  function onMouseLeave() {
    if (!ref.current) return;
    ref.current.style.transform = "";
    ref.current.style.transition =
      "transform 0.5s var(--ease), box-shadow 0.45s var(--ease), filter 0.45s var(--ease)";
  }

  return (
    <Link
      ref={ref}
      href={href}
      className={`inline-flex items-center gap-2 px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] ${
        variant === "primary" ? "btn-primary" : "btn-ghost"
      } ${className}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
      <span className="btn-arrow" aria-hidden="true">→</span>
    </Link>
  );
}

/* ── Main page ─────────────────────────────────────────── */
export function HomePage() {
  const { t, lang } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const ctaBgRef = useRef<HTMLDivElement>(null);

  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=ул.+Търговска+60,+Ловеч,+България";

  /* Hero load sequence ───────────────────────── */
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    function reveal() { el?.classList.add("loaded"); }
    if (document.readyState === "complete") {
      reveal();
    } else {
      window.addEventListener("load", reveal, { once: true });
      const fallback = setTimeout(reveal, 400);
      return () => {
        window.removeEventListener("load", reveal);
        clearTimeout(fallback);
      };
    }
  }, []);

  /* Parallax via RAF ─────────────────────────── */
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf: number;

    function tick() {
      const scrollY = window.scrollY;

      if (heroBgRef.current) {
        heroBgRef.current.style.transform = `translateY(${scrollY * 0.18}px)`;
      }

      if (ctaBgRef.current) {
        const parent = ctaBgRef.current.parentElement;
        if (parent) {
          const rect = parent.getBoundingClientRect();
          const fromCenter = rect.top + rect.height / 2 - window.innerHeight / 2;
          ctaBgRef.current.style.transform = `translateY(${fromCenter * 0.14}px)`;
        }
      }

      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  /* Statement strip ──────────────────────────── */
  const strip =
    lang === "bg"
      ? [
          "Дрехи за жени и мъже",
          "Различни марки и модели",
          "Пробване на място",
          "В центъра на Ловеч",
        ]
      : [
          "Women's & Men's Clothing",
          "Different Brands & Styles",
          "Try On In Store",
          "Lovech City Centre",
        ];

  /* Gallery tiles ────────────────────────────── */
  const galleryTiles = [
    {
      src: "/store/IMG_9047.JPG",
      alt: t.home.gallery_interior,
      label: t.home.gallery_interior,
      span: "md:col-span-4 md:row-span-2",
    },
    {
      src: "/store/IMG_9053.JPG",
      alt: t.home.gallery_facade,
      label: t.home.gallery_facade,
      span: "md:col-span-8",
    },
    {
      src: "/store/IMG_9061.JPG",
      alt: t.home.gallery_interior,
      label: t.home.gallery_interior,
      span: "md:col-span-8",
    },
    {
      src: "/store/IMG_9049.JPG",
      alt: t.home.gallery_facade,
      label: t.home.gallery_facade,
      span: "md:col-span-6",
    },
    {
      src: "/store/IMG_9065.JPG",
      alt: t.home.gallery_entrance,
      label: t.home.gallery_entrance,
      span: "md:col-span-6",
    },
  ];

  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-screen -mt-20 flex flex-col justify-end overflow-hidden pb-20 px-10 md:px-24"
      >
        {/* Background image with parallax room */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            ref={heroBgRef}
            className="absolute"
            style={
              { inset: "-25%", willChange: "transform" } as CSSProperties
            }
          >
            <Image
              src="/store/IMG_9065.JPG"
              alt="Интериор на PLENTY в Ловеч"
              fill
              className="object-cover opacity-65"
              priority
              sizes="100vw"
            />
          </div>
          {/* Gradient: dark top → transparent mid → dark bottom */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.12) 35%, rgba(0,0,0,0.80) 100%)",
            }}
          />
        </div>

        {/* Hero content — sits in bottom third */}
        <div className="relative z-10 max-w-screen-2xl mx-auto w-full">
          {/* Eyebrow */}
          <p
            className="hero-fade text-[10px] tracking-[0.35em] uppercase mb-6 font-bold"
            style={
              { "--hero-delay": "50ms", color: "var(--coral-soft)" } as CSSProperties
            }
          >
            {t.home.eyebrow}
          </p>

          {/* Headline — each line in its own clip mask */}
          <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black uppercase mb-6" style={{ letterSpacing: "-0.015em" }}>
            <span
              className="hero-clip-wrap"
              style={{ "--hero-delay": "150ms" } as CSSProperties}
            >
              <span className="hero-clip-inner text-on-surface leading-none block">
                {t.home.hero_title_1}
              </span>
            </span>
            <span
              className="hero-clip-wrap"
              style={{ "--hero-delay": "270ms" } as CSSProperties}
            >
              <span className="hero-clip-inner text-on-surface leading-none block">
                {t.home.hero_title_2}
              </span>
            </span>
          </h1>

          {/* Subtext */}
          <p
            className="hero-rise text-base md:text-lg mb-10 max-w-lg"
            style={
              {
                "--hero-delay": "500ms",
                color: "var(--fg-2)",
                lineHeight: "1.7",
              } as CSSProperties
            }
          >
            {t.home.hero_body}
          </p>

          {/* CTA buttons */}
          <div
            className="hero-rise flex flex-wrap gap-4"
            style={{ "--hero-delay": "600ms" } as CSSProperties}
          >
            <MagneticLink href="/about" variant="primary">
              {t.home.cta_about}
            </MagneticLink>
            <MagneticLink href="/contact" variant="ghost">
              {t.home.cta_contact}
            </MagneticLink>
          </div>

          {/* Status pill */}
          <div
            className="hero-rise"
            style={{ "--hero-delay": "700ms" } as CSSProperties}
          >
            <StoreStatus />
          </div>
        </div>
      </section>

      {/* ── Statement strip (replaces marquee) ─────────── */}
      <div
        className="py-4"
        style={{
          background: "var(--bg-1)",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div className="max-w-screen-2xl mx-auto px-8 md:px-16 flex flex-wrap justify-center items-center gap-y-2">
          {strip.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.3em]"
              style={{ color: "var(--fg-3)" }}
            >
              {item}
              {i < strip.length - 1 && (
                <span
                  className="mx-6 md:mx-8"
                  style={{ color: "var(--coral)" }}
                  aria-hidden="true"
                >
                  ✦
                </span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* ── Philosophy / Pillars ────────────────────────── */}
      <section
        className="py-24 px-8 md:px-16 lg:px-24"
        style={{ background: "var(--bg-0)" }}
      >
        <div className="max-w-screen-2xl mx-auto">
          {/* Two-column section head */}
          <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:items-end">
            <AnimateIn>
              <p
                className="text-[10px] tracking-[0.35em] uppercase font-bold mb-4"
                style={{ color: "var(--coral)" }}
              >
                {t.home.pillars_eyebrow}
              </p>
              <h2
                className="text-4xl md:text-6xl font-black uppercase leading-tight"
                style={{ letterSpacing: "-0.015em" }}
              >
                {t.home.pillars_title_1}
                <br />
                {t.home.pillars_title_2}
              </h2>
            </AnimateIn>
            <AnimateIn delay={100}>
              <p style={{ color: "var(--fg-2)", lineHeight: "1.7" }}>
                {t.home.pillars_body}
              </p>
            </AnimateIn>
          </div>

          {/* Pillar cards */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t"
            style={{ borderColor: "var(--line)" }}
          >
            {[
              { num: "01", title: t.home.pillar1_title, body: t.home.pillar1_body },
              { num: "02", title: t.home.pillar2_title, body: t.home.pillar2_body },
              { num: "03", title: t.home.pillar3_title, body: t.home.pillar3_body },
            ].map((p, i) => (
              <AnimateIn
                key={p.num}
                delay={i * 100}
                className="pt-12 pb-12 md:px-12 first:md:pl-0 last:md:pr-0 border-b md:border-b-0 md:border-r last:md:border-r-0 last:border-b-0"
                style={{ borderColor: "var(--line)" } as CSSProperties}
              >
                <span
                  className="text-[11px] font-black tracking-[0.3em] uppercase block mb-8"
                  style={{ color: "var(--coral)" }}
                >
                  {p.num}
                </span>
                <h3
                  className="text-xl font-black uppercase mb-5"
                  style={{ letterSpacing: "-0.01em", color: "var(--fg)" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "var(--fg-2)", lineHeight: "1.7" }}
                >
                  {p.body}
                </p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Store Gallery ───────────────────────────────── */}
      <section
        className="py-24 px-8 md:px-16 lg:px-24"
        style={{ background: "var(--bg-1)" }}
      >
        <div className="max-w-screen-2xl mx-auto">
          <AnimateIn className="mb-12">
            <p
              className="text-[10px] tracking-[0.35em] uppercase font-bold mb-3"
              style={{ color: "var(--coral)" }}
            >
              {t.home.gallery_eyebrow}
            </p>
            <h2
              className="text-4xl md:text-5xl font-black uppercase"
              style={{ letterSpacing: "-0.015em", color: "var(--fg)" }}
            >
              {t.home.gallery_title_1}
              <br />
              {t.home.gallery_title_2}
            </h2>
            <p
              className="text-sm mt-6 max-w-lg"
              style={{ color: "var(--fg-2)", lineHeight: "1.7" }}
            >
              {t.home.gallery_body}
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[280px] gap-2 mb-12">
            {galleryTiles.map((tile, idx) => (
              <a
                key={idx}
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden img-rounded block ${tile.span} aspect-[4/3] md:aspect-auto`}
              >
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  fill
                  className="object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                />
                {/* Coral soft-light wash */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-[0.22] transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "var(--coral)",
                    mixBlendMode: "soft-light",
                  }}
                />
                {/* Dark scrim */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[400ms]">
                  <p className="text-white/70 text-[10px] uppercase tracking-[0.25em] mb-1">
                    {tile.label}
                  </p>
                  <p className="text-white font-black uppercase tracking-[0.15em] text-[11px]">
                    {t.home.gallery_maps}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Map & Location ──────────────────────────────── */}
      <section
        className="py-24 px-8 md:px-16 lg:px-24"
        style={{ background: "var(--bg-0)" }}
      >
        <div className="max-w-screen-2xl mx-auto">
          <AnimateIn className="mb-12">
            <p
              className="text-[10px] tracking-[0.35em] uppercase font-bold mb-3"
              style={{ color: "var(--coral)" }}
            >
              {t.home.map_eyebrow}
            </p>
            <h2
              className="text-4xl md:text-5xl font-black uppercase"
              style={{ letterSpacing: "-0.015em", color: "var(--fg)" }}
            >
              {t.home.map_title_1}
              <br className="md:hidden" />
              <span className="hidden md:inline"> </span>
              {t.home.map_title_2}
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Address card */}
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
                    {t.home.address_label}
                  </p>
                  <p
                    className="text-lg font-black uppercase leading-snug whitespace-pre-line"
                    style={{ color: "var(--fg)" }}
                  >
                    {t.home.address_value}
                  </p>
                </div>
                <div>
                  <p
                    className="text-[10px] tracking-[0.3em] uppercase font-bold mb-2"
                    style={{ color: "var(--fg-3)" }}
                  >
                    {t.home.hours_label}
                  </p>
                  <p
                    className="text-sm leading-relaxed whitespace-pre-line"
                    style={{ color: "var(--fg-2)" }}
                  >
                    {t.home.hours_value}
                  </p>
                </div>
                <div>
                  <p
                    className="text-[10px] tracking-[0.3em] uppercase font-bold mb-2"
                    style={{ color: "var(--fg-3)" }}
                  >
                    {t.home.phone_label}
                  </p>
                  <p className="text-sm" style={{ color: "var(--fg-2)" }}>
                    {t.home.cta_phone_val}
                  </p>
                </div>
                {/* Live status in card */}
                <StoreStatus />
              </div>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all"
                style={{
                  border: "1px solid var(--line-2)",
                  color: "var(--fg)",
                  transition: "background var(--t1) var(--ease), color var(--t1) var(--ease)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "var(--fg)";
                  el.style.color = "var(--bg-0)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "";
                  el.style.color = "var(--fg)";
                }}
              >
                {t.home.open_maps}
              </a>
            </AnimateIn>

            {/* Map embed — unchanged */}
            <div className="md:col-span-2 h-[420px] md:h-auto min-h-[420px]">
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

      {/* ── Final CTA ───────────────────────────────────── */}
      <section className="relative overflow-hidden text-white py-28 px-8 md:px-16 lg:px-24">
        {/* Parallax background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            ref={ctaBgRef}
            className="absolute"
            style={{ inset: "-20%", willChange: "transform" } as CSSProperties}
          >
            <Image
              src="/store/img_9057-rework.png"
              alt="PLENTY store Lovech"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/75 to-black/40" />
        </div>

        <div className="relative z-10 max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimateIn>
            <p
              className="text-[10px] tracking-[0.35em] uppercase font-bold mb-4"
              style={{ color: "var(--coral)" }}
            >
              {t.home.cta_eyebrow}
            </p>
            <h2
              className="text-4xl md:text-6xl font-black uppercase leading-tight mb-8"
              style={{ letterSpacing: "-0.015em" }}
            >
              {t.home.cta_title_1}
              <br />
              {t.home.cta_title_2}
            </h2>
            <p
              className="text-sm leading-[1.7] mb-10 max-w-md"
              style={{ color: "rgba(246,242,236,0.7)" }}
            >
              {t.home.cta_body}
            </p>
            <div className="flex flex-wrap gap-4">
              <MagneticLink href="/contact" variant="primary">
                {t.home.cta_find}
              </MagneticLink>
              <MagneticLink href="/about" variant="ghost">
                {t.home.cta_about_us}
              </MagneticLink>
            </div>
          </AnimateIn>

          <AnimateIn delay={150} className="grid grid-cols-2 gap-6">
            {[
              { label: t.home.cta_address, value: t.home.cta_address_val },
              { label: t.home.cta_phone,   value: t.home.cta_phone_val },
              { label: t.home.cta_hours,   value: t.home.cta_hours_val },
              { label: t.home.cta_sunday,  value: t.home.cta_sunday_val },
            ].map((item) => (
              <div key={item.label}>
                <p
                  className="text-[10px] font-black uppercase tracking-[0.2em] mb-2"
                  style={{ color: "var(--coral)" }}
                >
                  {item.label}
                </p>
                <p
                  className="text-[13px] leading-relaxed whitespace-pre-line"
                  style={{ color: "rgba(246,242,236,0.7)" }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </AnimateIn>
        </div>
      </section>
    </>
  );
}

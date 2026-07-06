"use client";

import Image from "next/image";
import { useRef, type CSSProperties } from "react";
import { useLanguage } from "@/contexts/language";
import { AnimateIn } from "@/components/AnimateIn";
import { MagneticLink } from "@/components/MagneticLink";
import { useHeroLoad } from "@/hooks/useHeroLoad";
import { useParallax } from "@/hooks/useParallax";
import { getPlentyYears, withYears } from "@/lib/plenty";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=ул.+Търговска+60,+Ловеч,+България";

export function AboutPage() {
  const { t } = useLanguage();
  const headerRef = useRef<HTMLElement>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);
  const ctaImgRef = useRef<HTMLDivElement>(null);

  useHeroLoad(headerRef);
  useParallax(heroImgRef, 0.12, "center");
  useParallax(ctaImgRef, 0.14, "center");

  const years = getPlentyYears();
  const headerBody = withYears(t.about.header_body, years);
  const storyP1 = withYears(t.about.story_p1, years);
  const quote = withYears(t.about.quote, years);

  const values = [
    { number: "01", title: t.about.v1_title, body: t.about.v1_body, img: "/store/IMG_9050.JPG" },
    { number: "02", title: t.about.v2_title, body: t.about.v2_body, img: "/store/IMG_9055.JPG" },
    { number: "03", title: t.about.v3_title, body: t.about.v3_body, img: "/store/IMG_9062.JPG" },
    { number: "04", title: t.about.v4_title, body: t.about.v4_body, img: "/store/IMG_9066.JPG" },
  ];

  return (
    <>
      {/* ── Editorial hero ───────────────────────────── */}
      <section ref={headerRef} className="-mt-20" style={{ background: "var(--bg-1)" }}>
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 min-h-screen">
          {/* Text column */}
          <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-32 pb-16 md:py-24 order-2 md:order-1">
            <p
              className="hero-fade text-[10px] tracking-[0.35em] uppercase font-bold mb-6"
              style={{ "--hero-delay": "50ms", color: "var(--coral)" } as CSSProperties}
            >
              {t.about.eyebrow}
            </p>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none mb-8"
              style={{ letterSpacing: "-0.015em" }}
            >
              <span className="hero-clip-wrap" style={{ "--hero-delay": "150ms" } as CSSProperties}>
                <span className="hero-clip-inner block" style={{ color: "var(--fg)" }}>
                  {t.about.page_title}
                </span>
              </span>
            </h1>
            <p
              className="hero-rise text-base md:text-lg max-w-lg"
              style={
                { "--hero-delay": "320ms", color: "var(--fg-2)", lineHeight: "1.7" } as CSSProperties
              }
            >
              {headerBody}
            </p>
          </div>

          {/* Image column — gradient + parallax */}
          <div className="relative overflow-hidden min-h-[55vh] md:min-h-full order-1 md:order-2">
            <div
              ref={heroImgRef}
              className="absolute"
              style={{ inset: "-15%", willChange: "transform" } as CSSProperties}
            >
              <Image
                src="/store/IMG_9058.JPG"
                alt="Интериор на PLENTY в Ловеч"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.12) 35%, rgba(0,0,0,0.55) 100%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── Pinned-image narrative ───────────────────── */}
      <section className="py-24 px-8 md:px-16 lg:px-24" style={{ background: "var(--bg-0)" }}>
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Sticky image */}
          <div>
            <div className="md:sticky md:top-28">
              <AnimateIn className="group relative aspect-[4/5] overflow-hidden img-rounded">
                <Image
                  src="/store/IMG_9048.JPG"
                  alt="PLENTY store interior Lovech"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-[0.22] transition-opacity duration-500 pointer-events-none"
                  style={{ background: "var(--coral)", mixBlendMode: "soft-light" }}
                />
              </AnimateIn>
            </div>
          </div>

          {/* Scrolling narrative */}
          <div className="md:py-8">
            <AnimateIn>
              <p
                className="text-[10px] tracking-[0.35em] uppercase font-bold mb-6"
                style={{ color: "var(--coral)" }}
              >
                {t.about.story_eyebrow}
              </p>
              <h2
                className="text-3xl md:text-5xl font-black uppercase mb-10 leading-tight"
                style={{ letterSpacing: "-0.015em", color: "var(--fg)" }}
              >
                {t.about.story_title}
              </h2>
            </AnimateIn>
            <div className="space-y-10 text-[16px] md:text-[18px]" style={{ color: "var(--fg-2)", lineHeight: "1.8" }}>
              <AnimateIn delay={0}><p>{t.about.story_r1}</p></AnimateIn>
              <AnimateIn delay={60}><p>{t.about.story_r2}</p></AnimateIn>
              <AnimateIn delay={120}><p>{t.about.story_r3}</p></AnimateIn>
              <AnimateIn delay={180}><p>{storyP1}</p></AnimateIn>
              <AnimateIn delay={240}><p>{t.about.story_p2}</p></AnimateIn>
              <AnimateIn delay={300}><p>{t.about.story_p3}</p></AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pull-quote break ─────────────────────────── */}
      <section
        className="py-28 md:py-40 px-8 md:px-16 lg:px-24"
        style={{ background: "var(--bg-1)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}
      >
        <AnimateIn className="max-w-5xl mx-auto text-center">
          <span
            className="block text-6xl md:text-8xl font-black leading-none mb-4"
            style={{ color: "var(--coral)" }}
            aria-hidden="true"
          >
            „
          </span>
          <blockquote
            className="text-3xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.1]"
            style={{ letterSpacing: "-0.015em", color: "var(--fg)" }}
          >
            {quote}
          </blockquote>
        </AnimateIn>
      </section>

      {/* ── Values as alternating image + text rows ──── */}
      <section className="py-24 px-8 md:px-16 lg:px-24" style={{ background: "var(--bg-0)" }}>
        <div className="max-w-screen-2xl mx-auto">
          <AnimateIn className="mb-20 max-w-2xl">
            <p
              className="text-[10px] tracking-[0.35em] uppercase font-bold mb-4"
              style={{ color: "var(--coral)" }}
            >
              {t.about.values_eyebrow}
            </p>
            <h2
              className="text-4xl md:text-5xl font-black uppercase"
              style={{ letterSpacing: "-0.015em", color: "var(--fg)" }}
            >
              {t.about.values_title}
            </h2>
          </AnimateIn>

          <div className="space-y-6 md:space-y-8">
            {values.map((v, i) => {
              const imgRight = i % 2 === 1;
              return (
                <AnimateIn
                  key={v.number}
                  delay={(i % 2) * 60}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch"
                >
                  {/* Image */}
                  <div
                    className={`group relative overflow-hidden img-rounded aspect-[16/10] md:aspect-auto md:min-h-[340px] ${
                      imgRight ? "md:order-2" : ""
                    }`}
                  >
                    <Image
                      src={v.img}
                      alt={v.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-[0.22] transition-opacity duration-500 pointer-events-none"
                      style={{ background: "var(--coral)", mixBlendMode: "soft-light" }}
                    />
                  </div>

                  {/* Text card */}
                  <div
                    className={`hover-raise flex flex-col justify-center p-10 md:p-14 img-rounded ${
                      imgRight ? "md:order-1" : ""
                    }`}
                    style={
                      { background: "var(--bg-2)", border: "1px solid var(--line)" } as CSSProperties
                    }
                  >
                    <span
                      className="text-[11px] font-black tracking-[0.3em] uppercase block mb-6"
                      style={{ color: "var(--coral)" }}
                    >
                      {v.number}
                    </span>
                    <h3
                      className="text-2xl md:text-3xl font-black uppercase mb-5"
                      style={{ letterSpacing: "-0.01em", color: "var(--fg)" }}
                    >
                      {v.title}
                    </h3>
                    <p className="text-[15px]" style={{ color: "var(--fg-2)", lineHeight: "1.8" }}>
                      {v.body}
                    </p>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Closing CTA band (full-bleed storefront) ─── */}
      <section className="on-dark-image relative overflow-hidden py-32 md:py-40 px-8 md:px-16 lg:px-24" style={{ color: "var(--fg-on-dark)" }}>
        <div className="absolute inset-0 overflow-hidden">
          <div
            ref={ctaImgRef}
            className="absolute"
            style={{ inset: "-20%", willChange: "transform" } as CSSProperties}
          >
            <Image
              src="/store/img_9057-rework.png"
              alt="PLENTY store Lovech"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/75 to-black/40" />
        </div>

        <AnimateIn className="relative z-10 max-w-screen-2xl mx-auto">
          <p className="text-[10px] tracking-[0.35em] uppercase font-bold mb-4" style={{ color: "var(--coral)" }}>
            {t.about.visit_eyebrow}
          </p>
          <h2
            className="text-4xl md:text-6xl font-black uppercase leading-tight mb-8"
            style={{ letterSpacing: "-0.015em" }}
          >
            {t.about.visit_title_1}
            <br />
            {t.about.visit_title_2}
          </h2>
          <p className="text-sm md:text-base leading-[1.7] mb-10 max-w-md" style={{ color: "var(--fg-on-dark-muted)" }}>
            {t.about.visit_body}
          </p>
          <div className="flex flex-wrap gap-4">
            <MagneticLink href={mapsUrl} variant="primary">
              {t.about.visit_find}
            </MagneticLink>
            <MagneticLink href="/contact" variant="ghost">
              {t.about.cta_button}
            </MagneticLink>
          </div>
        </AnimateIn>
      </section>
    </>
  );
}

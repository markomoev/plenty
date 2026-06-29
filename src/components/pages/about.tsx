"use client";

import Image from "next/image";
import { useRef, type CSSProperties } from "react";
import { useLanguage } from "@/contexts/language";
import { AnimateIn } from "@/components/AnimateIn";
import { MagneticLink } from "@/components/MagneticLink";
import { useHeroLoad } from "@/hooks/useHeroLoad";

export function AboutPage() {
  const { t } = useLanguage();
  const headerRef = useRef<HTMLElement>(null);

  useHeroLoad(headerRef);

  const values = [
    { number: "01", title: t.about.v1_title, body: t.about.v1_body },
    { number: "02", title: t.about.v2_title, body: t.about.v2_body },
    { number: "03", title: t.about.v3_title, body: t.about.v3_body },
    { number: "04", title: t.about.v4_title, body: t.about.v4_body },
  ];

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
            {/* Eyebrow */}
            <p
              className="hero-fade text-[10px] tracking-[0.35em] uppercase font-bold mb-4"
              style={{ "--hero-delay": "50ms", color: "var(--coral)" } as CSSProperties}
            >
              {t.about.eyebrow}
            </p>
            {/* Headline — clip-mask reveal */}
            <h1
              className="text-5xl md:text-7xl font-black uppercase leading-none"
              style={{ letterSpacing: "-0.015em" }}
            >
              <span
                className="hero-clip-wrap"
                style={{ "--hero-delay": "150ms" } as CSSProperties}
              >
                <span className="hero-clip-inner block" style={{ color: "var(--fg)" }}>
                  {t.about.page_title}
                </span>
              </span>
            </h1>
          </div>
          {/* Subheading */}
          <p
            className="hero-rise text-base max-w-lg"
            style={
              {
                "--hero-delay": "300ms",
                color: "var(--fg-2)",
                lineHeight: "1.7",
              } as CSSProperties
            }
          >
            {t.about.header_body}
          </p>
        </div>
      </section>

      {/* ── Story ────────────────────────────────────── */}
      <section className="py-24 px-8 md:px-16 lg:px-24" style={{ background: "var(--bg-0)" }}>
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Story image with hover polish */}
          <AnimateIn className="group relative aspect-[4/5] overflow-hidden img-rounded">
            <Image
              src="/store/IMG_9048.JPG"
              alt="PLENTY store interior Lovech"
              fill
              className="object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
            />
            {/* Coral soft-light wash */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-[0.22] transition-opacity duration-500 pointer-events-none"
              style={{ background: "var(--coral)", mixBlendMode: "soft-light" }}
            />
          </AnimateIn>

          <AnimateIn delay={100}>
            <p
              className="text-[10px] tracking-[0.35em] uppercase font-bold mb-6"
              style={{ color: "var(--coral)" }}
            >
              {t.about.story_eyebrow}
            </p>
            <h2
              className="text-3xl md:text-4xl font-black uppercase mb-8 leading-tight"
              style={{ letterSpacing: "-0.015em", color: "var(--fg)" }}
            >
              {t.about.story_title}
            </h2>
            <div className="space-y-5 text-[15px]" style={{ color: "var(--fg-2)", lineHeight: "1.8" }}>
              <p>{t.about.story_p1}</p>
              <p>{t.about.story_p2}</p>
              <p>{t.about.story_p3}</p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────── */}
      <section className="py-24 px-8 md:px-16 lg:px-24" style={{ background: "var(--bg-1)" }}>
        <div className="max-w-screen-2xl mx-auto">
          <AnimateIn className="mb-16">
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

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t"
            style={{ borderColor: "var(--line)" }}
          >
            {values.map((v, i) => (
              <AnimateIn
                key={v.number}
                delay={i * 80}
                className={`hover-raise pt-12 pb-12 border-b ${
                  i % 2 === 0 ? "md:border-r md:pr-16" : "md:pl-16"
                } ${i >= values.length - 2 ? "md:border-b-0" : ""} ${
                  i === values.length - 1 ? "border-b-0" : ""
                }`}
                style={
                  {
                    borderColor: "var(--line)",
                    background: "var(--bg-2)",
                  } as CSSProperties
                }
              >
                <span
                  className="text-[11px] font-black tracking-[0.3em] uppercase block mb-6"
                  style={{ color: "var(--coral)" }}
                >
                  {v.number}
                </span>
                <h3
                  className="text-xl font-black uppercase mb-4"
                  style={{ letterSpacing: "-0.01em", color: "var(--fg)" }}
                >
                  {v.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--fg-2)", lineHeight: "1.7" }}>
                  {v.body}
                </p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="py-24 px-8 md:px-16 lg:px-24" style={{ background: "var(--bg-2)" }}>
        <AnimateIn className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h2
              className="text-3xl md:text-5xl font-black uppercase"
              style={{ letterSpacing: "-0.015em", color: "var(--fg)" }}
            >
              {t.about.cta_title}
            </h2>
            <p className="text-sm mt-4" style={{ color: "var(--fg-2)", lineHeight: "1.7" }}>
              {t.about.cta_body}
            </p>
          </div>
          <MagneticLink href="/contact" variant="primary" className="shrink-0">
            {t.about.cta_button}
          </MagneticLink>
        </AnimateIn>
      </section>
    </>
  );
}

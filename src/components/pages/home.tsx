"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/language";

export function HomePage() {
  const { t } = useLanguage();

  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=ул.+Търговска+58,+Ловеч,+България";

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="min-h-[calc(100vh-80px)] bg-surface flex flex-col justify-end pb-20 px-10 md:px-24">
        <div className="max-w-screen-2xl mx-auto w-full">
          <p className="text-[10px] tracking-[0.35em] uppercase mb-6 font-bold text-secondary">
            {t.home.eyebrow}
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black tracking-[-0.03em] mb-6 leading-[0.92] uppercase text-on-surface">
            {t.home.hero_title_1}
            <br />
            {t.home.hero_title_2}
          </h1>
          <p className="text-secondary text-base md:text-lg mb-12 max-w-lg leading-relaxed">
            {t.home.hero_body}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/about"
              className="bg-primary hover:bg-primary-dark text-white px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-300"
            >
              {t.home.cta_about}
            </Link>
            <Link
              href="/contact"
              className="border border-on-surface/20 hover:border-on-surface/50 text-on-surface px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-300"
            >
              {t.home.cta_contact}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Marquee ───────────────────────────────────────────────── */}
      <div className="bg-inverse-surface text-white py-3.5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...t.home.marquee, ...t.home.marquee, ...t.home.marquee, ...t.home.marquee].map(
            (item, i) => (
              <span
                key={i}
                className="text-[10px] font-bold uppercase tracking-[0.3em] px-10 inline-flex items-center gap-8"
              >
                {item}
                <span className="text-primary">✦</span>
              </span>
            )
          )}
        </div>
      </div>

      {/* ── Philosophy ────────────────────────────────────────────── */}
      <section className="bg-surface py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-20">
            <p className="text-[10px] tracking-[0.35em] uppercase text-secondary font-bold mb-4">
              {t.home.pillars_eyebrow}
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-[-0.025em] uppercase leading-tight max-w-3xl">
              {t.home.pillars_title_1}
              <br />
              {t.home.pillars_title_2}
            </h2>
            <p className="text-secondary text-base mt-6 max-w-xl leading-relaxed">
              {t.home.pillars_body}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-surface-dim">
            {[
              { num: "01", title: t.home.pillar1_title, body: t.home.pillar1_body },
              { num: "02", title: t.home.pillar2_title, body: t.home.pillar2_body },
              { num: "03", title: t.home.pillar3_title, body: t.home.pillar3_body },
            ].map((p) => (
              <div
                key={p.num}
                className="pt-12 pb-12 md:px-12 first:md:pl-0 last:md:pr-0 border-b md:border-b-0 md:border-r border-surface-dim last:border-r-0 last:border-b-0"
              >
                <span className="text-[11px] font-black tracking-[0.3em] text-primary uppercase block mb-8">
                  {p.num}
                </span>
                <h3 className="text-xl font-black uppercase tracking-[-0.01em] mb-5">{p.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Store Gallery ─────────────────────────────────────────── */}
      <section className="bg-surface-container-low py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-12">
            <p className="text-[10px] tracking-[0.35em] uppercase text-secondary font-bold mb-3">
              {t.home.gallery_eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-[-0.025em] uppercase">
              {t.home.gallery_title_1}
              <br />
              {t.home.gallery_title_2}
            </h2>
            <p className="text-secondary text-sm mt-6 max-w-lg leading-relaxed">
              {t.home.gallery_body}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[280px] gap-2 mb-12">
            {/* tall, spans 2 rows */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-surface-container block md:col-span-4 md:row-span-2 aspect-[4/3] md:aspect-auto"
            >
              <Image
                src="/store/IMG_9047.JPG"
                alt={t.home.gallery_interior}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <p className="text-white/70 text-[10px] uppercase tracking-[0.25em] mb-1">
                  {t.home.gallery_interior}
                </p>
                <p className="text-white font-black uppercase tracking-[0.15em] text-[11px]">
                  {t.home.gallery_maps}
                </p>
              </div>
            </a>
            {/* wide */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-surface-container block md:col-span-8 aspect-[4/3] md:aspect-auto"
            >
              <Image
                src="/store/IMG_9053.JPG"
                alt={t.home.gallery_facade}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <p className="text-white/70 text-[10px] uppercase tracking-[0.25em] mb-1">
                  {t.home.gallery_facade}
                </p>
                <p className="text-white font-black uppercase tracking-[0.15em] text-[11px]">
                  {t.home.gallery_maps}
                </p>
              </div>
            </a>
            {/* wide, row 2 */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-surface-container block md:col-span-8 aspect-[4/3] md:aspect-auto"
            >
              <Image
                src="/store/IMG_9061.JPG"
                alt={t.home.gallery_interior}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <p className="text-white/70 text-[10px] uppercase tracking-[0.25em] mb-1">
                  {t.home.gallery_interior}
                </p>
                <p className="text-white font-black uppercase tracking-[0.15em] text-[11px]">
                  {t.home.gallery_maps}
                </p>
              </div>
            </a>
            {/* half */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-surface-container block md:col-span-6 aspect-[4/3] md:aspect-auto"
            >
              <Image
                src="/store/IMG_9049.JPG"
                alt={t.home.gallery_facade}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <p className="text-white/70 text-[10px] uppercase tracking-[0.25em] mb-1">
                  {t.home.gallery_facade}
                </p>
                <p className="text-white font-black uppercase tracking-[0.15em] text-[11px]">
                  {t.home.gallery_maps}
                </p>
              </div>
            </a>
            {/* half */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-surface-container block md:col-span-6 aspect-[4/3] md:aspect-auto"
            >
              <Image
                src="/store/IMG_9065.JPG"
                alt={t.home.gallery_entrance}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <p className="text-white/70 text-[10px] uppercase tracking-[0.25em] mb-1">
                  {t.home.gallery_entrance}
                </p>
                <p className="text-white font-black uppercase tracking-[0.15em] text-[11px]">
                  {t.home.gallery_maps}
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── Map & Location ────────────────────────────────────────── */}
      <section className="bg-surface py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-12">
            <p className="text-[10px] tracking-[0.35em] uppercase text-secondary font-bold mb-3">
              {t.home.map_eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-[-0.025em] uppercase">
              {t.home.map_title_1}
              <br />
              {t.home.map_title_2}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            <div className="bg-inverse-surface text-white p-10 flex flex-col justify-between">
              <div className="space-y-8">
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase opacity-50 font-bold mb-2">
                    {t.home.address_label}
                  </p>
                  <p className="text-lg font-black uppercase leading-snug whitespace-pre-line">
                    {t.home.address_value}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase opacity-50 font-bold mb-2">
                    {t.home.hours_label}
                  </p>
                  <p className="text-sm leading-relaxed opacity-80 whitespace-pre-line">
                    {t.home.hours_value}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase opacity-50 font-bold mb-2">
                    {t.home.phone_label}
                  </p>
                  <p className="text-sm opacity-80">{t.home.cta_phone_val}</p>
                </div>
              </div>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block border border-white text-white px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors duration-300"
              >
                {t.home.open_maps}
              </a>
            </div>
            <div className="md:col-span-2 h-[420px] md:h-auto min-h-[420px]">
              <iframe
                src="https://maps.google.com/maps?q=ул.+Търговска+58,+Ловеч,+България&output=embed&z=17"
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

      {/* ── Final CTA ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden text-white py-28 px-8 md:px-16 lg:px-24">
        <Image
          src="/store/img_9057-rework.png"
          alt="PLENTY store Lovech"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/75 to-black/40" />
        <div className="relative z-10 max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase font-bold opacity-50 mb-4">
              {t.home.cta_eyebrow}
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-[-0.025em] uppercase leading-tight mb-8">
              {t.home.cta_title_1}
              <br />
              {t.home.cta_title_2}
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mb-10 max-w-md">
              {t.home.cta_body}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary-dark text-white px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-300"
              >
                {t.home.cta_find}
              </Link>
              <Link
                href="/about"
                className="border border-white/40 hover:border-white/70 text-white px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-300"
              >
                {t.home.cta_about_us}
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: t.home.cta_address, value: t.home.cta_address_val },
              { label: t.home.cta_phone, value: t.home.cta_phone_val },
              { label: t.home.cta_hours, value: t.home.cta_hours_val },
              { label: t.home.cta_sunday, value: t.home.cta_sunday_val },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-2">
                  {item.label}
                </p>
                <p className="text-white/70 text-[13px] leading-relaxed whitespace-pre-line">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

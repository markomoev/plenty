"use client";

import { useLanguage } from "@/contexts/language";
import { AnimateIn } from "@/components/AnimateIn";

export function ContactPage() {
  const { t } = useLanguage();

  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=ул.+Търговска+60,+Ловеч,+България";

  return (
    <>
      {/* ── Header ────────────────────────────────────────────────── */}
      <section className="bg-inverse-surface text-white py-28 px-8 md:px-16 lg:px-24">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          <div>
            <p
              className="hero-line text-[10px] tracking-[0.35em] uppercase font-bold opacity-40 mb-4"
              style={{ animationDelay: "0ms" }}
            >
              {t.contact.eyebrow}
            </p>
            <h1
              className="hero-line text-5xl md:text-7xl font-black tracking-[-0.03em] uppercase leading-none"
              style={{ animationDelay: "100ms" }}
            >
              {t.contact.page_title}
            </h1>
          </div>
          <p
            className="hero-line text-zinc-400 text-base leading-relaxed max-w-md"
            style={{ animationDelay: "200ms" }}
          >
            {t.contact.header_body}
          </p>
        </div>
      </section>

      {/* ── Info + Map ────────────────────────────────────────────── */}
      <section className="bg-surface py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Info panel */}
            <AnimateIn delay={80} className="bg-inverse-surface text-white p-10 flex flex-col justify-between">
              <div className="space-y-10">
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase opacity-50 font-bold mb-3">
                    {t.contact.address_label}
                  </p>
                  <p className="text-lg font-black uppercase leading-snug whitespace-pre-line">
                    {t.contact.address_value}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase opacity-50 font-bold mb-3">
                    {t.contact.phone_label}
                  </p>
                  <p className="text-lg font-black uppercase leading-snug">
                    {t.contact.phone_value}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase opacity-50 font-bold mb-3">
                    {t.contact.hours_label}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between gap-8">
                      <p className="text-sm opacity-70">{t.contact.hours_label_detail}</p>
                      <p className="text-sm font-bold">{t.contact.hours_value}</p>
                    </div>
                    <div className="flex justify-between gap-8">
                      <p className="text-sm opacity-70">{t.contact.closed_label}</p>
                      <p className="text-sm font-bold opacity-50">{t.contact.closed_value}</p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 inline-block border border-white text-white px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors duration-300"
              >
                {t.contact.open_maps}
              </a>
            </AnimateIn>

            {/* Map */}
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

      {/* ── What to expect ─────────────────────────────────────────── */}
      <section className="bg-surface py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <AnimateIn className="mb-16">
            <p className="text-[10px] tracking-[0.35em] uppercase text-secondary font-bold mb-4">
              {t.contact.expect_eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-[-0.025em] uppercase leading-tight max-w-3xl">
              {t.contact.expect_title_1}
              <br />
              {t.contact.expect_title_2}
            </h2>
            <p className="text-secondary text-base mt-6 max-w-xl leading-relaxed">
              {t.contact.expect_body}
            </p>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-surface-dim">
            {[
              { num: "01", title: t.contact.expect1_title, body: t.contact.expect1_body },
              { num: "02", title: t.contact.expect2_title, body: t.contact.expect2_body },
              { num: "03", title: t.contact.expect3_title, body: t.contact.expect3_body },
            ].map((item, i) => (
              <AnimateIn
                key={item.num}
                delay={i * 100}
                className="pt-12 pb-12 md:px-12 first:md:pl-0 last:md:pr-0 border-b md:border-b-0 md:border-r border-surface-dim last:border-r-0 last:border-b-0"
              >
                <span className="text-[11px] font-black tracking-[0.3em] text-primary uppercase block mb-8">
                  {item.num}
                </span>
                <h3 className="text-xl font-black uppercase tracking-[-0.01em] mb-5">
                  {item.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed">{item.body}</p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why visit ──────────────────────────────────────────────── */}
      <section className="bg-surface-container-low py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <AnimateIn className="mb-16">
            <p className="text-[10px] tracking-[0.35em] uppercase text-secondary font-bold mb-4">
              {t.contact.why_eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-[-0.025em] uppercase leading-tight max-w-3xl">
              {t.contact.why_title_1}
              <br />
              {t.contact.why_title_2}
            </h2>
            <p className="text-secondary text-base mt-6 max-w-xl leading-relaxed">
              {t.contact.why_body}
            </p>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { title: t.contact.why1_title, body: t.contact.why1_body },
              { title: t.contact.why2_title, body: t.contact.why2_body },
              { title: t.contact.why3_title, body: t.contact.why3_body },
            ].map((item, i) => (
              <AnimateIn
                key={item.title}
                delay={i * 100}
                className="bg-surface p-8 md:p-10 min-h-56 flex flex-col justify-between"
              >
                <h3 className="text-xl font-black uppercase tracking-[-0.01em] mb-6">
                  {item.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed">{item.body}</p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

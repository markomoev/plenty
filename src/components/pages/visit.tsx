"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/language";

export function VisitPage() {
  const { t } = useLanguage();

  const hours = [
    { day: t.visit.hours_mon_fri, time: t.visit.hours_mon_fri_time },
    { day: t.visit.hours_sat, time: t.visit.hours_sat_time },
    { day: t.visit.hours_sun, time: t.visit.hours_sun_time },
  ];

  const comparison = [
    { problem: t.visit.row1_problem, solution: t.visit.row1_solution },
    { problem: t.visit.row2_problem, solution: t.visit.row2_solution },
    { problem: t.visit.row3_problem, solution: t.visit.row3_solution },
    { problem: t.visit.row4_problem, solution: t.visit.row4_solution },
    { problem: t.visit.row5_problem, solution: t.visit.row5_solution },
  ];

  const mapsUrl = "https://maps.google.com/?q=Ловеч,+ул.+Търговска+58";

  return (
    <>
      {/* ── Header ────────────────────────────────────────────────── */}
      <section className="bg-inverse-surface text-white py-28 px-8 md:px-16 lg:px-24">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase font-bold opacity-40 mb-4">
              {t.visit.eyebrow}
            </p>
            <h1 className="text-5xl md:text-7xl font-black tracking-[-0.03em] uppercase leading-none mb-6">
              {t.visit.page_title_1}
              <br />
              {t.visit.page_title_2}
            </h1>
            <p className="text-zinc-400 text-base leading-relaxed max-w-md">{t.visit.header_body}</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {[
              { label: t.visit.address_label, value: t.visit.address_value },
              { label: t.visit.phone_label, value: t.visit.phone_value },
              { label: t.visit.hours_label, value: t.visit.hours_value },
              { label: t.visit.closed_label, value: t.visit.closed_value },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-2">
                  {item.label}
                </p>
                <p className="text-zinc-300 text-[13px] leading-relaxed whitespace-pre-line">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hours & Map CTA ───────────────────────────────────────── */}
      <section className="bg-surface py-16 px-8 md:px-16 lg:px-24 border-b border-surface-dim">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <ul className="flex flex-col sm:flex-row gap-8">
            {hours.map((h) => (
              <li key={h.day}>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-1">
                  {h.day}
                </p>
                <p
                  className={`text-sm font-bold uppercase tracking-wide ${
                    h.day === t.visit.hours_sun ? "text-secondary" : "text-on-surface"
                  }`}
                >
                  {h.time}
                </p>
              </li>
            ))}
          </ul>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-300 shrink-0"
          >
            {t.visit.directions}
          </a>
        </div>
      </section>

      {/* ── Comparison ────────────────────────────────────────────── */}
      <section className="bg-surface py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-16">
            <p className="text-[10px] tracking-[0.35em] uppercase text-secondary font-bold mb-4">
              {t.visit.comparison_eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-[-0.025em] uppercase leading-tight">
              {t.visit.comparison_title_1}
              <br />
              {t.visit.comparison_title_2}
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-0 mb-0">
            <div className="bg-surface-container px-8 py-5 border-b border-surface-dim">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-secondary">
                {t.visit.col_hassle}
              </p>
            </div>
            <div className="bg-primary px-8 py-5 border-b border-primary-dark">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white">
                {t.visit.col_plenty}
              </p>
            </div>
          </div>

          {comparison.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-2 gap-0 border-b border-surface-dim last:border-b-0"
            >
              <div className="bg-surface-container px-8 py-6 flex items-center gap-4">
                <span className="text-secondary text-lg font-black shrink-0">✕</span>
                <p className="text-secondary text-sm leading-snug">{row.problem}</p>
              </div>
              <div className="bg-surface-container-low px-8 py-6 flex items-center gap-4">
                <span className="text-primary text-lg font-black shrink-0">✓</span>
                <p className="text-on-surface text-sm font-medium leading-snug">{row.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Map ───────────────────────────────────────────────────── */}
      <section className="bg-surface-container h-[360px] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary mb-3">
            {t.visit.map_address}
          </p>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-300 inline-block"
          >
            {t.visit.open_maps}
          </a>
        </div>
      </section>

      {/* ── Bottom nav ────────────────────────────────────────────── */}
      <section className="bg-surface-container-low py-12 px-8 md:px-16 lg:px-24 border-t border-surface-dim">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-secondary">
            {t.visit.browse_label}
          </p>
          <div className="flex flex-wrap gap-8">
            <Link
              href="/collections"
              className="text-[11px] font-black uppercase tracking-[0.2em] hover:text-primary transition-colors"
            >
              {t.visit.browse_collections}
            </Link>
            <Link
              href="/news"
              className="text-[11px] font-black uppercase tracking-[0.2em] hover:text-primary transition-colors"
            >
              {t.visit.browse_news}
            </Link>
            <Link
              href="/about"
              className="text-[11px] font-black uppercase tracking-[0.2em] hover:text-primary transition-colors"
            >
              {t.visit.browse_about}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

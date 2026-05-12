"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/language";

export function AboutPage() {
  const { t } = useLanguage();

  const values = [
    { number: "01", title: t.about.v1_title, body: t.about.v1_body },
    { number: "02", title: t.about.v2_title, body: t.about.v2_body },
    { number: "03", title: t.about.v3_title, body: t.about.v3_body },
    { number: "04", title: t.about.v4_title, body: t.about.v4_body },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-inverse-surface text-white py-28 px-8 md:px-16 lg:px-24">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase font-bold opacity-50 mb-4">
              {t.about.eyebrow}
            </p>
            <h1 className="text-5xl md:text-7xl font-black tracking-[-0.03em] uppercase leading-none">
              {t.about.page_title}
            </h1>
          </div>
          <p className="text-zinc-400 text-base leading-relaxed max-w-lg">{t.about.header_body}</p>
        </div>
      </section>

      {/* Story section */}
      <section className="bg-surface py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] bg-surface-container overflow-hidden">
            <Image
              src="/store/IMG_9048.JPG"
              alt="PLENTY store interior Lovech"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase text-secondary font-bold mb-6">
              {t.about.story_eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-[-0.02em] mb-8 leading-tight">
              {t.about.story_title}
            </h2>
            <div className="space-y-5 text-[15px] leading-[1.8] text-secondary">
              <p>{t.about.story_p1}</p>
              <p>{t.about.story_p2}</p>
              <p>{t.about.story_p3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface-container-low py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-16">
            <p className="text-[10px] tracking-[0.35em] uppercase text-secondary font-bold mb-4">
              {t.about.values_eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-[-0.025em]">
              {t.about.values_title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-surface-dim">
            {values.map((v, i) => (
              <div
                key={v.number}
                className={`pt-12 pb-12 border-b border-surface-dim ${
                  i % 2 === 0 ? "md:border-r md:border-surface-dim md:pr-16" : "md:pl-16"
                } ${i >= values.length - 2 ? "md:border-b-0" : ""} ${
                  i === values.length - 1 ? "border-b-0" : ""
                }`}
              >
                <span className="text-[11px] font-black tracking-[0.3em] text-primary uppercase block mb-6">
                  {v.number}
                </span>
                <h3 className="text-xl font-black uppercase tracking-[-0.01em] mb-4">{v.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-inverse-surface text-white py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-[-0.025em]">
            {t.about.cta_title}
          </h2>
          <Link
            href="/contact"
            className="bg-primary hover:bg-primary-dark text-white px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-300 shrink-0"
          >
            {t.about.cta_button}
          </Link>
        </div>
      </section>
    </>
  );
}

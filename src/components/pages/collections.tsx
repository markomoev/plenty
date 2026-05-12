"use client";

import Image from "next/image";
import Link from "next/link";
import { looks } from "@/lib/looks";
import { useLanguage } from "@/contexts/language";

export function CollectionsPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Page header */}
      <section className="bg-surface py-20 px-8 md:px-16 lg:px-24 border-b border-surface-dim">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase text-secondary font-bold mb-4">
              {t.collections.eyebrow}
            </p>
            <h1 className="text-5xl md:text-7xl font-black tracking-[-0.03em] uppercase leading-none">
              {t.collections.page_title}
            </h1>
          </div>
          <p className="text-secondary text-sm leading-relaxed max-w-sm font-medium">
            {t.collections.header_body}{" "}
            <Link href="/visit" className="text-primary font-bold hover:underline">
              {t.collections.header_cta}
            </Link>
          </p>
        </div>
      </section>

      {/* Lookbook grid */}
      <section className="bg-surface-container-low py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-[400px]">
            {looks.map((look) => {
              const colSpan =
                look.span === "wide"
                  ? "md:col-span-8"
                  : look.span === "tall"
                  ? "md:col-span-4 md:row-span-2"
                  : "md:col-span-4";

              return (
                <div
                  key={look.id}
                  className={`group relative overflow-hidden bg-surface-container ${colSpan}`}
                >
                  <Image
                    src={look.image}
                    alt={look.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/60 mb-1">
                      {look.season}
                    </p>
                    <p className="text-white font-black uppercase tracking-tight text-lg">
                      {look.title}
                    </p>
                    <p className="text-white/70 text-[11px] uppercase tracking-widest mt-1">
                      {look.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="bg-inverse-surface text-white py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase font-bold opacity-50 mb-3">
              {t.collections.cta_eyebrow}
            </p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-[-0.025em]">
              {t.collections.cta_title}
            </h2>
            <p className="text-zinc-400 text-sm mt-4 max-w-md leading-relaxed">
              {t.collections.cta_body}
            </p>
          </div>
          <Link
            href="/visit"
            className="bg-primary hover:bg-primary-dark text-white px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-300 text-center shrink-0"
          >
            {t.collections.cta_button}
          </Link>
        </div>
      </section>
    </>
  );
}

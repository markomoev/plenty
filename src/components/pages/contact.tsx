"use client";

import { useLanguage } from "@/contexts/language";

export function ContactPage() {
  const { t } = useLanguage();

  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=ул.+Търговска+58,+Ловеч,+България";

  return (
    <>
      {/* ── Header ────────────────────────────────────────────────── */}
      <section className="bg-inverse-surface text-white py-28 px-8 md:px-16 lg:px-24">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase font-bold opacity-40 mb-4">
              {t.contact.eyebrow}
            </p>
            <h1 className="text-5xl md:text-7xl font-black tracking-[-0.03em] uppercase leading-none">
              {t.contact.page_title}
            </h1>
          </div>
          <p className="text-zinc-400 text-base leading-relaxed max-w-md">
            {t.contact.header_body}
          </p>
        </div>
      </section>

      {/* ── Info + Map ────────────────────────────────────────────── */}
      <section className="bg-surface py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Info panel */}
            <div className="bg-inverse-surface text-white p-10 flex flex-col justify-between">
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
            </div>

            {/* Map */}
            <div className="md:col-span-2 h-[480px] md:h-auto min-h-[480px]">
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
    </>
  );
}

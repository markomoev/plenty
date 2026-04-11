import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Посети Ни — PLENTY Ловеч",
  description:
    "Намерете магазин PLENTY в центъра на Ловеч — адрес, работно време и как да стигнете до нас.",
};

const hours = [
  { day: "Понеделник — Петък", time: "10:00 – 19:00" },
  { day: "Събота", time: "10:00 – 17:00" },
  { day: "Неделя", time: "Затворено" },
];

const comparison = [
  {
    problem: "2+ часа в колата до София",
    solution: "5 минути пеша от центъра",
  },
  {
    problem: "Платен паркинг и тълпи",
    solution: "Спокойна атмосфера, без стрес",
  },
  {
    problem: "Безлични продавачи в мол",
    solution: "Внимателен екип, готов да помогне",
  },
  {
    problem: "Поръчаш онлайн — чакаш — грешен размер",
    solution: "Пробваш — харесваш — взимаш",
  },
  {
    problem: "Връщания, разходи за доставка",
    solution: "Нулев риск — всичко е на живо",
  },
];

export default function PosetiNiPage() {
  return (
    <>
      {/* ── Header ────────────────────────────────────────────────── */}
      <section className="bg-inverse-surface text-white py-28 px-8 md:px-16 lg:px-24">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase font-bold opacity-40 mb-4">
              Ловеч, България
            </p>
            <h1 className="text-5xl md:text-7xl font-black tracking-[-0.03em] uppercase leading-none mb-6">
              ЕЛАТЕ ДА НИ<br />ПОСЕТИТЕ
            </h1>
            <p className="text-zinc-400 text-base leading-relaxed max-w-md">
              Без записване. Без чакане. Просто елате.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {[
              { label: "Адрес", value: "ул. Търговска 15\nЛовеч 5500" },
              { label: "Телефон", value: "+359 68 800 000" },
              { label: "Работно Време", value: "Пон–Пет  10:00–19:00\nСъб  10:00–17:00" },
              { label: "Неделя", value: "Затворено" },
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
                <p className={`text-sm font-bold uppercase tracking-wide ${h.time === "Затворено" ? "text-secondary" : "text-on-surface"}`}>
                  {h.time}
                </p>
              </li>
            ))}
          </ul>
          <a
            href="https://maps.google.com/?q=Ловеч,+ул.+Търговска+15"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-300 shrink-0"
          >
            Вземете Маршрут до Магазина
          </a>
        </div>
      </section>

      {/* ── Anti-Hassle Comparison ────────────────────────────────── */}
      <section className="bg-surface py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-16">
            <p className="text-[10px] tracking-[0.35em] uppercase text-secondary font-bold mb-4">
              Направете Сметката
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-[-0.025em] uppercase leading-tight">
              По-лесно от<br />Всяка Алтернатива
            </h2>
          </div>

          {/* Column headers */}
          <div className="grid grid-cols-2 gap-0 mb-0">
            <div className="bg-surface-container px-8 py-5 border-b border-surface-dim">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-secondary">
                Пътуване до Мол в София
              </p>
            </div>
            <div className="bg-primary px-8 py-5 border-b border-primary-dark">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white">
                Plenty, Ловеч
              </p>
            </div>
          </div>

          {/* Comparison rows */}
          {comparison.map((row, i) => (
            <div key={i} className="grid grid-cols-2 gap-0 border-b border-surface-dim last:border-b-0">
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

      {/* ── Map placeholder ───────────────────────────────────────── */}
      <section className="bg-surface-container h-[360px] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary mb-3">
            ул. Търговска 15, Ловеч
          </p>
          <a
            href="https://maps.google.com/?q=Ловеч,+ул.+Търговска+15"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-300 inline-block"
          >
            Отвори в Google Maps
          </a>
        </div>
      </section>

      {/* ── Bottom nav ────────────────────────────────────────────── */}
      <section className="bg-surface-container-low py-12 px-8 md:px-16 lg:px-24 border-t border-surface-dim">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-secondary">
            Докато сте тук, разгледайте и:
          </p>
          <div className="flex flex-wrap gap-8">
            <Link href="/kolektsii" className="text-[11px] font-black uppercase tracking-[0.2em] hover:text-primary transition-colors">
              Вижте Новото В Магазина →
            </Link>
            <Link href="/novini" className="text-[11px] font-black uppercase tracking-[0.2em] hover:text-primary transition-colors">
              Последни Новини →
            </Link>
            <Link href="/za-nas" className="text-[11px] font-black uppercase tracking-[0.2em] hover:text-primary transition-colors">
              За Нас →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Посети Ни — PLENTY Ловеч",
  description:
    "Без записване. Без чакане. Намерете магазин PLENTY в центъра на Ловеч — адрес, работно време и безплатна стилова консултация.",
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
    solution: "Личен консултант само за вас",
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

      {/* ── Consultation Form ─────────────────────────────────────── */}
      <section
        id="konsultatsiya"
        className="bg-surface py-24 px-8 md:px-16 lg:px-24"
      >
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase text-secondary font-bold mb-4">
              Безплатно & Без Ангажимент
            </p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-[-0.025em] leading-tight mb-8">
              Запазете 30 Минути<br />Само за Вас
            </h2>
            <p className="text-secondary text-sm leading-relaxed mb-6 max-w-md">
              Кажете ни повода. Ние намираме визията.
            </p>
            <p className="text-secondary text-sm leading-relaxed max-w-md">
              Нашата консултация е 30 минути само за вас — без тълпа, без бързане. Казвате ни повода, фигурата и бюджета. Ние подбираме варианти, вие ги пробвате. Толкова просто.
            </p>
          </div>

          <form className="space-y-0 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
              <div className="border-b-2 border-surface-dim focus-within:border-primary transition-colors duration-200">
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-secondary pt-6 pb-1">
                  Вашето Име
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-none text-sm font-bold py-3 focus:outline-none text-on-surface placeholder:text-secondary/30"
                  placeholder="Иван Петров"
                />
              </div>
              <div className="border-b-2 border-surface-dim focus-within:border-primary transition-colors duration-200">
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-secondary pt-6 pb-1">
                  Телефон
                </label>
                <input
                  type="tel"
                  className="w-full bg-transparent border-none text-sm font-bold py-3 focus:outline-none text-on-surface placeholder:text-secondary/30"
                  placeholder="+359 8XX XXX XXX"
                />
              </div>
            </div>

            <div className="border-b-2 border-surface-dim focus-within:border-primary transition-colors duration-200">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-secondary pt-6 pb-1">
                Имейл
              </label>
              <input
                type="email"
                className="w-full bg-transparent border-none text-sm font-bold py-3 focus:outline-none text-on-surface placeholder:text-secondary/30"
                placeholder="ivan@example.com"
              />
            </div>

            <div className="border-b-2 border-surface-dim focus-within:border-primary transition-colors duration-200">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-secondary pt-6 pb-1">
                Поводът / Какво Търсите
              </label>
              <textarea
                rows={4}
                className="w-full bg-transparent border-none text-sm font-bold py-3 focus:outline-none text-on-surface placeholder:text-secondary/30 resize-none"
                placeholder="Напр. Търся сако за сватба или искам да обновя целия гардероб"
              />
            </div>

            <div className="pt-8">
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white px-12 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-300"
              >
                Запазете Консултация
              </button>
              <p className="text-[10px] uppercase tracking-widest text-secondary mt-4">
                Ще се свържем с вас до края на работния ден.
              </p>
            </div>
          </form>
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

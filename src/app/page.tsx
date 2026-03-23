import Image from "next/image";
import Link from "next/link";
import { looks } from "@/lib/looks";
import { posts } from "@/lib/posts";

const marqueeItems = [
  "ВЕЧЕ В МАГАЗИНА",
  "ПРОЛЕТ / ЛЯТО 2026",
  "ОГРАНИЧЕНИ КОЛИЧЕСТВА",
  "ЛИЧНО СТИЛОВО КОНСУЛТИРАНЕ",
  "СЕМЕЕН БИЗНЕС В ЛОВЕЧ",
];

const pillars = [
  {
    number: "01",
    heading: "Без Трафик. Без Паркинг.",
    body: "Спестете 3 часа и нервите от пътуването до мол. Ние сме в центъра на Ловеч — на пет минути от вас.",
  },
  {
    number: "02",
    heading: "Пробвайте го. Вземете го Днес.",
    body: "Без чакане за куриер. Без грешни размери. Без връщания. Пробвате — харесвате — взимате.",
  },
  {
    number: "03",
    heading: "Честен Съвет от Реален Човек.",
    body: "Не алгоритъм. Не 500 ревюта. Консултант с очи, вкус и мнение — само за вас, без натиск.",
  },
];

export default function Home() {
  const previewLooks = looks.slice(0, 3);
  const latestPosts = posts.slice(0, 3);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="min-h-[calc(100vh-80px)] bg-surface flex flex-col justify-end pb-20 px-10 md:px-24">
        <div className="max-w-screen-2xl mx-auto w-full">
          <p className="text-[10px] tracking-[0.35em] uppercase mb-6 font-bold text-secondary">
            Пролет / Лято 2026
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black tracking-[-0.03em] mb-6 leading-[0.92] uppercase text-on-surface">
            ВЕЧЕ
            <br />
            В МАГАЗИНА
          </h1>
          <p className="text-secondary text-base md:text-lg mb-12 max-w-lg leading-relaxed">
            Новата колекция е тук. Елате да я усетите.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/kolektsii"
              className="bg-primary hover:bg-primary-dark text-white px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-300"
            >
              Вижте Какво е Пристигнало
            </Link>
            <Link
              href="/poseti-ni"
              className="border border-on-surface/20 hover:border-on-surface/50 text-on-surface px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-300"
            >
              Вземете Маршрут до Магазина
            </Link>
          </div>
        </div>
      </section>

      {/* ── Marquee ───────────────────────────────────────────────── */}
      <div className="bg-inverse-surface text-white py-3.5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map(
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

      {/* ── Philosophy / Anti-Hassle ──────────────────────────────── */}
      <section className="bg-surface py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-20">
            <p className="text-[10px] tracking-[0.35em] uppercase text-secondary font-bold mb-4">
              Защо Да Дойдете
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-[-0.025em] uppercase leading-tight max-w-3xl">
              Забравете за<br />Пътуването до София
            </h2>
            <p className="text-secondary text-base mt-6 max-w-xl leading-relaxed">
              Всичко, което търсите, е на пет минути от вас.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-surface-dim">
            {pillars.map((p) => (
              <div
                key={p.number}
                className="pt-12 pb-12 md:px-12 first:md:pl-0 last:md:pr-0 border-b md:border-b-0 md:border-r border-surface-dim last:border-r-0 last:border-b-0"
              >
                <span className="text-[11px] font-black tracking-[0.3em] text-primary uppercase block mb-8">
                  {p.number}
                </span>
                <h3 className="text-xl font-black uppercase tracking-[-0.01em] mb-5">
                  {p.heading}
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lookbook Preview / Tactile ────────────────────────────── */}
      <section className="bg-surface-container-low py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex justify-between items-end mb-6">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-secondary font-bold mb-3">
                Пролет / Лято 2026
              </p>
              <h2 className="text-4xl md:text-5xl font-black tracking-[-0.025em] uppercase">
                Виж го Тук.<br />Усети го В Магазина.
              </h2>
            </div>
            <Link
              href="/kolektsii"
              className="hidden md:block text-primary font-black text-[11px] tracking-[0.2em] uppercase border-b-2 border-primary pb-1 hover:text-primary-dark hover:border-primary-dark transition-colors"
            >
              Целият Лукбук
            </Link>
          </div>
          <p className="text-secondary text-sm mb-16 max-w-lg leading-relaxed">
            Снимките показват стила. Ние ще ви покажем как стои точно на вашите рамене.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {previewLooks.map((look) => (
              <Link href="/kolektsii" key={look.id} className="group block">
                <div className="relative overflow-hidden aspect-[3/4] bg-surface-container">
                  <Image
                    src={look.image}
                    alt={look.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-4 flex justify-between items-baseline">
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em]">
                    {look.title}
                  </p>
                  <span className="text-[10px] font-black uppercase tracking-[0.15em] text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    В Магазина →
                  </span>
                </div>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-secondary">
                  {look.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog Preview / FOMO ───────────────────────────────────── */}
      <section className="bg-surface py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex justify-between items-end mb-6">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-secondary font-bold mb-3">
                Журнал & Новини
              </p>
              <h2 className="text-4xl md:text-5xl font-black tracking-[-0.025em] uppercase">
                Тъкмо Пристигна.<br />Количествата са Ограничени.
              </h2>
            </div>
            <Link
              href="/novini"
              className="hidden md:block text-primary font-black text-[11px] tracking-[0.2em] uppercase border-b-2 border-primary pb-1 hover:text-primary-dark hover:border-primary-dark transition-colors"
            >
              Всички Новини
            </Link>
          </div>
          <p className="text-secondary text-sm mb-16 max-w-lg leading-relaxed">
            Не пазаруваме онлайн. Затова, когато нещо добро влезе — влиза само веднъж.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {latestPosts.map((post) => (
              <Link
                href={`/novini/${post.slug}`}
                key={post.slug}
                className="group block"
              >
                <div className="relative overflow-hidden aspect-[16/10] bg-surface-container mb-5">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
                  />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary block mb-3">
                  {post.category}
                </span>
                <h3 className="font-bold text-base uppercase tracking-tight leading-tight mb-2 group-hover:text-primary transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final Visit CTA ───────────────────────────────────────── */}
      <section className="bg-inverse-surface text-white py-28 px-8 md:px-16 lg:px-24">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase font-bold opacity-40 mb-4">
              Ловеч, ул. Търговска 15
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-[-0.025em] uppercase leading-tight mb-8">
              Пет Минути<br />Разходка.<br />Перфектен Стил.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-10 max-w-md">
              Дойдете без план — тръгнете с визия. Нашите консултанти ще ви посрещнат и ще ви помогнат да намерите точно това, което търсите.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/poseti-ni"
                className="bg-primary hover:bg-primary-dark text-white px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-300"
              >
                Планирайте Посещението си
              </Link>
              <Link
                href="/poseti-ni#konsultatsiya"
                className="border border-white/20 hover:border-white/50 text-white px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-300"
              >
                Запазете Консултация
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
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
    </>
  );
}

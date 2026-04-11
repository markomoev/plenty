import Image from "next/image";
import Link from "next/link";
import { posts } from "@/lib/posts";

const marqueeItems = [
  "МЪЖКИ МАГАЗИН В ЛОВЕЧ",
  "ПРОЛЕТ / ЛЯТО 2026",
  "ЛИЧНО СТИЛОВО КОНСУЛТИРАНЕ",
  "СЕМЕЕН БИЗНЕС",
  "КАЧЕСТВО НА ПЪРВО МЯСТО",
];

const pillars = [
  {
    number: "01",
    heading: "Семеен Бизнес в Ловеч.",
    body: "PLENTY е създаден от местни хора за местни хора. Знаем общността, в която работим, и се грижим за нея.",
  },
  {
    number: "02",
    heading: "Внимателно Подбрани Марки.",
    body: "Всяко парче в магазина е преминало нашия личен филтър — качество, кройка и стил, без компромиси.",
  },
  {
    number: "03",
    heading: "Честен Съвет от Реален Човек.",
    body: "Не алгоритъм. Не 500 ревюта. Екип с очи, вкус и мнение — само за вас, без натиск.",
  },
];

export default function Home() {
  const latestPosts = posts.slice(0, 3);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="min-h-[calc(100vh-80px)] bg-surface flex flex-col justify-end pb-20 px-10 md:px-24">
        <div className="max-w-screen-2xl mx-auto w-full">
          <p className="text-[10px] tracking-[0.35em] uppercase mb-6 font-bold text-secondary">
            Ловеч, България
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black tracking-[-0.03em] mb-6 leading-[0.92] uppercase text-on-surface">
            МЪЖКИ
            <br />
            МАГАЗИН
          </h1>
          <p className="text-secondary text-base md:text-lg mb-12 max-w-lg leading-relaxed">
            PLENTY е семеен магазин в центъра на Ловеч — с личен подход, внимателно подбрани марки и реален стилов съвет от хора, на които им пука.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/za-nas"
              className="bg-primary hover:bg-primary-dark text-white px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-300"
            >
              Научете Повече За Нас
            </Link>
            <Link
              href="/poseti-ni"
              className="border border-on-surface/20 hover:border-on-surface/50 text-on-surface px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-300"
            >
              Как Да Ни Намерите
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

      {/* ── Philosophy ────────────────────────────────────────────── */}
      <section className="bg-surface py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-20">
            <p className="text-[10px] tracking-[0.35em] uppercase text-secondary font-bold mb-4">
              Нашият Подход
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-[-0.025em] uppercase leading-tight max-w-3xl">
              Личен Стил.<br />Местен Магазин.
            </h2>
            <p className="text-secondary text-base mt-6 max-w-xl leading-relaxed">
              В PLENTY вярваме, че доброто обслужване и качественото облекло не трябва да изискват пътуване до мол.
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

      {/* ── Store Gallery ─────────────────────────────────────────── */}
      <section className="bg-surface-container-low py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-12">
            <p className="text-[10px] tracking-[0.35em] uppercase text-secondary font-bold mb-3">
              Нашето Пространство
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-[-0.025em] uppercase">
              Добре Дошли<br />в PLENTY
            </h2>
            <p className="text-secondary text-sm mt-6 max-w-lg leading-relaxed">
              Намерете ни в центъра на Ловеч — просторен магазин, внимателно нареден, с личен подход към всеки клиент.
            </p>
          </div>
          {/* Asymmetric masonry grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[280px] gap-2 mb-12">
            {/* 9047 — tall, spans 2 rows */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=ул.+Търговска+58,+Ловеч,+България"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-surface-container block md:col-span-4 md:row-span-2 aspect-[4/3] md:aspect-auto"
            >
              <Image src="/store/IMG_9047.JPG" alt="Интериор — мъжки салон" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <p className="text-white/70 text-[10px] uppercase tracking-[0.25em] mb-1">Мъжки Салон</p>
                <p className="text-white font-black uppercase tracking-[0.15em] text-[11px]">Отвори в Google Maps →</p>
              </div>
            </a>
            {/* 9053 — wide */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=ул.+Търговска+58,+Ловеч,+България"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-surface-container block md:col-span-8 aspect-[4/3] md:aspect-auto"
            >
              <Image src="/store/IMG_9053.JPG" alt="Фасада на магазин PLENTY Ловеч" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <p className="text-white/70 text-[10px] uppercase tracking-[0.25em] mb-1">Фасада</p>
                <p className="text-white font-black uppercase tracking-[0.15em] text-[11px]">Отвори в Google Maps →</p>
              </div>
            </a>
            {/* 9061 — wide, same row as 9047 row 2 */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=ул.+Търговска+58,+Ловеч,+България"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-surface-container block md:col-span-8 aspect-[4/3] md:aspect-auto"
            >
              <Image src="/store/IMG_9061.JPG" alt="Интериор — дамски салон" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <p className="text-white/70 text-[10px] uppercase tracking-[0.25em] mb-1">Дамски Салон</p>
                <p className="text-white font-black uppercase tracking-[0.15em] text-[11px]">Отвори в Google Maps →</p>
              </div>
            </a>
            {/* 9049 — half */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=ул.+Търговска+58,+Ловеч,+България"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-surface-container block md:col-span-6 aspect-[4/3] md:aspect-auto"
            >
              <Image src="/store/IMG_9049.JPG" alt="Фасада — ъглов изглед" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <p className="text-white/70 text-[10px] uppercase tracking-[0.25em] mb-1">Фасада</p>
                <p className="text-white font-black uppercase tracking-[0.15em] text-[11px]">Отвори в Google Maps →</p>
              </div>
            </a>
            {/* 9065 — half */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=ул.+Търговска+58,+Ловеч,+България"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-surface-container block md:col-span-6 aspect-[4/3] md:aspect-auto"
            >
              <Image src="/store/IMG_9065.JPG" alt="Интериор — входна зона" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <p className="text-white/70 text-[10px] uppercase tracking-[0.25em] mb-1">Входна Зона</p>
                <p className="text-white font-black uppercase tracking-[0.15em] text-[11px]">Отвори в Google Maps →</p>
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
              Намерете Ни
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-[-0.025em] uppercase">
              В Центъра<br />на Ловеч
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            <div className="bg-inverse-surface text-white p-10 flex flex-col justify-between">
              <div className="space-y-8">
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase opacity-50 font-bold mb-2">Адрес</p>
                  <p className="text-lg font-black uppercase leading-snug">
                    ул. Търговска 58<br />Ловеч, България
                  </p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase opacity-50 font-bold mb-2">Работно Време</p>
                  <p className="text-sm leading-relaxed opacity-80">
                    Пон — Пет: 10:00 – 19:00<br />
                    Събота: 10:00 – 17:00<br />
                    Неделя: затворено
                  </p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase opacity-50 font-bold mb-2">Телефон</p>
                  <p className="text-sm opacity-80">+359 68 800 000</p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=ул.+Търговска+58,+Ловеч,+България"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block border border-white text-white px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors duration-300"
              >
                Отвори в Google Maps ↗
              </a>
            </div>
            <div className="md:col-span-2 h-[420px] md:h-auto min-h-[420px]">
              <iframe
                src="https://maps.google.com/maps?q=ул.+Търговска+58,+Ловеч,+България&output=embed&z=17"
                width="100%"
                height="100%"
                className="w-full h-full border-0"
                loading="lazy"
                title="Местоположение на PLENTY Ловеч"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Blog Preview ──────────────────────────────────────────── */}
      <section className="bg-surface py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-secondary font-bold mb-3">
                Статии & Новини
              </p>
              <h2 className="text-4xl md:text-5xl font-black tracking-[-0.025em] uppercase">
                От Нашия<br />Блог
              </h2>
            </div>
            <Link
              href="/novini"
              className="hidden md:block text-primary font-black text-[11px] tracking-[0.2em] uppercase border-b-2 border-primary pb-1 hover:text-primary-dark hover:border-primary-dark transition-colors"
            >
              Всички Статии
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-surface-dim">
            {latestPosts.map((post) => (
              <Link
                href={`/novini/${post.slug}`}
                key={post.slug}
                className="group pt-10 pb-10 md:px-10 first:md:pl-0 last:md:pr-0 border-b md:border-b-0 md:border-r border-surface-dim last:border-r-0 last:border-b-0 block"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary block mb-4">
                  {post.category}
                </span>
                <p className="text-[10px] uppercase tracking-widest text-secondary mb-4">
                  {post.date}
                </p>
                <h3 className="font-bold text-base uppercase tracking-tight leading-tight mb-4 group-hover:text-primary transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="mt-6 inline-block text-[10px] font-black uppercase tracking-[0.2em] border-b border-on-surface/30 pb-0.5 group-hover:border-primary group-hover:text-primary transition-colors duration-200">
                  Прочети →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final Visit CTA ───────────────────────────────────────── */}
      <section className="relative overflow-hidden text-white py-28 px-8 md:px-16 lg:px-24">
        <Image
          src="/store/img_9057-rework.png"
          alt="Магазин PLENTY Ловеч"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/40" />
        <div className="relative z-10 max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase font-bold opacity-50 mb-4">
              Ловеч, ул. Търговска 58
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-[-0.025em] uppercase leading-tight mb-8">
              Елате Да<br />Ни Посетите
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mb-10 max-w-md">
              Дойдете без план — тръгнете с яснота. Екипът ни ще ви посрещне и ще ви помогне да намерите точно това, което търсите.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/poseti-ni"
                className="bg-primary hover:bg-primary-dark text-white px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-300"
              >
                Намери Магазина
              </Link>
              <Link
                href="/za-nas"
                className="border border-white/40 hover:border-white/70 text-white px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-300"
              >
                За Нас
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "Адрес", value: "ул. Търговска 58\nЛовеч 5500" },
              { label: "Телефон", value: "+359 68 800 000" },
              { label: "Работно Време", value: "Пон–Пет  10:00–19:00\nСъб  10:00–17:00" },
              { label: "Неделя", value: "Затворено" },
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

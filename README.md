# PLENTY — Мъжки магазин, Ловеч

Уебсайт на магазин **PLENTY** — семеен бизнес за мъжко облекло, намиращ се на пазара в Ловеч, ул. Търговска 60.

Целта на сайта е да насочва клиентите към физическия магазин, а не към онлайн продажби.

---

## Технологии

- [Next.js 15](https://nextjs.org) — App Router
- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- TypeScript
- Персонализирана i18n система (Български / English)

## Структура

```
src/
├── app/                  # Маршрути (Next.js App Router)
│   ├── page.tsx          # Начална страница
│   ├── about/            # За нас
│   ├── contact/          # Контакти
│   └── collections/      # Колекции
├── components/
│   ├── pages/            # Клиентски компоненти за всяка страница
│   ├── AnimateIn.tsx     # Scroll-reveal анимационен wrapper
│   ├── Nav.tsx           # Навигация
│   └── Footer.tsx        # Footer
├── contexts/
│   └── language.tsx      # Контекст за смяна на език
└── lib/
    └── translations.ts   # BG / EN преводи
```

## Локална разработка

```bash
npm install
npm run dev
```

Отвори [http://localhost:3000](http://localhost:3000).

## Информация за магазина

| | |
|---|---|
| **Адрес** | ул. Търговска 60, Ловеч 5500 |
| **Работно време** | Пон – Събота: 10:00 – 18:30 |
| **Телефон** | +359 898 418 915 |

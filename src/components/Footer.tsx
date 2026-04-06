import Link from "next/link";

const sections = [
  {
    heading: "Навигация",
    links: [
      { href: "/", label: "Начало" },
      { href: "/kolektsii", label: "Колекции" },
      { href: "/novini", label: "Новини" },
      { href: "/za-nas", label: "За Нас" },
    ],
  },
  {
    heading: "Магазин",
    links: [
      { href: "/poseti-ni", label: "Посети Ни" },
      { href: "/novini?category=Местни Оферти", label: "Оферти" },
    ],
  },
  {
    heading: "Социални Мрежи",
    links: [
      { href: "#", label: "Instagram" },
      { href: "#", label: "Facebook" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface-container py-20 md:py-24 px-8 md:px-16 lg:px-24">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div>
            <Link href="/" className="text-2xl font-black tracking-tighter mb-6 block">
              PLENTY
            </Link>
            <p className="text-[11px] tracking-[0.05em] uppercase text-secondary leading-loose mb-4">
              Мъжки магазин за облекло в Ловеч. Качество над количество.
            </p>
            <p className="text-[11px] tracking-[0.05em] uppercase text-secondary leading-loose">
              ул. Търговска 15, Ловеч 5500
            </p>
          </div>

          {sections.map((section) => (
            <div key={section.heading}>
              <h4 className="text-[10px] tracking-[0.2em] uppercase font-black mb-8 text-primary">
                {section.heading}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[11px] tracking-[0.08em] uppercase text-secondary hover:text-on-surface hover:underline decoration-primary decoration-2 underline-offset-4 transition-all"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-surface-dim pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] tracking-[0.25em] uppercase text-secondary">
            © 2025 PLENTY, Ловеч. Всички права запазени.
          </p>
          <p className="text-[10px] tracking-[0.15em] uppercase text-secondary">
            Семеен Бизнес · Основан в Ловеч
          </p>
        </div>
      </div>
    </footer>
  );
}

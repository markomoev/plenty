import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "За Нас — PLENTY Ловеч",
  description:
    "Семейният магазин PLENTY в Ловеч — история, ценности и хората зад него.",
};

const values = [
  {
    number: "01",
    title: "Семеен Бизнес",
    body: "PLENTY е семейно предприятие, основано с ясна визия: да предложи на мъжете в Ловеч и региона достъп до качествено облекло и персонализирано обслужване, каквото едрите вериги не могат да предоставят.",
  },
  {
    number: "02",
    title: "Лично Познание",
    body: "Когато влезете в нашия магазин, не сте поредният клиент. Знаем как се казвате, помним вашия размер, помним какво сте харесали при последното посещение. Това е разликата.",
  },
  {
    number: "03",
    title: "Ловеч е Нашият Дом",
    body: "Ние сме местни. Данъците ни остават тук, работните ни места са тук, децата ни учат тук. Когато пазарувате от нас, инвестирате в общността, в която живеете.",
  },
  {
    number: "04",
    title: "Без Компромис с Качеството",
    body: "Доставчиците ни са внимателно подбирани от години. Всяко парче в магазина е преминало нашия личен филтър — ако ние не бихме го носили, няма да ви го предложим.",
  },
];

export default function ZaNasPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-inverse-surface text-white py-28 px-8 md:px-16 lg:px-24">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase font-bold opacity-50 mb-4">
              Ловеч, България
            </p>
            <h1 className="text-5xl md:text-7xl font-black tracking-[-0.03em] uppercase leading-none">
              ЗА НАС
            </h1>
          </div>
          <p className="text-zinc-400 text-base leading-relaxed max-w-lg">
            PLENTY не е просто магазин. Той е резултат от убеждението, че мъжът заслужава по-добро — по-добро качество, по-добро обслужване и по-добро усещане от пазаруването.
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="bg-surface py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] bg-surface-container overflow-hidden">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1RXUO5hUXGJ5tAdBk04qikKxH9uadWyaw5-Iofbc1_sHlR1mtLdtvF2OFQL-JxbzlIn1yOTBcWumKlYdiyCMa-ZiKKVbbG1dMhe5DNamQF11zksIyxNag8YBuZZKIXkviCvtsRp3bevBl0RT8bu-yBRZqwgRj6Zdzj83ba6VnKLXxgXVf3734tjYQ7jsQ4-pFC6-m0ESiqtyB_ahEQKOozyBqQu5VVxFvgvRLpFn5mC5OoEZWuhVoQR6q9JnnHIt-LPMJwl12qHM"
              alt="Магазин PLENTY Ловеч"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase text-secondary font-bold mb-6">
              Нашата История
            </p>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-[-0.02em] mb-8 leading-tight">
              Основани в Ловеч с Ясна Цел
            </h2>
            <div className="space-y-5 text-[15px] leading-[1.8] text-secondary">
              <p>
                PLENTY се ражда от разочарование — от безличното пазаруване в мол, от дрехите, които изглеждат добре на манекен, но не и на реален човек, от продавачите, които не знаят нищо за продукта, който продават.
              </p>
              <p>
                Решихме да направим нещо различно. Малък магазин, с голямо внимание. Ограничен избор, но правилен избор. Консултанти, които наистина разбират от мъжка мода и имат търпението да ви помогнат да намерите точното парче за вас.
              </p>
              <p>
                Годините потвърдиха, че изборът ни е бил правилен. Клиентите ни се връщат — не защото нямат друго място, а защото тук намират нещо, което другаде липсва: внимание, знание и автентична препоръка.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface-container-low py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-16">
            <p className="text-[10px] tracking-[0.35em] uppercase text-secondary font-bold mb-4">
              Ценности
            </p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-[-0.025em]">
              Какво ни Прави Различни
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-surface-dim">
            {values.map((v, i) => (
              <div
                key={v.number}
                className={`pt-12 pb-12 pr-0 md:pr-16 border-b border-surface-dim ${
                  i % 2 === 0 ? "md:border-r md:border-surface-dim" : ""
                } ${i >= values.length - 2 ? "md:border-b-0" : ""} ${
                  i === values.length - 1 ? "border-b-0" : ""
                }`}
              >
                <span className="text-[11px] font-black tracking-[0.3em] text-primary uppercase block mb-6">
                  {v.number}
                </span>
                <h3 className="text-xl font-black uppercase tracking-[-0.01em] mb-4">
                  {v.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail image + consultation CTA */}
      <section className="bg-surface py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase text-secondary font-bold mb-6">
              Лично Консултиране
            </p>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-[-0.02em] mb-8 leading-tight">
              Безплатна Стилова Консултация
            </h2>
            <div className="space-y-5 text-[15px] leading-[1.8] text-secondary mb-10">
              <p>
                Не знаете откъде да започнете? Имате специален повод и търсите точния ансамбъл? Искате да обновите гардероба си, но не искате да сбъркате?
              </p>
              <p>
                Нашата консултация е безплатна и без ангажимент. Просто елате, разкажете ни за себе си и ние ще направим останалото.
              </p>
            </div>
            <Link
              href="/poseti-ni#konsultatsiya"
              className="bg-primary hover:bg-primary-dark text-white px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-300 inline-block"
            >
              Запази Консултация
            </Link>
          </div>
          <div className="relative aspect-[4/3] bg-surface-container overflow-hidden">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2Ol9e1NY3uruHTAkdKjEHNvpqGz7gY0-VvhGw_KQ9IQOMyevPMlzR96A99aSzABx0sOM5Okl8fz2vWJuSsQo4c5AhGhCeB1GnDI2eh-HiaKxHafEwb-fO6xpGAhCMmXhBSKeQCbuqa10NQ8NWpH0SlQbKEWuXD6UmU9ir62qI5-gsuo2dT97fsTsFuKa9g7tQD3dfLoTEkvOawaJMPcu9Y_eRvhbjvwl_fgddjso0YgyZFFMgZCNsIHedHVAMiNU-tx11YuuucoNE"
              alt="Детайл на качеството"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}

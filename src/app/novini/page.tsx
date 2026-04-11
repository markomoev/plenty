import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { posts, type PostCategory } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Новини & Статии — PLENTY Ловеч",
  description:
    "Стилови насоки, нови пристигания и местни оферти от PLENTY — мъжки магазин в Ловеч.",
};

const categories: PostCategory[] = [
  "Стилови Насоки",
  "За Магазина",
  "Съвети",
];

const categoryColors: Record<PostCategory, string> = {
  "Стилови Насоки": "text-primary",
  "За Магазина": "text-on-surface",
  "Съвети": "text-primary",
};

export default function NoviniPage() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      {/* Page header */}
      <section className="bg-surface py-20 px-8 md:px-16 lg:px-24 border-b border-surface-dim">
        <div className="max-w-screen-2xl mx-auto">
          <p className="text-[10px] tracking-[0.35em] uppercase text-secondary font-bold mb-4">
            Статии
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-[-0.03em] uppercase leading-none mb-8">
            НОВИНИ
          </h1>
          {/* Category pills */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <span
                key={cat}
                className="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 bg-surface-container text-secondary"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section className="bg-surface py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <Link href={`/novini/${featured.slug}`} className="group grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative overflow-hidden aspect-[4/3] bg-surface-container">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${categoryColors[featured.category]}`}>
                  {featured.category}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-secondary">
                  {featured.date}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-[-0.02em] leading-tight mb-6 group-hover:text-primary transition-colors duration-200">
                {featured.title}
              </h2>
              <p className="text-secondary text-sm leading-relaxed mb-8">
                {featured.excerpt}
              </p>
              <span className="text-[11px] font-black uppercase tracking-[0.2em] border-b-2 border-on-surface pb-1 group-hover:border-primary group-hover:text-primary transition-colors duration-200">
                Прочети Статията →
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Rest of posts */}
      <section className="bg-surface-container-low py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {rest.map((post) => (
              <Link
                href={`/novini/${post.slug}`}
                key={post.slug}
                className="group bg-surface-container-low block"
              >
                <div className="relative overflow-hidden aspect-[16/10] bg-surface-container">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${categoryColors[post.category]}`}>
                      {post.category}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-secondary">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="font-bold text-base uppercase tracking-tight leading-tight mb-3 group-hover:text-primary transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

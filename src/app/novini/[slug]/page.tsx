import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPostBySlug } from "@/lib/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — PLENTY Ловеч`,
    description: post.excerpt,
  };
}

export default async function SinglePostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const otherPosts = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Article header */}
      <section className="bg-surface py-16 px-8 md:px-16 lg:px-24 border-b border-surface-dim">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/novini"
            className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary hover:text-on-surface transition-colors mb-10 inline-block"
          >
            ← Всички Статии
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
              {post.category}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-secondary">
              {post.date}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-[-0.025em] leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Hero image */}
      <div className="relative w-full aspect-[16/7] bg-surface-container">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Article body */}
      <article className="bg-surface py-20 px-8 md:px-16 lg:px-24">
        <div className="max-w-2xl mx-auto">
          <p className="text-lg font-medium leading-relaxed text-secondary mb-10 border-l-2 border-primary pl-6">
            {post.excerpt}
          </p>
          <div className="space-y-6">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-[15px] leading-[1.8] text-on-surface">
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 pt-12 border-t border-surface-dim">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-3">
              Имате Въпроси?
            </p>
            <h3 className="text-2xl font-black uppercase tracking-[-0.01em] mb-6">
              Посетете ни в Магазина
            </h3>
            <Link
              href="/poseti-ni"
              className="bg-primary hover:bg-primary-dark text-white px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-300 inline-block"
            >
              Вижте Адреса ни
            </Link>
          </div>
        </div>
      </article>

      {/* More posts */}
      {otherPosts.length > 0 && (
        <section className="bg-surface-container-low py-20 px-8 md:px-16 lg:px-24">
          <div className="max-w-screen-2xl mx-auto">
            <h2 className="text-2xl font-black uppercase tracking-[-0.01em] mb-12">
              Още статии
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {otherPosts.map((p) => (
                <Link
                  href={`/novini/${p.slug}`}
                  key={p.slug}
                  className="group bg-surface-container-low block"
                >
                  <div className="relative overflow-hidden aspect-[16/10] bg-surface-container">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary block mb-3">
                      {p.category}
                    </span>
                    <h3 className="font-bold text-sm uppercase tracking-tight leading-tight group-hover:text-primary transition-colors duration-200">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

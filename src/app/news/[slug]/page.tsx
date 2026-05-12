import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts, getPostBySlug } from "@/lib/posts";
import { NewsPostPage } from "@/components/pages/news-post";

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

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return <NewsPostPage post={post} />;
}

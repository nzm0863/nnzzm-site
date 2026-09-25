import { posts } from "@/content/blog";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <p className="text-sm tracking-widest text-sky-400">{post.category}</p>

      <h1 className="mt-3 text-5xl font-serif tracking-wide">
        {post.title}
      </h1>

      <p className="mt-3 text-sm text-zinc-500">{post.date}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs text-sky-300"
          >
            #{tag}
          </span>
        ))}
      </div>
      <Image
        src={post.thumbnail || "/images/blog/default-cover.webp"}
        alt={post.title}
        width={1200}
        height={675}
        className="mt-10 aspect-video w-full rounded-2xl object-cover shadow-xl"
        priority
      />

      <article className="mt-12">
        <div className="space-y-8 leading-8 text-zinc-300">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>

      <Link
        href="/blog"
        className="mt-12 inline-flex items-center gap-2 text-zinc-500 transition hover:text-sky-400"
      >
        ← Blog一覧へ戻る
      </Link>
    </main>
  );
}
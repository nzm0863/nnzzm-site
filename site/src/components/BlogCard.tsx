import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/content/blog";

type Props = {
  post: BlogPost;
};

export default function BlogCard({ post }: Props) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article className="flex h-full flex-col overflow-hidden border border-zinc-800 bg-zinc-900/40 p-2 transition-all duration-300 hover:-translate-y-1">
        <Image
          src={post.thumbnail || "/images/blog/default-cover.webp"}
          alt={post.title}
          width={640}
          height={360}
          className="aspect-video w-full rounded-sm object-cover shadow-md transition duration-300 group-hover:scale-[1.02] group-hover:shadow-xl"
          unoptimized
        />

        <p className="inline-block self-start rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 mt-2 text-xs tracking-widest text-sky-400">
          {post.category}
        </p>

        <h2 className="mt-2 text-2xl font-serif transition-colors group-hover:text-sky-400">
          {post.title}
        </h2>

        <p className="mt-2 text-sm text-zinc-400 line-clamp-2">
          {post.description}
        </p>

        <p className="mt-auto pt-4 text-xs tracking-wide text-zinc-500">
          {post.date}
        </p>
      </article>
    </Link>
  );
}
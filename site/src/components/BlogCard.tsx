import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/content/blog";

type Props = {
  post: BlogPost;
};

export default function BlogCard({ post }: Props) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="transition-all duration-300 hover:-translate-y-1">
        <Image
          src={post.thumbnail || "/images/blog/default-cover.webp"}
          alt={post.title}
          width={640}
          height={360}
          className="aspect-video w-full rounded-xl object-cover shadow-md transition duration-300 group-hover:scale-[1.02] group-hover:shadow-xl"
        />

        <p className="inline-block rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs tracking-widest text-sky-400">
          {post.category}
        </p>

        <h2 className="mt-2 text-2xl font-serif transition-colors group-hover:text-sky-400">
          {post.title}
        </h2>

        <p className="mt-2 text-sm text-zinc-400 line-clamp-2">
          {post.description}
        </p>

        <p className="mt-4 text-xs tracking-wide text-zinc-500">
          {post.date}
        </p>
      </article>
    </Link>
  );
}
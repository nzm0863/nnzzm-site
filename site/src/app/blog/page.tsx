import BlogCard from "@/components/BlogCard";
import { posts } from "@/content/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | nnzzm.com",
  description:
    "ESP32・Raspberry Pi・Next.jsを中心にIoT・Web・AIの個人開発をしているNakamura / nnzzmのプロフィール。",
};

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="mb-10 text-5xl font-serif tracking-wide">Blog</h1>

      <section className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </section>
    </main>
  );
}
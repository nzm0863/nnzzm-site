import BlogCard from "@/components/BlogCard";
import { posts } from "@/content/blog";

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
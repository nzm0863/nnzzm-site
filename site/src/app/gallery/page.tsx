import { galleries } from "@/content/gallery";
import GalleryCard from "@/components/GalleryCard";
import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "AIイラスト・アニメアート・制作ギャラリー。個人制作作品やポートフォリオ用イラストを掲載しています。",

  alternates: {
    canonical: "/gallery",
  },

  openGraph: {
    title: "Gallery | nnzzm.com",
    description:
      "AIイラスト・アニメアート・制作ギャラリー。",
    url: "/gallery",
    images: ["/ogp-home.webp"],
  },
};

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-xl sm:text-5xl tracking-wide">
          AI Gallery
        </h1>
        {profile.storeLinks.map((store) => (
          <Link
            key={store.name}
            href={store.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-lg text-sky-400 transition hover:text-sky-300"
          >
            {store.name}はこちら→
          </Link>
        ))}
      </div>

      <section className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {galleries.map((item) => {
          const thumbnailSet = item.sets.find((set) => set.images.length > 0);
          if (!thumbnailSet) return null;

          return (
            <GalleryCard
              key={item.slug}
              slug={item.slug}
              title={item.title}
              category={item.category}
              cover={thumbnailSet.cover}
              count={item.sets.reduce((n, set) => n + set.images.length, 0)}
            />
          );
        })}
      </section>
    </main>
  );
}
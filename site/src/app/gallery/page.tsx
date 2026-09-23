import { galleries } from "@/content/gallery";
import GalleryCard from "@/components/GalleryCard";

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="mb-8 text-5xl tracking-wide">
        AI Gallery
      </h1>

      <section className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
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
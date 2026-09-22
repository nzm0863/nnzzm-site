import { galleries } from "@/content/gallery";
import Image from "next/image";
import Link from "next/link";

export default function GalleryPage() {
  return (
    <main className="container">
      <h1>AI Gallery</h1>

      <section className="gallery-grid">
        {galleries.map((item) => {
          const thumbnailSet = item.sets.find((set) => set.images.length > 0);

          if (!thumbnailSet) return null;

          return (
            <Link href={`/gallery/${item.slug}`} key={item.slug}>
              <article className="gallery-card">
                <Image
                  src={thumbnailSet.cover}
                  alt={item.title}
                  width={320}
                  height={420}
                  loading="lazy"
                />

                <p>{item.category}</p>
                <h2>{item.title}</h2>
                <p>{thumbnailSet.images.length} 枚</p>
              </article>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
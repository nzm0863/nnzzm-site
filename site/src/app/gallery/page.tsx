import { galleries } from "@/content/gallery";
import Image from "next/image";
import Link from "next/link";

export default function GalleryPage() {
  return (
    <main className="container">
      <h1>AI Gallery</h1>

      <section className="gallery-grid">
        {galleries
          .filter((item) => item.sets.length > 0)
          .map((item) => (
            <Link href={`/gallery/${item.slug}`} key={item.slug}>
              <article className="gallery-card">
                <Image
                  src={item.sets[0].cover}
                  alt={item.title}
                  width={320}
                  height={420}
                  loading="lazy"
                />

                <p>{item.category}</p>
                <h2>{item.title}</h2>
              </article>
            </Link>
          ))}
      </section>
    </main>
  );
}
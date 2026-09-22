import { galleries } from "@/content/gallery";
import Image from "next/image";
import Link from "next/link";

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="mb-8 text-5xl font-bold">AI Gallery</h1>

      <section className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
        {galleries.map((item) => {
          const thumbnailSet = item.sets.find((set) => set.images.length > 0);

          if (!thumbnailSet) return null;

          return (
            <Link href={`/gallery/${item.slug}`} key={item.slug} className="block">
              <article className="group transition-all duration-300 hover:-translate-y-1">
                <Image
                  src={thumbnailSet.cover}
                  alt={item.title}
                  width={320}
                  height={420}
                  loading="lazy"
                  className="aspect-[3/4] w-full rounded-xl object-cover shadow-md transition duration-300 group-hover:shadow-xl group-hover:scale-[1.02]"
                />

                <p className="mt-3 text-sm text-zinc-500">{item.category}</p>
                <h2 className="mt-1 text-xl font-semibold transition-colors group-hover:text-sky-400">{item.title}</h2>

                <p className="mt-2 text-sm text-zinc-500">
                  {item.sets.reduce((n, set) => n + set.images.length, 0)} 枚
                </p>
              </article>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
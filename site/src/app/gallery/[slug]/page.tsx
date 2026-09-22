import { galleries } from "@/content/gallery";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function GalleryDetailPage({ params }: Props) {
  const { slug } = await params;

  const gallery = galleries.find((g) => g.slug === slug);

  if (!gallery) return <h1>404</h1>;

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="mb-2 text-5xl font-bold text-white">
        {gallery.title}
      </h1>

      <p className="mb-10 text-zinc-400">{gallery.category}</p>

      <section className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {gallery.sets
          .filter((set) => set.images.length > 0)
          .map((set) => (
            <Link
              key={set.slug}
              href={`/gallery/${gallery.slug}/${set.slug}`}
              className="group block"
            >
              <article>
                <Image
                  src={set.cover}
                  alt={set.title}
                  width={320}
                  height={420}
                  loading="lazy"
                  className="aspect-[3/4] w-full rounded-xl object-cover transition duration-300 group-hover:scale-[1.02]"
                />

                <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-sky-400">
                  {set.title}
                </h3>

                <p className="text-sm text-zinc-500">
                  {set.images.length} 枚
                </p>
              </article>
            </Link>
          ))}
      </section>
    </main>
  );
}
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { galleries } from "@/content/gallery";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const gallery = galleries.find((g) => g.slug === slug);

  if (!gallery) {
    return {
      title: "Gallery Not Found",
      description: "ギャラリーが見つかりませんでした。",
    };
  }

  const cover = gallery.sets[0]?.cover ?? "/ogp-home.webp";

  return {
    title: gallery.title,
    description: `${gallery.title} のAIイラストギャラリー。${gallery.category}カテゴリの作品を掲載しています。`,

    alternates: {
      canonical: `/gallery/${slug}`,
    },

    openGraph: {
      title: `${gallery.title} | nnzzm.com`,
      description: `${gallery.title} のAIイラストギャラリー。`,
      url: `/gallery/${slug}`,
      type: "website",
      images: [
        {
          url: cover,
          width: 1024,
          height: 1504,
          alt: gallery.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${gallery.title} | nnzzm.com`,
      description: `${gallery.title} のAIイラストギャラリー。`,
      images: [cover],
    },
  };
}


export default async function GalleryDetailPage({ params }: Props) {
  const { slug } = await params;

  const gallery = galleries.find((g) => g.slug === slug);

  if (!gallery) return <h1>404</h1>;

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="mb-2 text-xl sm:text-3xl md:text-5xl font-bold text-white">
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
                <div className="relative">
                  <Image
                    src={set.cover}
                    alt={set.title}
                    width={320}
                    height={420}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                    unoptimized
                  />

                  {set.isR18 && (
                    <span className="absolute top-3 right-3 rounded-md border-3 border-zinc-800 bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      R18
                    </span>
                  )}
                </div>

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
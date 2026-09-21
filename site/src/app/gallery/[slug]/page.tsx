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
    <main className="container">
      <h1>{gallery.title}</h1>

      {gallery.sets.map((set) => (
        <Link
          key={set.slug}
          href={`/gallery/${gallery.slug}/${set.slug}`}
        >
          <Image src={set.cover} alt={set.title} width={260} height={340} loading="lazy"/>
          <h3>{set.title}</h3>
        </Link>
      ))}
    </main>
  );
}
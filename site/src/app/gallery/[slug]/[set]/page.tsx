import { galleries } from "@/content/gallery";
import Image from "next/image";

type Props = {
  params: Promise<{
    slug: string;
    set: string;
  }>;
};

export default async function GallerySetPage({ params }: Props) {
  const result = await params;

  console.log(result);

  const { slug, set } = result;
  // const { slug, set } = await params;

  const gallery = galleries.find((g) => g.slug === slug);

  if (!gallery) return <h1>404</h1>;

  const gallerySet = gallery.sets.find((s) => s.slug === set);

  if (!gallerySet) return <h1>404</h1>;

  return (
    <main className="container">
      <h1>{gallery.title} / {gallerySet.title}</h1>

      <section className="gallery-grid">
        {gallerySet.images.map((image) => (
          <Image
            key={image}
            src={image}
            alt={gallerySet.title}
            width={350}
            height={500}
          />
        ))}
      </section>
    </main>
  );
}
import type { Metadata } from "next";
import { galleries } from "@/content/gallery";
import GallerySetClient from "./GallerySetClient";

type Props = {
  params: Promise<{
    slug: string;
    set: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  // app/gallery/[slug]/page.tsx
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const { slug, set } = await params;

  const gallery = galleries.find((g) => g.slug === slug);
  const gallerySet = gallery?.sets.find((s) => s.slug === set);

  if (!gallery || !gallerySet) {
    return {
      title: "Gallery Not Found",
      description: "ギャラリーが見つかりませんでした。",
    };
  }

  const title = `${gallery.title} / ${gallerySet.title}`;

  return {
    title,
    description: `${gallery.title}「${gallerySet.title}」のAIイラストギャラリー。`,

    alternates: {
      canonical: `/gallery/${slug}/${set}`,
    },

    openGraph: {
      title: `${title} | nnzzm.com`,
      description: `${gallery.title}「${gallerySet.title}」のAIイラストギャラリー。`,
      url: `/gallery/${slug}/${set}`,
      images: [
        {
          url: gallerySet.cover,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${title} | nnzzm.com`,
      description: `${gallery.title}「${gallerySet.title}」のAIイラストギャラリー。`,
      images: [gallerySet.cover],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug, set } = await params;

  const gallery = galleries.find((g) => g.slug === slug);
  const gallerySet = gallery?.sets.find((s) => s.slug === set);

  if (!gallery || !gallerySet) {
    return <h1>404</h1>;
  }

  return <GallerySetClient gallery={gallery} gallerySet={gallerySet} />;
}
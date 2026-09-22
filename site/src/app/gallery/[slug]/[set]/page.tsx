"use client";

import { use, useEffect, useState } from "react";
import { galleries } from "@/content/gallery";
import Image from "next/image";
import { useCallback } from "react";

type Props = {
  params: Promise<{
    slug: string;
    set: string;
  }>;
};

export default function GallerySetPage({ params }: Props) {
  const { slug, set } = use(params);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const gallery = galleries.find((g) => g.slug === slug);
  const gallerySet = gallery?.sets.find((s) => s.slug === set);

  const openImage = (index: number) => setSelectedIndex(index);
  const closeImage = () => setSelectedIndex(null);

  const nextImage = useCallback(() => {
    if (!gallerySet) return;

    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev + 1) % gallerySet.images.length
    );
  }, [gallerySet]);

  const prevImage = useCallback(() => {
    if (!gallerySet) return;

    setSelectedIndex((prev) =>
      prev === null
        ? 0
        : (prev - 1 + gallerySet.images.length) % gallerySet.images.length
    );
  }, [gallerySet]);


  useEffect(() => {
    if (selectedIndex === null || !gallerySet) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);

    
    const next = new window.Image();
    next.src =
      gallerySet.images[(selectedIndex + 1) % gallerySet.images.length];

    const prev = new window.Image();
    prev.src =
      gallerySet.images[
      (selectedIndex - 1 + gallerySet.images.length) %
      gallerySet.images.length
      ];

    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, gallerySet, nextImage, prevImage]);

  if (!gallery || !gallerySet) {
    return <h1>404</h1>;
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="mb-10 text-4xl font-bold text-white">
        {gallery.title}
        <span className="text-white"> / {gallerySet.title}</span>
      </h1>

      <section className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {gallerySet.images.map((image, index) => (
          <Image
            key={image}
            src={image}
            alt={gallerySet.title}
            width={350}
            height={500}
            loading="lazy"
            onClick={() => openImage(index)}
            className="aspect-[3/4] w-full cursor-zoom-in rounded-xl object-cover transition duration-200 hover:scale-[1.02]"
          />
        ))}
      </section>

      {selectedIndex !== null && (
        <div
          onClick={closeImage}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeImage();
            }}
            className="absolute top-6 right-6 text-3xl text-white hover:text-sky-400"
          >
            ✕
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 rounded-full bg-white/10 p-4 text-3xl text-white backdrop-blur hover:bg-white/20"
          >
            ❮
          </button>

          <Image
            src={gallerySet.images[selectedIndex]}
            alt={gallerySet.title}
            width={1200}
            height={1800}
            sizes="90vw"
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] w-auto rounded-xl object-contain"
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 rounded-full bg-white/10 p-4 text-3xl text-white backdrop-blur hover:bg-white/20"
          >
            ❯
          </button>

          <p className="absolute bottom-6 text-sm text-zinc-300">
            {selectedIndex + 1} / {gallerySet.images.length}
          </p>
        </div>
      )}
    </main>
  );
}
"use client";

import { useState, useEffect } from "react";
import { galleries } from "@/content/gallery";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
    set: string;
  };
};

export default function GallerySetPage({ params }: Props) {

  const { slug, set } = params;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);


  const openImage = (index: number) => setSelectedIndex(index);
  const closeImage = () => setSelectedIndex(null);

  const gallery = galleries.find((g) => g.slug === slug);
  const gallerySet = gallery?.sets.find((s) => s.slug === set);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex === null || !gallerySet) return;

      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight")
        setSelectedIndex((selectedIndex + 1) % gallerySet.images.length);
      if (e.key === "ArrowLeft")
        setSelectedIndex(
          (selectedIndex - 1 + gallerySet.images.length) %
          gallerySet.images.length
        );
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, gallerySet]);

  const nextImage = () => {
    if (selectedIndex === null || !gallerySet) return;

    setSelectedIndex((selectedIndex + 1) % gallerySet.images.length);
  };

  if (!gallery || !gallerySet) {
    return <h1>404</h1>;
  }

  const prevImage = () => {
    if (selectedIndex === null || !gallerySet) return;

    setSelectedIndex(
      (selectedIndex - 1 + gallerySet.images.length) %
      gallerySet.images.length
    );
  };

  return (
    <main className="container">
      <h1>{gallery.title} / {gallerySet.title}</h1>

      <section className="gallery-grid">
        {gallerySet.images.map((image, index) => (
          <Image
            key={image}
            src={image}
            alt={gallerySet.title}
            width={350}
            height={500}
            className="gallery-image"
            onClick={() => openImage(index)}
            loading="lazy"
          />
        ))}
      </section>
      {selectedIndex !== null && (
        <div className="lightbox" onClick={closeImage}>
          <button
            className="close-btn"
            onClick={(e) => {
              e.stopPropagation();
              closeImage();
            }}
          >
            ✕
          </button>

          <button
            className="nav prev"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            ❮
          </button>

          <Image
            src={gallerySet.images[selectedIndex]}
            alt={gallerySet.title}
            width={1200}
            height={1800}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="nav next"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            ❯
          </button>

          <p className="counter">
            {selectedIndex + 1} / {gallerySet.images.length}
          </p>
        </div>
      )}
    </main>
  );
}
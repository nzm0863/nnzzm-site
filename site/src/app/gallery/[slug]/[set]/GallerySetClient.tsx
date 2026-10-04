"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Gallery, GallerySet } from "@/content/gallery";

type Props = {
  gallery: Gallery;
  gallerySet: GallerySet;
};

export default function GallerySetClient({
  gallery,
  gallerySet,
}: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openImage = (index: number) => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  // 指定した画像を読み込んでから切り替える
  const changeImage = useCallback(
    (index: number) => {
      if (!gallerySet) return;

      const src = gallerySet.images[index];

      const img = new window.Image();

      img.onload = () => {
        setSelectedIndex(index);
      };

      img.src = src;
    },
    [gallerySet]
  );

  const nextImage = useCallback(() => {
    if (!gallerySet || selectedIndex === null) return;

    const nextIndex =
      (selectedIndex + 1) % gallerySet.images.length;

    changeImage(nextIndex);
  }, [gallerySet, selectedIndex, changeImage]);

  const prevImage = useCallback(() => {
    if (!gallerySet || selectedIndex === null) return;

    const prevIndex =
      (selectedIndex - 1 + gallerySet.images.length) %
      gallerySet.images.length;

    changeImage(prevIndex);
  }, [gallerySet, selectedIndex, changeImage]);

  // キーボード操作 + 前後画像の先読み
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeImage();
      }

      if (e.key === "ArrowRight") {
        nextImage();
      }

      if (e.key === "ArrowLeft") {
        prevImage();
      }
    };

    window.addEventListener("keydown", handleKey);

    // 次の画像を先読み
    const nextIndex =
      (selectedIndex + 1) % gallerySet.images.length;

    const next = new window.Image();
    next.src = gallerySet.images[nextIndex];

    // 前の画像を先読み
    const prevIndex =
      (selectedIndex - 1 + gallerySet.images.length) %
      gallerySet.images.length;

    const prev = new window.Image();
    prev.src = gallerySet.images[prevIndex];

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [selectedIndex, gallerySet, nextImage, prevImage]);

  if (!gallery || !gallerySet) {
    return <h1>404</h1>;
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="md:mb-10 md:text-4xl sm:text-2xl font-bold text-white">
        {gallery.title}
        <span className="text-white"> / {gallerySet.title}</span>
      </h1>

      <Link
        href={`/gallery/${gallery.slug}`}
        className="mb-8 inline-flex items-center gap-2 text-zinc-400 hover:text-sky-400"
      >
        ← {gallery.title} に戻る
      </Link>

      {/* ギャラリー一覧 */}
      <section className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {gallerySet.images.map((image, index) => (
          <Image
            key={image}
            src={image}
            alt={gallerySet.title}
            width={350}
            height={500}
            loading={index === 0 ? "eager" : "lazy"}
            priority={index === 0}
            onClick={() => openImage(index)}
            className="aspect-[3/4] w-full cursor-zoom-in object-cover transition duration-200 hover:scale-[1.02]"
            unoptimized
          />
        ))}
      </section>

      {/* 詳細表示 */}
      {selectedIndex !== null && (
        <div
          onClick={closeImage}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
        >
          {/* 閉じる */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeImage();
            }}
            className="absolute top-6 right-6 z-10 text-3xl text-white hover:text-sky-400"
          >
            ✕
          </button>

          {/* 前へ */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 z-10 rounded-full bg-white/10 p-4 text-3xl text-white backdrop-blur hover:bg-white/20"
          >
            ❮
          </button>

          {/* 詳細画像 */}
          <Image
            src={gallerySet.images[selectedIndex]}
            alt={gallerySet.title}
            width={1200}
            height={1800}
            sizes="90vw"
            onClick={(e) => e.stopPropagation()}
            className="h-[95vh] w-auto max-w-[90vw] object-contain"
            loading="eager"
            unoptimized
          />

          {/* 次へ */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 z-10 rounded-full bg-white/10 p-4 text-3xl text-white backdrop-blur hover:bg-white/20"
          >
            ❯
          </button>

          {/* カウンター */}
          <p className="absolute bottom-20 left-20 text-sm text-zinc-400">
            {selectedIndex + 1} / {gallerySet.images.length}
          </p>

          <p className="absolute bottom-14 left-20 text-xs text-zinc-500">
            ← → キーで切替 / Escで閉じる
          </p>
        </div>
      )}
    </main>
  );
}
"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  title: string;
  image: string;
  gallery: string[];
};

export default function ProjectGallery({
  title,
  image,
  gallery,
}: Props) {
  const [selectedImage, setSelectedImage] = useState(image);

  return (
    <>
      <Image
        src={selectedImage}
        alt={title}
        width={1200}
        height={675}
        className="aspect-video w-full rounded-2xl object-cover shadow-lg"
        priority
      />

      {gallery.length > 0 && (
        <div className="mt-4 grid grid-cols-4 gap-3">
          {gallery.map((img) => (
            <button
              key={img}
              onClick={() => setSelectedImage(img)}
              className={`overflow-hidden rounded-xl border transition ${
                selectedImage === img
                  ? "border-sky-400 ring-1 ring-sky-400"
                  : "border-zinc-800 hover:border-zinc-600"
              }`}
            >
              <Image
                src={img}
                alt={title}
                width={300}
                height={200}
                className="aspect-video w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </>
  );
}
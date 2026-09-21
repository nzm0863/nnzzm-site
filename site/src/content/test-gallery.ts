const imageRange = (path: string, count: number) =>
  Array.from({ length: count }, (_, i) =>
    `${path}/${String(i + 1).padStart(5, "0")}.webp`
  );

images: imageRange("/images/gallery/ToLOVE-ru/lala/normal", 73)
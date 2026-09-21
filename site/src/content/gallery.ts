export type GallerySet = {
  slug: string;
  title: string;
  cover: string;
  images: string[];
};

export type Gallery = {
  slug: string;
  category: string;
  title: string;
  sets: GallerySet[];
};

export const galleries: Gallery[] = [
  {
    slug: "toloveru-lala",
    category: "ToLOVEる",
    title: "ララ・サタリン・デビルーク",
    sets: [
      {
        slug: "normal",
        title: "通常衣装",
        cover: "/images/gallery/ToLOVE-ru/lala/normal/cover.webp",
        images: [
          "/images/gallery/ToLOVE-ru/lala/normal/00001.webp",
          "/images/gallery/ToLOVE-ru/lala/normal/00002.webp",
        ],
      },
      {
        slug: "miko",
        title: "巫女",
        cover: "/images/gallery/ToLOVE-ru/lala/miko/cover.webp",
        images: [
          "/images/gallery/ToLOVE-ru/lala/miko/01.webp",
          "/images/gallery/ToLOVE-ru/lala/miko/02.webp",
        ],
      },
      {
        slug: "shower",
        title: "シャワー",
        cover: "/images/gallery/ToLOVE-ru/lala/shower/cover.webp",
        images: [
          "/images/gallery/ToLOVE-ru/lala/shower/01.webp",
        ],
      },
    ],
  },
];
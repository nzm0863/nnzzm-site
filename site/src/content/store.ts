export type StoreProduct = {
  slug: string;
  title: string;
  imageCount: number;
  price: number;
  image: string;
  samples: string[];
};

export const storeProducts: StoreProduct[] = [
  {
    slug: "collection-001",
    title: "イラスト集 Vol.1",
    imageCount: 150,
    price: 500,
    image: "/images/store/samples/001/001.webp",
    samples: [
      "/images/store/samples/001/001.webp",
      "/images/store/samples/001/002.webp",
      "/images/store/samples/001/003.webp",
      "/images/store/samples/001/004.webp",
      "/images/store/samples/001/005.webp",
    ],
  },
];
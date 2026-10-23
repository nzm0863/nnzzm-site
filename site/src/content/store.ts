export const storeProducts: StoreProduct[] = [
  {
    slug: "collection-001",
    title: "イラスト集 Vol.1",
    imageCount: 150,
    price: 500,
    image: "/images/store/001.webp",
  }
];

export type StoreProduct = {
  slug: string;
  title: string;
  imageCount: number;
  price: number;
  image: string;
};
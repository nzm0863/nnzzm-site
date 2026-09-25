export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  thumbnail: string;
  description: string;
  tags: string[];
  content: string[];
};

export const posts = [
  {
    slug: "portfolio-renewal",
    title: "ポートフォリオを Next.js + Tailwind に移行した話",
    category: "Next.js",
    date: "2026-09-23",
    thumbnail: "/images/blog/default-cover.webp",
    description: "CSSからTailwindへ移行し、GalleryやHeaderもリファクタリングしました。",
    tags: ["Next.js", "Tailwind", "Portfolio"],
    content: [
      "今回はポートフォリオをTailwindへ移行しました。",
      "HeaderとFooterもコンポーネント化しました。",
      "Galleryはcontentフォルダからデータを読み込む構成に変更しました。"
    ]
  },
  
];
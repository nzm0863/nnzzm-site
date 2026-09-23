export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  thumbnail: string;
  description: string;
  tags: string[];
};

export const posts = [
  {
    slug: "portfolio-renewal",
    title: "ポートフォリオを Next.js + Tailwind に移行した話",
    category: "Next.js",
    date: "2026-09-23",
    thumbnail: "/images/blog/portfolio-renewal/cover.webp",
    description: "CSSからTailwindへ移行し、GalleryやHeaderもリファクタリングしました。",
    tags: ["Next.js", "Tailwind", "Portfolio"],
  },
  {
    slug: "esp32-line",
    title: "ESP32からLINE通知を送る方法",
    category: "ESP32",
    date: "2026-09-18",
    thumbnail: "/images/blog/esp32-line/cover.webp",
    description: "LINE Messaging APIを使ってESP32から通知を送る手順。",
    tags: ["ESP32", "IoT", "LINE"],
  },
];
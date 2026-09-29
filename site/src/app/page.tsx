import Hero from "@/components/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IoT × Web × AI Portfolio",
  description:
    "ESP32・Raspberry Pi・Next.js・TypeScriptを中心としたIoT・Web・AIの個人開発ポートフォリオ。制作実績、ブログ、ツール、AIギャラリーを掲載しています。",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "nnzzm.com | IoT × Web × AI Portfolio",
    description:
      "ESP32・Raspberry Pi・Next.jsを中心にしたIoT・Web・AIの個人開発ポートフォリオ。",
    url: "/",
    images: ["/ogp-home.webp"],
  },
};

export default function Home() {
  return <Hero />;
}
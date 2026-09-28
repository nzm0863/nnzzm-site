import Hero from "@/components/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | nnzzm.com",
  description:
    "ESP32・Raspberry Pi・Next.jsを中心にIoT・Web・AIの個人開発をしているNakamura / nnzzmのプロフィール。",
};

export default function Home() {
  return <Hero />;
}
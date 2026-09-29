import ProjectsClient from "@/components/ProjectsClient";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "ESP32・Raspberry Pi・React・Next.js・Pythonを使ったIoT・Web・AIの制作実績一覧。電子工作、個人開発、ポートフォリオ作品を紹介します。",

  alternates: {
    canonical: "/projects",
  },

  openGraph: {
    title: "Projects | nnzzm.com",
    description:
      "ESP32・Raspberry Pi・Web・AI開発の制作実績一覧。",
    url: "/projects",
    images: ["/ogp-home.webp"],
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
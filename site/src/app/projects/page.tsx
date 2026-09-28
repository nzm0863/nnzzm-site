import type { Metadata } from "next";
import ProjectsClient from "@/components/ProjectsClient";

export const metadata: Metadata = {
  title: "Projects | nnzzm.com",
  description:
    "ESP32・Raspberry Pi・Next.jsを中心に制作したIoT・Web・AIプロジェクト一覧。",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
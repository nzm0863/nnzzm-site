"use client";

import { useState } from "react";
import { projects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredProjects = selectedTag
    ? projects.filter((p) => p.tags.includes(selectedTag))
    : projects;
  return (
    <main className="container">
      <section className="page-hero">
        <h1>制作物</h1>
        <p>IoT・Web・AIで制作したプロジェクトをまとめています。</p>
      </section>

      <section className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
      <button onClick={() => setSelectedTag("ESP32")}>
        ESP32
      </button>
    </main>
  );
}
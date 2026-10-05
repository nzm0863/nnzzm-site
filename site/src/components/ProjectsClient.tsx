"use client";

import { useState } from "react";
import { projects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";
import { profile } from "@/content/profile";
import Link from "next/link";

export default function ProjectsClient() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const tags = [...new Set(projects.flatMap((p) => p.tags))];

  const filteredProjects = selectedTag
    ? projects.filter((p) => p.tags.includes(selectedTag))
    : projects;

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <section className="mb-12">
        <h1 className="text-5xl font-serif tracking-wide">Projects</h1>
        <div className="mt-4 sm:flex justify-between">
          <p className="text-zinc-400">
            IoT・Web・AIで制作したプロジェクトをまとめています。
          </p>
          <Link
            rel="noopener noreferrer"
            href={profile.techsLinks[1].url}
            target="_blank"
            className="flex text-sky-500 items-center transition hover:text-pink-400"
          >YouTubeはこちら→</Link>
        </div>
      </section>

      <section className="mb-10 flex flex-wrap gap-3">
        <button
          onClick={() => setSelectedTag(null)}
          className="rounded-full border border-zinc-700 px-4 py-2 text-sm hover:border-sky-500 hover:text-sky-400"
        >
          All
        </button>

        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className="rounded-full border border-zinc-700 px-4 py-2 text-sm transition hover:border-sky-500 hover:text-sky-400"
          >
            {tag}
          </button>
        ))}
      </section>

      <section className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </main>
  );
}
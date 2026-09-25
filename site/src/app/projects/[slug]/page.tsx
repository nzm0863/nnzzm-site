import { notFound } from "next/navigation";
import Link from "next/link";
import { FaGithub, FaYoutube } from "react-icons/fa";

import { projects } from "@/content/projects";
import ProjectGallery from "@/components/ProjectGallery";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <ProjectGallery
        title={project.title}
        image={project.thumbnail}
        gallery={project.gallery ?? []}
      />

      <p className="mt-8 text-sm tracking-widest text-sky-400">
        {project.period}
      </p>

      <h1 className="mt-3 text-5xl font-serif tracking-wide">
        {project.title}
      </h1>

      <div className="flex flex-wrap gap-3">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-sky-400/40 px-4 py-2 text-sm text-sky-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="mt-6 text-xl text-zinc-200 leading-8">
        {project.overview}
      </p>

      <p className="mt-6 text-lg leading-8 text-zinc-300">
        {project.description}
      </p>

      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-serif">特徴</h2>

        <ul className="space-y-3 text-zinc-300">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-sky-400" />
              {feature}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-8 flex gap-4">
        {project.github && (
          <Link
            href={project.github}
            target="_blank"
            className="flex items-center gap-2 rounded-xl border border-zinc-700 px-4 py-3 transition hover:border-sky-400 hover:text-sky-400"
          >
            <FaGithub />
            GitHub
          </Link>
        )}

        {project.youtube && (
          <Link
            href={project.youtube}
            target="_blank"
            className="flex items-center gap-2 rounded-xl border border-zinc-700 px-4 py-3 transition hover:border-pink-400 hover:text-pink-400"
          >
            <FaYoutube />
            YouTube
          </Link>
        )}
      </div>

      <section className="mt-16 space-y-8 leading-8 text-zinc-300">
        {project.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
    </main>
  );
}
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaYoutube } from "react-icons/fa";
import type { Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40">
      <Link href={`/projects/${project.slug}`}>
        <Image
          src={project.thumbnail || "/images/projects/default-cover.webp"}
          alt={project.title}
          width={640}
          height={400}
          className="aspect-video w-full rounded-xl object-cover transition duration-300 group-hover:scale-[1.02]"
        />
      </Link>

      <div className="mt-5 space-y-4">
        <div>
          <p className="text-xs uppercase tracking-widest text-sky-400">
            {project.period}
          </p>

          <Link href={`/projects/${project.slug}`}>
            <h2 className="mt-2 text-2xl font-serif transition-colors group-hover:text-sky-400">
              {project.title}
            </h2>
          </Link>

          <p className="mt-2 text-sm leading-7 text-zinc-400">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs text-sky-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              className="flex items-center gap-2 text-zinc-400 transition hover:text-white"
            >
              <FaGithub size={18} />
              <span className="text-sm">GitHub</span>
            </Link>
          )}

          {project.youtube && (
            <Link
              href={project.youtube}
              target="_blank"
              className="flex items-center gap-2 text-zinc-400 transition hover:text-red-400"
            >
              <FaYoutube size={18} />
              <span className="text-sm">YouTube</span>
            </Link>
          )}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="inline-block text-sm text-sky-400 transition hover:text-sky-300"
        >
          詳細を見る →
        </Link>
      </div>
    </article>
  );
}
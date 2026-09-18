import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaYoutube } from "react-icons/fa";
import type { Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <Image
        src={project.image}
        alt={project.title}
        width={640}
        height={400}
        className="project-image"
      />

      <div className="project-content">
        <h2>{project.title}</h2>
        <p>{project.description}</p>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          {project.github && (
            <Link href={project.github} target="_blank" className="project-link">
              <FaGithub size={18} />
              GitHub
            </Link>
          )}

          {project.youtube && (
            <Link href={project.youtube} target="_blank" className="project-link">
              <FaYoutube size={18} />
              YouTube
            </Link>
          )}
        </div>

        <Link href={`/projects/${project.slug}`} className="btn-outline">
          詳細を見る →
        </Link>
      </div>
    </article>
  );
}
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  project: {
    slug: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
  };
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

        <Link href={`/projects/${project.slug}`} className="btn-outline">
          詳細を見る →
        </Link>
      </div>
    </article>
  );
}
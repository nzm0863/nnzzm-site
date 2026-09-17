import { projects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
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
    </main>
  );
}
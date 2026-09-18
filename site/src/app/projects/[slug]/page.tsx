import { projects } from "@/content/projects";
type PageProps = {
  params: {
    slug: string;
  };
};

export default function ProjectPage({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return <h1>404</h1>;
  }

  return <h1>{project.title}</h1>;
}
"use client";

import { useState } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import Link from "next/link";
import { FaGithub, FaYoutube } from "react-icons/fa";

type PageProps = {
  params: {
    slug: string;
  };
};

export default function ProjectPage({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const [selectedImage, setSelectedImage] = useState(project.image);

  return (
    <main className="container project-detail">
      <Image
        src={selectedImage}
        alt={project.title}
        width={1200}
        height={700}
        className="project-hero-image"
      />

      <section className="gallery-grid">
        {project.gallery?.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`gallery-thumb ${selectedImage === image ? "active" : ""
              }`}
          >
            <Image
              src={image}
              alt={`${project.title} ${index + 1}`}
              width={300}
              height={200}
              className="gallery-image"
            />
          </button>
        ))}
      </section>

      <h1>{project.title}</h1>
      <div className="tag-list">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <p>{project.description}</p>


      {/* <p>{project.content}</p>
      <p>{project.overview}</p> */}

      <section>
        <h2>特徴</h2>

        <ul>
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      <div className="techStack-list">
        {project.techStack.map((techStack) => (
          <span key={techStack}>{techStack}</span>
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
    </main>
  );
}
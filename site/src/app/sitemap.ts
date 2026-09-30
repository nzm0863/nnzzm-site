import { MetadataRoute } from "next";
import { posts } from "@/content/blog";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.nnzzm.com";

  return [
    { url: base },
    { url: `${base}/about` },
    { url: `${base}/projects` },
    { url: `${base}/blog` },
    { url: `${base}/gallery` },
    { url: `${base}/tools` },

    ...posts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
    })),

    ...projects.map((project) => ({
      url: `${base}/projects/${project.slug}`,
    })),
  ];
}
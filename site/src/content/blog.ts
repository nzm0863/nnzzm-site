import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  thumbnail: string;
  description: string;
  seoDescription?: string;
  tags: string[];
  content: string;
};

const blogDirectory = path.join(
  process.cwd(),
  "src/content/blog"
);

export const posts: BlogPost[] = fs
  .readdirSync(blogDirectory)
  .filter((file) => file.endsWith(".md"))
  .map((file) => {
    const filePath = path.join(blogDirectory, file);
    const fileContents = fs.readFileSync(filePath, "utf8");

    const { data, content } = matter(fileContents);

    return {
      slug: data.slug ?? path.basename(file, ".md"),
      title: data.title,
      category: data.category,
      date: data.date,
      thumbnail: data.thumbnail,
      description: data.description,
      seoDescription: data.seoDescription,
      tags: data.tags ?? [],
      content: content.trim(),
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));
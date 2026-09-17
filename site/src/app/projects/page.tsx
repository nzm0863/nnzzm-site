import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    slug: "esp32-mecanum",
    title: "ESP32 メカナムロボット",
    description: "ESP32・React・WebSocketで操作するロボット。",
    image: "/images/projects/ESP32Car.jpg",
    tags: ["ESP32", "React", "WebSocket"],
  },
  {
    slug: "ai-auto-blur",
    title: "AI Auto Blur",
    description: "AIを使った画像ぼかしツール。",
    image: "/images/projects/AI_auto_blur.png",
    tags: ["Electron", "Python", "AI"],
  },
  {
    slug: "raspi-ai-camera",
    title: "Raspberry Pi AI Camera",
    description: "YOLO11を使った物体検出カメラ。",
    image: "/images/projects/raspi_camera.png",
    tags: ["Raspberry Pi", "YOLO11", "Python"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="container">
      <section className="page-hero">
        <h1>制作物</h1>
        <p>IoT・Web・AIで制作したプロジェクトをまとめています。</p>
      </section>

      <section className="projects-grid">
        {projects.map((project) => (
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
        ))}
      </section>
    </main>
  );
}
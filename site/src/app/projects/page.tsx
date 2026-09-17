import Link from "next/link";

const projects = [
  {
    title: "ESP32 メカナムロボット",
    description: "ESP32・React・WebSocketで操作するロボット。",
    tags: ["ESP32", "React", "WebSocket"],
  },
  {
    title: "AI Auto Blur",
    description: "AIを使った画像ぼかしツール。",
    tags: ["Electron", "Python", "AI"],
  },
  {
    title: "Raspberry Pi AI Camera",
    description: "YOLO11を使った物体検出カメラ。",
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
          <article key={project.title} className="project-card">
            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            <Link href="/" className="btn-outline">
              詳細を見る
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
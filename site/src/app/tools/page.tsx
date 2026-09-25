import Image from "next/image";
import Link from "next/link";
import { tools } from "@/content/tools";
import { FaGithub, FaYoutube } from "react-icons/fa";

export default function ToolsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      {/* Hero */}
      <section className="space-y-4">
        <h1 className="text-5xl font-serif tracking-wide">Tools</h1>

        <p className="max-w-2xl text-lg leading-8 text-zinc-300">
          IoT・Web・AI開発で実際に作った便利ツールやテンプレートを公開しています。
        </p>
      </section>

      {/* Tools Grid */}
      <section className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {tools.map((tool) => (
          <article
            key={tool.title}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/40 transition hover:border-sky-400"
          >
            <Image
              src={tool.image}
              alt={tool.title}
              width={640}
              height={360}
              className="aspect-video w-full object-cover"
            />

            <div className="space-y-4 p-5">
              <div className="flex items-center justify-between">
                <h2 className="min-h-[64px] text-xl font-serif leading-tight">{tool.title}</h2>

                <span
                  className={`rounded-full px-3 py-1 text-xs tracking-wide ${tool.status === "Available"
                      ? "border border-sky-400/40 text-sky-300"
                      : "border border-zinc-400 text-zinc-400"
                    }`}
                >
                  {tool.status}
                </span>
              </div>

              <p className="min-h-[32px] leading-tight text-sm leading-7 text-zinc-400">
                {tool.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {tool.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-sky-400/30 px-3 py-1 text-xs text-sky-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-4 pt-2">
                {tool.github && (
                  <Link
                    href={tool.github}
                    target="_blank"
                    className="flex items-center gap-2 rounded-xl border border-zinc-700 px-4 py-3 transition hover:border-sky-400 hover:text-sky-400"
                  >
                    <FaGithub />
                    GitHub
                  </Link>
                )}

                <Link
                  href={`/tools/${tool.youtube}`}
                  className="flex items-center gap-2 rounded-xl border border-zinc-700 px-4 py-3 transition hover:border-pink-400 hover:text-pink-400"
                >
                  <FaYoutube />
                  YouTube
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
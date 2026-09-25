import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content/projects";
import { FaGithub, FaYoutube, FaXTwitter, FaDiscord } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { SiPixiv, SiNiconico } from "react-icons/si";
import { profile } from "@/content/profile";

export default function AboutPage() {
  const iconMap = {
    github: FaGithub,
    youtube: FaYoutube,
    website: TbWorld,
    x: FaXTwitter,
    pixiv: SiPixiv,
    discord: FaDiscord,
    niconico: SiNiconico,
  };

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <section className="flex flex-col items-center text-center space-y-8">
        <h1 className="text-5xl font-serif tracking-wide">About</h1>

        <div className="rounded-full bg-pink-500/10 p-2 shadow-[0_0_80px_rgba(236,72,153,0.35)]">
          <Image
            src="/images/profile/nnzzm-mascot.png"
            alt="nnzzm mascot"
            width={150}
            height={150}
            priority
            className="rounded-full drop-shadow-[0_0_40px_rgba(236,72,153,0.45)]"
          />
        </div>

        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-serif">{profile.name}</h2>

          <p className="text-zinc-400 tracking-wide">
            {profile.role}
          </p>
        </div>

        <p className="max-w-2xl text-center text-lg leading-8 text-zinc-300">
          {profile.description}
        </p>
      </section>

      <section className="mt-20">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-serif">作っているもの</h2>

          <Link
            href="/projects"
            className="text-sky-400 transition hover:text-sky-300"
          >
            すべて見る →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects
            .filter((project) => project.featured)
            .slice(0, 2)
            .map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group overflow-hidden rounded-2xl border border-zinc-800 transition hover:border-sky-400"
              >
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  width={600}
                  height={340}
                  className="aspect-video w-full object-cover transition duration-300 group-hover:scale-105"
                />

                <div className="space-y-3 p-5">
                  <p className="text-xs tracking-widest text-sky-400">
                    {project.period}
                  </p>

                  <h3 className="text-xl font-serif group-hover:text-sky-300">
                    {project.title}
                  </h3>

                  <p className="text-sm text-zinc-400">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-sky-400/30 px-3 py-1 text-xs text-sky-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="mb-8 text-3xl font-serif">Tech Stack</h2>

        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-sm tracking-[0.2em] text-zinc-500 uppercase">
              IoT
            </h3>

            <div className="flex flex-wrap gap-3">
              {profile.IoTTechs.map((tech) => (
                <span key={tech} className="rounded-full border border-sky-400/30 px-4 py-2 text-sm text-sky-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm tracking-[0.2em] text-zinc-500 uppercase">
              Web / AI
            </h3>

            <div className="flex flex-wrap gap-3">
              {profile.WebTechs.map((tech) => (
                <span key={tech} className="rounded-full border border-sky-400/30 px-4 py-2 text-sm text-sky-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="mb-8 text-3xl font-serif">Links</h2>

        <h3 className="mb-4 text-sm tracking-[0.2em] text-zinc-500 uppercase">development</h3>
        {/* Tech Links */}
        <div className="flex flex-wrap gap-4">
          {profile.techsLinks.map((link) => {
            const Icon = iconMap[link.icon as keyof typeof iconMap];

            return (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                className="flex items-center gap-2 rounded-xl border border-zinc-700 px-4 py-3 transition hover:border-pink-400 hover:text-pink-400"
              >
                <Icon size={18} />
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* SNS Links */}
        <h3 className="mb-4 mt-6 text-sm tracking-[0.2em] text-zinc-500 uppercase">community</h3>
        <div className="mt-4 flex flex-wrap gap-4">
          {profile.snsLinks.map((link) => {
            const Icon = iconMap[link.icon as keyof typeof iconMap];

            return (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                className="flex items-center gap-2 rounded-xl border border-zinc-700 px-4 py-3 transition hover:border-sky-400 hover:text-sky-400"
              >
                <Icon size={18} />
                {link.name}
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="relative overflow-hidden">
      <section className="relative flex min-h-[85vh] items-center justify-center px-6">

        {/* 背景グラデーション */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12),transparent_60%)]" />

        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <div className="rounded-full bg-pink-500/10 p-2 shadow-[0_0_80px_rgba(236,72,153,0.35)]">
            <Image
              src="/images/profile/nnzzm-mascot.png"
              alt="nnzzm mascot"
              width={220}
              height={220}
              priority
              className="rounded-full drop-shadow-[0_0_40px_rgba(236,72,153,0.45)]"
            />
          </div>
          <h1 className="font-title mt-10 text-5xl font-light tracking-[0.35em] md:text-7xl">
            IoT × Web × AI
          </h1>

          <p className="mt-6 text-base text-zinc-400 md:text-xl">
            ESP32・Raspberry Pi・React・AI開発をまとめた個人開発サイト
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/projects"
              className="rounded-xl border border-sky-500 px-8 py-4 font-medium transition hover:border-yellow-500
              transition-all duration-300
              hover:bg-sky-500/10 hover:shadow-[0_0_24px_rgba(14,165,233,0.85)]"
            >
              個人開発を見る
            </Link>

            <Link
              href="/gallery"
              className="rounded-xl border border-pink-500 px-8 py-4 font-medium transition hover:border-green-500
              transition-all duration-300
              hover:bg-pink-500/10 hover:shadow-[0_0_24px_rgba(236,72,153,0.85)]"
            >
              AI Gallery
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

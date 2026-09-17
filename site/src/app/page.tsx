import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="container">
            <Image
              src="/images/profile/nnzzm-mascot.png"
              alt="nnzzm mascot"
              width={320}
              height={320}
              priority
              className="hero-avatar"
            />
            <h1 className="animate-fade-in-up">
              IoT × Web × AI
            </h1>

            <p
              className="animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              ESP32・Raspberry Pi・React・AI開発をまとめた個人開発サイト
            </p>

            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <Link href="/blog" className="btn">
                開発ブログを見る
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

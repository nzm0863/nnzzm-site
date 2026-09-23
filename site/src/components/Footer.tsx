import Link from "next/link";
import { navItems } from "@/constants/navigation";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-800 bg-[#141d21]">
      <div className="mx-auto max-w-7xl px-6 pt-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* 左 */}
          <section>
            <h3 className="mb-4 text-xl text-white">
              nnzzm.com
            </h3>

            <p className="text-sm leading-7 text-zinc-300">
              IoT・Web・AIの個人開発ポートフォリオ
            </p>
          </section>

          {/* 中央 */}
          <section>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-zinc-200">
              ナビゲーション
            </h4>

            <nav className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
              {navItems
                .filter((item) => item.footer)
                .map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-zinc-300 transition hover:text-sky-400"
                  >
                    {item.name}
                  </Link>
                ))}
            </nav>
          </section>
          {/* 右 */}
          <section>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-zinc-200">
              お問い合わせ
            </h4>

            <p className="text-sm leading-7 text-zinc-300">
              ご質問やご意見がございましたら、
              <br />
              お気軽にお声がけください。
            </p>

            <a
              href="mailto:nzm91264@gmail.com"
              className="mt-3 inline-block text-sm text-sky-500 transition hover:text-sky-300"
            >
              nzm91264@gmail.com
            </a>
          </section>
        </div>

        <div className="mt-12 border-t border-zinc-800 py-2 text-center">
          <p className="text-xs tracking-wide text-zinc-500">
            © {new Date().getFullYear()} nnzzm.com · Built by Nakamura.
          </p>
        </div>
      </div>
    </footer>
  );
}
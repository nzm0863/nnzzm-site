import Link from "next/link";
import { navItems } from "@/constants/navigation";
import { profile } from "@/content/profile";

const footerLinkNames = ["X", "Pixiv", "Discord", "YouTube", "BOOTH", "Patreon"];
const allProfileLinks = [
  ...profile.snsLinks,
  ...profile.techsLinks,
  ...profile.storeLinks,
];
const footerLinks = footerLinkNames
  .map((name) => allProfileLinks.find((link) => link.name === name))
  .filter((link) => link !== undefined);

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

            <nav className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8 sm:gap-y-3">
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

            <a
              href="mailto:nakamura.rundev@gmail.com"
              className="inline-block text-sm text-sky-500 transition hover:text-sky-300"
            >
              nakamura.rundev@gmail.com
            </a>
          </section>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-6">
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <span className="text-xs font-semibold tracking-wider text-zinc-500">
              リンク
            </span>
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-green-600 transition hover:text-red-400"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-6 border-t border-zinc-800 py-2 text-center">
          <p className="text-xs tracking-wide text-zinc-500">
            © {new Date().getFullYear()} nnzzm.com · Built by Nakamura.
          </p>
        </div>
      </div>
    </footer>
  );
}
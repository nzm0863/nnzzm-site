"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/constants/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  if (pathname === "/") return null;

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-[#1a1d21]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* ロゴ */}
        <Link
          href="/"
          className="font-serif text-2xl tracking-[0.15em] text-zinc-100"
        >
          nnzzm.com
        </Link>

        {/* PC用ナビ */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="
              relative text-sm text-zinc-300 tracking-[0.08em]
              transition-all duration-100 hover:text-sky-400
              after:absolute after:-bottom-1 after:left-0 after:h-px
              after:w-0 after:bg-sky-400 after:transition-all after:duration-300
              hover:after:w-full
            "
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* スマホ用メニューボタン */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-zinc-300 text-xl"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* スマホ用メニュー */}
      {menuOpen && (
        <nav
          className="
    fixed
    top-16
    right-0
    w-1/2
    min-h-[calc(100vh-4rem)]
    bg-[#1a1d21]/95
    backdrop-blur-md
    border-l border-zinc-800/60
    px-6 py-6
    md:hidden
    menu-slide-in
  "
        >
          <div className="flex flex-col gap-20">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="
            text-3xl
            text-zinc-300
            tracking-[0.08em]
            hover:text-sky-400
          "
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

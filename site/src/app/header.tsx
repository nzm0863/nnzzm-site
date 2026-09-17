"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: "ホーム", href: "/" },
    { name: "ブログ", href: "/blog" },
    { name: "制作物", href: "/projects" },
    { name: "AI", href: "/gallery" },
    { name: "ツール", href: "/tools" },
    { name: "プロフィール", href: "/about" },
  ];

  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="site-title text-xl font-bold">
          nnzzm.com
        </Link>
        <nav className="site-nav">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${pathname === item.href ? "nav-active" : ""
                }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

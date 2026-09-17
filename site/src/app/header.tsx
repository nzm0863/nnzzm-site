"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "Tools", href: "/tools" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="site-title text-xl font-bold">
          nnzzm.com
        </Link>
        <nav className="site-nav">
          <Link href="/" className="nav-link">
            トップ
          </Link>
          <Link href="/blog" className="nav-link">
            ブログ
          </Link>
        </nav>
      </div>
    </header>
  );
}

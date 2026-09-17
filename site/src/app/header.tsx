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

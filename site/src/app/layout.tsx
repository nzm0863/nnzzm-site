import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/next";

const notoSansJP = Noto_Sans_JP({
  weight: ["300", "400", "500"],
  variable: "--font-noto-sans",
  preload: false
});

const notoSerifJP = Noto_Serif_JP({
  weight: ["300", "400"],
  variable: "--font-noto-serif",
  preload: false
});

export const metadata: Metadata = {
  title: {
    default: "nnzzm.com",
    template: "%s | nnzzm.com",
  },
  description: "IoT・Web・AI開発をまとめたポートフォリオ・技術ブログサイト。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} ${notoSerifJP.variable}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}

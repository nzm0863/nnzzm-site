import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/next";


const notoSansJP = Noto_Sans_JP({
  weight: ["300", "400", "500"],
  variable: "--font-noto-sans",
});

const notoSerifJP = Noto_Serif_JP({
  weight: ["300", "400"],
  variable: "--font-noto-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nnzzm.com"),

  title: {
    default: "nnzzm.com",
    template: "%s | nnzzm.com",
  },

  description: "IoT・Web・AI開発をまとめたポートフォリオ・技術ブログサイト。",

  openGraph: {
    title: "nnzzm.com",
    description: "IoT・Web・AI開発をまとめたポートフォリオ・技術ブログサイト。",
    url: "https://www.nnzzm.com",
    siteName: "nnzzm.com",
    locale: "ja_JP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "nnzzm.com",
    description: "IoT・Web・AI開発をまとめたポートフォリオ・技術ブログサイト。",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${notoSerifJP.variable} bg-[#1a1d21] text-[#e1e2e3] antialiased`}
      >
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

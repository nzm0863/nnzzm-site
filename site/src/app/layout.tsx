import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nnzzm.com"),

  title: {
    default: "nnzzm.com | IoT × Web × AI Portfolio",
    template: "%s | nnzzm.com",
  },

  description:
    "ESP32・Raspberry Pi・Next.jsを中心にしたIoT・Web・AIの個人開発ポートフォリオ。",

  keywords: [
    "ESP32",
    "Raspberry Pi",
    "Next.js",
    "React",
    "TypeScript",
    "IoT",
    "Web開発",
    "AI開発",
    "個人開発",
    "ポートフォリオ",
    "浜松",
  ],

  authors: [{ name: "Nakamura" }],
  creator: "Nakamura",
  publisher: "nnzzm.com",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },



  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "nnzzm.com | IoT × Web × AI Portfolio",
    description:
      "ESP32・Raspberry Pi・Next.jsを中心にしたIoT・Web・AIの個人開発ポートフォリオ。",
    url: "/",
    siteName: "nnzzm.com",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/ogp-home.webp",
        width: 1200,
        height: 630,
        alt: "nnzzm.com | IoT × Web × AI Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "nnzzm.com | IoT × Web × AI Portfolio",
    description:
      "ESP32・Raspberry Pi・Next.jsを中心にしたIoT・Web・AIの個人開発ポートフォリオ。",
    creator: "@nzm0863",
    images: ["/ogp-home.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.nnzzm.com/#website",
      url: "https://www.nnzzm.com",
      name: "nnzzm.com",
      description:
        "ESP32・Raspberry Pi・Next.jsを中心にしたIoT・Web・AIの個人開発ポートフォリオ。",
      inLanguage: "ja-JP",
    },
    {
      "@type": "Person",
      "@id": "https://www.nnzzm.com/#person",
      name: "Nakamura",
      url: "https://www.nnzzm.com",
      jobTitle: "IoT / Web Developer",
      sameAs: [
        "https://github.com/nzm0863",
        "https://x.com/nzm0863",
        "https://www.youtube.com/@nakamura-nnzzm",
      ],
    },
  ],
};

const notoSansJP = Noto_Sans_JP({
  weight: ["300", "400", "500"],
  variable: "--font-noto-sans",
  preload: false,
});

const notoSerifJP = Noto_Serif_JP({
  weight: ["300", "400"],
  variable: "--font-noto-serif",
  preload: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${notoSerifJP.variable} bg-[#1a1d21] text-[#e1e2e3] antialiased min-h-screen flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        {/* <BootScreen /> */}
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />


      </body>
    </html>
  );
}

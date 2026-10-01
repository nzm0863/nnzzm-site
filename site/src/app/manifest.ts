// src/app/manifest.ts
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "nnzzm.com",
    short_name: "nnzzm",
    start_url: "/",
    display: "standalone",
    background_color: "#1a1d21",
    theme_color: "#1a1d21",
    icons: [
      // {
      //   src: "/icon.png",
      //   sizes: "512x512",
      //   type: "image/png",
      // },
      // {
      //   src: "/apple-touch-icon.png",
      //   sizes: "180x180",
      //   type: "image/png",
      // },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

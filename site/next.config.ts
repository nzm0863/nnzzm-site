import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.nnzzm.com",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  experimental: {
    // Two root layouts (app/(pl) and app/(en)/en) need a global 404.
    globalNotFound: true,
  },
};

export default nextConfig;

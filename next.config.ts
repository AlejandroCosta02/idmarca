import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    unoptimized: false,
  },
  async redirects() {
    return [
      {
        source: "/index.asp",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aptanaassets.sgp1.cdn.digitaloceanspaces.com",
      },
      {
        protocol: "https",
        hostname: "aptanaassets.sgp1.digitaloceanspaces.com",
      },
    ],
  }
  /* config options here */
};

export default nextConfig;

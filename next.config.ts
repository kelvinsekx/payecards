import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "example.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;

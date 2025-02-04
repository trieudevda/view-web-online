import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  distDir: 'dist',
  eslint: {
    ignoreDuringBuilds: false,
  }
};

export default nextConfig;

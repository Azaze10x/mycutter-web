import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/mycutter-web',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

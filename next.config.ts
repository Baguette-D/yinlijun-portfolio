import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/yinlijun-portfolio',
  assetPrefix: '/yinlijun-portfolio',
  trailingSlash: true,
};

export default nextConfig;

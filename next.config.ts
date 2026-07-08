import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // For GitHub Pages deployment under: https://hasni2002.github.io/Portfolio/
  basePath: process.env.NODE_ENV === "production" ? "/Portfolio" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/Portfolio/" : "",
  images: {
    unoptimized: true, // required for static export
  },
};

export default nextConfig;


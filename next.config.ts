import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages hosting (no Node server available there).
  output: "export",
  // GitHub Pages needs a real index.html per route (e.g. /about/index.html)
  // to resolve clean URLs like /about correctly.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;

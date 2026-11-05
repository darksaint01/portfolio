import type { NextConfig } from "next";

// The portfolio does not require a server or database at runtime.
// Next.js renders its HTML, CSS and JS at build time for Cloudflare Pages,
// Vercel, or any other static hosting service.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;

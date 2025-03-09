import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: "export",

  // Optional: You can add additional settings if needed
  reactStrictMode: true, // Enables React strict mode
  trailingSlash: true, // Ensures that URLs have a trailing slash, e.g., `/about/` instead of `/about`
};

export default nextConfig;

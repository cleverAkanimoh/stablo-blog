/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    remotePatterns: [
      { hostname: "cdn.sanity.io" },
      { hostname: "upload.wikimedia.org" },
      { hostname: "son.gov.ng" },
      { hostname: "ndleahelpline.com.ng" },
      { hostname: "nafdac.gov.ng" },
      { hostname: "res.cloudinary.com" }
    ]
  },
  typescript: {
    ignoreBuildErrors: process.env.VERCEL_ENV === "production"
  },
  eslint: {
    ignoreDuringBuilds: process.env.VERCEL_ENV === "production"
  }
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'liaskitchen.de',
      },
      {
        protocol: 'https',
        hostname: 'www.liaskitchen.de',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['@vercel/analytics', 'js-cookie'],
  },
}

module.exports = nextConfig

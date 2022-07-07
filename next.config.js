/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
    },
  },
  images: {
    domains: ['images.ctfassets.net'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
  },
  swcMinify: true,
  reactStrictMode: process.env.NEXT_PUBLIC_NO_STRICT_MODE !== 'true',
  generateBuildId: () => 'build',
};

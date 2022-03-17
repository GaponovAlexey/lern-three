/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  react: {
    useSuspense: false,
    wait: true,
  },
  experimental: {
    concurrentFeatures: true,
  },
}

module.exports = nextConfig

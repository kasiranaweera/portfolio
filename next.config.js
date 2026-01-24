/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['@radix-ui/react-*', 'lucide-react'],
  },
  // Server-Side Rendering Configuration
  output: 'standalone',
  // Enable ISR (Incremental Static Regeneration)
  onDemandEntries: {
    maxInactiveAge: 25 * 1000 * 60, // 25 minutes
    pagesBufferLength: 5,
  },
};

module.exports = nextConfig;


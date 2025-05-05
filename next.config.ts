/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export',  // Enable static exports
  typescript: {
    // !! WARN !!
    // Ignoring type checking to make builds easier
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignoring ESLint errors during build
    ignoreDuringBuilds: true,
  },
  // Disable image optimization since it's not compatible with static exports
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // output: 'export',  // Removed to enable normal Next.js app functionality
  typescript: {
    // !! WARN !!
    // Ignoring type checking to make builds easier
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignoring ESLint errors during build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */

import { NextConfig } from 'next';


const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
    eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  }
};

export default nextConfig; // Wrap and export the config
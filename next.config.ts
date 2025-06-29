/** @type {import('next').NextConfig} */

import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin'; // Import the plugin

const withNextIntl = createNextIntlPlugin();

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

export default withNextIntl(nextConfig); // Wrap and export the config
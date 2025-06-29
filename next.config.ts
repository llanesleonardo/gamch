import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin'; // Import the plugin

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig); // Wrap and export the config
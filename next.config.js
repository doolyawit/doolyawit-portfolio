/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'strapi-development-storage.s3.ap-southeast-1.amazonaws.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;

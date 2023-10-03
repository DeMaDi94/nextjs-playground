/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
    CLIENT_URL: process.env.CLIENT_URL,
  },
};

module.exports = nextConfig;

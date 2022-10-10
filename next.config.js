const redirects = require('./src/redirects.json');

/**
 * @type {import('next').NextConfig} 
 */
const nextConfig = {
  pageExtensions: ['jsx', 'js', 'ts', 'tsx', 'mdx', 'md'],
  reactStrictMode: true,
  swcMinify: true,
  // Redirects to another page
  async redirects() {
    return redirects.redirects;
  }
}

module.exports = nextConfig

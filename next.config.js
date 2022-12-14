const redirects = require('./src/redirects.json');

/**
 * @type {import('next').NextConfig} 
 */
const nextConfig = {
  images: {
    domains: [
      'avatars.dicebear.com',
      'lh3.googleusercontent.com'
    ]
  },
  pageExtensions: ['jsx', 'js', 'ts', 'tsx', 'mdx', 'md'],
  reactStrictMode: true,
  swcMinify: true,
  // Redirects to another page
  async redirects() {
    return redirects.redirects;
  }
}

module.exports = nextConfig

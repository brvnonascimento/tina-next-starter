const withLinaria = require('next-linaria')

/** @type {import('next').NextConfig} */
const nextConfig = withLinaria({
  reactStrictMode: true,
  images: { domains: ['res.cloudinary.com'] },
  experimental: {
    runtime: 'nodejs',
    serverComponents: true,
  },
})

module.exports = nextConfig

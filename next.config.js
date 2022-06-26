const withLinaria = require('next-linaria')

/** @type {import('next').NextConfig} */
const nextConfig = withLinaria({
  reactStrictMode: true,
  experimental: {
    runtime: 'nodejs',
    serverComponents: true,
  },
})

module.exports = nextConfig

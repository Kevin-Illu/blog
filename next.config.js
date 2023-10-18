/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer')
const path = require('path');

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: true,
}

module.exports = withContentlayer(nextConfig)

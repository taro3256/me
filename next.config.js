/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.GITHUB_ACTIONS ? "" : "",
  basePath: process.env.GITHUB_ACTIONS ? "" : "",
  trailingSlash: true,
}

module.exports = nextConfig

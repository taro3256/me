/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.GITHUB_ACTIONS ? "/PROJECT_NAME" : "",
  basePath: process.env.GITHUB_ACTIONS ? "/PROJECT_NAME" : "",
  trailingSlash: true,
}

module.exports = nextConfig

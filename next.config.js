/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.GITHUB_ACTIONS ? "/taro3256" : "",
  trailingSlash: true,
}

module.exports = nextConfig

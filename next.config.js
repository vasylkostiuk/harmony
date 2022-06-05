/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.graphassets.com"],
    loader: "custom"
  }
}

module.exports = nextConfig

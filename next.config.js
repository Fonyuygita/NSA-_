const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

const nextConfig = {
  swcMinify: false,
  images: {
    domains: ["images.pexels.com"],
    loader: "default",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Add MDX to the page extensions
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
}

module.exports = withMDX(nextConfig)

/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify:false,
    // Enable the Next.js Image Optimization API
    images: {
        // Specify the domains that are allowed to serve images
        domains: ["images.pexels.com"],
        // Specify the loader to use for image optimization
        loader: "default",
      },
}

module.exports = nextConfig




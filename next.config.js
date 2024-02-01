/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify:false,
    images:{
        remotePatterns:[
          {
            protocol: 'https',
            hostname: "images.pexels.com"
          }
        ]
      }
}

module.exports = nextConfig

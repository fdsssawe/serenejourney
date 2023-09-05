/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverComponentsExternalPackages: ['bcrypt' , "jsonwebtoken"],
    },
  };

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/daangn_restaurant_map_project' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 
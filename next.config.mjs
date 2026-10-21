/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/forex-academy', 
  assetPrefix: '/forex-academy/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

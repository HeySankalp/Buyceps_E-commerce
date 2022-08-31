/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['dummyimage.com','m.media-amazon.com','5.imimg.com','images-eu.ssl-images-amazon.com','i5.walmartimages.com','firebasestorage.googleapis.com']
  },
}

module.exports = nextConfig

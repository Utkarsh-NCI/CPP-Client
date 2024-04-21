/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "x22229698cpp.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "d3o5s15a13yz2u.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;

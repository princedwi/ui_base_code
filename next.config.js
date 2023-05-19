/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    APIURL: "https://api.publicapis.org/",
  },
};

module.exports = nextConfig;

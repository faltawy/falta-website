/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  rewrites() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "code.falta.info",
          },
        ],
        destination: "https://github.com/ah7255703",
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);

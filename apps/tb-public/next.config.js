const { PRODUCTS_URL } = process.env;

module.exports = {
  reactStrictMode: true,
  experimental: {
    transpilePackages: ["ui"],
  },
  async rewrites() {
    return [
      {
        source: "/food",
        destination: `${PRODUCTS_URL}/food`,
      },
      {
        source: "/food/:path*",
        destination: `${PRODUCTS_URL}/food/:path*`,
      },
    ];
  },
};

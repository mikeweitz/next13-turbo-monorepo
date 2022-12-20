const path = require('path');

module.exports = {
  output: 'standalone',
  basePath: '/food',
  reactStrictMode: true,
  experimental: {
    transpilePackages: ['ui'],
    outputStandalone: true,
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
};

const path = require('path');

module.exports = {
  basePath: '/food',
  reactStrictMode: true,
  experimental: {
    transpilePackages: ['ui'],
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
};

const path = require('path');

const { PRODUCTS_URL } = process.env;

module.exports = {
  reactStrictMode: true,
  experimental: {
    transpilePackages: ['ui'],

    // for AWS Amplify include base folder for output tracing
    // outputFileTracingRoot: path.join(__dirname, '../../'),

    // Alternative new featire using Turbo for output trace
    turbotrace: {
      // control the log level of the turbotrace, default is `error`
      logLevel: 'info',

      // control if the log of turbotrace should contain the details of the analysis, default is `false`
      logDetail: false,

      // show all log messages without limit
      // turbotrace only show 1 log message for each categories by default
      // logAll: true,

      // control the context directory of the turbotrace
      // files outside of the context directory will not be traced
      // set the `experimental.outputFileTracingRoot` has the same effect
      // if the `experimental.outputFileTracingRoot` and this option are both set, the `experimental.turbotrace.contextDirectory` will be used
      contextDirectory: path.join(__dirname, '../../'),

      // if there is `process.cwd()` expression in your code, you can set this option to tell `turbotrace` the value of `process.cwd()` while tracing.
      // for example the require(process.cwd() + '/package.json') will be traced as require('/path/to/cwd/package.json')
      // processCwd?: string,

      // control the maximum number of files that are passed to the `turbotrace`
      // default is 128
      // maxFiles?: number
    },
  },
  async rewrites() {
    return [
      {
        source: '/food',
        destination: `${PRODUCTS_URL}/food`,
      },
      {
        source: '/food/:path*',
        destination: `${PRODUCTS_URL}/food/:path*`,
      },
    ];
  },
};

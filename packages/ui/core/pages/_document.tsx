import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

// import GDataLayer from '@tb-core/components/tags/g-data-layer';
// import GtmInstall from '@tb-core/components/tags/gtm-install';
// import OptimizelySnippet from '@tb-core/components/tags/optimizely-snippet';

// import {
//     googleTagManagerId,
//     NextEnvProps,
//     optimizelyProjectId
// } from '@tb-core/helpers/next-env';

// export default class ECommerceWebDocument extends Document<NextEnvProps> {
export default class ECommerceWebDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>{/* add GTM / Optimizely / NextENV stuff here */}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

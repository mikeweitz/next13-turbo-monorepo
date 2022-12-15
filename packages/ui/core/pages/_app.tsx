import { Router } from 'next/router';
import React from 'react';

// import { ProductCategoriesProviderProps } from '@tb-core/components/context/product-categories';
// import { PageContextProps } from '@tb-core/components/context/webpage';

// export interface ECommerceWebAppProps {
//     Component: (
//         pageProps: PageContextProps & ProductCategoriesProviderProps
//     ) => JSX.Element;
//     pageProps: PageContextProps & ProductCategoriesProviderProps;
//     router: Router;
// }

// const ECommerceWebApp = ({ Component, pageProps }: ECommerceWebAppProps) => {
const ECommerceWebApp = ({
  Component,
  pageProps,
}: { router: Router } & Record<string, any>) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default ECommerceWebApp;

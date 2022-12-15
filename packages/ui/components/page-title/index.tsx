import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

export type PageTitleProps = DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
>;

const PageTitle = (props: PageTitleProps) => <h1 {...props} />;

export default PageTitle;

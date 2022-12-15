import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

// For rendering an h2 - h6 tag.  H1 should defer to PageTitle component
type HeadingTagProps = 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export interface HeadingProps
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLHeadingElement>,
        HTMLHeadingElement
    > {
    tag: HeadingTagProps;
}

const Heading = ({ tag: Tag = 'h2', ...props }: HeadingProps) => (
    <Tag {...props} />
);

export default Heading;

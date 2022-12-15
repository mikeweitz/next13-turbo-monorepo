import { select, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';

import Heading from '.';

export default {
    component: Heading,
    decorators: [withKnobs],
    title: 'Core/Simple/Heading'
};

export const heading = () => (
    <Heading tag={select('headingTag', ['h2', 'h3', 'h4', 'h5', 'h6'], 'h2')}>
        {text('Title', 'Page Subtitle')}
    </Heading>
);

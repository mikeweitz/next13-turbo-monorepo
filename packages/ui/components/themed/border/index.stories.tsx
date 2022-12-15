import { text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';

import ThemedBorder from '.';

export default {
    component: 'ThemedBorder',
    decorators: [withKnobs],
    title: 'Core/ThemedBorder'
};

export const themedBorder = () => (
    <ThemedBorder>
        {({ border }) => (
            <p style={{ padding: '5px' }} className={border}>
                {text('Text', 'Container With Themed Border')}
            </p>
        )}
    </ThemedBorder>
);

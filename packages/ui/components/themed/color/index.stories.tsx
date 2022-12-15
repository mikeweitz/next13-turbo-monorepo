import React from 'react';

import ThemedColor from '.';

export default {
    component: 'ThemedColor',
    title: 'Core/ThemedColor'
};

export const themedColorPrimary = () => (
    <ThemedColor theme="primary">
        {({ color }) => <p className={color}>Primary Color</p>}
    </ThemedColor>
);

export const themedColorRoot = () => (
    <ThemedColor theme="root">
        {({ color }) => <p className={color}>Root Color</p>}
    </ThemedColor>
);

export const themedColorSecondary = () => (
    <ThemedColor theme="secondary">
        {({ color }) => <p className={color}>Secondary Color</p>}
    </ThemedColor>
);

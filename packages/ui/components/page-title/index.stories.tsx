import { text, withKnobs } from '@storybook/addon-knobs';

import PageTitle from '.';

export default {
    component: PageTitle,
    decorators: [withKnobs],
    title: 'Core/Simple/PageTitle'
};

export const withDefault = () => (
    <PageTitle>{text('Title', 'Page Title')}</PageTitle>
);

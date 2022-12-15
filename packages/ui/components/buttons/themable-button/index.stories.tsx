import { boolean, color, withKnobs } from '@storybook/addon-knobs';

import { storyColorThemes } from '@tb-core/helpers/storybook/fixtures';
import ThemableButton from '.';

export default {
    component: ThemableButton,
    decorators: [withKnobs],
    title: 'Core/Styled/Buttons/ThemableButton'
};

export const themableButton = () => {
    const inverse = boolean('Inverse', false);

    return (
        <div style={{ color: color('Current Color', 'black') }}>
            {Object.entries(storyColorThemes).map(([label, theme], i) => (
                <ThemableButton
                    border={boolean('Border', true)}
                    inverse={inverse}
                    key={i}
                    style={{ marginTop: '5px' }}
                    theme={theme}
                >
                    {`Themable Button (${label})`}
                </ThemableButton>
            ))}
        </div>
    );
};

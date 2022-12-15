import classNames from 'classnames';

import Button, { ButtonProps } from '../button';
import ThemedColor, { ColorTheme } from '../../themed/color';

import styles from './styles.module.scss';

export interface ThemableButtonProps extends ButtonProps {
  border?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  inverse?: boolean;
  theme?: ColorTheme;
}

const ThemableButton = ({
  border = true,
  children,
  className,
  disabled = false,
  isLoading = false,
  inverse = false,
  theme,
  ...props
}: ThemableButtonProps) => (
  <ThemedColor theme={theme}>
    {({ bgColor, color }) => (
      <Button
        {...props}
        className={classNames(
          styles.button,
          {
            [styles['no-border']]: !border,
            [styles.inverse]: inverse,
            [bgColor]: !inverse,
            [color]: inverse,
          },
          className
        )}
        disabled={disabled}
      >
        {isLoading ? <div className={styles['dot-flashing']}></div> : children}
      </Button>
    )}
  </ThemedColor>
);

export default ThemableButton;

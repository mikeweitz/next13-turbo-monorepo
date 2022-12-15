import classNames from 'classnames';
import { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './styles.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button = ({
  children = 'Click Me',
  className,
  ...props
}: ButtonProps) => (
  <button {...props} className={classNames(styles.button, className)}>
    {children}
  </button>
);

export default Button;

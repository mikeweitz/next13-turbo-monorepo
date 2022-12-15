import { ReactNode } from 'react';

export type ColorTheme =
  | 'brand'
  | 'current'
  | 'highlight'
  | 'light'
  | 'loud'
  | 'neutral'
  | 'primary'
  | 'root'
  | 'secondary';

export interface ThemedColorProps {
  children: (props: { bgColor: string; color: string }) => ReactNode;
  theme?: ColorTheme;
}

import styles from './styles.module.scss';

const ThemedColor = ({ children, theme = 'root' }: ThemedColorProps) => (
  <>{children({ bgColor: styles[`bg-${theme}`], color: styles[theme] })}</>
);

export default ThemedColor;

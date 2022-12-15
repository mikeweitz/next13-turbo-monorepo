import { ReactNode } from 'react';

export interface ThemedBorderProps {
  children: (props: { border: string }) => ReactNode;
}

import styles from './styles.module.scss';

const ThemedBorder = ({ children }: ThemedBorderProps) => (
  <>{children({ border: styles.border })}</>
);

export default ThemedBorder;

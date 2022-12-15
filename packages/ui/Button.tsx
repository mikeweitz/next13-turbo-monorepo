import * as React from 'react';

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
};

export const Button = ({
  children = 'Default Button Text',
  onClick,
}: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
};

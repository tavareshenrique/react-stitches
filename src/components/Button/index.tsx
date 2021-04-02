import { ButtonHTMLAttributes, ReactNode } from 'react';

import { ButtonStyle } from './styles';

type ButtonColor = 'green' | 'red';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  color?: ButtonColor;
};

export function Button({
  children,
  color = 'green',
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <ButtonStyle color={color} {...rest}>
      {children}
    </ButtonStyle>
  );
}

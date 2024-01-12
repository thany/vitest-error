import { forwardRef } from 'react';

interface Props {
  label?: string;
}

export const Button = forwardRef<HTMLButtonElement, Props>(({ label }: Props, ref) => (
  <button ref={ref}>
    {label}
  </button>
));

Button.displayName = 'Button';

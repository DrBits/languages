import { ReactNode } from 'react';
import { CheckboxProps as ReakitCheckboxProps } from 'reakit/Checkbox';

export type CheckboxProps = Pick<
  ReakitCheckboxProps,
  'name' | 'onFocus' | 'onBlur' | 'value' | 'autoFocus'
> & {
  children?: ReactNode;
  error?: string | ReactNode;
  size?: number;
  progress?: boolean;
  disabled?: boolean;
  checked?: boolean | 'indeterminate';
  className?: string;
  ['data-visibility']?: string;
} & Required<Pick<ReakitCheckboxProps, 'onChange'>>;

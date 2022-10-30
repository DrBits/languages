import {
  ButtonHTMLAttributes,
  ElementType,
  FocusEventHandler,
  MouseEventHandler,
  ReactNode,
  Ref
} from 'react';
import { BoxProps } from '../Box';
import { sizes, variants } from './common';

export type ButtonVariant = keyof typeof variants;

export type ButtonSize = keyof typeof sizes;

export type StyledIcon = {
  margin: number;
  position?: 'left' | 'right';
};

export type StyledButtonProps = {
  action?: boolean | 'rounded';
  disabled?: boolean;
  extend?: boolean;
  href?: string;
  /** Name of the icon. All [icons](/?path=/docs/components-icon) are supported. */
  icon?: string | JSX.Element;
  iconPosition?: 'left' | 'right';
  /** Use this properties to associate ref to button component. */
  progress?: boolean | 'left' | 'right';
  iconSize?: number;
  size: ButtonSize;
  tooltip?: string;
  tooltipBaseId?: string;
  type?: 'button' | 'reset' | 'submit';
  variant: ButtonVariant;
  onFocus?: FocusEventHandler;
  onMouseEnter?: MouseEventHandler;
} & BoxProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = Omit<
  StyledButtonProps,
  'variant' | 'size' | 'download'
> & {
  children?: ReactNode;
  variant?: ButtonVariant;
  innerRef: Ref<Element>;
  size?: ButtonSize;
  download?: boolean | string;
  as?: ElementType;
};

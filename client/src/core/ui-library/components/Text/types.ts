import { ElementType, ReactNode } from 'react';
import { PROMINENCES } from './common';
import { Color, typography } from '../../theme';

export type ProminenceProps = keyof typeof PROMINENCES;
export type TextVariant = keyof typeof typography;

export type TextProps = {
  className?: string;
  children: ReactNode;
  variant: TextVariant;
  color?: Color;
  prominence?: ProminenceProps;
  as: ElementType;
  oneLine?: boolean;
  disabled?: boolean;
  italic?: boolean;
  underline?: boolean;
};

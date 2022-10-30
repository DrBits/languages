import { CSSProperties, ReactNode } from 'react';
import { UITheme } from '../../theme';

export type StackProps = {
  gap?: keyof UITheme['space'];
  direction?: 'row' | 'column';
  alignItems?: CSSProperties['alignItems'];
  justifyContent?: CSSProperties['justifyContent'];
  className?: string;
  children: ReactNode;
};

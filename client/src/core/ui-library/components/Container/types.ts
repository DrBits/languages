import { ReactNode } from 'react';
import { SerializedStyles } from '@emotion/react';
import { BoxProps } from '../Box';

export type ContainerBaseProps = {
  small?: boolean;
  edition?: boolean;
  disabled?: boolean;
};

export type ContainerProps = ContainerBaseProps & {
  boxStyle?: SerializedStyles;
  children: ReactNode;
  /** Header can be a string but also a component. */
  header?: ReactNode;
  /** Right title can be a string but also a component, like header properties does. */
  rightTitle?: ReactNode;
  subtitle?: ReactNode;
  title: string;
} & BoxProps;

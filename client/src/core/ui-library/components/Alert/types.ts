import { ComponentProps, ReactNode } from 'react';
import Icon from '../Icon';
import { alertTypes, alertVariants } from './common';

export type AlertType = typeof alertTypes[number];
export type AlertVariant = typeof alertVariants[number];

export type ContainerProps = { variant: AlertVariant; type: AlertType };

export type TitleProps = {
  text: string;
};

export type AlertProps = {
  variant?: AlertVariant;
  children: ReactNode;
  iconSize?: number;
  icon?: ComponentProps<typeof Icon>['name'];
  /**
   * Add a title at the top of your alert.
   */
  title?: string;
  type?: AlertType;
  className?: string;
};

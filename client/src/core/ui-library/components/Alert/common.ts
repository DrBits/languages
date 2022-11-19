import { ComponentProps } from 'react';
import { css, SerializedStyles, Theme } from '@emotion/react';

import { AlertType, ContainerProps } from './types';

import { Color } from '../../theme';
import Icon from '../Icon';

export const alertTypes = ['beta', 'info', 'success', 'warning'] as const;
export const alertVariants = [
  'filled',
  'standart',
  'outlined',
  'transparent'
] as const;

export const alertTypeToColorMapping: Record<AlertType, Color> = {
  beta: 'warning',
  info: 'info',
  success: 'success',
  warning: 'danger'
};

export const alertStyles = ({
  theme,
  type,
  variant
}: ContainerProps & { theme: Theme }): SerializedStyles => {
  const sentiment =
    theme.colors[alertTypeToColorMapping[type]] || theme.colors.danger;

  if (variant === 'filled')
    return css`
      background-color: ${sentiment.backgroundStrong};
      color: ${sentiment.textStrong};
    `;
  if (variant === 'transparent')
    return css`
      background-color: transparent;
      color: ${sentiment.textWeak};
    `;
  if (variant === 'outlined')
    return css`
      border: 1px solid ${sentiment.borderWeak};
      color: ${sentiment.textWeak};
    `;

  return css`
    background-color: ${sentiment.background};
    color: ${sentiment.text};
  `;
};

export const typesDefaultIcons: Record<
  AlertType,
  ComponentProps<typeof Icon>['name']
> = {
  beta: 'alert',
  info: 'information-outline',
  success: 'checkbox-marked-circle-outline',
  warning: 'alert'
};

import { ComponentProps } from 'react';

import { Color } from '../../theme';
import Icon from '../Icon';

export type Direction = 'horizontal' | 'vertical';

export type StyledIconProps = {
  direction: Direction;
};

export type SeparatorProps = {
  icon?: ComponentProps<typeof Icon>['name'];
  direction?: Direction;
  thickness?: number;
  color?: Color;
  className?: string;
};

export type HorizontalSeparatorProps = SeparatorProps & {
  hasIcon?: boolean;
};

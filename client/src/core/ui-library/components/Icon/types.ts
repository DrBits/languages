import { SVGProps } from 'react';
import { PROMINENCES } from './common';
import { ICONS } from './icons';
import { Color } from '../../theme';

export type ProminenceProps = keyof typeof PROMINENCES;

export type IconName = keyof typeof ICONS;

export type IconProps = {
  size?: number | string;
  name?: IconName;
  prominence?: ProminenceProps;
  color?: Color | string;
  'data-testid'?: string;
} & Pick<
  SVGProps<SVGSVGElement>,
  'className' | 'stroke' | 'cursor' | 'strokeWidth'
>;

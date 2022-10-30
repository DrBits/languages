import {
  ReactNode,
  HTMLAttributeAnchorTarget,
  AnchorHTMLAttributes,
  MouseEventHandler
} from 'react';

import { Color } from '../../theme';

export type LinkSizes = 'large' | 'small';
export type LinkIconPosition = 'left' | 'right';
export type LinkProps = {
  children: ReactNode;
  target?: HTMLAttributeAnchorTarget;
  download?: string | boolean;
  variant?: Color;
  size?: LinkSizes;
  iconPosition?: LinkIconPosition;
  rel?: AnchorHTMLAttributes<HTMLAnchorElement>['rel'];
  className?: string;
  href: string;
  // For react router shouldn't be used directly
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

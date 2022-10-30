import { css } from '@emotion/react';
import { ICONS } from './icons';
import { IconName } from './types';

export const icons = Object.keys(ICONS) as IconName[];

export const customViewBoxes = [
  {
    icons: [
      'arrow-left-double',
      'arrow-right-double',
      'arrow-left',
      'arrow-right',
      'credentials',
      'logout',
      'organization',
      'privacy',
      'profile',
      'support',
      'switch_orga',
      'credit-card',
      'progress-check',
      'card-account-details-outline',
      'reboot'
    ],
    viewBox: '0 0 16 16'
  },
  {
    icons: ['members'],
    viewBox: '0 0 16 10'
  },
  {
    icons: ['rocket'],
    viewBox: '0 0 21 21'
  },
  {
    icons: ['expand'],
    viewBox: '0 0 20 14'
  }
];

export const sizeStyles = ({ size }: { size: number | string }) => {
  const pxSize =
    typeof size === 'number' && !Number.isNaN(size) ? `${size}px` : size;

  return css`
    height: ${pxSize};
    width: ${pxSize};
    min-width: ${pxSize};
    min-height: ${pxSize};
  `;
};

export const PROMINENCES = {
  default: '',
  strong: 'strong',
  stronger: 'stronger',
  weak: 'weak'
};

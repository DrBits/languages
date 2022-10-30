import { Theme } from '@emotion/react';

import { ProminenceProps, TextVariant } from './types';
import { Color } from '../../theme';

import capitalize from '../../helpers/capitalize';

export const PROMINENCES = {
  default: '',
  strong: 'strong',
  stronger: 'stronger',
  weak: 'weak'
};

export const generateStyles = ({
  prominence,
  color,
  variant,
  theme,
  oneLine,
  disabled,
  italic,
  underline
}: {
  prominence: ProminenceProps;
  theme: Theme;
  variant: TextVariant;
  color: Color;
  oneLine: boolean;
  disabled: boolean;
  italic: boolean;
  underline: boolean;
}): string => {
  // stronger is available only for neutral color
  const definedProminence =
    color !== 'neutral' && prominence === 'stronger'
      ? capitalize(PROMINENCES.default)
      : capitalize(PROMINENCES[prominence]);

  const themeColor = theme.colors[color];
  const text = `text${definedProminence}${
    disabled ? 'Disabled' : ''
  }` as keyof typeof themeColor;

  return `
    color: ${theme.colors[color][text]};
    font-size: ${theme.typography[variant].fontSize};
    font-family: ${theme.typography[variant].fontFamily};
    font-weight: ${theme.typography[variant].weight};
    letter-spacing: ${theme.typography[variant].letterSpacing};
    line-height: ${theme.typography[variant].lineHeight};
    text-transform: ${theme.typography[variant].textCase};
    text-decoration: ${theme.typography[variant].textDecoration};
    ${
      oneLine
        ? `white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;`
        : ''
    }
    ${italic ? `font-style: italic;` : ''}
    ${underline ? `text-decoration: underline;` : ''}
  `;
};

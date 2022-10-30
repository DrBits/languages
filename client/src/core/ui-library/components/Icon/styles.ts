import styled from '@emotion/styled';
import capitalize from '../../helpers/capitalize';

import { ProminenceProps } from './types';
import { PROMINENCES, sizeStyles } from './common';
import { Color } from '../../theme';

export const StyledIcon = styled('svg', {
  shouldForwardProp: (prop) => !['size', 'color', 'prominence'].includes(prop)
})<{
  color: Color | string;
  size: number | string;
  prominence: ProminenceProps;
}>`
  fill: ${({ theme, color, prominence }) => {
    // stronger is available only for neutral color
    const definedProminence =
      color !== 'neutral' && prominence === 'stronger'
        ? capitalize(PROMINENCES.default)
        : capitalize(PROMINENCES[prominence]);
    const themeColor = theme.colors[color as Color];
    const text = `text${definedProminence}` as keyof typeof themeColor;
    return theme.colors?.[color as Color]?.[text] || color;
  }};
  ${sizeStyles}
`;

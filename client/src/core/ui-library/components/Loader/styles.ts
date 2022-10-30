import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Color } from '../../theme';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Text = styled('text', {
  shouldForwardProp: (prop) => !['color'].includes(prop)
})<{ color: Color | string }>`
  fill: ${({ theme, color }) =>
    theme.colors[color as Color]?.backgroundStrong || color};
  font-size: 26px;
  dominant-baseline: middle;
  text-anchor: middle;
`;

export { spin, Text };

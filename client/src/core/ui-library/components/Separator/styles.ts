import styled from '@emotion/styled';

import { StyledIconProps, HorizontalSeparatorProps } from './types';

import Icon from '../Icon';
import { Color } from '../../theme';

const StyledIconWrapper = styled('div', {
  shouldForwardProp: (prop) => !['direction'].includes(prop)
})<StyledIconProps>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === 'vertical' ? 'column' : 'row'};
  align-items: center;
`;

const StyledIcon = styled(Icon)`
  background-color: ${({ theme }) => theme.colors.neutral.background};
  fill: ${({ theme }) => theme.colors.neutral.border};
`;

const StyledHr = styled('hr', {
  shouldForwardProp: (prop) =>
    !['direction', 'thickness', 'color', 'hasIcon'].includes(prop)
})<HorizontalSeparatorProps>`
  margin: 0;
  border: 0;
  width: ${({ direction, thickness = 1 }) =>
    direction === 'vertical' ? `${thickness}px` : 'auto'};
  height: ${({ direction, thickness = 1 }) =>
    direction === 'horizontal' ? `${thickness}px` : 'auto'};
  flex-shrink: 0;
  background-color: ${({ theme, color }) =>
    theme.colors[color as Color].border};
  ${({ hasIcon }) => hasIcon && `flex: 1;`}
`;

export { StyledIconWrapper, StyledIcon, StyledHr };

import styled from '@emotion/styled';
import { ANIMATION_DURATION, ARROW_WIDTH } from './common';
import { StyledTooltipProps } from './types';

const StyledTooltip = styled.div<StyledTooltipProps>`
  background: ${({ theme }) => theme.colors.neutral.backgroundStronger};
  color: ${({ theme }) => theme.colors.neutral.textStronger};
  border-radius: ${({ theme }) => theme.radii.default};
  padding: ${({ theme }) => `${theme.space['0.5']} ${theme.space['1']}`};
  text-align: center;
  position: fixed;
  max-width: ${({ maxWidth }) => maxWidth}px;
  left: ${({ positions }) => positions.left}px;
  top: ${({ positions }) => positions.top}px;
  opacity: 0;
  transition: ${ANIMATION_DURATION}ms opacity ease-in-out,
    ${ANIMATION_DURATION}ms transform ease-in-out;
  transform: ${({ positions }) => positions.tooltipInitialPosition};
  font-size: 0.8rem;
  &::after {
    content: ' ';
    position: absolute;
    top: ${({ positions }) => positions.arrowTop}px;
    left: ${({ positions }) => positions.arrowLeft}px;
    transform: ${({ positions }) => positions.arrowTransform}
      rotate(${({ positions }) => positions.rotate}deg);
    margin-left: -${ARROW_WIDTH}px;
    border-width: ${ARROW_WIDTH}px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.neutral.backgroundStronger}
      transparent transparent transparent;
    pointer-events: none;
  }
`;

export { StyledTooltip };

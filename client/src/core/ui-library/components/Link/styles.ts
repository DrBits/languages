import styled from '@emotion/styled';
import { Color } from '../../theme';

import Icon from '../Icon';
import { TRANSITION_DURATION } from './common';
import { LinkIconPosition, LinkSizes } from './types';

const StyledIcon = styled(Icon)``;

const StyledExternalIconContainer = styled.span`
  display: inline-flex;
  padding-bottom: ${({ theme }) => theme.space['0.5']};
`;

const StyledLink = styled('a', {
  shouldForwardProp: (prop) => !['variant', 'iconPosition', 'as'].includes(prop)
})<{
  variant: Color;
  size: LinkSizes;
  iconPosition?: LinkIconPosition;
}>`
  background-color: transparent;
  border: none;
  padding: 0;
  color: ${({ theme, variant }) =>
    theme.colors[variant]?.text ?? theme.colors.neutral.text};
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
  text-decoration-color: transparent;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  transition: text-decoration-color ${TRANSITION_DURATION}ms ease-out;
  ${StyledIcon} {
    transition: transform ${TRANSITION_DURATION}ms ease-out;
  }
  gap: ${({ theme }) => theme.space['1']};
  position: relative;
  width: fit-content;
  cursor: pointer;
  > * {
    // Safari issue when something is inside an anchor
    pointer-events: none;
  }
  ${({ size, theme }) => {
    const variant = size === 'small' ? 'bodySmallStrong' : 'bodyStrong';
    return `
      font-size: ${theme.typography[variant].fontSize};
      font-family: ${theme.typography[variant].fontFamily};
      font-weight: ${theme.typography[variant].weight};
      letter-spacing: ${theme.typography[variant].letterSpacing};
      line-height: ${theme.typography[variant].lineHeight};
      paragraph-spacing: ${theme.typography[variant].paragraphSpacing};
      text-case: ${theme.typography[variant].textCase};
    `;
  }}
  &:hover,
  &:focus {
    ${StyledIcon} {
      transform: ${({ theme, iconPosition }) =>
        iconPosition === 'left'
          ? `translate(${theme.space['0.5']}, 0)`
          : `translate(-${theme.space['0.5']}, 0)`};
    }
    outline: none;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    color: ${({ theme, variant }) =>
      theme.colors[variant]?.text ?? theme.colors.neutral.text};
    text-decoration-color: ${({ theme, variant }) =>
      theme.colors[variant]?.text ?? theme.colors.neutral.text};
  }
  &:hover::after,
  &:focus::after {
    background-color: ${({ theme, variant }) =>
      theme.colors[variant]?.text ?? theme.colors.neutral.text};
  }
  &:active {
    text-decoration-thickness: 2px;
  }
`;

export { StyledIcon, StyledExternalIconContainer, StyledLink };

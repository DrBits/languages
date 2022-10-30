import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Box from '../Box';

import Link from '../Link';
import { sizeStyles, variantStyles } from './common';
import { StyledButtonProps, StyledIcon } from './types';

const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

// It will remove animation between Link and left icon that is implemented into Link component
const StyledLink = styled(Link)`
  &:hover,
  &:focus {
    gap: ${({ theme }) => theme.space['1']};
  }
`;

const StyledIconContainer = styled('div', {
  shouldForwardProp: (prop) => !['margin', 'position'].includes(prop)
})<StyledIcon>`
  display: flex;
  ${({ margin, position }) => `
    ${position === 'left' ? `margin-right: ${margin}px;` : ``}
    ${position === 'right' ? `margin-left: ${margin}px;` : ``}
    pointer-events: none;`}
`;

const StyledButton = styled(Box, {
  shouldForwardProp: (prop) =>
    !['action', 'variant', 'extend', 'icon', 'download'].includes(prop)
})<StyledButtonProps>`
  display: inline-flex;
  border-radius: ${({ theme }) => theme.radii.default};
  border-width: 0;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  user-select: none;
  outline: none;
  vertical-align: middle;
  white-space: nowrap;
  font-weight: 500;
  transition: color 150ms ease-in-out, background-color 150ms ease-in-out,
    border-color 150ms ease-in-out;
  &:hover,
  &:focus {
    text-decoration: none;
    ${({ target, theme }) =>
      target === '_blank' ? `gap: ${theme.space['1']};` : ''}
  }
  ${sizeStyles}
  ${variantStyles}
  ${({ disabled, theme }) =>
    disabled &&
    `
    cursor: default;
    pointer-events: none;
    color: ${theme.colors.neutral.textDisabled};
    svg {
      fill: ${theme.colors.neutral.textDisabled};
    }
    `}
  ${({ variant, disabled, theme }) =>
    variant !== 'link' &&
    disabled &&
    `
    background-color: ${theme.colors.neutral.backgroundDisabled};
    border-color: ${theme.colors.neutral.borderDisabled};
    box-shadow: none;
    `}
  ${({ extend, icon }) =>
    extend &&
    css`
      display: inline-flex;
      & ${StyledContent} {
        transition: max-width 450ms ease, padding 150ms ease, margin 150ms ease;
        max-width: 0;
        margin-right: 0;
        ${icon ? 'padding-right: 0;' : 'padding-left: 0;'};
        overflow: hidden;
      }
      &:focus ${StyledContent}, &:hover ${StyledContent} {
        max-width: 275px;
        margin-right: 8px;
        ${icon ? 'padding-right: 8x;' : 'padding-left: 8px;'};
      }
    `}
  ${({ action }) =>
    action &&
    css`
      width: 32px;
      height: 32px;
      padding: 0;
      flex-shrink: 0;
      ${action === 'rounded' && `border-radius: 16px;`}
      > svg {
        // safari issue prevent event propgation
        pointer-events: none;
      }
    `}
`;

export { StyledContent, StyledLink, StyledIconContainer, StyledButton };

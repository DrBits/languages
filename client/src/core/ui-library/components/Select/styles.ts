import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Text from '../Text';
import Expandable from '../Expandable';

import { StyledContainerProps, StyledPlaceholderProps } from './types';

const StyledContainer = styled('div', {
  shouldForwardProp: (prop) =>
    !['isDisabled', 'additionalStyles'].includes(prop)
})<StyledContainerProps>`
  width: 100%;
  ${({ isDisabled }) => isDisabled && `pointer-events: initial;`};
  ${({ additionalStyles }) => css(additionalStyles)}
`;

const StyledError = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.danger.text};
  padding-top: ${({ theme }) => theme.space['0.25']};
`;

const ExpandableWithHiddenOverflow = styled(Expandable)`
  overflow: hidden;
`;

const StyledPlaceholder = styled('label', {
  shouldForwardProp: (prop) =>
    !['error', 'hasValue', 'isDisabled', 'isMulti'].includes(prop)
})<StyledPlaceholderProps>`
  position: absolute;
  left: 0;
  font-weight: 400;
  pointer-events: none;
  color: ${({ theme, error }) =>
    error ? theme.colors.danger.text : theme.colors.neutral.text};
  white-space: nowrap;
  width: 100%;
  height: 100%;
  font-size: 16px;
  transition: transform 250ms ease;
  opacity: 0;
  ${({ hasValue }) =>
    hasValue &&
    `
    transform: translate(0, -8px) scale(0.8);
    transform-origin: left;
    padding-left: 8px;
    left: 0;
    top: 2px;
    opacity: 1;
  `}
  ${({ isDisabled, hasValue }) => hasValue && isDisabled && 'opacity: 0.5'}
`;

const StyledText = styled(Text)<{ isSelectedAndNotFocused: boolean }>`
  margin-left: ${({ theme }) => theme.space['1']};
  color: ${({ isSelectedAndNotFocused, theme }) =>
    isSelectedAndNotFocused ? theme.colors.primary.textStrong : undefined};
`;

const MaxLineStyledText = styled(StyledText)`
  -webkit-line-clamp: 3;
  margin-top: ${({ theme }) => theme.space['2']};
`;

export {
  StyledContainer,
  StyledError,
  ExpandableWithHiddenOverflow,
  StyledPlaceholder,
  StyledText,
  MaxLineStyledText
};

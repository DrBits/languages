import styled from '@emotion/styled';
import { css } from '@emotion/react';

import Separator from '../Separator';
import Notice from '../Notice';
import Text from '../Text';

import { inputSizes } from './common';

import {
  StyledLabelProps,
  StyledInputProps,
  StyledRightElementProps
} from './types';
import Expandable from '../Expandable';

const StyledSeparator = styled(Separator)`
  margin-right: 8px;
  margin-top: 1px;
  height: calc(100% - 2px);
  background-color: ${({ theme: { colors } }) =>
    colors.neutral.backgroundStrong};
`;

const StyledLabel = styled('label', {
  shouldForwardProp: (prop) =>
    !['edit', 'error', 'resizable', 'fillAvailable'].includes(prop)
})<StyledLabelProps>`
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  padding-left: 8px;
  padding-right: 8px;
  pointer-events: none;
  color: ${({ theme: { colors } }) => colors.neutral.textWeak};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  height: 48px;
  font-size: 16px;
  transition: transform 150ms;
  transform: translate(0, 12px) scale(1);
  ${({ edit }) =>
    edit &&
    css`
      transform: translate(-9.6%, -3px) scale(0.8);
    `}
  ${({ disabled, theme: { colors } }) =>
    disabled &&
    css`
      color: ${colors.neutral.textDisabled};
    `}
  ${({ readOnly, theme: { colors } }) =>
    readOnly &&
    css`
      color: ${colors.neutral.textDisabled};
    `}
  ${({ error, theme: { colors } }) =>
    error &&
    css`
      color: ${colors.danger.textWeak};
    `}
`;

const StyledRelativeDiv = styled.div`
  position: relative;
`;

const StyledError = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.danger.textWeak};
  padding-top: ${({ theme }) => theme.space['0.25']};
`;

const StyledNotice = styled(Notice)`
  margin-top: ${({ theme }) => theme.space['1']};
`;

const StyledInput = styled('input', {
  shouldForwardProp: (prop) =>
    ![
      'as',
      'error',
      'fillAvailable',
      'hasLabel',
      'hasRightElement',
      'isPlaceholderVisible',
      'multiline',
      'resizable',
      'inputSize',
      'rightElementPadding'
    ].includes(prop)
})<StyledInputProps>`
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  appearance: none;
  background-color: ${({ theme: { colors } }) => colors.neutral.backgroundWeak};
  background-image: none;
  border: 1px solid ${({ theme: { colors } }) => colors.neutral.borderWeak};
  border-radius: ${({ theme: { radii } }) => radii.default};
  color: ${({ theme: { colors } }) => colors.neutral.text};
  display: block;
  max-width: 100%;
  outline: none;
  position: relative;
  width: 100%;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 14px;
  font-size: 16px;
  line-height: 24px;
  &::placeholder {
    color: ${({ theme: { colors } }) => colors.neutral.textWeak};
    opacity: 0;
  }
  &:hover,
  &:focus {
    border-color: ${({ theme: { colors } }) => colors.primary.borderWeakHover};
  }
  &:focus {
    box-shadow: ${({ theme: { shadows } }) => shadows.focusPrimary};
    border-color: ${({ theme: { colors } }) => colors.primary.borderWeakHover};
  }
  ${({ isPlaceholderVisible }) =>
    isPlaceholderVisible &&
    `&::placeholder {
      opacity: 1;
    }`}
  ${({ disabled, theme: { colors } }) =>
    disabled &&
    `cursor: default;
    pointer-events: none;
    background-color: ${colors.neutral.backgroundDisabled};
    border-color: ${colors.neutral.borderDisabled};
    color: ${colors.neutral.textDisabled};`}
  ${({ readOnly, theme: { colors } }) =>
    readOnly &&
    `background-color: ${colors.neutral.backgroundDisabled};
    border-color: ${colors.neutral.borderDisabled};
    color: ${colors.neutral.text};`}
  ${({ inputSize }) => inputSizes[inputSize]?.default}
  ${({ inputSize, hasLabel }) =>
    !!inputSize && !hasLabel && inputSizes[inputSize]?.full}
  ${({ error, theme: { colors, shadows } }) =>
    error &&
    `border-color: ${colors.danger.borderWeak};
    &:hover,
    &:focus {
      border-color: ${colors.danger.borderHover};
    }
    &:focus {
      box-shadow: ${shadows.focusDanger};
      border-color: ${colors.danger.borderWeakHover};
    }`}
    ${({ multiline, resizable, fillAvailable }) =>
    multiline &&
    `
    padding-top: 20px;
    height: ${fillAvailable ? '100%' : 'initial'};
    resize: ${resizable === false ? 'none' : 'vertical'};
  `}
  ${({ multiline, hasLabel }) =>
    multiline &&
    !hasLabel &&
    `
    padding-top: 8px;
  `}
  ${({ hasRightElement, rightElementPadding }) =>
    hasRightElement &&
    `
    padding-right: ${rightElementPadding || 32}px;
  `}
`;

const UnitLabel = styled(Text)<{
  alignSelf: 'center' | 'flex-end' | 'flex-start';
}>`
  display: flex;
  padding: ${({ theme: { space } }) => space['1']} 0;
  align-self: ${({ alignSelf }) => alignSelf};
  line-height: 18px;
`;

const StyledRightElement = styled('div', {
  shouldForwardProp: (prop) => !['edit', 'touchable', 'unit'].includes(prop)
})<StyledRightElementProps>`
  ${({ theme: { colors } }) => css`
    pointer-events: none;
    position: absolute;
    right: 0;
    bottom: 0;
    top: 0;
    padding: 8px;
    display: flex;
    align-items: center;
    transition: transform 150ms, color 150ms;
    color: ${colors.neutral.textWeak};
    &:hover,
    &:focus-within {
      color: ${colors.neutral.textWeakHover};
    }
  `}
  ${({ edit }) =>
    edit &&
    css`
      transform: translateY(8px);
    `}
    ${({ touchable }) =>
    touchable &&
    css`
      pointer-events: auto;
      > button {
        box-shadow: none !important;
      }
    `}
    ${({ unit }) =>
    unit &&
    css`
      padding-top: 0;
      padding-bottom: 0;
      transform: none;
      align-items: flex-start;
    `}
`;

const ExpandableWithHiddenOverflow = styled(Expandable)`
  overflow: hidden;
`;

export {
  StyledSeparator,
  StyledLabel,
  StyledRelativeDiv,
  StyledError,
  StyledNotice,
  StyledInput,
  UnitLabel,
  StyledRightElement,
  ExpandableWithHiddenOverflow
};

import styled from '@emotion/styled';
import { Checkbox as ReakitCheckbox } from 'reakit/Checkbox';

import Text from '../Text';

const InnerCheckbox = styled.rect`
  fill: ${({ theme }) => theme.colors.neutral.backgroundWeak};
  stroke: ${({ theme }) => theme.colors.neutral.textWeak};
`;

const CheckMark = styled.rect``;

const PaddedText = styled(Text)`
  padding: ${({ theme }) => `0 ${theme.space['0.5']}`};
`;

const StyledIcon = styled.svg<{ size: number }>`
  margin-right: ${({ theme }) => theme.space['1']};
  border-radius: ${({ theme }) => theme.radii.default};
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  min-width: ${({ size }) => size}px;
  min-height: ${({ size }) => size}px;
`;

const StyledReakitCheckbox = styled(ReakitCheckbox, {
  shouldForwardProp: (prop) => !['size'].includes(prop)
})`
  position: absolute;
  white-space: nowrap;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  opacity: 0;
  border-width: 0;
  & + ${StyledIcon} {
    ${CheckMark} {
      transform-origin: center;
      transition: 200ms transform ease-in-out;
      transform: scale(0);
    }
  }
  &[aria-checked='true'] + svg {
    ${CheckMark} {
      transform: scale(1);
    }
  }
  &[aria-checked='true']
    + ${StyledIcon},
    &[aria-checked='mixed']
    + ${StyledIcon} {
    fill: ${({ theme }) => theme.colors.primary.backgroundStrong};
    ${InnerCheckbox} {
      stroke: ${({ theme }) => theme.colors.primary.backgroundStrong};
    }
  }
  &[aria-invalid='true']
    + ${StyledIcon},
    &[aria-invalid='mixed']
    + ${StyledIcon} {
    fill: ${({ theme }) => theme.colors.danger.backgroundStrong};
    ${InnerCheckbox} {
      stroke: ${({ theme }) => theme.colors.danger.backgroundStrong};
    }
  }
  &:focus + ${StyledIcon} {
    background-color: ${({ theme }) => theme.colors.primary.background};
    fill: ${({ theme }) => theme.colors.primary.backgroundStrong};
    ${InnerCheckbox} {
      stroke: ${({ theme }) => theme.colors.primary.backgroundStrong};
      fill: ${({ theme }) => theme.colors.primary.background};
    }
  }
  &[aria-invalid='true']:focus + ${StyledIcon} {
    background-color: ${({ theme }) => theme.colors.danger.background};
    fill: ${({ theme }) => theme.colors.danger.backgroundStrong};
    ${InnerCheckbox} {
      stroke: ${({ theme }) => theme.colors.danger.backgroundStrong};
      fill: ${({ theme }) => theme.colors.danger.background};
    }
  }
`;

const StyledCheckBoxContainer = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  &[aria-disabled='false'] {
    cursor: pointer;
  }
  &[aria-disabled='true'] {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.neutral.textDisabled};
    ${StyledIcon} {
      fill: ${({ theme }) => theme.colors.neutral.textDisabled};
      ${InnerCheckbox} {
        stroke: ${({ theme }) => theme.colors.neutral.textDisabled};
        fill: ${({ theme }) => theme.colors.neutral.backgroundDisabled};
      }
    }
  }
  &:hover[aria-disabled='false'] {
    ${StyledReakitCheckbox} + ${StyledIcon} {
      background-color: ${({ theme }) => theme.colors.primary.background};
      fill: ${({ theme }) => theme.colors.primary.backgroundStrong};
      ${InnerCheckbox} {
        stroke: ${({ theme }) => theme.colors.primary.backgroundStrong};
        fill: ${({ theme }) => theme.colors.primary.background};
      }
    }
    ${StyledReakitCheckbox}[aria-invalid="true"] + ${StyledIcon} {
      background-color: ${({ theme }) => theme.colors.danger.background};
      fill: ${({ theme }) => theme.colors.danger.backgroundStrong};
      ${InnerCheckbox} {
        stroke: ${({ theme }) => theme.colors.danger.backgroundStrong};
        fill: ${({ theme }) => theme.colors.danger.background};
      }
    }
  }
`;

const StyledActivityContainer = styled('div', {
  shouldForwardProp: (prop) => !['hasChildren'].includes(prop)
})<{ hasChildren: boolean }>`
  display: inline;
  vertical-align: middle;
  margin-right: ${({ theme, hasChildren }) =>
    hasChildren ? theme.space[1] : 0};
`;

export {
  InnerCheckbox,
  CheckMark,
  PaddedText,
  StyledIcon,
  StyledReakitCheckbox,
  StyledCheckBoxContainer,
  StyledActivityContainer
};

import { Theme } from '@emotion/react';
import { transparentize } from 'polished';
import { ButtonSize, ButtonVariant } from './types';

const TRANSITION_DURATION = 250;

const borderedVariant = ({
  colorValue,
  bgColorValue,
  hoverColorValue
}: {
  colorValue: string;
  bgColorValue: string;
  hoverColorValue: string;
}) => `
    border: 1px solid ${colorValue};
    background-color: ${bgColorValue};
    color: ${colorValue};
    svg {
      fill: ${colorValue};
      // safari issue prevent event propgation
      pointer-events: none;
    }
    &:hover,
    &:focus {
      border: 1px solid ${hoverColorValue};
      color: ${bgColorValue};
      background-color: ${hoverColorValue};
      svg {
        fill: ${bgColorValue};
      }
    }
    &:focus {
      box-shadow: 0 0 0 2px ${transparentize(0.75, hoverColorValue)};
    }
  `;

const plainVariant = ({
  bgColorValue,
  textColorValue,
  hoverColorValue
}: {
  bgColorValue: string;
  textColorValue: string;
  hoverColorValue: string;
}) => `
      background-color: ${bgColorValue};
      color: ${textColorValue};
      &:hover,
      &:focus {
        color: ${textColorValue};
        background-color: ${hoverColorValue};
      }
      &:focus {
        box-shadow: 0 0 0 2px ${transparentize(0.75, hoverColorValue)};
      }
    `;

const variants = {
  info: ({ theme }: { theme: Theme }) =>
    plainVariant({
      bgColorValue: theme.colors.info.background,
      hoverColorValue: theme.colors.info.backgroundHover,
      textColorValue: theme.colors.info.text
    }),
  'info-bordered': ({ theme }: { theme: Theme }) =>
    borderedVariant({
      bgColorValue: theme.colors.info.backgroundWeak,
      colorValue: theme.colors.info.textWeak,
      hoverColorValue: theme.colors.info.backgroundStrongHover
    }),
  link: ({ theme }: { theme: Theme }) => `
        background-color: transparent;
        border: none;
        padding: 0;
        color: ${theme.colors.info.text};
        text-decoration: underline;
        text-decoration-color: transparent;
        text-decoration-poisition: under;
        text-decoration-thickness: 1px;
        transition: text-decoration-color ${TRANSITION_DURATION}ms ease-out;
        vertical-align: baseline;
        &:hover,
        &:focus {
          text-decoration-thickness: 1px;
          text-decoration: underline;
          text-decoration-color: ${theme.colors.info.text};
        }
        &:active {
          text-decoration-thickness: 2px;
        }
      `,
  primary: ({ theme }: { theme: Theme }) =>
    plainVariant({
      bgColorValue: theme.colors.primary.backgroundStrong,
      hoverColorValue: theme.colors.primary.backgroundStrongHover,
      textColorValue: theme.colors.primary.textStrong
    }),
  'primary-bordered': ({ theme }: { theme: Theme }) =>
    borderedVariant({
      bgColorValue: theme.colors.primary.backgroundWeak,
      colorValue: theme.colors.primary.textWeak,
      hoverColorValue: theme.colors.primary.backgroundStrongHover
    }),
  'primary-soft-bordered': ({ theme }: { theme: Theme }) =>
    borderedVariant({
      bgColorValue: theme.colors.neutral.backgroundWeak,
      colorValue: theme.colors.neutral.textWeak,
      hoverColorValue: theme.colors.primary.backgroundStrongHover
    }),
  secondary: ({ theme }: { theme: Theme }) =>
    plainVariant({
      bgColorValue: theme.colors.neutral.backgroundStrong,
      hoverColorValue: theme.colors.neutral.backgroundStrongHover,
      textColorValue: theme.colors.neutral.text
    }),
  'secondary-bordered': ({ theme }: { theme: Theme }) =>
    borderedVariant({
      bgColorValue: theme.colors.neutral.backgroundWeak,
      colorValue: theme.colors.neutral.textWeak,
      hoverColorValue: theme.colors.primary.backgroundStrongHover
    }),
  success: ({ theme }: { theme: Theme }) =>
    plainVariant({
      bgColorValue: theme.colors.success.backgroundStrong,
      hoverColorValue: theme.colors.success.backgroundStrongHover,
      textColorValue: theme.colors.success.textStrong
    }),
  'success-bordered': ({ theme }: { theme: Theme }) =>
    borderedVariant({
      bgColorValue: theme.colors.success.backgroundWeak,
      colorValue: theme.colors.success.textWeak,
      hoverColorValue: theme.colors.success.backgroundStrongHover
    }),
  'success-soft-bordered': ({ theme }: { theme: Theme }) =>
    borderedVariant({
      bgColorValue: theme.colors.neutral.backgroundWeak,
      colorValue: theme.colors.neutral.textWeak,
      hoverColorValue: theme.colors.success.backgroundStrongHover
    }),
  transparent: ({ theme: { colors } }: { theme: Theme }) => `
        background-color: transparent;
        color: ${colors.neutral.text};
      `,
  warning: ({ theme }: { theme: Theme }) =>
    plainVariant({
      bgColorValue: theme.colors.danger.backgroundStrong,
      hoverColorValue: theme.colors.danger.backgroundStrongHover,
      textColorValue: theme.colors.danger.textStrong
    }),
  'warning-bordered': ({ theme }: { theme: Theme }) =>
    borderedVariant({
      bgColorValue: theme.colors.danger.backgroundWeak,
      colorValue: theme.colors.danger.text,
      hoverColorValue: theme.colors.danger.backgroundStrongHover
    }),
  'warning-soft-bordered': ({ theme }: { theme: Theme }) =>
    borderedVariant({
      bgColorValue: theme.colors.neutral.backgroundWeak,
      colorValue: theme.colors.neutral.textWeak,
      hoverColorValue: theme.colors.danger.backgroundStrongHover
    })
} as const;

const sizes = {
  large: `
    font-size: 16px;
    line-height: 32px;
    font-weight: 500;
    padding: 8px 16px;
  `,
  medium: `
    font-size: 16px;
    line-height: 24px;
    padding: 8px 16px;
  `,
  small: `
    font-size: 16px;
    line-height: 16px;
    padding: 8px 16px;
  `,
  xsmall: `
    font-size: 14px;
    line-height: 20px;
    padding: 8px;
  `,
  xxsmall: `
    font-size: 12px;
  `
} as const;

const variantStyles = ({
  variant,
  theme,
  ...props
}: {
  variant: ButtonVariant;
  theme: Theme;
}) => variants[variant]?.({ theme, ...props });

const sizeStyles = ({ size }: { size: ButtonSize }) => sizes[size];

export {
  TRANSITION_DURATION,
  borderedVariant,
  plainVariant,
  variants,
  sizes,
  variantStyles,
  sizeStyles
};

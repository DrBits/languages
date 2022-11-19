import { css, keyframes } from '@emotion/react';

import * as animations from '../../utils/animations';

import {
  SelectProps,
  SelectStyleGetterProps,
  SelectStyleMap,
  SelectStyleProps
} from './types';

export const getControlColor = ({
  state,
  error,
  theme
}: SelectStyleGetterProps) => {
  if (state.isDisabled) return theme.colors.neutral.textDisabled;
  if (error) return theme.colors.danger.text;

  return theme.colors.neutral.text;
};

export const getPlaceholderColor = ({
  state,
  error,
  theme
}: SelectStyleGetterProps) => {
  if (state.isDisabled) return theme.colors.neutral.textDisabled;
  if (error) return theme.colors.danger.textWeak;

  return theme.colors.neutral.textWeak;
};

export const getOptionColor = ({ state, theme }: SelectStyleGetterProps) => {
  let color: string = theme.colors.neutral.text;
  let backgroundColor: string = theme.colors.neutral.backgroundWeakElevated;
  if (state.isDisabled) {
    backgroundColor = theme.colors.neutral.backgroundDisabled;
    color = theme.colors.neutral.textDisabled;
  } else if (state.isSelected) {
    backgroundColor = theme.colors.primary.backgroundStrong;
    color = theme.colors.primary.textStrong;
  } else if (state.isFocused) {
    backgroundColor = theme.colors.primary.background;
  }

  return { backgroundColor, color };
};

export const getSelectStyles = ({
  error,
  customStyle,
  animation,
  animationDuration,
  noTopLabel,
  theme
}: SelectStyleProps): SelectStyleMap => ({
  control: (provided, state) => ({
    ...provided,
    backgroundColor: state.isDisabled
      ? theme.colors.neutral.backgroundDisabled
      : theme.colors.neutral.backgroundWeak,
    borderColor: error
      ? theme.colors.danger.border
      : theme.colors.neutral.borderWeak,
    borderRadius: '4px',
    borderStyle: state.isDisabled ? 'none' : 'solid',
    borderWidth: state.isDisabled ? 0 : '1px',
    boxShadow: 'none',
    color: getControlColor({ error, state, theme }),
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '24px',
    minHeight: '48px',
    transition: 'border-color 200ms ease, box-shadow 200ms ease',

    ...(!state.isDisabled && {
      ':focus-within': {
        borderColor: error
          ? theme.colors.danger.border
          : theme.colors.primary.border,
        boxShadow: error
          ? theme.shadows.focusDanger
          : theme.shadows.focusPrimary,
        svg: {
          fill: error ? theme.colors.danger.text : theme.colors.primary.text
        }
      },
      ':hover': {
        borderColor: error
          ? theme.colors.danger.borderHover
          : theme.colors.primary.borderHover,
        svg: {
          fill: error ? theme.colors.danger.text : theme.colors.primary.text
        }
      }
    }),
    ...(customStyle(state)?.control || {}),
    animation: animation
      ? `${animationDuration}ms ${
          (animations as Record<string, ReturnType<typeof keyframes>>)[
            animation
          ]
        }`
      : 'none'
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    maxHeight: '48px'
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    backgroundColor: theme.colors.neutral.borderWeak,
    display: state.selectProps?.time ? 'flex' : 'none',
    ...(customStyle(state)?.indicatorSeparator || {})
  }),
  input: (provided) => ({
    ...provided,
    flexGrow: 1,
    marginLeft: 0,
    paddingTop: noTopLabel ? 0 : 11
  }),
  menu: (provided, state) => ({
    ...provided,
    ...(customStyle(state)?.menu || {}),
    boxShadow: theme.shadows.menu
  }),
  menuList: (provided, state) => ({
    ...provided,
    backgroundColor: theme.colors.neutral.backgroundWeak,
    maxHeight: '225px',
    ...(customStyle(state)?.menuList || {})
  }),
  menuPortal: (provided, state) => ({
    ...provided,
    zIndex: 10000,
    ...(customStyle(state)?.menuPortal || {})
  }),
  multiValue: (provided, state) => ({
    ...provided,
    alignItems: 'center',
    backgroundColor: theme.colors.neutral.backgroundDisabled,
    borderRadius: '4px',
    color: theme.colors.neutral.text,
    fontSize: '14px',
    fontWeight: 500,
    height: '24px',
    justifyContent: 'center',
    marginTop: theme.space[noTopLabel ? '0.5' : '2'],
    textOverflow: 'ellipsis',
    ...(customStyle(state)?.multiValue || {})
  }),
  multiValueLabel: (provided, state) => ({
    ...provided,
    color: state.isDisabled
      ? theme.colors.neutral.textDisabled
      : theme.colors.neutral.text,
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: '20px',
    ...(customStyle(state)?.multiValueLabel || {})
  }),
  multiValueRemove: (provided, state) => ({
    ...provided,
    ...(state.isDisabled
      ? {
          color: theme.colors.neutral.textDisabled,
          cursor: 'none',
          pointerEvents: 'none'
        }
      : {
          color: theme.colors.primary.text
        }),
    ':hover': {
      color: state.isDisabled
        ? theme.colors.neutral.textDisabled
        : theme.colors.primary.text,
      cursor: state.isDisabled ? 'none' : 'pointer',
      pointerEvents: state.isDisabled ? 'none' : 'fill'
    },
    ...(customStyle(state)?.multiValueRemove || {})
  }),
  option: (provided, state) => ({
    ...provided,
    ...getOptionColor({ state, theme }),
    ':active': {
      backgroundColor: state.isDisabled
        ? theme.colors.neutral.backgroundDisabled
        : theme.colors.primary.background,
      color: state.isDisabled
        ? theme.colors.neutral.textDisabled
        : theme.colors.primary.text
    },
    ':hover': {
      backgroundColor: state.isDisabled
        ? theme.colors.neutral.backgroundDisabled
        : theme.colors.primary.background,
      color: state.isDisabled
        ? theme.colors.neutral.textDisabled
        : theme.colors.neutral.text
    },
    ...(customStyle(state)?.option || {})
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: getPlaceholderColor({ error, state, theme }),
    ...(customStyle(state)?.placeholder || {})
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: state.isDisabled
      ? theme.colors.neutral.textDisabled
      : theme.colors.neutral.text,
    marginLeft: state.hasValue ? 0 : undefined,
    marginRight: state.hasValue ? 0 : undefined,
    marginTop: !state.hasValue || noTopLabel ? 0 : '5px',
    paddingLeft: state.hasValue ? 0 : undefined,
    ...(customStyle(state)?.singleValue || {})
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    ...(customStyle(state)?.valueContainer || {}),
    cursor: state.isDisabled ? 'not-allowed' : undefined,
    height: '100%',
    label: {
      display: noTopLabel ? 'none' : 'initial'
    },
    paddingTop: 0
  })
});

export const inputStyles = ({ isMulti }: Partial<SelectProps>) => css`
  margin-left: 0px;
  ${!isMulti && 'caret-color: transparent'};
`;

export const defaultCustomStyle = () => ({});

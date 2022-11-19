import { ForwardedRef, ReactNode } from 'react';
import { Theme, css, CSSObject } from '@emotion/react';
import Select, {
  CommonProps,
  GroupBase,
  OptionProps,
  Props
} from 'react-select';

export type SelectOption = {
  value: string;
  label: ReactNode;
  disabled?: boolean;
  description?: string;
  inlineDescription?: string;
};

export type SelectStyleGetterProps = {
  state: SelectProps & OptionProps;
  error?: string;
  theme: Theme;
};

export type SelectStyleFactory = (
  provided: CSSObject,
  state: SelectProps & OptionProps & WithSelectProps
) => CSSObject;

export type SelectStyleMap = Record<string, SelectStyleFactory>;

export type SelectStyleProps = {
  error?: string;
  customStyle: (
    state: SelectProps & WithSelectProps
  ) => Record<string, CSSObject>;
  animation?: string;
  animationDuration: number;
  noTopLabel?: boolean;
  theme: Theme;
};

export type WithSelectProps = {
  selectProps: SelectProps;
};

export type SelectProps = StyledContainerProps &
  Omit<Props<SelectOption>, 'value'> &
  CommonProps<SelectOption, boolean, GroupBase<SelectOption>> & {
    value?: string | SelectOption;
    checked?: boolean;
    error?: string;
    labelId?: string;
    required?: boolean;
    time?: boolean;
  };

export type StyledContainerProps = {
  isDisabled?: boolean;
  additionalStyles?: Parameters<typeof css>[0];
};

export type StyledPlaceholderProps = {
  error?: string;
  isMulti: boolean;
  isDisabled?: boolean;
  hasValue: boolean;
};

export type SelectComponents = SelectProps['components'];

export type StateManagedSelect = typeof Select;

export type RichSelectProps = SelectProps &
  SelectStyleProps & {
    /**
     * Name of the animation
     */
    animation?: string;
    /**
     * Play the animation when the value change
     */
    animationOnChange?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    innerRef?: ForwardedRef<StateManagedSelect>;
    /**
     * Custom components of the RichSelect. See [React select documentation](https://react-select.com/components)
     */
    customComponents?: SelectProps['components'];
    children: ReactNode;
  };

export type OptionComponent = (
  props: Partial<OptionProps<SelectOption> & SelectOption>
) => JSX.Element;

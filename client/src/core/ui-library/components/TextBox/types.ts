import {
  LabelHTMLAttributes,
  TextareaHTMLAttributes,
  InputHTMLAttributes,
  FocusEventHandler,
  KeyboardEventHandler
} from 'react';
import { XStyledProps } from '../Box';
import { inputSizes } from './common';

export type TextBoxSizes = keyof typeof inputSizes;

export type StyledRightElementProps = {
  edit?: boolean;
  touchable?: boolean;
  unit?: string;
};

export type StyledLabelProps = {
  'aria-label'?: string;
  'aria-live': string;
  disabled?: boolean;
  edit?: boolean;
  error?: boolean;
  readOnly?: boolean;
  resizable?: boolean;
  fillAvailable?: boolean;
} & LabelHTMLAttributes<HTMLLabelElement>;

export type StyledInputProps = {
  disabled?: boolean;
  error?: boolean;
  fillAvailable?: boolean;
  hasLabel?: boolean;
  hasRightElement?: boolean;
  rightElementPadding?: number;
  isPlaceholderVisible?: boolean;
  multiline?: boolean;
  resizable?: boolean;
  inputSize: TextBoxSizes;
} & (
  | InputHTMLAttributes<HTMLInputElement>
  | TextareaHTMLAttributes<HTMLTextAreaElement>
);

export type InputProps = Omit<
  Exclude<StyledInputProps, TextareaHTMLAttributes<HTMLTextAreaElement>>,
  'inputSize'
>;

export type TextBoxProps = {
  'data-testid'?: string;
  ariaControls?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  cols?: number;
  defaultValue?: string;
  disabled?: boolean;
  edit?: boolean;
  error?: string;
  fillAvailable?: boolean;
  generated?: boolean;
  height?: string | number;
  id?: string;
  label?: string;
  multiline?: boolean;
  name?: string;
  notice?: string;
  noTopLabel?: boolean;
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onChange?: (value: string) => void;
  onFocus?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onKeyUp?: KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  placeholder?: string;
  random?: string;
  readOnly?: boolean;
  required?: boolean;
  resizable?: boolean;
  rows?: number;
  size?: TextBoxSizes;
  tabIndex?: number;
  type?: string;
  unit?: string;
  unitAlignment?: 'center' | 'flex-end' | 'flex-start';
  valid?: boolean;
  value?: string | number;
  wrap?: string;
  inputProps?: InputProps;
} & (
  | Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>
  | Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'>
) &
  XStyledProps;

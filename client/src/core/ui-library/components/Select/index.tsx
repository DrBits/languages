import React, {
  ForwardedRef,
  forwardRef,
  ForwardRefExoticComponent,
  ReactElement,
  useEffect,
  useId,
  useMemo,
  useState
} from 'react';
import Select, {
  ClearIndicatorProps,
  components,
  ContainerProps,
  DropdownIndicatorProps,
  InputProps,
  MultiValueProps,
  OptionProps,
  ValueContainerProps
} from 'react-select';

import { defaultCustomStyle, getSelectStyles, inputStyles } from './common';
import {
  ExpandableWithHiddenOverflow,
  MaxLineStyledText,
  StyledContainer,
  StyledError,
  StyledPlaceholder,
  StyledText
} from './styles';
import {
  OptionComponent,
  RichSelectProps,
  SelectComponents,
  SelectOption,
  StateManagedSelect,
  WithSelectProps
} from './types';

import Icon from '../Icon';
import Stack from '../Stack';
import { useTheme } from '@emotion/react';
import flattenChildren from 'react-flatten-children';
import isJSONString from '../../helpers/isJSON';

const SelectContainer = (
  props: ContainerProps<SelectOption> & WithSelectProps
) => {
  const {
    children,
    getStyles,
    innerProps: { onKeyDown } = {},
    isDisabled = false,
    className,
    selectProps: { name = '', error, className: selectPropsClassName } = {}
  } = props;

  return (
    <StyledContainer
      data-testid={`rich-select-${name}`}
      additionalStyles={getStyles?.('container', props)}
      isDisabled={isDisabled}
      className={[className, selectPropsClassName].filter(Boolean).join(' ')}
      onKeyDown={onKeyDown}
    >
      {children}
      <ExpandableWithHiddenOverflow height={56} opened={!!error}>
        <StyledError>{error}</StyledError>
      </ExpandableWithHiddenOverflow>
    </StyledContainer>
  );
};

const ValueContainer = ({
  isDisabled,
  children,
  selectProps: { error, labelId, inputId, ...selectProps },
  isMulti,
  hasValue,
  clearValue,
  getStyles,
  getValue,
  isRtl,
  cx,
  options,
  selectOption,
  setValue,
  theme,
  className,
  innerProps
}: ValueContainerProps<SelectOption> & WithSelectProps) => (
  <components.ValueContainer
    clearValue={clearValue}
    getStyles={getStyles}
    getValue={getValue}
    isRtl={isRtl}
    cx={cx}
    options={options}
    selectOption={selectOption}
    setValue={setValue}
    theme={theme}
    className={className}
    innerProps={innerProps}
    selectProps={selectProps}
    isMulti={isMulti}
    hasValue={hasValue}
    isDisabled={isDisabled}
  >
    <>
      {selectProps.placeholder ? (
        <StyledPlaceholder
          as="label"
          id={labelId}
          htmlFor={inputId}
          aria-live="assertive"
          error={error}
          isMulti={isMulti}
          isDisabled={isDisabled}
          hasValue={hasValue}
        >
          {selectProps.placeholder}
        </StyledPlaceholder>
      ) : null}
      {children}
    </>
  </components.ValueContainer>
);

const Input = ({
  isMulti,
  hasValue,
  selectProps: { inputId, labelId, placeholder, ...selectProps },
  clearValue,
  getStyles,
  getValue,
  isRtl,
  cx,
  options,
  selectOption,
  setValue,
  theme,
  className,
  isHidden,
  ...props
}: InputProps<SelectOption> & WithSelectProps) => (
  <components.Input
    {...props}
    css={inputStyles({ isMulti })}
    id={inputId}
    aria-controls={labelId}
    hasValue={hasValue}
    isMulti={isMulti}
    clearValue={clearValue}
    getStyles={getStyles}
    getValue={getValue}
    isRtl={isRtl}
    cx={cx}
    options={options}
    selectOption={selectOption}
    setValue={setValue}
    theme={theme}
    className={className}
    isHidden={isHidden}
    selectProps={
      { ...selectProps, placeholder } as InputProps<SelectOption>['selectProps']
    }
  />
);

const Option = ({
  selectProps,
  value,
  label,
  children,
  data: { inlineDescription, description },
  isSelected,
  data,
  ...props
}: OptionProps<SelectOption> & SelectOption) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      data-testid={`option-${selectProps.name || ''}-${
        isJSONString(value) ? label : value
      }`}
      onMouseOver={() => setIsFocused(true)}
      onFocus={() => setIsFocused(true)}
      onMouseOut={() => setIsFocused(false)}
      onBlur={() => setIsFocused(false)}
    >
      <components.Option
        {...props}
        selectProps={selectProps}
        label={label}
        data={data}
        isSelected={isSelected}
      >
        {children}
        {inlineDescription ? (
          <StyledText
            as="span"
            variant="bodySmall"
            isSelectedAndNotFocused={isSelected && !isFocused}
          >
            {inlineDescription}
          </StyledText>
        ) : null}
        {description ? (
          <MaxLineStyledText
            as="p"
            variant="bodySmall"
            isSelectedAndNotFocused={isSelected && !isFocused}
          >
            {description}
          </MaxLineStyledText>
        ) : null}
      </components.Option>
    </div>
  );
};

const DropdownIndicator = (
  props: DropdownIndicatorProps<SelectOption> & WithSelectProps
) => {
  const {
    selectProps: { isDisabled, time, required }
  } = props;
  const theme = useTheme();
  const color = useMemo(
    () =>
      isDisabled
        ? theme.colors.neutral.textDisabled
        : theme.colors.neutral.text,
    [theme, isDisabled]
  );

  return (
    <components.DropdownIndicator {...props}>
      <Stack gap={2} direction="row">
        <Icon
          name={time ? 'clock-outline' : 'chevron-down'}
          size={time ? 24 : 11}
          color={color}
        />
        {required ? (
          <Icon name="asterisk" size={8} color={theme.colors.danger.text} />
        ) : null}
      </Stack>
    </components.DropdownIndicator>
  );
};

const ClearIndicator = (
  props: ClearIndicatorProps<SelectOption> & WithSelectProps
) => {
  const theme = useTheme();
  const {
    selectProps: { checked, error },
    innerProps: { ref, ...restInnerProps }
  } = props;

  return (
    <components.ClearIndicator {...props}>
      <Icon
        {...restInnerProps}
        name="close"
        size={20}
        cursor="pointer"
        color={
          (checked && theme.colors.primary.text) ||
          (error && theme.colors.danger.text) ||
          theme.colors.neutral.text
        }
      />
    </components.ClearIndicator>
  );
};

const MultiValueContainer = (props: MultiValueProps<SelectOption>) => (
  <components.MultiValueContainer {...props} />
);

const MultiValueLabel = (props: MultiValueProps<SelectOption>) => (
  <components.MultiValueLabel {...props} />
);

const MultiValueRemove = (props: MultiValueProps<SelectOption>) => (
  <components.MultiValueRemove {...props}>
    <Icon name="close" size={16} />
  </components.MultiValueRemove>
);

const RichSelect = ({
  animation = 'pulse',
  animationDuration = 1000,
  animationOnChange = false,
  children,
  className,
  customComponents,
  customStyle = defaultCustomStyle,
  disabled = false,
  error,
  innerRef,
  inputId: inputIdProp,
  isClearable = false,
  isMulti = false,
  isSearchable = true,
  menuPortalTarget,
  noTopLabel = false,
  onChange,
  options,
  placeholder,
  readOnly = false,
  value,
  name,
  id: idProp,
  time,
  isLoading,
  required
}: Partial<RichSelectProps>) => {
  const id = useId();
  const inputId = inputIdProp ?? id;
  const theme = useTheme();
  const [isAnimated, setIsAnimated] = useState(false);
  const currentValue = (value as SelectOption)?.value;

  // Options need to keep the same reference otherwise react-select doesn't focus the selected option
  const selectOptions = useMemo(
    () =>
      options ||
      (flattenChildren(children) as ReactElement<{ children: string }>[]).map(
        ({ props: { children: label, ...subProps } }) =>
          ({
            ...subProps,
            label
          } as SelectOption)
      ),
    [options, children]
  );

  useEffect(() => {
    if (animationOnChange) {
      setIsAnimated(true);
      setTimeout(() => setIsAnimated(false), animationDuration);
    }
  }, [setIsAnimated, animationOnChange, animationDuration, currentValue]);

  return (
    <Select
      components={
        {
          ClearIndicator,
          DropdownIndicator,
          Input,
          MultiValueContainer,
          MultiValueLabel,
          MultiValueRemove,
          Option,
          SelectContainer,
          ValueContainer,
          ...customComponents
        } as SelectComponents
      }
      placeholder={placeholder}
      className={className}
      isDisabled={disabled || readOnly}
      isOptionDisabled={(option) => !!option.disabled}
      styles={getSelectStyles({
        animation: isAnimated ? animation : undefined,
        animationDuration,
        customStyle,
        error,
        noTopLabel,
        theme
      })}
      options={selectOptions}
      menuPortalTarget={menuPortalTarget || undefined}
      isSearchable={isSearchable}
      isClearable={isClearable}
      isMulti={isMulti}
      onChange={onChange}
      value={value as SelectOption}
      maxMenuHeight={250}
      inputId={inputId}
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      ref={innerRef as any}
      name={name}
      id={idProp}
      // @ts-expect-error time prop doesn't exist in react-select but is used
      time={time}
      isLoading={isLoading}
      required={required}
    />
  );
};

const RichSelectWithRef = forwardRef(
  (props: RichSelectProps, ref: ForwardedRef<StateManagedSelect>) => (
    <RichSelect innerRef={ref} {...props} />
  )
) as ForwardRefExoticComponent<Partial<RichSelectProps>> & {
  Option: OptionComponent;
};

RichSelectWithRef.Option = Option as OptionComponent;

export default RichSelectWithRef;

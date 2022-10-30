import React, {
  ChangeEvent,
  FocusEventHandler,
  forwardRef,
  KeyboardEventHandler,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react';

import { inputSizes } from './common';
import { TextBoxProps, TextBoxSizes } from './types';

import Box from '../Box';
import Expandable from '../Expandable';
import Icon from '../Icon';
import Separator from '../Separator';
import Text from '../Separator';

import randomName from '../../helpers/random-name';
import {
  ExpandableWithHiddenOverflow,
  StyledError,
  StyledInput,
  StyledLabel,
  StyledNotice,
  StyledRelativeDiv,
  StyledRightElement,
  StyledSeparator,
  UnitLabel
} from './styles';
import Stack from '../Stack';

export const textBoxSizes = Object.keys(inputSizes) as TextBoxSizes[];

const TextBox = forwardRef<
  HTMLInputElement | HTMLTextAreaElement | null,
  TextBoxProps
>(
  (
    {
      'data-testid': dataTestId,
      ariaControls,
      autoComplete = 'on',
      autoFocus,
      cols,
      defaultValue,
      disabled,
      edit: forceEdit,
      error,
      fillAvailable,
      generated,
      height,
      id,
      label,
      multiline,
      name,
      notice,
      noTopLabel = false,
      onBlur,
      onChange,
      onFocus,
      onKeyUp,
      onKeyDown,
      placeholder,
      random,
      readOnly,
      required,
      resizable,
      rows,
      size = 'medium',
      tabIndex,
      type = 'text',
      unit,
      unitAlignment = 'flex-end',
      valid,
      value,
      wrap,
      inputProps,
      ...props
    },
    ref
  ): JSX.Element => {
    const controlRef = useRef<HTMLInputElement>(null);

    const [visited, setVisited] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = useCallback(
      () => setPasswordVisible((x) => !x),
      []
    );

    useImperativeHandle<unknown, unknown>(ref, () => controlRef, []);

    useEffect(() => {
      if (passwordVisible) {
        controlRef?.current?.focus();
      }
    }, [passwordVisible]);

    const handlePassVisibilityClick = useCallback(
      () => togglePasswordVisibility(),
      [togglePasswordVisibility]
    );

    const handlePassVisiblityKeyDown: KeyboardEventHandler<
      HTMLButtonElement | HTMLDivElement
    > = useCallback(
      (event) => {
        const keyCode = event.key.charCodeAt(0);

        // SPACE key
        if (keyCode === 32) {
          event.preventDefault();
          togglePasswordVisibility();
        }
      },
      [togglePasswordVisibility]
    );

    const randomize = useCallback(
      () => onChange?.(randomName(random)),
      [onChange, random]
    );

    const handleClickRandomize = useCallback(() => randomize(), [randomize]);

    const handleKeyDownRandomize: KeyboardEventHandler<
      HTMLButtonElement | HTMLDivElement
    > = useCallback(
      (event) => {
        const keyCode = event.key.charCodeAt(0);

        if (keyCode === 32) {
          event.preventDefault();
          randomize();
        }
      },
      [randomize]
    );

    const handleFocus: FocusEventHandler<
      HTMLInputElement | HTMLTextAreaElement
    > = useCallback(
      (event) => {
        if (!visited && !readOnly) {
          setVisited(true);
        }

        if (onFocus) {
          onFocus(event);
        }
      },
      [visited, readOnly, onFocus]
    );

    const handleChange = useCallback(
      (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        onChange?.(event.target.value),
      [onChange]
    );

    const isPassToggleable = type === 'toggleable-password';
    const hasLabel = !!label && !noTopLabel && size === 'medium';
    const edit =
      hasLabel && (forceEdit || visited || value || error || generated);
    const isPlaceholderVisible = !hasLabel || !!edit;
    const hasRightElement =
      valid || required || isPassToggleable || random || unit;

    const rightElementPadding = required ? 22 : undefined;

    const getType = () => {
      if (isPassToggleable) {
        return passwordVisible || generated ? 'text' : 'password';
      }

      return multiline ? undefined : type;
    };

    const inputSize = size;

    const getRightComponent = () => {
      if (isPassToggleable && !generated)
        return (
          <Button
            action
            onClick={handlePassVisibilityClick}
            onKeyDown={handlePassVisiblityKeyDown}
            title={passwordVisible ? 'Hide' : 'Show'}
            variant="transparent"
            icon={passwordVisible ? 'eye-off' : 'eye'}
          />
        );
      if (random)
        return (
          <Button
            action
            onClick={handleClickRandomize}
            onKeyDown={handleKeyDownRandomize}
            disabled={disabled}
            title="Randomize"
            icon="auto-fix"
            variant="transparent"
          />
        );
      if (valid === false || valid === true)
        return (
          <Icon
            name={!valid ? 'close' : 'check'}
            color={!valid ? 'danger' : 'success'}
            size={20}
          />
        );
      if (unit)
        return (
          <>
            <StyledSeparator direction="vertical" />
            <UnitLabel
              variant="bodySmall"
              as="p"
              alignSelf={unitAlignment}
              prominence="weak"
            >
              <Stack gap={1} direction="row">
                {unit}
                {required && <Icon name="asterisk" color="danger" size={8} />}
              </Stack>
            </UnitLabel>
          </>
        );
      if (required) return <Icon name="asterisk" color="danger" size={10} />;

      return null;
    };

    return (
      <Box {...props}>
        <StyledRelativeDiv>
          <StyledInput
            aria-controls={ariaControls}
            aria-label={label || undefined}
            aria-labelledby={hasLabel ? ariaControls : undefined}
            as={multiline ? 'textarea' : 'input'}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            cols={cols}
            data-testid={dataTestId}
            disabled={disabled}
            error={!!error}
            fillAvailable={fillAvailable}
            hasLabel={hasLabel}
            hasRightElement={!!hasRightElement}
            rightElementPadding={rightElementPadding}
            id={id}
            inputSize={inputSize}
            isPlaceholderVisible={isPlaceholderVisible}
            multiline={multiline}
            name={name}
            onBlur={onBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onKeyUp={onKeyUp}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            readOnly={readOnly}
            ref={controlRef}
            resizable={resizable}
            rows={rows}
            style={{ height }}
            tabIndex={tabIndex}
            type={getType()}
            value={value}
            wrap={wrap}
            {...inputProps}
          />
          {hasLabel && (
            <StyledLabel
              edit={!!edit}
              disabled={disabled}
              readOnly={readOnly}
              error={!!error}
              id={ariaControls}
              htmlFor={id}
              aria-live="assertive"
            >
              {label}
            </StyledLabel>
          )}

          {hasRightElement ? (
            <StyledRightElement
              edit={!!edit}
              touchable={isPassToggleable || !!random}
              unit={unit}
            >
              {getRightComponent()}
            </StyledRightElement>
          ) : null}
        </StyledRelativeDiv>
        <ExpandableWithHiddenOverflow height={56} opened={!!error}>
          <StyledError>{error}</StyledError>
        </ExpandableWithHiddenOverflow>
        {notice ? <StyledNotice>{notice}</StyledNotice> : null}
      </Box>
    );
  }
);

export default TextBox;

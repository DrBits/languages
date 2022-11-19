import React, {
  ChangeEvent,
  ForwardedRef,
  forwardRef,
  KeyboardEventHandler,
  useCallback,
  useEffect,
  useId,
  useMemo
} from 'react';
import { useCheckboxState } from 'reakit/Checkbox';
import Loader from '../Loader';
import {
  CheckMark,
  InnerCheckbox,
  PaddedText,
  StyledActivityContainer,
  StyledCheckBoxContainer,
  StyledIcon,
  StyledReakitCheckbox
} from './styles';
import { CheckboxProps } from './types';

const CheckboxIcon = () => (
  <g>
    <InnerCheckbox x="5" y="5" width="14" height="14" rx="1" strokeWidth="2" />
    <CheckMark x="8" y="8" rx="1" width="8" height="8" />
  </g>
);

const CheckboxMixedIcon = () => (
  <g>
    <InnerCheckbox x="5" y="5" width="14" height="14" rx="1" strokeWidth="2" />
    <rect x="8" y="11" rx="1" width="8" height="2" />
  </g>
);

const Checkbox = forwardRef(
  (
    {
      checked = false,
      onChange,
      onFocus,
      onBlur,
      error,
      name,
      value,
      size = 24,
      children,
      progress = false,
      disabled = false,
      autoFocus = false,
      className,
      'data-visibility': dataVisibility
    }: CheckboxProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const hasChildren = !!children;
    const { state, setState } = useCheckboxState({ state: checked });
    const id = useId();
    const computedName = name ?? id;

    const icon = useMemo(() => {
      if (state === 'indeterminate') return 'minus-box-outline';
      if (state) return 'checkbox-marked-outline';

      return 'checkbox-marked-outline';
    }, [state]);

    useEffect(() => {
      setState(checked);
    }, [checked, setState]);

    const onLocalChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        if (!progress) onChange(event);
        setState(event.target.checked);
      },
      [onChange, progress, setState]
    );

    const onKeyDown: KeyboardEventHandler = useCallback(
      (event) => {
        if (event.key.charCodeAt(0) === 32) {
          onChange(event);
        }
      },
      [onChange]
    );
    return (
      <>
        {progress ? (
          <StyledActivityContainer hasChildren={hasChildren}>
            <Loader active size={size} />
          </StyledActivityContainer>
        ) : null}
        <StyledCheckBoxContainer
          className={className}
          aria-disabled={disabled}
          data-visibility={dataVisibility}
          data-checked={checked}
          data-error={!!error}
        >
          <StyledReakitCheckbox
            aria-invalid={!!error}
            aria-describedby={error ? `${computedName}-hint` : undefined}
            aria-checked={
              state === 'indeterminate' ? 'mixed' : (state as boolean)
            }
            checked={state === 'indeterminate' ? false : (state as boolean)}
            size={size}
            onChange={onLocalChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
            disabled={disabled}
            value={value}
            name={computedName}
            autoFocus={autoFocus}
            ref={ref}
          />
          {!progress ? (
            <StyledIcon name={icon} size={size} viewBox="0 0 24 24">
              {state === 'indeterminate' ? (
                <CheckboxMixedIcon />
              ) : (
                <CheckboxIcon />
              )}
            </StyledIcon>
          ) : null}
          {children}
        </StyledCheckBoxContainer>
        {error ? (
          <PaddedText variant="bodySmall" as="p" color="danger">
            {error}
          </PaddedText>
        ) : null}
      </>
    );
  }
);

export default Checkbox;

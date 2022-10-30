import React, {
  ComponentProps,
  forwardRef,
  isValidElement,
  ReactNode,
  useMemo
} from 'react';
import Icon from '../Icon';
import Loader from '../Loader';
import Tooltip from '../Tooltip';

import { sizes, variants } from './common';
import {
  StyledButton,
  StyledContent,
  StyledIconContainer,
  StyledLink
} from './styles';
import { ButtonProps, ButtonSize, ButtonVariant } from './types';

export const buttonVariants = Object.keys(variants) as ButtonVariant[];
export const buttonSizes = Object.keys(sizes) as ButtonSize[];

const SmartIcon = ({
  icon,
  iconSize
}: {
  icon: ReactNode | string;
  iconSize?: number;
}) =>
  isValidElement(icon) ? (
    icon
  ) : (
    <Icon name={icon as ComponentProps<typeof Icon>['name']} size={iconSize} />
  );

const FwdButton = ({
  children,
  disabled = false,
  download,
  extend,
  href,
  icon,
  iconPosition = 'left',
  iconSize,
  innerRef,
  progress,
  size = 'large',
  tooltip,
  tooltipBaseId,
  type: elementType = 'button',
  variant = 'primary',
  as: asProp,
  ...props
}: ButtonProps) => {
  const as = useMemo(() => {
    if (disabled) return 'button';
    if (asProp) return asProp;
    if (href || download) return StyledLink;

    return 'button';
  }, [disabled, href, download, asProp]);

  const displayProgressOnly = !children;

  const iconMargin = extend || (progress && displayProgressOnly) ? 0 : 8;
  const type = as === 'button' ? elementType : undefined;

  return (
    <Tooltip id={tooltipBaseId} text={tooltip}>
      <StyledButton
        {...props}
        href={href}
        download={download}
        ref={innerRef}
        as={as}
        disabled={as === 'button' && disabled}
        aria-disabled={disabled}
        variant={variant}
        size={size}
        extend={extend}
        icon={icon}
        type={type}
      >
        {progress === true ||
        progress === 'left' ||
        (icon && iconPosition === 'left') ? (
          <StyledIconContainer
            margin={iconMargin}
            position={children ? 'left' : undefined}
          >
            {progress === true || progress === 'left' ? (
              <Loader
                active
                trailColor="transparent"
                color="currentColor"
                size="1em"
              />
            ) : (
              <SmartIcon icon={icon} iconSize={iconSize} />
            )}
          </StyledIconContainer>
        ) : null}

        {(!progress || !displayProgressOnly) && children && (
          <StyledContent>{children}</StyledContent>
        )}
        {progress === 'right' || (icon && iconPosition === 'right') ? (
          <StyledIconContainer margin={iconMargin} position="right">
            {progress === 'right' ? (
              <Loader
                active
                trailColor="transparent"
                color="currentColor"
                size="1em"
              />
            ) : (
              <SmartIcon icon={icon} iconSize={iconSize} />
            )}
          </StyledIconContainer>
        ) : null}
      </StyledButton>
    </Tooltip>
  );
};

const Button = forwardRef<Element, Omit<ButtonProps, 'innerRef'>>(
  (props, ref) => <FwdButton {...props} innerRef={ref} />
);

Button.displayName = 'fwd(Button)';

export default Button;

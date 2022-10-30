import React, { ForwardedRef, forwardRef } from 'react';
import { BLANK_TARGET_ICON_SIZE, ICON_SIZE } from './common';
import { StyledExternalIconContainer, StyledIcon, StyledLink } from './styles';
import { LinkProps } from './types';

const Link = forwardRef(
  (
    {
      children,
      href,
      target,
      download,
      variant = 'primary',
      size = 'large',
      iconPosition,
      rel,
      className,
      onClick
    }: LinkProps,
    ref: ForwardedRef<HTMLAnchorElement>
  ) => {
    const isBlank = target === '_blank';
    const computedRel = rel || (isBlank ? 'noopener noreferrer' : undefined);

    return (
      <StyledLink
        href={href}
        target={target}
        download={download}
        ref={ref}
        variant={variant}
        rel={computedRel}
        className={className}
        size={size}
        onClick={onClick}
        iconPosition={iconPosition}
      >
        {!isBlank && iconPosition === 'left' ? (
          <StyledIcon name="arrow-left" size={ICON_SIZE} />
        ) : null}
        {children}

        {isBlank ? (
          <StyledExternalIconContainer>
            <StyledIcon name="open-in-new" size={BLANK_TARGET_ICON_SIZE} />
          </StyledExternalIconContainer>
        ) : null}

        {!isBlank && iconPosition === 'right' ? (
          <StyledIcon name="arrow-right" size={ICON_SIZE} />
        ) : null}
      </StyledLink>
    );
  }
);

export default Link;

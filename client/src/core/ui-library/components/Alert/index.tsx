import React from 'react';
import { typesDefaultIcons } from './common';

import {
  AlertContainer,
  InheritedColorText,
  StyledContainer,
  StyledIcon
} from './styles';

import { AlertProps, TitleProps } from './types';

const Title = ({ text }: TitleProps) => (
  <InheritedColorText variant="bodyStrong" as="p">
    {text}
  </InheritedColorText>
);

const Alert = ({
  variant = 'standart',
  children,
  iconSize = 32,
  icon,
  title,
  type = 'warning',
  className
}: AlertProps) => (
  <StyledContainer type={type} variant={variant} className={className}>
    <StyledIcon
      name={icon || typesDefaultIcons[type]}
      size={iconSize}
      aria-hidden="true"
    />
    <AlertContainer>
      {title && <Title text={title} />}
      {typeof children === 'string' ? (
        <InheritedColorText variant="body" as="p">
          {children}
        </InheritedColorText>
      ) : (
        children
      )}
    </AlertContainer>
  </StyledContainer>
);

export default Alert;

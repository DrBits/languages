import React from 'react';
import { StyledHr, StyledIconWrapper, StyledIcon } from './styles';
import { SeparatorProps } from './types';

const Separator = ({
  direction = 'horizontal',
  thickness = 1,
  color = 'neutral',
  icon,
  className
}: SeparatorProps): JSX.Element =>
  icon ? (
    <StyledIconWrapper
      role="separator"
      aria-orientation={direction}
      direction={direction}
      className={className}
    >
      <StyledHr
        direction={direction}
        thickness={thickness}
        color={color}
        hasIcon
      />
      <StyledIcon name={icon} size={24} color="neutral" />
      <StyledHr
        direction={direction}
        thickness={thickness}
        color={color}
        hasIcon
      />
    </StyledIconWrapper>
  ) : (
    <StyledHr
      role="separator"
      aria-orientation={direction}
      direction={direction}
      thickness={thickness}
      color={color}
      className={className}
    />
  );

export default Separator;

import React from 'react';
import {
  RightSpacedText,
  StyledBox,
  StyledContainer,
  StyledTitleContainer,
  TitleContainer
} from './styles';
import { ContainerProps } from './types';

const Container = ({
  title,
  subtitle,
  header,
  rightTitle,
  disabled = false,
  edition = false,
  small = false,
  children,
  boxStyle,
  ...props
}: ContainerProps) => (
  <StyledContainer {...props}>
    <TitleContainer>
      <StyledTitleContainer>
        <RightSpacedText variant="heading" as="h2">
          {title}
        </RightSpacedText>
        {subtitle}
      </StyledTitleContainer>
      <div>{rightTitle}</div>
    </TitleContainer>
    {header}
    <StyledBox
      css={boxStyle}
      small={small}
      edition={edition}
      disabled={disabled}
    >
      {children}
    </StyledBox>
  </StyledContainer>
);

export default Container;

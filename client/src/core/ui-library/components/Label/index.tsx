import React, { ComponentProps } from 'react';
import { StyledLabel } from './styles';

const Label = (props: ComponentProps<typeof StyledLabel>) => (
  <StyledLabel {...props} />
);

export default Label;

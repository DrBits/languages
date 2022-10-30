import styled from '@emotion/styled';

import { Color } from '../../theme';
import { ProminenceProps, TextVariant } from './types';
import { generateStyles } from './common';

const StyledText = styled('div', {
  shouldForwardProp: (prop) =>
    ![
      'as',
      'variant',
      'color',
      'prominence',
      'oneLine',
      'disabled',
      'italic',
      'underline'
    ].includes(prop)
})<{
  color: Color;
  prominence: ProminenceProps;
  variant: TextVariant;
  oneLine: boolean;
  disabled: boolean;
  italic: boolean;
  underline: boolean;
}>(generateStyles);

export { StyledText };

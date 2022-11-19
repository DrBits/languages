import styled from '@emotion/styled';
import { ContainerProps } from './types';

import { alertStyles } from './common';

import Icon from '../Icon';
import Text from '../Text';

const StyledContainer = styled('div', {
  shouldForwardProp: (prop) => !['type', 'variant'].includes(prop)
})<ContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: ${({ theme }) => theme.radii.default};
  padding: 12px;
  ${alertStyles}
`;

const StyledIcon = styled(Icon)`
  margin-right: ${({ theme }) => theme.space[2]};
`;

const AlertContainer = styled.div`
  color: inherit;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const InheritedColorText = styled(Text)`
  color: inherit;
`;

export {
  StyledContainer,
  Icon,
  AlertContainer,
  InheritedColorText,
  StyledIcon
};

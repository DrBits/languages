import styled from '@emotion/styled';
import BorderedBox from '../BorderBox';

import Box from '../Box';
import Text from '../Text';
import { ContainerBaseProps } from './types';

const RightSpacedText = styled(Text)`
  margin: 0 ${({ theme }) => theme.space[2]} 0 0;
`;
const StyledContainer = styled(Box)`
  margin-top: 40px;
`;

const StyledTitleContainer = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.space['1']};
`;

const StyledBox = styled(BorderedBox, {
  shouldForwardProp: (prop) => !['small', 'edition'].includes(prop)
})<ContainerBaseProps>`
  background: ${({ theme }) => theme.colors.neutral.background};
  padding-left: 24px;
  padding-right: 24px;
  padding-top: ${({ small }) => (small ? 16 : 24)}px;
  padding-bottom: ${({ small }) => (small ? 16 : 24)}px;
  border: 1px solid
    ${({ edition, theme }) =>
      edition ? theme.colors.primary.border : theme.colors.neutral.border};
  opacity: ${({ disabled }) => (disabled ? '0.4' : 'inherit')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  > * {
    margin-top: 0;
  }
  > * + * {
    margin-top: 16px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export {
  RightSpacedText,
  StyledContainer,
  StyledTitleContainer,
  StyledBox,
  TitleContainer
};

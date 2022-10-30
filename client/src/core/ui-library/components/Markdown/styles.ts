import styled from '@emotion/styled';
import { css } from '@emotion/react';

import Text from '../Text';
import Link from '../Link';

const StyledLink = styled(Link)`
  font-size: inherit;
`;

const StyledText = styled(Text)`
  margin-top: 0;
`;

const Container = styled.div`
  display: inline-flex;
  background-color: ${({ theme }) => theme.colors.neutral.backgroundStrong};
  padding: ${({ theme }) => theme.space['1']};
`;

const StyledContainer = styled('div', {
  shouldForwardProp: (prop) => !['inline'].includes(prop)
})<{ inline?: boolean }>`
  ${({ inline }) =>
    inline &&
    css`
      > p {
        display: inline;
      }
    `}
`;

export { StyledLink, StyledText, Container, StyledContainer };

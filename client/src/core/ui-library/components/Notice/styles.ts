import styled from '@emotion/styled';

const Container = styled.div`
  color: ${({ theme }) => theme.colors.neutral.textWeak}
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space['1']};
`;

export { Container };

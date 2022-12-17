import styled from '@emotion/styled';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const BaseCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export { Container, BaseCenter };

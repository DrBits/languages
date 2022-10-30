import styled from '@emotion/styled';
import { ExpandableProps } from './types';

const Expandable = styled('div', {
  shouldForwardProp: (prop) => !['opened', 'height'].includes(prop)
})<ExpandableProps>`
  transition: max-height 300ms ease-out, opacity 300ms ease-out;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  height: auto;
  margin-top: 0;

  ${({ opened = false, height = 5000 }) =>
    opened &&
    `
    transition: max-height 300ms ease-in, opacity 300ms ease-in;
    max-height: ${height}px;
    opacity: 1;
    overflow: visible;
  `}
`;

export default Expandable;

import styled from '@emotion/styled';
import { Dialog, DialogBackdrop } from 'reakit/Dialog';

import {
  backdropAnimatedStyle,
  dialogAnimatedStyle,
  MODAL_PLACEMENT,
  MODAL_WIDTH
} from './common';
import { StyledDialogProps } from './types';

const StyledDialogBackdrop = styled(DialogBackdrop)`
  display: flex;
  position: fixed;
  overflow: auto;
  padding: 16px;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: 1;
  background-color: ${({ theme }) => theme.colors.overlay};
  ${({ animated }) => animated && backdropAnimatedStyle}
`;

const StyledDialog = styled(Dialog, {
  shouldForwardProp: (prop) =>
    !['animation', 'placement', 'width', 'height', 'bordered'].includes(prop)
})<StyledDialogProps>`
  background-color: ${({ theme }) =>
    theme.colors.neutral.backgroundWeakElevated};
  position: relative;
  border-radius: ${({ bordered }) => (bordered ? 4 : 0)}px;
  border: 0;
  padding: 32px;
  ${({ placement }) => MODAL_PLACEMENT[placement]}
  width: ${({ width }) => MODAL_WIDTH[width]}px;
  min-height: ${({ height }) => height};
  box-shadow: ${({ theme }) => theme.shadows.modal};
  opacity: 1;
  &::before {
    content: '';
    height: 100%;
    width: 100%;
  }
  ${({ animated, animation }) => animated && dialogAnimatedStyle({ animation })}
`;

const StyledContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  justify-content: flex-end;
  position: absolute;
  top: 16px;
  right: 16px;
  left: 16px;
`;

export { StyledDialogBackdrop, StyledDialog, StyledContainer };

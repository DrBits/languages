import { ReactElement, ReactNode } from 'react';
import { DialogStateReturn, DialogProps, DialogState } from 'reakit/Dialog';

import { MODAL_ANIMATION, MODAL_PLACEMENT, MODAL_WIDTH } from './common';

export type ModalWidth = keyof typeof MODAL_WIDTH;
export type ModalPlacement = keyof typeof MODAL_PLACEMENT;
export type ModalAnimation = keyof typeof MODAL_ANIMATION;

export type DisclosureParam =
  | ((dialog?: Partial<DialogStateReturn>) => ReactElement)
  | ReactElement;

export type DisclosureProps = {
  disclosure: DisclosureParam;
  dialog: Partial<DialogStateReturn>;
};

export type StyledDialogProps = {
  animation: ModalAnimation;
  placement: ModalPlacement;
  bordered: boolean;
  width: ModalWidth;
  height: string;
};

export type ModalProps = Partial<Omit<DialogProps, 'children'>> &
  Partial<DialogState> & {
    animation?: ModalAnimation;
    ariaLabel?: string;
    bordered?: boolean;
    customDialogBackdropStyles?: JSX.IntrinsicAttributes['css'];
    customDialogStyles?: JSX.IntrinsicAttributes['css'];
    disclosure?: DisclosureParam;
    height?: string;
    isClosable?: boolean;
    modal?: boolean;
    onClose?: () => void;
    onBeforeClose?: () => Promise<void> | void;
    opened?: boolean;
    placement?: ModalPlacement;
    width?: ModalWidth;
    children: ReactNode | ((args: DialogStateReturn) => ReactNode);
  };

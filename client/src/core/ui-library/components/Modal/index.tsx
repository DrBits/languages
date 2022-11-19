import React, {
  isValidElement,
  memo,
  useCallback,
  useEffect,
  useRef
} from 'react';
import { DialogDisclosure, useDialogState } from 'reakit/Dialog';
import Button from '../Button';
import { StyledContainer, StyledDialog, StyledDialogBackdrop } from './styles';

import { DisclosureProps, ModalProps } from './types';

const Disclosure = ({ disclosure, dialog }: DisclosureProps) => {
  // if you need dialog inside your component, use function, otherwise component is fine
  const target = isValidElement(disclosure) ? disclosure : disclosure(dialog);
  const innerRef = useRef(
    target
  ) as unknown as React.RefObject<HTMLButtonElement>;

  return (
    // @ts-expect-error reakit types are invalid, no need to pass as something, default is div
    <DialogDisclosure {...dialog} ref={innerRef}>
      {(disclosureProps) => React.cloneElement(target, disclosureProps)}
    </DialogDisclosure>
  );
};

const MemoDisclosure = memo(Disclosure);

const Modal = ({
  animated = false,
  animation = 'zoom',
  ariaLabel = 'modal',
  baseId = 'modal',
  bordered = true,
  children,
  customDialogBackdropStyles,
  customDialogStyles = {},
  disclosure,
  height = 'initial',
  hideOnClickOutside = true,
  hideOnEsc = true,
  isClosable = true,
  modal = true,
  onClose,
  onBeforeClose,
  opened = false,
  placement = 'center',
  preventBodyScroll = true,
  width = 'small'
}: ModalProps) => {
  const dialog = useDialogState({
    animated,
    baseId,
    modal,
    visible: opened
  });

  const { setVisible } = dialog;
  useEffect(() => setVisible(opened), [setVisible, opened]);

  const onCloseCallBack = useCallback(async () => {
    await onBeforeClose?.();
    dialog.toggle();
  }, [dialog, onBeforeClose]);

  return (
    <>
      {disclosure && <MemoDisclosure dialog={dialog} disclosure={disclosure} />}
      <StyledDialogBackdrop {...dialog} css={customDialogBackdropStyles}>
        <StyledDialog
          aria-label={ariaLabel}
          role="dialog"
          animation={animation}
          bordered={bordered}
          height={height}
          placement={placement}
          width={width}
          css={customDialogStyles}
          hideOnClickOutside={hideOnClickOutside}
          hideOnEsc={hideOnEsc}
          preventBodyScroll={preventBodyScroll}
          {...dialog}
          hide={onClose || onCloseCallBack}
        >
          <>
            {dialog.visible &&
              (typeof children === 'function' ? children(dialog) : children)}
            <StyledContainer>
              {isClosable && (
                <Button
                  onClick={onClose || onCloseCallBack}
                  title="close"
                  variant="transparent"
                  icon="close"
                  iconSize={20}
                  action
                />
              )}
            </StyledContainer>
          </>
        </StyledDialog>
      </StyledDialogBackdrop>
    </>
  );
};

export default memo(Modal);

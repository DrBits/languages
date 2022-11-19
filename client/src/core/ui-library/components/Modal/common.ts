import { css } from '@emotion/react';
import { ModalAnimation } from './types';

import * as animations from '../../utils';

export const MODAL_WIDTH = {
  large: 850,
  medium: 708,
  small: 616,
  xsmall: 400,
  xxsmall: 360
};

export const MODAL_PLACEMENT = {
  bottom: `
    margin: auto;
    margin-bottom: 0;
  `,
  'bottom-left': `
    margin: auto;
    margin-left: 0;
    margin-bottom: 0;
  `,
  'bottom-right': `
    margin: auto;
    margin-right: 0;
    margin-bottom: 0;
  `,
  center: `
    margin: auto;
  `,
  left: `
    margin: auto;
    margin-left: 0;
  `,
  right: `
    margin: auto;
    margin-right: 0;
  `,
  top: `
    margin: auto;
    margin-top: 0px;
  `,
  'top-left': `
    margin: auto;
    margin-left: 0;
    margin-top: 0;
  `,
  'top-right': `
    margin: auto;
    margin-right: 0;
    margin-top: 0;
  `
};

export const MODAL_ANIMATION = {
  fold: {
    enter: animations.unfoldIn,
    leave: animations.unfoldOut
  },
  scaleBack: {
    enter: animations.scaleForward,
    leave: animations.scaleBack
  },
  scaleUp: {
    enter: animations.scaleUp,
    leave: animations.scaleDown
  },
  sketch: {
    enter: animations.sketchIn,
    leave: animations.sketchOut
  },
  slideBottom: {
    enter: animations.slideFromBottom,
    leave: animations.slideToBottom
  },
  slideLeft: {
    enter: animations.slideFromLeft,
    leave: animations.slideToLeft
  },
  slideRight: {
    enter: animations.slideFromRight,
    leave: animations.slideToRight
  },
  slideTop: {
    enter: animations.slideFromTop,
    leave: animations.slideToTop
  },
  zoom: {
    enter: animations.zoomIn,
    leave: animations.zoomOut
  }
};

export const backdropAnimatedStyle = `
  opacity: 0;
  transition: opacity 250ms ease-in-out;
  &[data-enter] {
    opacity: 1;
    transition: opacity 250ms ease-in-out;
  }
  &[data-leave] {
    opacity: 0;
    transition: opacity 400ms ease-in-out;
  }
`;

export const dialogAnimatedStyle = ({
  animation
}: {
  animation: ModalAnimation;
}) => css`
  opacity: 0;
  &[data-enter] {
    opacity: 1;
    transition: opacity 500ms ease-in-out;
    animation: ${MODAL_ANIMATION[animation].enter} 500ms
      cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  }
  &[data-leave] {
    opacity: 0;
    transition: opacity 500ms ease-in-out;
    animation: ${MODAL_ANIMATION[animation].leave} 500ms
      cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  }
`;

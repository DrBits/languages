import { ReactNode, RefObject, Ref } from 'react';

export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left' | 'auto';

export type ComputePlacementTypes = {
  childrenStructuredRef: DOMRect;
  tooltipStructuredRef: DOMRect;
};

export type ComputePositionsTypes = {
  placement: TooltipPlacement;
  childrenRef: RefObject<HTMLDivElement>;
  tooltipRef: RefObject<HTMLDivElement>;
};

export type PositionsType = {
  arrowLeft: number;
  arrowTop: number;
  arrowTransform: string;
  left: number;
  rotate: number;
  top: number;
  tooltipInitialPosition: string;
};

export type StyledTooltipProps = {
  maxWidth: number;
  positions: PositionsType;
};

export type TooltipProps = {
  id?: string;
  children:
    | ReactNode
    | ((renderProps: {
        className?: string;
        onBlur: () => void;
        onFocus: () => void;
        onMouseEnter: () => void;
        onMouseLeave: () => void;
        ref: RefObject<HTMLDivElement>;
      }) => ReactNode);
  maxWidth?: number;
  placement?: TooltipPlacement;
  text?: ReactNode;
  className?: string;
  visible?: boolean;
  innerRef?: Ref<HTMLDivElement | null>;
};

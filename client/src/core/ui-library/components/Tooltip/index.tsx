import React, {
  useCallback,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState
} from 'react';
import { createPortal } from 'react-dom';
import {
  ANIMATION_DURATION,
  computePositions,
  DEFAULT_POSITIONS,
  TOOLTIP_INITIAL_POSITION
} from './common';
import { StyledTooltip } from './styles';
import { PositionsType, TooltipProps } from './types';

const Tooltip = ({
  children,
  text = '',
  placement = 'auto',
  id,
  className,
  maxWidth = 232,
  visible = false,
  innerRef
}: TooltipProps) => {
  const childrenRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(innerRef, () => childrenRef.current);

  const tooltipRef = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setInterval>>();

  const [visibleInDom, setVisibleInDom] = useState(visible);
  const [positions, setPositions] = useState<PositionsType>({
    ...DEFAULT_POSITIONS,
    tooltipInitialPosition: TOOLTIP_INITIAL_POSITION[placement]
  });

  const uniqueId = useId();
  const generateId = id ?? uniqueId;

  const getPositions = useCallback(() => {
    if (childrenRef.current && tooltipRef.current) {
      setPositions(computePositions({ childrenRef, placement, tooltipRef }));
    }
  }, [placement]);

  const unmountTooltip = useCallback(() => {
    setVisibleInDom(false);
    window.removeEventListener('resize', getPositions);
    window.removeEventListener('scroll', getPositions);
  }, [getPositions]);

  const onMouseEvent = useCallback(
    (isVisible: boolean) => () => {
      if (!isVisible && tooltipRef.current) {
        tooltipRef.current.style.opacity = '0';
        tooltipRef.current.style.transform =
          TOOLTIP_INITIAL_POSITION[placement];
        timer.current = setTimeout(() => unmountTooltip(), ANIMATION_DURATION);
      } else {
        if (timer.current) {
          clearTimeout(timer.current);
          if (tooltipRef.current) {
            tooltipRef.current.style.opacity = '1';
            tooltipRef.current.style.transform = 'translateY(+0%)';
          }
        }
        setVisibleInDom(isVisible);
      }
    },
    [placement, unmountTooltip]
  );

  useEffect(() => {
    if (visibleInDom) {
      getPositions();

      window.addEventListener('resize', getPositions);
      window.addEventListener('scroll', getPositions);

      if (tooltipRef.current) {
        tooltipRef.current.style.opacity = '1';
        tooltipRef.current.style.transform = 'translateY(+0%)';
      }
    }
  }, [getPositions, placement, unmountTooltip, visibleInDom]);

  const renderChildren = useCallback(() => {
    if (typeof children === 'function')
      return children({
        className,
        onBlur: onMouseEvent(false),
        onFocus: onMouseEvent(true),
        onMouseEnter: onMouseEvent(true),
        onMouseLeave: onMouseEvent(false),
        ref: childrenRef
      });

    return (
      <div
        aria-describedby="generateId"
        className={className}
        onBlur={onMouseEvent(false)}
        onFocus={onMouseEvent(true)}
        onMouseEnter={onMouseEvent(true)}
        onMouseLeave={onMouseEvent(false)}
        ref={childrenRef}
      >
        {children}
      </div>
    );
  }, [children, className, generateId, onMouseEvent]);

  if (!text) {
    if (typeof children === 'function') return null;

    return <>{children}</>;
  }

  return (
    <>
      {renderChildren()}
      {visibleInDom
        ? createPortal(
            <StyledTooltip
              ref={tooltipRef}
              positions={positions}
              maxWidth={maxWidth}
              role="tooltip"
              id={generateId}
            >
              {text}
            </StyledTooltip>,
            document.body
          )
        : null}
    </>
  );
};

export default Tooltip;

import React, { useEffect, useRef, useState } from 'react';

import { StyledText } from './styles';
import { TextProps, TextVariant } from './types';
import { typography } from '../../theme';
import recursivelyGetChildrenString from '../../helpers/recursivelyGetChildrenString';
import Tooltip from '../Tooltip';

export const textVariants = Object.keys(typography) as TextVariant[];

const Text = ({
  variant,
  children,
  as,
  color = 'neutral',
  oneLine = false,
  prominence = 'default',
  className,
  disabled = false,
  italic = false,
  underline = false
}: TextProps) => {
  const [isTruncated, setIsTruncated] = useState(false);
  const elementRef = useRef(null);

  const finalStringChildren = recursivelyGetChildrenString(children);

  useEffect(() => {
    if (oneLine && elementRef && elementRef.current) {
      const { offsetWidth, scrollWidth } = elementRef.current;
      setIsTruncated(offsetWidth <= scrollWidth);
    }
  }, [oneLine]);

  return (
    <Tooltip text={oneLine && isTruncated ? finalStringChildren : ''}>
      <StyledText
        ref={elementRef}
        as={as}
        prominence={prominence}
        color={color}
        variant={variant}
        oneLine={oneLine}
        className={className}
        disabled={disabled}
        italic={italic}
        underline={underline}
      >
        {children}
      </StyledText>
    </Tooltip>
  );
};

export default Text;

import React, { forwardRef, useMemo } from 'react';

import { customViewBoxes } from './common';
import { ICONS } from './icons';
import { StyledIcon } from './styles';
import { IconProps } from './types';

const Icon = forwardRef<SVGSVGElement, IconProps>(
  (
    {
      name = 'circle',
      color = 'currentColor',
      size = '1em',
      prominence = 'default',
      className,
      'data-testid': dataTestId,
      stroke,
      cursor,
      strokeWidth
    },
    ref
  ) => {
    const render = ICONS[name] || ICONS.circle;

    const defaultViewBox = useMemo(
      () =>
        customViewBoxes.find((vB) => vB.icons.includes(name))?.viewBox ??
        '0 0 24 24',
      [name]
    );

    return (
      <StyledIcon
        ref={ref}
        color={color}
        prominence={prominence}
        size={size}
        viewBox={defaultViewBox}
        className={className}
        data-testid={dataTestId}
        stroke={stroke}
        cursor={cursor}
        strokeWidth={strokeWidth}
      >
        {render()}
      </StyledIcon>
    );
  }
);

export default Icon;

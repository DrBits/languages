import React from 'react';
import { css, useTheme } from '@emotion/react';

import {
  HALF_VIEWBOX_HEIGHT,
  HALF_VIEWBOX_WIDTH,
  VIEWBOX_HEIGHT,
  VIEWBOX_WIDTH
} from './common';
import { LoaderProps } from './types';
import { spin, Text } from './styles';

import { Color } from '../../theme';

const Loader = ({
  percentage = 20,
  text,
  size = 40,
  strokeWidth = 16,
  color = 'primary',
  trailColor = 'neutral',
  active = false,
  label = 'Loading'
}: LoaderProps) => {
  const theme = useTheme();

  const circleRadius = HALF_VIEWBOX_HEIGHT - strokeWidth / 2;
  const boundedPercentage = Math.min(Math.max(percentage, 0), 100) / 100;
  const circleDiameter = Math.PI * 2 * circleRadius;

  return (
    <svg
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={percentage}
      aria-valuetext={`${percentage}%`}
      css={
        active &&
        css`
          animation: ${spin} 0.75s linear infinite;
        `
      }
      viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
      style={{
        height: typeof size === 'string' ? size : `${size}px`,
        width: typeof size === 'string' ? size : `${size}px`
      }}
    >
      <circle
        cx={HALF_VIEWBOX_WIDTH}
        cy={HALF_VIEWBOX_HEIGHT}
        r={circleRadius}
        fill="none"
        strokeWidth={strokeWidth}
        stroke={theme.colors[trailColor as Color]?.borderWeak || trailColor}
      />
      <circle
        css={css`
          transition: stroke-dashoffset 0.5s ease 0s;
        `}
        cx={HALF_VIEWBOX_WIDTH}
        cy={HALF_VIEWBOX_HEIGHT}
        r={circleRadius}
        fill="none"
        strokeWidth={strokeWidth}
        strokeDasharray={circleDiameter}
        strokeDashoffset={(1 - boundedPercentage) * circleDiameter}
        stroke={theme.colors[color as Color]?.backgroundStrong || color}
        strokeLinecap="round"
      />
      {text ? (
        <Text color={color} x={HALF_VIEWBOX_WIDTH} y={HALF_VIEWBOX_HEIGHT}>
          {text}
        </Text>
      ) : null}
    </svg>
  );
};

export default Loader;

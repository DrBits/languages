import { Color } from '../../theme';

export type LoaderProps = {
  active?: boolean;
  color?: Color | string;
  percentage?: number;
  size?: number | string;
  strokeWidth?: number;
  /**
   * Text is placed in center of ProgressCircle.
   */
  text?: string;
  trailColor?: Color | string;
  /**
   * Label should be defined for accessibility, to indicate what is loading
   */
  label?: string;
};

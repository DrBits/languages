import deepmerge from 'deepmerge';
import dark from './tokens/dark';
import light from './tokens/light';

const radii = {
  none: '0',
  default: '4px',
  large: '8px',
  circle: '100%'
};

const space = {
  0: '0',
  0.25: '2px',
  0.5: '4px',
  0.75: '6px',
  1: '8px',
  2: '16px',
  2.25: '18px',
  3: '24px',
  4: '32px',
  5: '40px',
  6: '48px',
  7: '56px',
  8: '64px',
  9: '72px'
};

export type Spaces = keyof typeof space;

const { colors, shadows, typography } = light;

const screens = {
  xsmall: 0,
  small: 576,
  medium: 768,
  large: 992,
  xlarge: 1200
};

export type ScreenSize = keyof typeof screens;

const theme = {
  colors,
  radii,
  screens,
  shadows,
  space,
  typography
};

type UITheme = typeof theme & {
  linkComponent?: unknown;
};

type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

const extendTheme = ({
  baseTheme = theme,
  extendedTheme
}: {
  baseTheme?: UITheme;
  extendedTheme: RecursivePartial<UITheme>;
}) => deepmerge(baseTheme, extendTheme) as UITheme;

const lightTheme: UITheme = theme;

const darkTheme = extendTheme({
  extendedTheme: dark
});

type Color = Exclude<keyof typeof colors, 'overlay' | 'secondary'>;

const SENTIMENTS = Object.keys(colors).filter(
  (sentiment) => sentiment !== 'overlay' && sentiment !== 'secondary'
) as Array<Color>;

const SENTIMENTS_WITHOUT_NEUTRAL = Object.keys(colors).filter(
  (sentiment) =>
    sentiment !== 'overlay' &&
    sentiment !== 'secondary' &&
    sentiment !== 'neutral'
) as Array<Exclude<Color, 'neutral'>>;

export type { UITheme, Color };

export {
  colors,
  shadows,
  space,
  radii,
  screens,
  darkTheme,
  extendTheme,
  SENTIMENTS,
  SENTIMENTS_WITHOUT_NEUTRAL,
  typography
};

export default lightTheme;
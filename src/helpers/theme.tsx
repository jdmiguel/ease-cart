import { keyframes, Theme } from '@emotion/react';
import { colors } from './colors';

export type ThemeMode = 'light' | 'dark';
export type ButtonTheme = {
  text: string;
  hoveredText: string;
  background: string;
  hoveredBackground: string;
};

export const defaultTheme = {
  button: {
    primary: {
      text: colors.green_500,
      hoveredText: colors.green_400,
      background: colors.green_200,
      hoveredBackground: colors.green_100,
    },
    secondary: {
      text: colors.green_200,
      hoveredText: colors.green_100,
      background: colors.green_500,
      hoveredBackground: colors.green_400,
    },
    disabled: {
      text: colors.grey_200,
      hoveredText: 'unset',
      background: colors.grey_100,
      hoveredBackground: 'unset',
    },
  },
};

export const lightTheme: Theme = {
  ...defaultTheme,
  text: colors.dark,
  background: colors.light,
  shadow: colors.dark_shadow,
};

export const darkTheme: Theme = {
  ...defaultTheme,
  text: colors.light,
  background: colors.dark,
  shadow: colors.light_shadow,
};

export const animations = {
  fadeIn: keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,
};

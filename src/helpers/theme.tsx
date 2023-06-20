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
      text: colors.neutral_200,
      hoveredText: 'unset',
      background: colors.neutral_300,
      hoveredBackground: 'unset',
    },
  },
};

export const lightTheme: Theme = {
  ...defaultTheme,
  text: colors.neutral_600,
  background: colors.neutral_200,
  shadow: colors.neutral_600_10,
  backgroundCard: colors.neutral_100,
  divider: colors.neutral_300,
};

export const darkTheme: Theme = {
  ...defaultTheme,
  text: colors.neutral_200,
  background: colors.neutral_600,
  shadow: 'unset',
  backgroundCard: colors.neutral_500,
  divider: colors.neutral_500,
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

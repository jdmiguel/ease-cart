import { keyframes, Theme, ThemeProvider } from '@emotion/react';
import { colors } from './colors';
import { ReactElement } from 'react';

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
      text: colors.neutral_100,
      hoveredText: colors.light,
      background: colors.yellow_200,
      hoveredBackground: colors.yellow_100,
    },
    disabled: {
      text: colors.neutral_300,
      hoveredText: 'unset',
      background: colors.neutral_400,
      hoveredBackground: 'unset',
    },
  },
  loader: colors.green_300,
  error: colors.red_100,
};

export const lightTheme: Theme = {
  ...defaultTheme,
  text: colors.neutral_600,
  background: colors.neutral_200,
  shadow: colors.neutral_600_10,
  backgroundCard: colors.neutral_100,
  backgroundCartItem: colors.neutral_200,
  divider: colors.neutral_300,
  overlay: colors.neutral_600_80,
};

export const darkTheme: Theme = {
  ...defaultTheme,
  text: colors.neutral_200,
  background: colors.neutral_600,
  shadow: 'unset',
  backgroundCard: colors.neutral_500,
  backgroundCartItem: colors.neutral_400,
  divider: colors.neutral_500,
  overlay: colors.neutral_600_80,
};

export const animations = {
  fadeIn: keyframes`
    0% { opacity: 0 }
    100% { opacity: 1 }`,
  moveX: keyframes`
    0% { transform: translateX(-100%) }
    100% { transform: translateX(0) }
  `,
};

export const renderWithTheme = (component: ReactElement) => (
  <ThemeProvider theme={lightTheme}>{component}</ThemeProvider>
);
